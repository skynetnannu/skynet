<template>
  <div class="carousel-wrapper">
    <h2 class="carousel-title">These Are the Areas <span>Our Expertise Lies</span></h2>
    <div class="carousel-container">
      <div class="carousel">
        <div v-for="(image, index) in displayedImages" :key="image.id" class="card" :style="getCardStyle(index)">
          <img :src="image.src" alt="Card Image" :style="getBlurStyle(index)" />
          <div class="card-text-container">
            <p class="card-text" :style="getTextStyle(index)">{{ image.text }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="app-container">
      <h1>Contact Us</h1>
      <icons />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import icons from '@/components/custom/icons.vue';

const imagesData = [
  { src: 'https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?t=st=1742738893~exp=1742742493~hmac=8af54b47c9f565740ad79d1b645798f7f6cbb3d316d859aad0ad3c16bf7821c2&w=740', text: 'Web Development' },
  { src: 'https://img.freepik.com/free-vector/app-development-concept-with-flat-design_23-2147854803.jpg?t=st=1742738381~exp=1742741981~hmac=647a0293047059c51a6928c4eca8b4d61c5315eeb20bd4de05a7c9b0d17ec3c1&w=740', text: 'Mobile Apps' },
  { src: 'https://img.freepik.com/free-vector/seo-analytics-concept-illustration_114360-9862.jpg?t=st=1742738306~exp=1742741906~hmac=af04b674c4c211c085783e2a7c7259f8adeaafbf51a314248644d67903d3c22a&w=740', text: 'SEO' },
  { src: 'https://socialander.com/wp-content/uploads/2023/01/custom-website-design-services.png', text: 'Custom Designs' },
  { src: 'https://img.freepik.com/free-vector/influencer-marketing-concept-with-finger-pointing_23-2147682195.jpg?t=st=1742739165~exp=1742742765~hmac=7be094e397244c744d7d08230f945622476b2e5c82d5591a8a8e3df9cbf2168e&w=740', text: 'E-commerce' },
  { src: 'https://img.freepik.com/free-vector/website-maintenance-abstract-concept-vector-illustration-website-service-webpage-seo-maintenance-web-design-corporate-site-professional-support-security-analysis-update-abstract-metaphor_335657-2295.jpg?t=st=1742738234~exp=1742741834~hmac=a06952a518256c1b9e4070c6744a35d271c4498f574646facc2d05f9422d6945&w=740', text: 'Maintenance' },
  { src: 'https://img.freepik.com/free-vector/pop-ups-concept-illustrated_23-2149121840.jpg?t=st=1742738632~exp=1742742232~hmac=3413fcbe8e04648899fd01f1412787c7392775dde9b3e608164fdb8735d61fed&w=996', text: 'Ad creation' },
  { src: 'https://catnessgames.com/wp-content/uploads/2023/02/unreal-engine-5-requeriments-2.jpg', text: 'Unreal Engine' },
  { src: 'src/assets/blender.png', text: 'Blender' }
];

const images = ref(imagesData.map((item, index) => ({ id: index, ...item })));
const currentIndex = ref(Math.floor(images.value.length / 2));
const displayedImages = computed(() => images.value);
const angle = 10;
const spacing = 100;
const depth = 800;

const getCardStyle = (index) => {
  const offset = index - currentIndex.value;
  const isVisible = Math.abs(offset) <= Math.floor(window.innerWidth / 250);
  const translateX = offset * spacing;
  const translateZ = -Math.abs(offset) * depth * 0.2;
  const scale = 1 - Math.abs(offset) * 0.05;
  const translateY = Math.abs(offset) * -10;

  return {
    transform: `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateY(${offset * angle}deg) scale(${scale})`,
    transition: 'transform 1.5s ease-in-out, opacity 1.5s ease-in-out',
    zIndex: images.value.length - Math.abs(offset),
    opacity: isVisible ? 1 : 0,
  };
};

const getBlurStyle = (index) => {
  const offset = Math.abs(index - currentIndex.value);
  return { filter: `blur(${offset * 1.2}px)`, transition: 'filter 1.5s ease-in-out' };
};

const getTextStyle = (index) => {
  const offset = Math.abs(index - currentIndex.value);
  return {
    opacity: offset === 0 ? 1 : 0.5,
    transition: 'opacity 1.5s ease-in-out',
  };
};

const autoScroll = () => {
  setInterval(() => {
    images.value.push(images.value.shift());
    currentIndex.value = Math.floor(images.value.length / 2);
  }, 1000);
};

onMounted(() => {
  autoScroll();
  window.addEventListener('resize', () => currentIndex.value = Math.floor(images.value.length / 2));
});

</script>

<style scoped>
.carousel-wrapper {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 1) 100%),
    linear-gradient(109.6deg, rgb(0, 0, 0) 11.2%, rgb(11, 132, 145) 91.1%);
  padding-bottom: 20rem;
  padding-right: 100px;
}

.carousel-title {
  background: linear-gradient(to right, #fff, #888);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  padding-left: 150px;
  text-align: center;
}

.carousel-title span {
  background: linear-gradient(45deg, #4de6ee 30%, #00acff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}

.carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1800px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-bottom: 300px;
}

.carousel {
  display: flex;
  transform-style: preserve-3d;
  position: relative;
  transition: transform 1.5s ease-in-out;
}

.card {
  position: absolute;
  width: clamp(150px, 20vw, 200px);
  height: clamp(200px, 30vh, 260px);
  background: #000000;
  border: 3px solid rgb(255, 255, 255);
  border-radius: 12px;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  transition: transform 1.5s ease-in-out, box-shadow 0.5s ease-in-out, opacity 1.5s ease-in-out;
}

.card img {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: cover;
}

.card-text-container {
  position: absolute;
  top: 65%;
  left: 0;
  width: 100%;
  border-top: 2px solid rgb(253, 253, 253);
  background: rgba(252, 252, 252, 0.4);
  padding: 30px 0;
  text-align: center;
  border-radius: 10px;
}

.card-text {
  color: rgb(0, 0, 0);
  font-size: 1.3rem;
  font-weight: bolder;
}

/* this is for icons */

.app-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding-left: 150px;
}

h1 {
  margin-bottom: 2rem;
  font-size: 2.5rem;
  background: linear-gradient(to right, #fff, #888);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (max-width: 768px) {

  h1 {
    font-size: 1.5rem;
  }

  .app-container{
    padding-left: 0px;
  }

  .carousel-wrapper {
    height: 90vh;
    padding-right: 0;
    padding-bottom: 190px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carousel-title {
    font-size: 2.2rem;
    padding-left: 0px;
  }

  .carousel-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-bottom: 10px;
  }

  .carousel {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(0);
    /* Ensures it is centered */
  }

  .card {
    width: clamp(120px, 18vw, 180px);
    height: clamp(160px, 25vh, 220px);
  }

  .card-text-container {
    top: 60%;
    padding: 20px 0px;
  }

  .card-text {
    font-size: 1rem;
  }
}




</style>