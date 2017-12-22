<template>
    <div style="margin: 0;width: 100%;height: 50px;background: white;box-shadow: 0 -0.1px 0.1px 0 rgba(0,0,0,0.1);position: fixed;bottom: -3px;display: flex;align-items: center;justify-content: space-between;">
      <!--TODO 加上autoplay-->
      <audio id="audio" @ended="isPlay=false" src="http://119.6.238.88:9999/dl.stream.qqmusic.qq.com/C400000Wk6NP4NaAPo.m4a?vkey=019FAB51A7052D82A30CD9A30733EE165F44518035938739A7B62CC83E0FEDEDE133152B405EA2CF7D79A57E58489FDF9161786FBE3568F5&guid=2826417756&uin=953259325&fromtag=66"></audio>
      <div style="display: flex;align-items: center;margin-left: 10px">
        <img class="Rot" style="width: 40px;height: 40px;border-radius: 20px;" src="https://y.gtimg.cn/music/photo_new/T002R300x300M000002TtvI007ZBG3.jpg?max_age=2592000" alt="">
        <div style="margin-left: 8px">
          <p style="font-size: 14px;font-weight: 400">空空如也</p>
          <p style="font-size: 10px;font-weight: 300;color: rgba(0,0,0,0.6)">胡66</p>
        </div>
      </div>
      <div style="font-size: 30px;margin-right: 12px;color: rgba(46, 204, 113,1.0);display: flex;align-items: center">
        <div>
          <i v-if="!isPlay" @click="play()" style="margin-right: 15px;">&#xe61a;</i>
          <i v-if="isPlay" @click="stop()" style="margin-right: 15px;">&#xe60f;</i>
        </div>
        <i style="font-size: 27px;">&#xe65e;</i>
      </div>
    </div>
</template>

<script>
    let TabPlayBar ={
      name: "TabPlayBar",
      data(){
        return{
          isPlay: true,
        }
      },
      methods:{
        play:function () {
          this.isPlay = true
          let audio = document.querySelector('#audio')
          audio.play()
        },
        stop:function () {
          this.isPlay = false
          let audio = document.querySelector('#audio')
          audio.pause()
        }
      },
    }
    export default TabPlayBar
</script>

<style scoped>
  p{
    margin: 0;
  }
  @keyframes imageRotate {
    from {transform: rotate(0deg)}
    to {transform: rotate(360deg)}
  }
  .Rot{
    -webkit-animation: imageRotate;
    -o-animation: imageRotate;
    animation: imageRotate;
    -webkit-animation-duration: 6s;
    -moz-animation-duration: 6s;
    -o-animation-duration: 6s;
    animation-duration: 6s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    -webkit-animation-timing-function: linear;

  }
</style>
