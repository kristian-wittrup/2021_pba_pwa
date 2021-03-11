<template>
  <div>
    <div v-if="!userDetails.length">
      <p>FirstName: {{ userDetails.first_name }}</p>
      <p>Email: {{userDetails.email}}</p>
      <img :src="userDetails.avatar" height=100 alt="">
    </div>
    <div v-else>
      No data on person
    </div>
    <button @click="goBack()">
      <p>Go back</p>
    </button>
  </div>
</template>

<script>
import { ref } from 'vue'
import router from '@/router'

  export default {
    props: ['id'],
  
    setup(props) {
      const error = ref(null)
      const userDetails = ref([]);

      const load = async () => {
      try {
        const usersResponse = await fetch("https://reqres.in/api/users/" + props.id);
        await usersResponse.json().then(userData => {
          userDetails.value = userData.data 
        });
      }
      catch (err){
        error.value = err.message
      }
    }
      load()


      const goBack = () => {
        router.go(-1)
      }




      return { userDetails, error, goBack }
    }


  }
</script>

<style lang="scss" scoped>

</style>