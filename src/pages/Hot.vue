<template>
  <div class="hot-box">


    <div class="tab-content" >
      <div class="page n-hot active" ref="page">
        <div class="list-wrap" >

         <!-- 这里是即将上映的轮播 -->
          <fHotBanner v-show="$route.path === '/movie/f-hot'"></fHotBanner> 

              <div
                v-for=" item in movieList " 
                :key='item.id'
               class="item" data-id="346629" data-bid="dp_wx_home_movie_list">
                <div class="main-block">
                <div class="avatar" sort-flag="">
                  <div class="default-img-bg">
                    <img :src=" item.img | getSize " onerror="this.style.visibility='hidden'">		
                  </div>
                </div> 
                <div class="mb-outline-b content-wrapper">
                  <div class="column content">
                    <div class="box-flex movie-title">
                      <div class="title line-ellipsis v3dimax_title" id="maoyan-title-elipis">{{ item.nm }}</div>
                        <span :class="`version ${item.version}`"></span>
                    </div>
                    <div class="detail column">
                          <div class="score line-ellipsis"> 
                            <span class="score-suffix">观众评 </span>
                            <span class="grade">{{item.sc+''}}</span>
                          </div>
                        <div class="actor line-ellipsis" id='maoyao-actor-elipis'>主演: {{item.star}}</div>
                        <div class="show-info line-ellipsis">{{item.showInfo}}</div>
                    </div>
                  </div>
                  <div class="button-block" data-id="346629">
                      <div :class="'btn '+getButtonStyle(item.showst)"><span class="fix" data-bid="dp_wx_home_movie_btn">{{ item.showst | getText }}</span></div>
                  </div>
                </div>
              </div>

          </div>
        </div>
      </div>
    </div>

      <p v-show="flag">
        到底了
      </p>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import BScroll from 'better-scroll';
import fHotBanner from './fHotBanner'
export default {
  data () {
    return {
      movieList: [],
      flag: false,
      movieIds: 0
    }
  },

  props:{
    state:String,
    stateType:String
  },
  methods:{
    ...mapActions(['getNowHot']),
    getButtonStyle ( value ) {
    switch(value) {
      case 3:
        return 'normal';
      case 1:
        return 'toggle-wish-btn';
      case 4:
        return 'pre';
      }
    }
  },
  computed:{
    ...mapGetters(['getNowHots']),
     movieType() {
       return this.state === '/movie/n-hot' ? 'movieOnInfoList':'comingList';
      
   }
  },
  filters:{
    getDecimal( value ){
        return value % 1 === 0 ? value + '.0' : value
    },
    getSize ( value ) {
      return value.replace('/w.h', '/120.180')
    },
    getText ( value ) {
      switch(value) {
        case 3:
          return '购票';
        case 1:
          return '想看';
        case 4:
          return '预售';
        }
      }
    
  },
  watch: {
  async movieType () {

       await this.getNowHot(this.movieType) 
       this.movieList = this.getNowHots ? this.getNowHots[this.stateType] : [] ;
        this.$nextTick( () => {
           if(this.bscoll) return
          this.bscoll = new BScroll(this.$refs.page, {
            probeType: 1,
            pullUpLoad: {
                threshold: 50
              }
          });
          this.bscoll.on('pullingUp',  () => {
  
              this.bscoll.finishPullUp()
            })
        } )
    }
  },
  async created(){
    await this.getNowHot(this.movieType) 
    this.movieList = this.getNowHots ? this.getNowHots[this.stateType] : [] ;
    this.$nextTick( () => {
      if(this.bscoll) return
      this.bscoll = new BScroll(this.$refs.page, {
        probeType: 100,
        pullUpLoad: {
            threshold: 50
          }
      });
      this.bscoll.on('pullingUp',  () => {
        console.log(123456)
          this.bscoll.finishPullUp()
           this.bscoll.refresh()
        });
      
    } )
  },
  components:{
    fHotBanner
  }

}
</script>



<style lang="stylus" scoped>
@import '~Css/movie-list.css'
@import '~Css/_variable.styl'
@import '~Css/_border.styl'
@import '~Css/_eliplise.styl'
.hot-box 
  font-size 0.2rem
  flex 1
  height 100%
  overflow hidden
  .tab-content
      display flex
      height 100%
      flex-direction column
      .page
        height 100%
        position static
        .list-wrap
          .item
            .content-wrapper
              border 0 0 1px 0,$borderColor
              margin-right .15rem
              padding .12rem .14rem .2rem 0
              .movie-title
                display flex
                #maoyan-title-elipis
                  ellipsis()
              .detail   
                #maoyao-actor-elipis
                  ellipsis()
</style>
