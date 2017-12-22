<template>
    <div>
      <div v-if="firstSheet" style="display: flex;align-items: center;background: white;margin-top: 3px" v-for="source in sources">
        <div style="position: relative;width: 70px;height: 70px">
          <img style="position: absolute;width: inherit;height: inherit" :src="source.image" alt="">
        </div>
        <div style="padding-left: 20px;" :style="{width:width}">
          <div>
            <p style="font-size: 16px">{{source.title}}</p>
            <p style="font-size: 12px;color: rgba(0,0,0,0.5);font-weight: 300">{{source.nums}}首</p>
          </div>
        </div>
        <div style="margin-right: 10px;color: rgba(0,0,0,0.5)">
          <i>&#xe600;</i>
        </div>
      </div>
      <div v-if="secondSheet" style="display: flex;align-items: center;background: white;margin-top: 3px" v-for="source in sourcesTwo">
        <div style="position: relative;width: 70px;height: 70px">
          <img style="position: absolute;width: inherit;height: inherit" :src="source.image" alt="">
        </div>
        <div style="padding-left: 20px;" :style="{width:width}">
          <div>
            <p style="font-size: 16px">{{source.title}}</p>
            <p style="font-size: 12px;color: rgba(0,0,0,0.5);font-weight: 300">{{source.nums}}首</p>
          </div>
        </div>
        <div style="margin-right: 10px;color: rgba(0,0,0,0.5)">
          <i>&#xe600;</i>
        </div>
      </div>
    </div>
</template>

<script>
  import globalVar from '../globalvar'
    export default {
      name: "SongSheet",
      props:["sourcesIn","sourcesCollection"],
      data(){
        return{
          width:globalVar.screenWidthNum-70+'px',
          hrWidth: globalVar.screenWidthNum-80+'px',
          sources:this.sourcesIn!= null?this.sourcesIn:[
            {
              image: 'http://y.gtimg.cn/music/common/upload/t_musichall_pic/1448974831271027900.jpg',
              title: '潮流POP',
              nums: '3'
            },
            {
              image: 'http://y.gtimg.cn/music/common/upload/t_musichall_pic/1448974831271027900.jpg',
              title: '潮流POP',
              nums: '3'
            }
          ],
          sourcesTwo:this.sourcesCollection!= null?this.sourcesCollection:[
            {
              image: 'http://y.gtimg.cn/music/common/upload/t_musichall_pic/1448974831271027900.jpg',
              title: '潮流POP',
              nums: '3'
            },
            {
              image: 'http://y.gtimg.cn/music/common/upload/t_musichall_pic/1448974831271027900.jpg',
              title: '潮流POP',
              nums: '3'
            }
          ],
        }
      },
      computed:{
        firstSheet(){
          return this.$store.state.songSheet.firstSheet
        },
        secondSheet(){
          return this.$store.state.songSheet.secondSheet
        }
      }
    }
</script>

<style scoped>
  p{
    margin: 0;
  }
</style>
