<template>
  <div>
    <div>
      <div>
        <hr />
        <NuxtLink tag="button" to="/user/login" exact> Sign In </NuxtLink>
      </div>
      <NuxtLink tag="button" to="/user/registration" exact>
        Sign Up For Free
      </NuxtLink>
      <NuxtLink tag="button" to="/user/logout" exact> logout </NuxtLink>

      <button @click="take">ddd</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  auth: false,
  methods: {
    take() {
      console.log(this.$auth.strategy.token)
    },
  },
}
</script>

<style>
</style>
