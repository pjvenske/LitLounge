import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'
import { doc, getDoc } from 'firebase/firestore'

const docRef = doc(projectFirestore, "books");
const docSnap = await getDoc(docRef);

if(docSnap.exists()) {
    console.log("Doc data:", docSnap.data());
} else {
    console.log("none")
}

export default useCollection