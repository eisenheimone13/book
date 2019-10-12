<template>
<body>
  <div id="app">
      <app-header></app-header>
      <app-footer></app-footer>
    <router-view/>
    </div>
</body>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'

export default {
  components:{
      AppHeader,
      AppFooter
    }
};
</script>

<style>

</style>
