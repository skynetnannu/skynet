<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import ImageCarousel from '@/components/custom/ImageCarousel.vue';
import RoundAnimation from '@/components/custom/RoundAnimation.vue';
import YoutubeCard from '@/components/custom/YoutubeCard.vue';

// Import images correctly
import img1 from '@/assets/U_12.png';
import img2 from '@/assets/U_2.png';
import img3 from '@/assets/U_10.png';
import img4 from '@/assets/U_1.png';
import img5 from '@/assets/U_7.png';

// Define reactive state
const items = ref([
  { img: img1, title: 'Slider 01', description: 'Nature’s beauty, recreated in pixels, feels just as alive in Unreal Engine.' },
  { img: img2, title: 'Slider 02', description: 'Cinematic beauty isnt just created its crafted with precision in Unreal Engine.' },
  { img: img3, title: 'Slider 03', description: 'Virtual forests sway, rivers flow, and skies breathe—nature reborn in Unreal.' },
  { img: img4, title: 'Slider 04', description: 'With every leaf and shadow, Unreal captures the poetry of the natural world.' },
  { img: img5, title: 'Slider 05', description: 'Unreal Engine brings the cosmos to life, turning the vast unknown into a visual masterpiece.' }
]);

const itemActive = ref(0);
let refreshInterval = null;

// Methods for sliding behavior
const nextSlide = () => {
  itemActive.value = (itemActive.value + 1) % items.value.length;
  resetAutoSlide();
};

const prevSlide = () => {
  itemActive.value = (itemActive.value - 1 + items.value.length) % items.value.length;
  resetAutoSlide();
};

const setSlide = (index) => {
  itemActive.value = index;
  resetAutoSlide();
};

const startAutoSlide = () => {
  refreshInterval = setInterval(nextSlide, 5000);
};

const resetAutoSlide = () => {
  clearInterval(refreshInterval);
  startAutoSlide();
};

// Start auto-slide on mount
onMounted(startAutoSlide);

// Cleanup on unmount
onUnmounted(() => clearInterval(refreshInterval));
</script>
  
  <template>
    <div>
      <header>
        <div class="logo"></div>
      </header>
  
      <div class="slider">
        <!-- Slider Main Content -->
        <div class="list">
          <div v-for="(item, index) in items" :key="index" :class="['item', { active: index === itemActive }]">
            <img :src="item.img" alt="Slide image" />
            <div class="content">
              <p>Design</p>
              <h2>{{ item.title }}</h2>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
  
        <!-- Arrows -->
        <div class="arrows">
          <button @click="prevSlide" id="prev">&lt;</button>
          <button @click="nextSlide" id="next">&gt;</button>
        </div>
  
        <!-- Thumbnail Navigation -->
        <div class="thumbnail">
          <div v-for="(item, index) in items" :key="index" :class="['item', { active: index === itemActive }]" @click="setSlide(index)">
            <img :src="item.img" alt="Thumbnail image" />
            <div class="content slide-class">Sliders</div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="test">data</div>
    <!-- Decorative Elements & Image Carousel -->
    <section class="relative carousel-section">
      <!-- Gradient Background -->
      <div class="carousel-background"></div>

      <!-- Image Carousel -->
      <div class="relative z-10">
        <ImageCarousel :interval="7000" />
      </div>
    </section>

    <div class="relative animation-section">
    <!-- Background Video -->
    <video autoplay loop muted playsinline class="background-video">
      <source src="@/assets/BV2.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div class="test">data</div>
    <!-- Round Animation -->
    <div class="relative z-10 animation-container">
      <RoundAnimation />
    </div>

    <div class="container">
    <YoutubeCard
      channelName="SkyNet 3D"
      channelUrl="https://youtube.com/@skynet3d-d7y?si=H_b5LOvUk2eKZ5Xw"
      subscribers="100"
      description="Welcome to SkyNet – your go-to hub for 3D creation, VFX, and animation! Explore tutorials, tips, and projects with Unreal Engine, Blender, and After Effects. Whether you're a beginner or a pro, we’re here to fuel your creativity!"
    />
  </div>
  </div>


  </template>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
