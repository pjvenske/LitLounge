<template>
    <div class="clubs">
        <!-- <div>
            <form>
                <h3>Create a new Club</h3>
                <input type="text" v-model="newClubName" placeholder="Enter new club name" />
                <button @click="addNewClub">Add Club</button>
            </form>
        </div> -->
        <ul>
            <li @click="goToClub(club.id)" v-for="club in clubs.documents" :key="club">
                {{ club?.name }}
                <button @click.stop="joinClub(club.id)">Join Club</button>
            </li>
            
        </ul>

    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import getCollection from '@/composables/getCollection';
import { useRouter } from 'vue-router';
import getUser from '../composables/getUser'
import useCollection from '@/composables/useCollection'
import { projectFirestore } from '../firebase/config'


props:['id']

const bookclub = getCollection('bookclub')
const userData = getCollection('user-data')
const { user } = getUser()

const clubs = ref([]);
const router = useRouter();
const newClubName = ref(''); // Define newClubName here

onMounted(async () => {
    const fetchedClubs = await getCollection('bookclub');
  clubs.value = await getCollection('bookclub');
  
  console.log(clubs.value)
});


const joinClub = async (clubId) => {
    console.log(`Joining club with ID: ${clubId}`);
    try {
        // Directly use Firestore's collection method to get a reference to 'user-data' collection
        const userDocRef = projectFirestore.collection('user-data').doc(user.value.uid);
        const doc = await userDocRef.get();

        if (doc.exists) {
            let userData = doc.data();
            if (userData.bookclubId) {
                // If the user already has bookclubId, append the new clubId
                if (!userData.bookclubId) {
                    userData.bookclubId.push(clubId);
                    await userDocRef.update({ bookclubId: userData.bookclubId });
                }
            } else {
                // If the user doesn't have a bookclubId field, create it
                await userDocRef.update({ bookclubId: [clubId] });
            }
            console.log(`Club with ID: ${clubId} added to the user's bookclubId`);
        } else {
            console.log("User document doesn't exist.");
        }
    } catch (error) {
        console.error("Error updating user's bookclubId:", error);
    }
};

const addClub = async (clubName) => {
  if (!clubName) return; // Basic validation
  const newClub = {
    name: clubName,
    members: [user.value.uid], // Ensure user.value.uid is correctly obtained
    currentRead: '',
    wishList: []
  };
  try {
    const addedClub = await useCollection('bookclub', newClub); // Add the new club to the 'bookclub' collection
    clubs.value.push(addedClub); // Optionally update the local state to reflect the new club
    alert('Club added successfully!');
  } catch (error) {
    console.error('Failed to add club:', error);
    alert(`Failed to add club. Please try again. Error: ${error.message}`);
  }
};

const addNewClub = () => {
  addClub(newClubName.value);
};

const goToClub = (clubId) => {
    router.push({ path: `/bookclub/$${clubId}` });
}

</script>

<style>
.clubs {
    color: #63372c;
}
</style>