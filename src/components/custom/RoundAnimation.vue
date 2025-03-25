<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import UnrealLogo from '@/assets/Unreal.png';
import BlenderLogo from '@/assets/Blender_logo.png';

const skynetTitle = ref(null);
const logos = ref(null);
const scrollEffectIntensity = ref(10); // Adjust this value for animation intensity

const handleScroll = () => {
  const scrollY = window.scrollY;
  const translateY = Math.min(scrollY * -0.1, 10); // Adjust slight up and down movement

  if (skynetTitle.value && logos.value) {
    skynetTitle.value.style.transform = `translateY(${translateY}px) scale(1.2)`;
    logos.value.style.transform = `translateY(${translateY}px) scale(1.2)`;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="banner">
    <div class="slider">
      <div v-for="n in 10" :key="n" class="item" :style="`--position: ${n}; --quantity: 10;`">
        <img :src="`/src/assets/A_${n}.png`" :alt="`Dragon ${n}`" />
      </div>
    </div>
    <div class="content">
      <h1 ref="skynetTitle" class="animated-title">SKYNET 3D</h1>
      <div ref="logos" class="logos">
        <img :src="UnrealLogo" alt="Unreal Engine" class="logo" />
        <img :src="BlenderLogo" alt="Blender" class="logo" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/ica-rubrik-black');
@import url('https://fonts.cdnfonts.com/css/poppins');

.banner {
  width: 100%;
  height: 100vh;
  text-align: center;
  overflow: hidden;
  position: relative;
  top: 100px;
}

.slider {
  position: absolute;
  width: 200px;
  height: 250px;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%) perspective(1000px);
  transform-style: preserve-3d;
  animation: autoRun 20s linear infinite;
  z-index: 3;
}

@keyframes autoRun {
  from {
    transform: translate(-50%, -50%) perspective(1000px) rotateX(-16deg) rotateY(0deg);
  }
  to {
    transform: translate(-50%, -50%) perspective(1000px) rotateX(-16deg) rotateY(360deg);
  }
}

.item {
  position: absolute;
  inset: 0;
  transform: rotateY(calc((var(--position) - 1) * (360deg / var(--quantity))))
    translateZ(550px);
  transition: transform 0.5s;
}

.item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(1400px, 100vw);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
}

.animated-title, .logos {
  transition: transform 0.5s ease-out;
  z-index: 1;
}

.animated-title {
    font-family: 'ICA Rubrik';
    font-size: 9em;
    line-height: 1em;
    color: #fdfdfd;
    position: relative;
}

.logos {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

.logo {
  width: 110px;
  height: 100px;
}


@media screen and (max-width: 1023px) {
  .slider {
    width: 160px;
    height: 200px;
  }
  .item {
    transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg))
      translateZ(300px);
  }
  .animated-title {
    font-size: 7em;
  }
}

@media screen and (max-width: 767px) {
  .slider {
    width: 100px;
    height: 150px;
  }
  .item {
    transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg))
      translateZ(180px);
  }
  .animated-title {
    font-size: 5em;
  }
  .content .author {
    text-align: center;
    width: 100%;
  }

  .content{
    top: 690px;
  }

  .animated-title{
    font-size: 3rem;
  }
}
</style>
