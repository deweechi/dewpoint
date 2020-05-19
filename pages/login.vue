<template>
  <v-container>
    <h1>Login</h1>
    <UserAuthForm buttonText='Login' :submitForm='loginUser'> </UserAuthForm>
  </v-container>
</template>

<script>
import UserAuthForm from '~/components/UserAuthForm'


export default {
  components: {
    UserAuthForm
  },
  methods: {
    loginUser(){
      alert('trying to login')
    }
  }
}
</script>

<style>

</style>
