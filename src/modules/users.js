import { reactive, toRefs } from 'vue'

export default function useUsers() {

    const state = reactive({
      error: null,
      users: null
    })

    const load = async() => {
      try {
        const usersResponse = await fetch("https://reqres.in/api/users?delay=1")
        //users.value = await usersResponse.json()

        await usersResponse.json().then(userData => {
          state.users = userData.data
        })
      }
      catch (err){
        state.error = err.message
        console.log(state.error)
      }
    }
    return { ...toRefs(state), load }
  }