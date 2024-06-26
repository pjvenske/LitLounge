import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';

const getCollection = (collection) => {

  const documents = ref([])
  const error = ref(null)

  // register the firestore collection reference
  let collectionRef = projectFirestore.collection(collection)

  collectionRef.onSnapshot(snap => {
    let results = [];
    snap.docs.forEach(doc => {
      results.push({...doc.data(), id: doc.id})
    });
    
    // update values
    documents.value = results;
    error.value = null;
  }, err => {
    console.log(err.message)
    documents.value = null
    error.value = 'could not fetch the data'
  })

  return { error, documents }
}

export default getCollection