<template>
  <div id="app">
  <mg-header></mg-header>
  <router-view></router-view>
  <mg-footer></mg-footer>
  </div>
</template>

<script>
import MgFooter from 'Components/common/MgFooter'
import MgHeader from 'Components/common/MgHeader'
import Movie from 'Pages/Movie'
export default {
  name: 'app',
  components: {
    MgHeader,
    MgFooter,
    Movie

  }
}
</script>

<style lang="stylus">
#app
  height 100%
  display flex
  flex-direction column
  justify-content space-between
</style>
