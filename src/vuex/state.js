import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    headernavbar:{
      wode: true,
      musicHall: false,
      discovery: false,
    },
    songSheet:{
      firstSheet: true,
      secondSheet: false
    },
    infoPage:{
      localSongs: false,
    },
    music: {
      audio:'http://dl.stream.qqmusic.qq.com/C400000Wk6NP4NaAPo.m4a?vkey=EE0A2191888AC9969B3E37E1D5F7764408C89047C93EB564929C3790D8977E05D7B6E24F236D8F118C5FA4DF8DA09587CC675B29C2FEC933&guid=2826417756&uin=953259325&fromtag=66',
      image:'https://y.gtimg.cn/music/photo_new/T002R300x300M000002TtvI007ZBG3.jpg?max_age=2592000',
      songName:'空空如也',
      singerName:'胡66'
    }
  },
  mutations: {
    headernavbar_wode(state) {
      state.headernavbar.wode = true;
      state.headernavbar.musicHall = false;
      state.headernavbar.discovery = false;
    },
    headernavbar_musicHall(state) {
      state.headernavbar.wode = false;
      state.headernavbar.musicHall = true;
      state.headernavbar.discovery = false;
    },
    headernavbar_discovery(state) {
      state.headernavbar.wode = false;
      state.headernavbar.musicHall = false;
      state.headernavbar.discovery = true;
    },
    firstSheet(state){
      state.songSheet.firstSheet = true
      state.songSheet.secondSheet = false
    },
    secondSheet(state){
      state.songSheet.firstSheet = false
      state.songSheet.secondSheet = true
    },
    localSongs(state,status){
      state.infoPage.localSongs = status
    },
    changeMusic(state,audio){
      state.music.audio = audio
    },
    changeImage(state,image){
      state.music.image = image
    },
    changeSongName(state,name){
      state.music.songName = name
    },
    changeSingerName(state,name){
      state.music.singerName = name
    },
  }
})

export default store
