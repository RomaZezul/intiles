<template>
  <div>
    <Sidebar />
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

<button @click="take">ddd</button>
  </div>
</template>

<script>
import { takeCoverage } from 'v8';
import Sidebar from '~/components/side_bar.vue'
export default {
    name: "IndexPage",
    auth: false,
    computed: {
        loggedIn() {
            return this.$auth.loggedIn;
        },
        user() {
            return this.$auth.user;
        },
    },
    methods:{
              take(){
          console.log( this.$auth.strategy.token);
        },

    },
    components: { Sidebar }
}
</script>

<style>
</style>
