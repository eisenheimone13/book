import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import SignUp from './views/SignUp.vue';
import Company from './views/Company.vue';
import Summary from './views/Summary.vue';
import Profile from './views/Profile.vue';
import About from './views/About.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/Company',
      name: 'Company',
      component: Company
    },
    {
      path: '/Summary',
      name: 'Sumamry',
      component: Summary
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '/About',
      name: 'About',
      component: About
    }
  ],
  mode: 'history'
})
export default router;