<template>
    <div class="root">
        <div style="width: inherit;display: flex;align-items: center;margin: 0 auto;justify-content: center;margin-left: 3.5%">
          <div style="display: flex;align-items: center;height: 22px;border: 1px solid rgba(0,0,0,0.5);padding: 3px 5px;border-radius: 14px">
            <i style="font-size: 18px;color: rgba(26, 188, 156,1.0)">&#xe615;</i>
            <span style="font-size: 13px;color: rgba(0,0,0,0.5);margin-left: 5px">15分钟</span>
          </div>
          <div style="margin: 0 20px">
            <img style="width: 60px;height: 60px;border-radius: 30px" src="http://img0.imgtn.bdimg.com/it/u=3785349883,4072011333&fm=27&gp=0.jpg" alt="">
          </div>
          <div style="display: flex;align-items: center;height: 22px;border: 1px solid rgba(0,0,0,0.5);padding: 3px 5px;border-radius: 14px">
            <i style="font-size: 18px;color: rgba(230, 126, 34,1.0)">&#xe7dd;</i>
            <span style="font-size: 13px;color: rgba(0,0,0,0.5);margin-left: 5px">升级为豪华</span>
          </div>
        </div>
        <div style="width: 100%;text-align: center;margin-top: 3px">
          <span>—— 喝醉的MB ——</span>
        </div>
        <div style="width: 100%;text-align: center;margin-top: 3px">
          <i style="color: rgba(26, 188, 156,1.0)">&#xe629;</i>
          <i style="color: rgba(230, 126, 34,1.0)">&#xe605;</i>
        </div>
        <div>
          <div style="width: 100%;display: flex;justify-content: space-around;font-size: 40px;color: rgba(46, 204, 113,1.0)">
            <div @click="localSongs(true)" style="text-align: center;width: 60px">
              <i>&#xe638;</i>
              <p style="font-size: 15px;margin: 0;color: rgba(0,0,0,0.7)">本地歌曲</p>
            </div>
            <div style="text-align: center;width: 60px">
              <i>&#xe637;</i>
              <p style="font-size: 15px;margin: 0;color: rgba(0,0,0,0.7)">下载歌曲</p>
              <p style="font-size: 12px;margin: 0;color: rgba(0,0,0,0.6)">历史300</p>
            </div>
            <div style="text-align: center;width: 60px">
              <i>&#xe717;</i>
              <p style="font-size: 15px;margin: 0;color: rgba(0,0,0,0.7)">最近播放</p>
              <p style="font-size: 12px;margin: 0;color: rgba(0,0,0,0.6)">200</p>
            </div>
          </div>
          <div style="width: 100%;display: flex;justify-content: space-around;font-size: 40px;color: rgba(46, 204, 113,1.0)">
            <div style="text-align: center;width: 60px">
              <i>&#xe617;</i>
              <p style="font-size: 15px;margin: 0;color: rgba(0,0,0,0.7)">我喜欢</p>
              <p style="font-size: 12px;margin: 0;color: rgba(0,0,0,0.6)">26</p>
            </div>
            <div style="text-align: center;width: 60px">
              <i>&#xe6a7;</i>
              <p style="font-size: 15px;margin: 0;color: rgba(0,0,0,0.7)">下载MV</p>
            </div>
            <div style="text-align: center;width: 60px">
              <i>&#xe610;</i>
              <p style="font-size: 15px;margin: 0;color: rgba(0,0,0,0.7)">已购音乐</p>
              <p style="font-size: 12px;margin: 0;color: rgba(0,0,0,0.6)">2</p>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
      name: "PeopleCenterInfo",
      methods:{
        localSongs:function (status) {
          this.$store.commit('localSongs',status)
        }
      }
    }
</script>

<style scoped>
  .root{
    width: 100%;
    height: 320px;
    background: white;
    box-shadow: 0 0.1px 0.1px 0 rgba(0,0,0,0.1);
    padding-top: 15px;
    overflow-x: hidden;
  }
</style>
