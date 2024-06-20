import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getClub = (id) => {

  const club = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      let res = await projectFirestore.collection('bookclub').doc(id).get()

      post.value = { ...res.data(), id: res.id }
    }
    catch(err) {
      error.value = err.message
    }
  }
  console.log(load)

  return { club, error, load } 
}


export default getClub