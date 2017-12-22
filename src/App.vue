<template>
  <div id="app" class="root" :style="{height:height}">
    <router-view/>
    <TabPlayBar></TabPlayBar>
  </div>
</template>

<script>
  import globalVar from './globalvar'
  import TabPlayBar from './components/TabPlayBar'
  export default {
    name: 'app',
    data(){
      return{
          height:globalVar.screenHeight
      }
    },
    components:{
      TabPlayBar
    }
  }
</script>

<style>
  body{
    margin: 0;
  }
  h1,h2,h3,h4,h5{
    margin: 0;
  }
  @font-face {
    font-family: 'iconfont';  /* project id 516197 */
    src: url('//at.alicdn.com/t/font_516197_yewb5umddd8fflxr.eot');
    src: url('//at.alicdn.com/t/font_516197_yewb5umddd8fflxr.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_516197_yewb5umddd8fflxr.woff') format('woff'),
    url('//at.alicdn.com/t/font_516197_yewb5umddd8fflxr.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_516197_yewb5umddd8fflxr.svg#iconfont') format('svg');
  }
  i{
    font-family: 'iconfont'!important;
    font-style: normal;
  }
  .root{
    width: 100%;
    background: rgba(189, 195, 199,0.1);
    overflow: scroll;
  }
  .root::-webkit-scrollbar{
    display: none;
  }
</style>
