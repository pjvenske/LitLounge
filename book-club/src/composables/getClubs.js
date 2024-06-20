import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getClubs = () => {

  const clubs = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      const res = await projectFirestore.collection('bookclubs').get()
      // console.log(res.docs)

      clubs.value = res.docs.map(doc => {
        // console.log(doc.data())
        return { ...doc.data(), id: doc.id }
      })
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { posts: clubs, error, load }
}

export default getClubs