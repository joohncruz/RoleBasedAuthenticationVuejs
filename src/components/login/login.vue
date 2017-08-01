<template>
  <div class="login">
    <form @submit.prevent="auth">
        <label>Username: <input id="username" type="text" autocomplete="off" v-model="user.username"></input></label>
        <label>Password: <input id="password" type="password" autocomplete="off" v-model="user.password"></input></label>
      
      <button type="submit">Entrar</button>
    </form>
  </div>
</template>

<script>

import loginService from './loginService';

export default {
  name: 'login',
  data () {
    return {
      user: {}
    }
  },
  methods: {
    auth () {
      let app = this;

      loginService.login(this.user)
        .then((res) => {

          if(res.status === 'success') {

            window.localStorage.setItem('lbUser', JSON.stringify(res.usr));

            if(res.usr.role === 'admin') {
              app.$router.push('/admin');
            } else {
              app.$router.push('/resident'); 
            }

          } else {
            alert('user is not authorized')
          }
        
      }).catch((error) => {
          console.log(error)
     })

     alert('Submit!')

    }
  }
}
</script>

<style scoped>
 form {
   display: inline-grid;
 }

 input, button {
    margin-top: 10px;
 }

 label {
   display: inline-table;
 }
</style>
