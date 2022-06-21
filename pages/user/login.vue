<template>
  <div>
  <h1>login</h1>
<li v-for="(item, index) in data1.data" :key="index">
 {{item.ASD}}
</li>
  <input type="submit" value="login" @click.prevent="getIncidents2" />
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data(){
    return {data1: ""}
  },
methods: {
  async getIncidents2() {
    console.log("wwwwwwwwwwww") 
  this.data1 = await this.$store.dispatch('getIncidents1');
  console.log(this.data) 
  }
}
}
</script>

<style>

</style>