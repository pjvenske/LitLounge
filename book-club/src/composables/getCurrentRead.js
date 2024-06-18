import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getCurrentRead = async () => {
    console.log('getCurrentRead')
    const currentRead = ref(null)
    const error = ref(null)

    try {
        const res = await projectFirestore.collection('books').get()
        currentRead.value = res.docs.map(doc => {

            return { ...doc.data(), id: doc.id }
        })
    } catch (err) {
        error.value = err.message
        console.log(error.value)
    }

}

export default getCurrentRead