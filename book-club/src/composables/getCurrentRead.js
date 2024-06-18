import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getCurrentRead = () => {
    const currentRead = ref(null)
    const error = ref(null)

    const load = async () => {
        try {
            const res = await projectFirestore.collection('currentRead').get()
            currentRead.value = res.docs.map(doc => {
                return { ...doc.data(), id: doc.id }
            })
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return { currentRead, error, load }
}

export default getCurrentRead