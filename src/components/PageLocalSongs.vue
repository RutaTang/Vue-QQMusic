<template>
  <transition name="slide">
    <div v-if="this.$store.state.infoPage.localSongs" class="root">
      <div style="background: rgba(189, 195, 199,0.1);" :style="{height:height}">
        <div style="width: 100%;height: 50px;background: rgba(97,190,129,1);display: flex;justify-content: space-between;align-items: center;">
          <i @click="hideLocalSongs()" style="width: 20px;color: white;font-size: 30px;margin-left: 10px">&#xe62e;</i>
          <p style="font-size: 18px;color: white">本地歌曲</p>
          <i style="width: 20px;margin-right: 10px"></i>
        </div>
        <div style="width: 100%;background: white;height: 50px;display: flex;justify-content: space-between;align-items: center">
          <div style="display: flex;align-items: center">
            <i style="font-size: 25px;margin-left: 10px;color: rgba(46, 204, 113,1.0)">&#xe61a;</i>
            <span style="margin-left: 10px;">全部播放</span>
          </div>
          <div style="display: flex;align-items: center">
            <i style="font-size: 22px;margin-right: 8px;color: rgba(46, 204, 113,1.0)">&#xe606;</i>
            <span style="margin-right: 10px;">管理</span>
          </div>
        </div>
        <hr style="width: 100%;border: none;height: 1px;background: rgba(0,0,0,0.1);margin: 0">
        <div>
          <div v-for="(song,index) in songSources" :key="song.id" @click="whichSong(index)">
            <div :class="[{songActive:whichSongId==index},{songList:whichSongId!=index}]" style="width: 100%;height: 60px;background: white;display: flex;align-items: center;">
              <div style="height: 40px;width: 4px;"></div>
              <div style="padding-left: 15px">
                <p style="margin: 0">{{song.name}}</p>
                <span style="font-size: 10px;"><i style="margin-right: 5px;color: rgba(46, 204, 113,1.0)">&#xe62a;</i>{{song.subDes}}</span>
              </div>
            </div>
            <hr style="border: none;height: 1px;background: rgba(0,0,0,0.1);margin: 0;margin-left: 19px" :style="{width:widthNum}">
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import globalVar from '../globalvar'
  export default {
    name: "PageLocalSongs",
    data(){
      return{
        height:globalVar.screenHeight,
        widthNum:globalVar.screenWidthNum-19+'px',
        whichSongId: 0,
        songSources:[
          {
            name: '我多喜欢你，你会知道',
            subDes: '王俊奇·我多喜欢你，你会知道·《致我们单纯的小美好》'
          },
          {
            name: '凤凰于飞（Live）',
            subDes: '林俊杰·梦想的声音第二季 第7期'
          },
          {
            name: '感觉自己是巨星',
            subDes: '毛不易·感觉自己是巨星·《卧底巨星》电影宣传曲'
          },
          {
            name: '空空如也',
            subDes: '胡66·空空如也'
          },
          {
            name: 'Faded',
            subDes: 'Alan Walker/lselin Solheim·Faded'
          }
        ],
      }
    },
    methods:{
      hideLocalSongs:function () {
        this.$store.commit('localSongs',false)
      },
      whichSong:function (val) {
        this.whichSongId = val
      }
    },
    components:{

    }
  }
</script>

<style scoped>
  .root{
    background: white;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 150;
  }
  @keyframes slideIn {
    from {left: 100%}
    to {left: 0}
  }
  .slide-enter-active{
    animation: slideIn .1s forwards;
  }
  .slide-leave-active{
    animation: slideIn .1s forwards reverse;
  }
  .songActive{
    color: rgba(46, 204, 113,1.0)
  }
  .songActive div:nth-of-type(1){
    background: rgba(46, 204, 113,1.0)
  }
  .songList span{
    color: rgba(0,0,0,0.6);
  }
</style>
