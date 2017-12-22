<template>
    <div style="margin: 5px 0">
      <div style="display: flex;align-items: center;background: white">
        <div style="position: relative;width: 70px;height: 70px">
          <img style="position: absolute;width: inherit;height: inherit" src="http://y.gtimg.cn/music/common/upload/t_musichall_pic/1448974831271027900.jpg" alt="">
          <div style="position: absolute;z-index: auto;text-align: center;width: inherit">
            <i style="line-height: 70px;font-size: 30px;color: rgba(255,255,255,0.8);">&#xe61a;</i>
          </div>
        </div>
        <div style="padding-left: 10px;" :style="{width:width}">
          <div>
            <p style="font-size: 16px">个性电台</p>
            <p style="font-size: 12px;color: rgba(0,0,0,0.5);font-weight: 300">听专属于你的音乐</p>
          </div>
        </div>
      </div>
      <hr style="margin: 0;margin-left: 80px;margin-top: 1px;margin-bottom: 0.5px" :style="{width:hrWidth}">
      <div style="display: flex;align-items: center;background: white">
        <div style="position: relative;width: 70px;height: 70px">
          <img style="position: absolute;width: inherit;height: inherit" src="http://y.gtimg.cn/music/photo/radio/track_radio_269_10_6.jpg" alt="">
          <div style="position: absolute;z-index: auto;text-align: center;width: inherit">
            <i style="line-height: 70px;font-size: 30px;color: rgba(255,255,255,0.8);">&#xe624;</i>
          </div>
        </div>
        <div style="padding-left: 10px;" :style="{width:width}">
          <div>
            <p style="font-size: 16px">跑步电台</p>
            <p style="font-size: 12px;color: rgba(0,0,0,0.5);font-weight: 300">QQ音乐 x Nike，让运动乐在其中</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import globalVar from '../globalvar'
  export default {
    name: "MyRadio",
    data(){
      return{
        width:globalVar.screenWidthNum-70+'px',
        hrWidth: globalVar.screenWidthNum-80+'px'
      }
    },
  }

</script>

<style scoped>
  p{
    margin: 0;
  }
  hr{
    border: none;
    height: 1px;
    background-color:rgba(0,0,0,0.1);
  }
</style>
