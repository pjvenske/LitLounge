// import { projectAuth } from "@/firebase/config"
// import { ref } from "vue"

// const error = ref(null)

// const signup = async (email, password, displayName) => {
//     error.value = null

//     try {
//         const res = await projectAuth.createUserWithEmailAndPassword(email, password)
//         if (!res) {
//             throw new Error('Could not complete signup')
//         }
//         await res.user.updateProfile({ displayName })
//         error.value = null

//         console.log(res.user)

//         return res 

//     } catch(err) {
//         console.log(err.message)
//         error.value = err.message
//     }

// }

// const addDoc = async (doc) => {
//     error.value = null

//     try {
//       await projectFirestore.collection('user-data').add(doc)
//     }
//     catch(err) {
//       console.log(err.message)
//       error.value = 'could not send the message'
//     }

// }

// const useSignup = () => {

//     return { error, signup, addDoc }
// }

// export default useSignup

import { projectAuth, projectFirestore } from "@/firebase/config"; // Assuming projectFirestore is exported here
import { ref } from "vue";

const error = ref(null);

const signup = async (email, password, displayName) => {
    error.value = null;

    try {
        const res = await projectAuth.createUserWithEmailAndPassword(email, password);
        if (!res) {
            throw new Error('Could not complete signup');
        }
        await res.user.updateProfile({ displayName });
        error.value = null;

        // New step: Add user document to 'user-data' collection using uid
        const userDoc = {
            uid: res.user.uid,
            bookclubId: '',
        };
        await projectFirestore.collection('user-data').doc(res.user.uid).set(userDoc);

        console.log(res.user);

        return res;

    } catch(err) {
        console.log(err.message);
        error.value = err.message;
    }
};

const addDoc = async (doc) => {
    error.value = null;

    try {
      await projectFirestore.collection('user-data').add(doc);
    }
    catch(err) {
      console.log(err.message);
      error.value = 'could not send the message';
    }
};

const useSignup = () => {
    return { error, signup, addDoc };
};

export default useSignup;