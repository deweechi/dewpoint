<template>
  <v-container>
    <h1>Login</h1>
    <UserAuthForm buttonText="Login" :submitForm="loginUser"></UserAuthForm>
  </v-container>
</template>

<script>
import UserAuthForm from '~/components/UserAuthForm'

export default {
  components: {
    UserAuthForm
  },
  methods: {
    async loginUser(loginInfo) {
      try {
        await this.$auth.loginWith('local', {
          data: loginInfo
        })

        this.$notifier.showMessage({
          content: 'Welcome back!',
          color: 'success'
        })
      } catch {
        this.$notifier.showMessage({
          content: 'There was an issue logging in. Please try again.',
          color: 'error'
        })
      }
    }
  }
}
</script>

<style>
</style>
