<template>
  <div>
    <h1 v-if="loggedIn">{{user.username}}</h1>
    <NuxtLink to="/user/login" exact>
      Sign In
    </NuxtLink>

    <NuxtLink tag="button" to="/user/registration" exact>
      Sign Up For Free
    </NuxtLink>
        <NuxtLink tag="button" to="/user/logout" exact>
      logout
    </NuxtLink>

  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  auth: false,
  computed: {
    loggedIn() {
      return this.$auth.loggedIn
    },
    user() {
      return this.$auth.user
    }
  }
}
</script>

<style>
</style>
