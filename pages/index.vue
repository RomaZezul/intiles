<template>
  <div>
    <NuxtLink to="/user/login" exact>
      Sign In
    </NuxtLink>

    <NuxtLink tag="button" to="/user/registration" exact>
      Sign Up For Free
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style>
</style>
