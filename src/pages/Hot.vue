<template>
  <div class="hot-box">
    <div class="tab-content" ref="page">
      <div class="page n-hot active" ref="content">
        <div class="list-wrap" >
          <div v-for=" item in state.movieList " :key=" item.id " class="item" >
            <div class="main-block">
              <div class="avatar" sort-flag>
                <div class="default-img-bg">
                  <img
                    :src="item.img.replace('/w.h', '/128.180')"
                    onerror="this.style.visibility='hidden'"
                  >
                </div>
              </div>
              <div class="mb-outline-b content-wrapper">
                <div class="column content">
                  <div class="box-flex movie-title">
                    <div id='maoyan-title-elipis' class="title line-ellipsis v3dimax_title">{{ item.nm }}</div>
                    <span :class='"version "+item.version'></span>
                    <span class="pre-show" v-if="item.preShow "></span>
                  </div>

                  <div class="detail column">
                    <div :class="[item.globalReleased ? 'score' : 'wantsee', 'line-ellipsis']">

                      <span v-if='item.globalReleased && item.sc !== 0' class="score-suffix">观众评</span>
                      <span v-if='item.globalReleased && item.sc !== 0' class="grade">{{ item.sc | getDecimal }}</span>

                      <div v-if="item.globalReleased && item.sc == 0" class="no-score">暂无评分</div>

                      <span v-if='!item.globalReleased' class="person">{{ item.wish }}</span>
                      <span v-if='!item.globalReleased' class="p-suffix">人想看</span>


                    </div>

                    <div id='maoyao-actor-elipis' class="actor line-ellipsis">主演: {{ item.star }}</div>

                    <div class="show-info line-ellipsis">{{ item.showInfo }}</div>
                  </div>
                </div>

                <div class="button-block" data-id="346629">
                  <div :class="['btn',item.globalReleased ?'normal':'pre'] ">
                    <span class="fix" data-bid="dp_wx_home_movie_btn">{{ item.globalReleased ?'购票':'预售'}} </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    state: {
      type: Object
    },
    getNewMovies:{
      type: Function
    }
  },
  methods:{
  
  },
   updated(){
     this.$nextTick (() => {
     this.scoll =  new BScroll(this.$refs['page'], {
            probeType: 1,
            pullUpLoad: {
              threshold: 50
            }
          });
    this.scoll.on('pullingUp',  () => {
        this.getNewMovies()
      //  this.scoll.finishPullUp()
    })
     })
    
  },
  filters:{
    getDecimal( value){
        return value % 1 === 0 ? value + '.0' : value
    }
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
  display flex
  .mb-outline-b.content-wrapper
      border-bottom 1px solid $borderColor
      margin-right .15rem
      padding .12rem .14rem .12rem 0 
      .box-flex.movie-title
          display flex
          #maoyan-title-elipis
              ellipsis()
    
    #maoyao-actor-elipis
        ellipsis()
    .tab-content
      display block
      height 100%
      flex 1
      .line-ellipsis
        span
          margin 0 .03rem
      .page.n-hot.active
        flex 1
      
</style>
