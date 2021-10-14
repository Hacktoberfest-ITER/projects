<template>
 <div class="wrapper">
   <div class="player ">
     <div class="upper quiet">
    <div class="pic">
       <img :src=current.path alt="" id="song_img"/>
    </div>
    <br>
     <div class="name">
       <h1 style="text-align: center;">{{ current.title }}</h1>
       <br>
       <p style="text-align: center;">{{ current.artist }}</p>
       <br><br><br>
       <input ref="volume_bar" type="range" min="0" max="100" value="60" :onchange="change_volume">
       <p style="text-align: center;">Volume</p>
     </div>
    </div>
   <br><br>
   <input id="seekbar" ref="progress_bar" type="range" min="0" max="100" value="0" :onchange="change_duration">
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
      slider_position:0.0,
      isPlaying: false,
      songs:[
      {
        title: 'Gaaliyan',
        artist: 'Ankit Tiwari',
        path: require('./sp-thumbs/galliyan.jpg'),
        src: require('./Music/01 - Galliyan - DownloadMing.SE.mp3')
      },
      {
        title: 'Gerua',
        artist: 'Arijit Singh',
        path: require('./sp-thumbs/gerua.jpg'),
        src: require('./Music/01 - Gerua - DownloadMing.SE.mp3')
      },
      {
        title: 'Ae Watan',
        artist: 'Arijit Singh',
        path: require('./sp-thumbs/aewatan.jpg'),
        src: require('./Music/01 - Raazi - Ae Watan [DJMaza.Fun].mp3')
      },
      {
        title: 'Hamari Adhuri Kahani',
        artist: 'Arijit Singh',
        path:  require('./sp-thumbs/hak.jpg'),
        src: require('./Music/01 Hamari Adhuri Kahani (Title Song) Arijit Singh 190Kbps.mp3')
      },
      {
        title: 'Ik Vaari Aa',
        artist: 'Arijit Singh',
        path: require('./sp-thumbs/ikvaari.jpg'),
        src: require('./Music/01 Ik Vaari Aa - Raabta (Arijit Singh) 190Kbps.mp3')
      },
      {
        title: 'Sukoon Mila',
        artist: 'Arijit Singh',
        path: require('./sp-thumbs/Sukoon Mila (Mary Kom) Arijit Singh [PagalWorld.com].mp3.[t=1277313068,m=5].jpg'),
        src: require('./Music/01 Sukoon Mila - Mary Kom (Arijit Singh) 160Kbps.mp3')
      },
      {
        title: 'Suno Na Sangemarmar',
        artist: 'Arijit Singh',
        path: require('./sp-thumbs/sunona.jpg'),
        src: require('./Music/01 Suno Na Sangemarmar - Youngistaan (Arijit Singh).mp3')
      },
      {
        title: 'Tum Saath Ho',
        artist: 'Arijit Singh, Alka Yagnik',
        path: require('./sp-thumbs/Tum Saath Ho - Tamasha (Arijit Singh) 190Kbps.mp3.[t=1277313068,m=5].jpg'),
        src: require('./Music/Tum Saath Ho - Tamasha (Arijit Singh) 190Kbps.mp3')
      },
      {
        title: 'Bekhayali',
        artist: 'Arijit Singh',
        path: require('./sp-thumbs/bekhayali.jpg'),
        src: require('./Music/01 - Bekhayali - Downloadming.SE.mp3')
      },
      {
        title: 'Rappan Rappi Rap',
        artist: 'Benny Dayal',
        path: require('./sp-thumbs/rappanrappi.jpg'),
        src: require('./Music/01 - Rappan Rappi Rap - DownloadMing.SE.mp3')
      },
      {
        title: 'Ban ja Tu meri Rani',
        artist: 'Arijit Singh',
        path: require('./sp-thumbs/banja.jpg'),
        src: require('./Music/01 - Tumhari Sulu - Ban Ja Rani [DJMaza.Info].mp3')
      },
      {
        title: 'Bolna',
        artist: 'Arijit Singh',
        path: require('./sp-thumbs/02 Bolna - Arijit Singh 190Kbps.mp3.[t=1277313112,m=5].jpg'),
        src: require('./Music/02 Bolna - Arijit Singh 190Kbps.mp3')
      },
      {
        title: 'Aahista',
        artist: 'Arijit Singh',
        path: require('./sp-thumbs/aahista.jpg'),
        src: require('./Music/01 Aahista - Laila Majnu.mp3')
      },
      {
        title: 'Rabbta',
        artist: 'Arijit Singh',
        path: require('./sp-thumbs/raabta.jpg'),
        src: require('./Music/02 Raabta - Title Song (Arijit Singh) 190Kbps.mp3')
      },
      {
        title: 'Rabba',
        artist: 'Mohit Chauhan',
        path: require('./sp-thumbs/rabba.jpg'),
        src: require('./Music/02 - Rabba - DownloadMing.SE.mp3')
      },
      {
        title: 'Zaalima',
        artist: 'Arijit Singh',
        path: require('./sp-thumbs/Zaalima - Raees (Arijit Singh) 190kbps.mp3.[t=1277313068,m=5].jpg'),
        src: require('./Music/02 Zaalima - Raees (Arijit Singh) 190kbps.mp3')
      },
      {
        title: 'Phir Kabhi',
        artist: 'Arijit Singh',
        path: require('./sp-thumbs/phirKabhi.jpg'),
        src: require('./Music/04 Phir Kabhi - MS Dhoni (Arijit Singh) - 320Kbps.mp3')
      }
    ],
    player:new Audio(),
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
      console.log(this.player);
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
      this.change_duration(1);
    },
    prev () {
      this.index--;
      if (this.index < 0) {
        this.index = this.songs.length-1;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
      this.change_duration(1);
    },
    change_duration () {
      this.slider_position = (this.player.duration) * (this.$refs.progress_bar.value/100);
      this.player.currentTime = this.slider_position;
    },
    change_volume () {
      this.player.volume=this.$refs.volume_bar.value/100;
    },
    updateTime: function() {
            // Shorten down the activeTrack.currentTime
            var cTime = this.player.currentTime;
            // Get the new value for the seekbar by multiplying the current time by
            // 100 divided by the duration
            var newTime = cTime * (100 / this.player.duration);
            // Update the seekbar
            this.$refs.progress_bar.value = newTime;
    }
  },
  created () {
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
    this.player.addEventListener("timeupdate", this.updateTime)
  },
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
  border-radius: 12%;
  padding: 20px;
  margin: 50px 350px;
}
.player img{
  align-items: center;
}
.name{
  margin-left: 40px;
}
#seekbar{
  width: 435px;
}
#song_img{
  width:  200px;
  height: 200px;
}
</style>
