<template>
  <div class="most-expected" >
    <p class="title">近期最受期待</p>

    <div class="container-oveflow" ref="container">
        <div class="most-expected-list">
      <div class="expected-item"
       v-for=" item in expectedMovies "  :key="item.id" >
        <div class="poster default-img-bg">
          <img
            :src="item.img.replace('/w.h', '/120.180')"
            onerror="this.style.visibility='hidden'"
          >
          <span class="wish-bg"></span>
          <span class="wish">
            <span class="wish-num">{{item.wish}}</span>人想看
          </span>
          <div class="toggle-wish" data-wishst="0" data-movieid="1218029">
            <span></span>
          </div>
        </div>
        <h5 class="name line-ellipsis" id="name-ellispsis">{{item.nm}}</h5>
        <p class="date">{{item.comingTitle.slice(0,-2)}}</p>
      </div>

    </div>
    </div>
    
  </div>
</template>


<script>
import { mapActions, mapGetters} from 'vuex'
import Bscroll from 'better-scroll'
export default {
    data () {
        return {
            expectedMovies: null
        }
    },
    methods: {
        ...mapActions(['getExpected'])
    },
    computed: {
        ...mapGetters(['getExpecteds'])
    },
    watch:{
        expectedMovies () {
            new Bscroll( this.$refs.container, {
                scrollX :true
            })
        }
    },
  async  created () {
      await  this.getExpected()
        this.expectedMovies = this.getExpecteds || []

    }

}
</script>


<style lang="stylus" scoped>
@import '~Css/_eliplise.styl'
@import '~Css/movie-list.css';
.most-expected
    padding .12rem .15rem !important
    
    .container-oveflow
         overflow hidden
        .most-expected-list
            display inline-block
            overflow inherit !important
        #name-ellispsis
            ellipsis()
</style>

