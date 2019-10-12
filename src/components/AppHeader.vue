<template v-if="ok" lang="ru">
<div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color:;">
        <a class="navbar-brand" href="#">
    <img src="../assets/logbook.png" width="30" height="30" class="d-inline-block align-top" alt="">
        NOVOTECH SYSTEMS
        </a>
        <div class="container">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
            </button>
         <div class="collapse navbar-collapse" id="navbarResponsive">
         <ul class="navbar-nav ml-auto">
                <router-link class="btn btn-light":to="{ path: 'Home' }">Home</router-link>
                <router-link class="btn btn-light":to="{ path: 'About' }">About</router-link>
                <router-link class="btn btn-light":to="{ path: 'Company' }">Company</router-link>
                <router-link class="btn btn-light":to="{ path: 'Summary' }">Summary</router-link>
                <router-link class="btn btn-light":to="{ path: 'Profile' }">Profile  <span class="badge badge-dark">9</span>
                    <span class="sr-only">unread messages</span></router-link>
            <router-link class="btn btn-light":to="{ path: 'Signup' }">Regis</router-link>
            <button class="btn button"@click="logout">Login</button>
        </ul>
      </div>
    </div>
  </nav>
</div>
</template>

<script>
import firebase from 'firebase'
export default {
    computed:{
        menuItems(){
            return [
                {
                    Icon: 'book',
                    title: 'Books',
                    route: '/Books'
                },
                {
                    Icon: '',
                    title: 'Read',
                    route: '/Read'
                },
                {
                    Icon: 'person',
                    title: 'Profile',
                    route: '/Profile'
                },
                {
                    Icon: '',
                    title: 'About',
                    route: '/About'
                },
                {
                    Icon: 'account-login',
                    title: 'Login',
                    route: '/login'
                },
            ]
        }
    },
    name: 'home',
    methods: {
        logout: function() {
            firebase
                .auth()
                .signOut()
                .then(() =>{
                this.$router.replace('login')        
            })
        }
    }
};
</script>