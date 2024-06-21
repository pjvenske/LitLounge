<template>
    <div class="clubSelection">
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
                if (!userData.bookclubId.includes(clubId)) {
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


const addNewClub = async(projectFirestore, clubId) => {
    try {
        // Directly use Firestore's collection method to get a reference to 'user-data' collection
        const userDocRef = projectFirestore.collection('clubs').doc(clubs.value.id);
        const doc = await userDocRef.get();

        if (doc.exists) {
          let bookclub = doc.data();
          // Initialize bookclubId as an array if it doesn't exist
          bookclub.bookclubId = bookclub.bookclubId || [];
          // Check if clubId is not already in the bookclubId array
          if (!bookclub.bookclubId.includes(clubId)) {
            bookclub.bookclubId.push(clubId);
            await userDocRef.update({ bookclubId: bookclub.bookclubId });
            console.log(`Club with ID: ${clubId} added to the user's bookclubId`);
          }
        } else {
          console.log("User document doesn't exist.");
        }
      } catch (error) {
        console.error("Error updating user's bookclubId:", error);
      }
};


const goToClub = (clubId) => {
    router.push({ path: `/bookclub/$${clubId}` });
}

</script>

<style>
.clubSelection {
    color: #63372c;
    background: #C97D60;
    padding: 10px;
    width: 90%;
    align-items: center;
    margin: auto;
    border-radius: 10px;

}

ul {
    padding: 10px; 
    list-style-type: none; 
}

li {
  margin-right: 10px; 
  padding: 10px;
}

button {
    background-color: #FFBCB5;
    border-radius: 30px;
    text-decoration: none;
    border: 0;
    padding: 8px;
    color: #63372c;
}
</style>