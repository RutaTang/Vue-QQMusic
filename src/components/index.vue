<template>
    <div>
      <div>
        <PageLocalSongs></PageLocalSongs>
      </div>
      <div style="position: fixed;top: 0;width: 100%;z-index:100">
        <HeaderNavBar></HeaderNavBar>
      </div>
      <div v-if="this.$store.state.headernavbar.wode" style="margin-top: 85px;padding-bottom: 50px">
        <PeopleCenterInfo></PeopleCenterInfo>
        <MyRadio></MyRadio>
        <div style="background: white;">
          <div style="width: 100%;text-align: center;display:flex;justify-content: space-between;align-items: center">
            <p style="margin: 0;margin-top:15px;margin-bottom:15px;width: 60px"></p>
            <p style="margin: 0;margin-top:15px;margin-bottom:15px;font-size: 15px;"><span :class="{songSheetTitleWithOp:!this.$store.state.songSheet.firstSheet}" @click="firstSheet()">自建歌单{{songSheets.length}}</span> <span style="font-weight: 300">|</span> <span :class="{songSheetTitleWithOp:!this.$store.state.songSheet.secondSheet}" @click="secondSheet()">收藏歌单{{songSheetsCollection.length}}</span></p>
            <p style="margin: 0;margin-top:15px;margin-bottom:15px;width: 60px;display: flex;align-items: center;color: rgba(46, 204, 113,1.0)"><i style="margin-right: 10px;font-size: 20px">&#xe690;</i><i>&#xe606;</i></p>
          </div>
          <SongSheet :sourcesIn="songSheets" :sourcesCollection="songSheetsCollection" ></SongSheet>
        </div>
      </div>
    </div>
</template>

<script>
    import globalVar from '../globalvar'
    import HeaderNavBar from '../components/HeaderNavBar'
    import PeopleCenterInfo from '../components/PeopleCenterInfo'
    import MyRadio from '../components/MyRadio'
    import SongSheet from '../components/SongSheet'
    import PageLocalSongs from '../components/PageLocalSongs'
    export default {
      name: "Index",
      data(){
        return{
          height:globalVar.screenHeight,
          heightNum: globalVar.screenHeightNum-80+'px',
          songSheets:[
            {
              image: 'https://p.qpic.cn/music_cover/1HFn1Rm4ztLiaPmN5cz0jG9XBHzBvX3c0aKJDHGr5JcpIMwLaceUt5A/300?n=1',
              title: '忍不住微笑',
              nums: '3'
            },
            {
              image: 'https://p.qpic.cn/music_cover/llTQ9l2AeicK2OLIORnsUdqVl04Qba6kDbFZdlo2xT5qbBUDjZo5BRg/300?n=1',
              title: '民谣',
              nums: '3'
            },
            {
              image: 'https://p.qpic.cn/music_cover/vmfc74bEMcj5Ol9qJlS9ATicjayOEiaBAFNWBFvIfXmOJuxoib72Lfldw/300?n=1',
              title: '耳机马来轰',
              nums: '3'
            },
            {
              image: 'https://p.qpic.cn/music_cover/UxGAqU5e2J1J5tSFkRD7eDLjqRYHnice0ajcxOYUicqUmJ5OfDxxiakKQ/300?n=1',
              title: '极北风景轻音乐',
              nums: '3'
            },
            {
              image: 'https://p.qpic.cn/music_cover/S1bSX2PZGVyP4gjphwWzmJicHYQ7OMDaM4FDSWtlWgQUzXx9mo4BiacQ/300?n=1',
              title: '沉睡记忆',
              nums: '3'
            }
          ],
          songSheetsCollection:[
            {
              image: 'https://p.qpic.cn/music_cover/bB1WCibcebibxBWQnYJHfnqmkkwaCNZtgPSkuDF9cjZ1s0JicGic0OzRyA/300?n=1',
              title: '名著华语',
              nums: '3'
            },
            {
              image: 'https://p.qpic.cn/music_cover/llTQ9l2AeicK2OLIORnsUdtbhlNRGF89Nu4Y6355KzZOtleVom1e53Q/300?n=1',
              title: '沧桑中的恬静',
              nums: '3'
            },
          ],
        }
      },
      methods:{
        firstSheet:function () {
          this.$store.commit('firstSheet')
        },
        secondSheet:function () {
          this.$store.commit('secondSheet')
        }
      },
      components:{
        HeaderNavBar,
        PeopleCenterInfo,
        MyRadio,
        SongSheet,
        PageLocalSongs
      }
    }
</script>

<style scoped>
  .songSheetTitleWithOp{
    color: rgba(0,0,0,0.5)
  }
</style>
