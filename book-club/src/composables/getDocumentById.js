// composables/getDocumentById.js
import { ref } from 'vue';
import { projectFirestore } from '@/firebase/config';
import { doc, getDoc } from 'firebase/firestore';

const getDocumentById = (collection, id) => {
  const document = ref(null);
  const error = ref(null);
  const loading = ref(false);

  const load = async () => {
    loading.value = true;

    try {
      const docRef = doc(projectFirestore, collection, id);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        throw new Error('Document does not exist.');
      }

      document.value = { ...docSnap.data(), id: docSnap.id };
      error.value = null;
    } catch (err) {
      console.error(err.message);
      document.value = null;
      error.value = 'Could not fetch the document.';
    } finally {
      loading.value = false;
    }
  };

  load();

  return { document, error, loading };
};

export default getDocumentById