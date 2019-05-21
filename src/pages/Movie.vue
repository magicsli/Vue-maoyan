<template>
    <div class="movie-box">
        <div class="Movie-nav">
            <div class="city-entry">
                <span>长沙</span> 
                <svg t="1558361519387" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3108"  width="16" height="16"><path d="M750.331 457.203l-238.576 238.087-238.087-238.576z" p-id="3109" fill="#b0b0b0"></path></svg>
            </div>
            <div class="hot-nav">
                <router-link tag='div' to='/movie/n-hot' active-class='active'> 正在热映 </router-link>
                <router-link tag='div' to='/movie/f-hot' active-class='active'> 即将上映 </router-link>
            </div>
            <div class="search">
                <svg t="1558360501726" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2274"  width="20" height="20"><path d="M994.112 858.368L769.152 633.408C808.32 569.984 832 496 832 416 832 186.24 645.76 0 416 0S0 186.24 0 416 186.24 832 416 832c80 0 153.984-23.68 217.344-62.784l225.024 224.96a96.021333 96.021333 0 0 0 135.744-135.808zM416 704C256.96 704 128 575.04 128 416S256.96 128 416 128 704 256.96 704 416 575.04 704 416 704z"  p-id="2275"></path></svg>
            </div>
        </div>
        
        <router-view :getNewMovies= "getNewMovies" :state = 'newState || {} '></router-view>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import {MODIFY_N_HOTS } from 'Store/movie/type.js'
import { URLSearchParams } from 'url';
export default {
    data() {
        return {
            state:'你好',
            index: 0,
            nid: null
        }
    },
    methods: {
        ...mapActions( ['getNowHot','getNextHot'] ),
        
        getNewMovies () {
            this.index++ ;
            const from = this.index * 12 >= this.nid.length ? this.nid.length -1 : this.index * 12 ;
            const to = this.index * 12 + 12 >= this.nid.length ? this.nid.length - 1 : this.index * 12 + 12;
            if(to - from <= 0) return  
            console.log(to , from)
            const movieIds = this.nid.slice( from, to).join()
            this.getNextHot( 
                    {
                        movieIds
                    }
                )
        }
    },
    computed: {
        ...mapGetters(['getNowHots']),
        newState () {
          if ( this.$route.path === '/movie/n-hot' ){
             return this.getNowHots.nHots 
          }else if(  this.$route.path === '/movie/f-hot' ){
              return this.getNowHots.fHots
          }
        }
    },
   async created () {
     await this.getNowHot();
     this.nid = this.getNowHots.nHots.movieIds
    }
}
</script>



<style lang="stylus" scoped>
@import '~Css/_variable.styl';
.movie-box
    flex 1
    font-size .2rem
    display flex
    flex-direction column
    
    .Movie-nav
        display flex
        font-size .15rem
        line-height .45rem
        position relative
        z-index 12
        background-color #fff
        .city-entry
            flex 80
            display flex
            justify-content flex-start
            padding-left .15rem
            align-items center
            svg 
                margin-top -.02rem
        .search
            flex 80
            display flex
            justify-content flex-end
            align-items center
            svg 
               fill $baseColor
               margin-right .15rem
        .hot-nav
            flex 215
            display flex
            justify-content space-around
            div
                padding 0 .12rem
                font-weight 700
                &.active
                    border-bottom 2px solid $baseColor
                    color $baseColor
</style>
