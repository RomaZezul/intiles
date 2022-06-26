<template>
    <div>
    <NuxtLink to="/workspase/personal" exact>
      Personal Pages
    </NuxtLink>

    <NuxtLink tag="button" to="/workspase/shared" exact>
      Shared Pages
    <div @click="CreateWorkspace">
        <NuxtLink tag="button" to="/user/logout" exact>
      Create Workspace
    </NuxtLink>

  </div>
</template>

<script>
export default {
methods: {
    CreateWorkspace() {
      try {
        console.log(response)
              console.log(this.$auth.user)

      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>