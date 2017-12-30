<template>
    <div style="margin: 0;width: 100%;height: 50px;background: white;box-shadow: 0 -0.1px 0.1px 0 rgba(0,0,0,0.1);position: fixed;bottom: -3px;display: flex;align-items: center;justify-content: space-between;">
      <!--TODO 加上autoplay-->
      <audio id="audio" autoplay @ended="isPlay=false" :src="this.$store.state.music.audio"></audio>
      <div style="display: flex;align-items: center;margin-left: 10px">
        <img class="Rot" style="width: 40px;height: 40px;border-radius: 20px;" :src="this.$store.state.music.image" alt="">
        <div style="margin-left: 8px">
          <p style="font-size: 14px;font-weight: 400">{{this.$store.state.music.songName}}</p>
          <p style="font-size: 10px;font-weight: 300;color: rgba(0,0,0,0.6)">{{this.$store.state.music.singerName}}</p>
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
