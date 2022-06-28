<template>
    <div>
    <NuxtLink to="/workspace/personal" exact>
      Personal Pages
    </NuxtLink>

    <NuxtLink tag="button" to="/workspace/shared" exact>
      Shared Pages
   </NuxtLink>

    <button @click="CreateWorkspace">
      Create Workspace
    </button>

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