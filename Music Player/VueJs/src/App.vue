<template>
 <div class="wrapper">
   <div class="player ">
     <div class="upper quiet">
    <div class="pic">
       <img src="./assets/logo.png" alt="">
    </div>
    <br>
     <div class="name">
       <h1 style="text-align: center;">{{ current.title }}</h1>
       <br>
       <p style="text-align: center;">{{ current.artist }}</p>
     </div>
   </div>
   <br><br>
    <div class="controls intr">
      <button class="previous" @click="prev"><img src="./assets/icons8-skip-to-start-50.png" alt=""></button>  
      <button class="play" v-if="!isPlaying" @click="play"><img src="./assets/icons8-circled-play-50.png" alt=""></button>
      <button class="pause" v-else @click="pause"><img src="./assets/icons8-pause-button-50.png" alt=""></button>
      <button class="next" @click="next"><img src="./assets/icons8-end-50.png" alt=""></button>
     </div>     
   </div>
   <div class="playlist">
   </div>
 </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      current:{},
      index: 0,
      isPlaying: false,
      songs:[
      {
        title: 'Gaaliyan',
        artist: 'Ankit Tiwari',
        src: require('./Music/01 - Galliyan - DownloadMing.SE.mp3')
      },
      {
        title: 'Gerua',
        artist: 'Arijit Singh',
        src: require('./Music/01 - Gerua - DownloadMing.SE.mp3')
      },
      {
        title: 'Ae Watan',
        artist: 'Arijit Singh',
        src: require('./Music/01 - Raazi - Ae Watan [DJMaza.Fun].mp3')
      },
      {
        title: 'Hamari Adhuri Kahani',
        artist: 'Arijit Singh',
        src: require('./Music/01 Hamari Adhuri Kahani (Title Song) Arijit Singh 190Kbps.mp3')
      },
      {
        title: 'Ik Vaari Aa',
        artist: 'Arijit Singh',
        src: require('./Music/01 Ik Vaari Aa - Raabta (Arijit Singh) 190Kbps.mp3')
      },
      {
        title: 'Sukoon Mila',
        artist: 'Arijit Singh',
        src: require('./Music/01 Sukoon Mila - Mary Kom (Arijit Singh) 160Kbps.mp3')
      },
      {
        title: 'Suno Na Sangemarmar',
        artist: 'Arijit Singh',
        src: require('./Music/01 Suno Na Sangemarmar - Youngistaan (Arijit Singh).mp3')
      },
      {
        title: 'Bolna',
        artist: 'Arijit Singh',
        src: require('./Music/02 Bolna - Arijit Singh 190Kbps.mp3')
      },
      {
        title: 'Bekhayali',
        artist: 'Arijit Singh',
        src: require('./Music/01 - Bekhayali - Downloadming.SE.mp3')
      },
      {
        title: 'Rappan Rappi Rap',
        artist: 'Arijit Singh',
        src: require('./Music/01 - Rappan Rappi Rap - DownloadMing.SE.mp3')
      },
      {
        title: 'Ban ja Tu meri Rani',
        artist: 'Arijit Singh',
        src: require('./Music/01 - Tumhari Sulu - Ban Ja Rani [DJMaza.Info].mp3')
      },
      {
        title: 'Bolna',
        artist: 'Arijit Singh',
        src: require('./Music/02 Bolna - Arijit Singh 190Kbps.mp3')
      },
      {
        title: 'Bolna',
        artist: 'Arijit Singh',
        src: require('./Music/02 Bolna - Arijit Singh 190Kbps.mp3')
      },
      {
        title: 'Bolna',
        artist: 'Arijit Singh',
        src: require('./Music/02 Bolna - Arijit Singh 190Kbps.mp3')
      },
      {
        title: 'Bolna',
        artist: 'Arijit Singh',
        src: require('./Music/02 Bolna - Arijit Singh 190Kbps.mp3')
      },

    ],
    player:new Audio()
  }
},
methods: {
   play (song) {
      if (typeof song.src != "undefined") {
        this.current = song;

        this.player.src = this.current.src;
      }
      this.player.play();
      this.player.addEventListener('ended', function () {
        this.index++;
        if (this.index > this.songs.length-1) {
          this.index = 0;
        }

        this.current = this.songs[this.index];
        this.play(this.current);
      }.bind(this));
      this.isPlaying = true;
    },
    pause () {
      this.player.pause();
      this.isPlaying = false;
    },
    next () {
      this.index++;
      if (this.index > this.songs.length-1) {
        this.index = 0;
      }

      this.current = this.songs[this.index];
      this.play(this.current);
    },
    prev () {
      this.index--;
      if (this.index < 0) {
        this.index = this.songs.length-1;
      }

      this.current = this.songs[this.index];
      this.play(this.current);
    }
  },
  created () {
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
  }
 }

</script>

<style>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
*/
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }
 .quiet{
  display: inline-flex;
 }
 .intr{
  display: block;
 }
 .controls{
  margin: 0 30%;
 }
 button{
  background-color: white;
 }
.wrapper{
  /*background-color: #cad4d1;*/
  background-color: whitesmoke;
  padding: 78px 50px;
}
.player{
  background-color: white;
  position: relative;
  border-radius: 10%;
  padding: 20px;
  margin: 50px 350px;
}
.player img{
  align-items: center;
}
.name{
  margin-left: 40px;
}
</style>
