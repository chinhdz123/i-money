import { ref } from 'vue'
import { projectAuth } from '@/configs/firebaseConfig'
const error = ref(null)
const isPending = ref(false)

async function signup(email, password) {
  error.value = null
  isPending.value = true
  try {
    const responce = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    )
    if (!responce) throw new Error('Could not create a new user.')
    return responce
  } catch (err) {
    console.log('err')
    console.log(err)
    error.value = err.message
  } finally {
    isPending.value = false
  }
}

export function useSignUp() {
  return { error, isPending, signup }
}