body{
    font-family: Poppins;
    margin: 0;
    background-color: #000000;
    color: #eee;
}
svg{
    width: 25px;
}
header{
    width: 1200px;
    max-width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: 50px 1fr 50px;
    grid-template-rows: 50px;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 100;
}
header .logo{
    font-weight: bold;
}
header .menu{
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 20px;
    font-weight: 500;
}
/* css slider */
.slider{
    height: 100vh;
    margin-top: -50px;
    position: relative;
}
.slider .list .item{
    position: absolute;
    inset: 0 0 0 0;
    overflow: hidden;
    opacity: 0;
    transition: .5s;
}
.slider .list .item img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.slide-class{
  color: rgb(255, 255, 255);
;
}
.slider .list .item::after{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    background-image: linear-gradient(
        to top, #000 10%, transparent
    );
}
.slider .list .item .content{
    position: absolute;
    left: 10%;
    top: 20%;
    width: 500px;
    max-width: 80%;
    z-index: 1;
}
.slider .list .item .content p:nth-child(1){
    text-transform: uppercase;
    letter-spacing: 10px;
    color: white;
}
.slider .list .item .content h2{
    font-size: 100px;
    margin: 0;
    color: white;
}
.slider .list .item.active{
    opacity: 1;
    z-index: 10;
}
@keyframes showContent {
    to{
        transform: translateY(0);
        filter: blur(0);
        opacity: 1;
    }
}
.slider .list .item.active p:nth-child(1),
.slider .list .item.active h2,
.slider .list .item.active p:nth-child(3){
    transform: translateY(30px);
    filter: blur(20px);
    opacity: 0;
    animation: showContent .5s .7s ease-in-out 1 forwards;
}
.slider .list .item.active h2{
    animation-delay: 1s;
}
.slider .list .item.active p:nth-child(3){
    animation-duration: 1.3s;
    color: white;
}
.arrows{
    position: absolute;
    top: 30%;
    right: 50px;
    z-index: 100;
}
.arrows button{
    background-color: #eee5;
    border: none;
    font-family: monospace;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    font-size: x-large;
    color: #eee;
    transition: .5s;
}
.arrows button:hover{
    background-color: #eee;
    color: black;
}
.thumbnail{
    position: absolute;
    bottom: 50px;
    z-index: 11;
    display: flex;
    gap: 10px;
    width: 100%;
    height: 250px;
    padding: 0 50px;
    box-sizing: border-box;
    overflow: auto;
    justify-content: center;
}
.thumbnail::-webkit-scrollbar{
    width: 0;
}
.thumbnail .item{
    width: 150px;
    height: 220px;
    filter: brightness(.5);
    transition: .5s;
    flex-shrink: 0;
}
.thumbnail .item img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}
.thumbnail .item.active{
    filter: brightness(1.5);
}
.thumbnail .item .content{
    position: absolute;
    inset: auto 10px 10px 10px;
}
@media screen and (max-width: 678px) {
    .thumbnail{
        justify-content: start;
    }
    .slider .list .item .content h2{
        font-size: 60px;
    }
    .arrows{
        top: 10%;
    }
}

.animation-section {
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(1);
  z-index: -1;
}

/* Black fade effect at the top & bottom */
.animation-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom, 
    black 0%, 
    black 10%,   /* Keeps the top fully black until 20% */
    rgba(0, 0, 0, 0.9) 25%,  /* Starts fading here */
    rgba(0, 0, 0, 0.4) 45%,  /* More transparent */
    rgba(0, 0, 0, 0) 70%,    /* Fully transparent */
    black 100% /* Keeps the bottom fade effect */
  );
  z-index: 1; /* Ensures it overlays the video */
  pointer-events: none;
}

/* Foreground Container */
.animation-container {
  position: relative;
  padding: 30px;
  border-radius: 15px;
}

.carousel-section {
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  z-index: -1;
}

.test{
  display: flex;
  background-color: black;
  height: 6vh;
  color: #000;
}

.container {
  min-height: 1vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  padding-bottom: 200px;
  padding-left: 500px;
}


@media screen and (max-width: 767px) {
  .container{
    padding-left: 0px;
    padding-bottom: 0px;
    position: relative;
    top: -210px;
  }
}
  </style>
  