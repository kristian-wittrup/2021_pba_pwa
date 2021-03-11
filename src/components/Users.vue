<template>
  <div>
    <h2>users:</h2>
    <div v-for="user in users" :key="user.id">
       - {{ user.id }}

      <!-- router props -->
      <router-link :to="{ name: 'UserDetails', params:{ id : user.id }}">
        {{user.first_name}}
      </router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import useUsers from '../modules/users'

  export default {
    name: "Users",
    async setup() {
      const { users, error, load } = useUsers();
      await load();
      return { users, error }
    }
  }
</script>

<style lang="scss" scoped>

</style>