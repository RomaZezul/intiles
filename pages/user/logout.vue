<template>
  <div></div>
</template>

<script>
export default {
  async created() {
     console.log(this.$auth.user)
    await this.$auth.logout()
  }
}
</script>