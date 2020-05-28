<template>
  <v-container>
    <h1>Register</h1>
    <p>Registration is currently closed. Customers will be provied with details for creating an account. If you have any questions please fill out the contact us form.</p>
 <!--    <UserAuthForm buttonText='Register' :submitForm='registerUser' hasName="true" /> -->
  </v-container>
</template>

<script>
import UserAuthForm from '~/components/UserAuthForm'


export default {
  components: {
    UserAuthForm
  },
  methods: {
    registerUser(registrationinfo){
      alert('trying to register')
    }
  }
}
</script>

<style>

</style>
