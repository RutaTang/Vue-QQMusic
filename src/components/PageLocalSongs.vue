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
          <div v-for="(song,index) in songSources" :key="song.id" @click="whichSong(index,song.audio,song.image,song.name,song.singerName)">
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
            subDes: '王俊奇·我多喜欢你，你会知道·《致我们单纯的小美好》',
            audio:'http://dl.stream.qqmusic.qq.com/C4000000Upyx4AUCM0.m4a?vkey=9FE404CCA3DB33C14A5C777E169201F91AD7DF97402D91777827A6C8469D1D0CCD932BE2731D436FA600A27C0B5E3A506C92FB3137D73617&guid=2826417756&uin=953259325&fromtag=66',
            image: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003H7M6A1AgZ55.jpg?max_age=2592000',
            singerName: '王俊琪',
          },
          {
            name: '凤凰于飞（Live）',
            subDes: '林俊杰·梦想的声音第二季 第7期',
            audio: 'http://dl.stream.qqmusic.qq.com/C400001018Bn4fzNuT.m4a?vkey=10134E8FB5FCA8E13F0AF355035B46D380F376DBDA111D76A3656B75BF19B77B796F5D508CF13C91296304C8C771B7FF2E7B50615E292B74&guid=2826417756&uin=953259325&fromtag=66',
            image: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001AAUeH2IVEBs.jpg?max_age=2592000',
            singerName: '林俊杰',
          },
          {
            name: '感觉自己是巨星',
            subDes: '毛不易·感觉自己是巨星·《卧底巨星》电影宣传曲',
            audio:'http://dl.stream.qqmusic.qq.com/C400002qQcr31z4S8f.m4a?vkey=DBFDEEEEE120DE9DBA3AEE190898CC98F1BD741F4C7EDE08982CC8D99789158773F743A21366A3F029497574B2A836682FB56059E744FAD2&guid=2826417756&uin=953259325&fromtag=66',
            image: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003CG1VZ3T33Sq.jpg?max_age=2592000',
            singerName: '毛不易',
          },
          {
            name: '空空如也',
            subDes: '胡66·空空如也',
            audio: 'http://dl.stream.qqmusic.qq.com/C400000Wk6NP4NaAPo.m4a?vkey=EE0A2191888AC9969B3E37E1D5F7764408C89047C93EB564929C3790D8977E05D7B6E24F236D8F118C5FA4DF8DA09587CC675B29C2FEC933&guid=2826417756&uin=953259325&fromtag=66',
            image: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002TtvI007ZBG3.jpg?max_age=2592000',
            singerName: '胡66',
          },
          {
            name: 'Faded',
            subDes: 'Alan Walker/lselin Solheim·Faded',
            audio: 'http://dl.stream.qqmusic.qq.com/C400000jF0b70x9gDf.m4a?vkey=DD249EBFC0263ED9FEAFF5DD02930613841FFC6FF1C4A72ACB4FA3A5067AD2E2A4F05E3544C1CAC524C11A434572E58CF464FA4892E701C8&guid=2826417756&uin=953259325&fromtag=66',
            image: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002Nt51E0q8Zoo.jpg?max_age=2592000',
            singerName: 'Alan Walker / Iselin Solheim',
          }
        ],
      }
    },
    methods:{
      hideLocalSongs:function () {
        this.$store.commit('localSongs',false)
      },
      whichSong:function (val,audio,image,songName,singerName) {
        this.whichSongId = val
        this.$store.commit('changeMusic',audio)
        this.$store.commit('changeImage',image)
        this.$store.commit('changeSongName',songName)
        this.$store.commit('changeSingerName',singerName)
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
