<template>
  <div>
    <div class="root">
      <div style="display: flex;justify-content: space-between;align-items: center;height: 20px;padding-top: 5px">
        <i style="color: white;font-size: 27px;margin-left: 10px;">&#xe614;</i>
        <div class="spanCon" style="font-size: 18px; color: rgba(255,255,255,0.8);font-weight: 300;">
          <span :class="{spanActive:this.$store.state.headernavbar.wode}" @click="headernavbar_wode()">我的</span>
          <span :class="{spanActive:this.$store.state.headernavbar.musicHall}" @click="headernavbar_musicHall()">音乐馆</span>
          <span :class="{spanActive:this.$store.state.headernavbar.discovery}" @click="headernavbar_discovery()">发现</span>
        </div>
        <i style="color: white;font-size: 23px;margin-right: 10px">&#xe690;</i>
      </div>
    </div>
    <div v-if="searchSeen" style="width: 100%;display: flex;justify-content: center;align-items: center;height: 55px;position: absolute;top: 30px;background: rgba(97,190,129,1);z-index: 50">
      <div style="width: 95%;background: rgba(39, 174, 96,1.0);height: 30px;margin-top: 0;border-radius: 3px;display: flex;justify-content: center;align-items: center;color: rgba(255,255,255,0.8);font-weight: 300">
        <i style="font-size: 20px">&#xe64d;</i>
        <span>搜索</span>
      </div>
    </div>
  </div>
</template>

<script>
   let HeaderNavBar = {
    name: "HeaderNavBar",
    data(){
      return{
        searchSeen:true
      }
    },
    methods:{
      headernavbar_wode: function () {
        this.$store.commit('headernavbar_wode')
      },
      headernavbar_musicHall: function () {
        this.$store.commit('headernavbar_musicHall')
      },
      headernavbar_discovery: function () {
        this.$store.commit('headernavbar_discovery')
      },
    }
  }
  export default HeaderNavBar
</script>

<style scoped>
  .root{
    width: 100%;
    background: rgba(97,190,129,1);
    padding-top: 5px;
    position: relative;
    padding-bottom: 10px;
    z-index: 100;
  }
  .spanCon span{
    margin: 0 5px;
  }
  .spanActive{
    color: white;
    font-weight: 400;
  }

</style>
