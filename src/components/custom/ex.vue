<template>
  <div class="carousel-wrapper">
    <h1 class="carousel-title">These Are the Areas <span>Our Expertise Lies</span></h1>
    <div class="carousel-container">
      <div class="carousel">
        <div 
          v-for="(card, index) in cards" 
          :key="card.id"
          class="card"
          :class="{ 'card-active': index === activeIndex }"
          :style="getCardStyle(index)"
          @mouseenter="pauseAutoScroll"
          @mouseleave="resumeAutoScroll"
          @click="setCurrentCard(index)"
        >
          <div class="card-inner">
            <img :src="card.src" :alt="card.text" />
            <div class="card-text-container">
              <p class="card-text">{{ card.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const cards = ref([
  { id: 1, src: 'src/assets/dragon_1.jpg', text: 'Web Development' },
  { id: 2, src: 'src/assets/dragon_2.jpg', text: 'Mobile Apps' },
  { id: 3, src: 'src/assets/dragon_3.jpg', text: 'Artificial Intelligence' },
  { id: 4, src: 'src/assets/dragon_4.jpg', text: 'Cloud Computing' },
  { id: 5, src: 'src/assets/dragon_5.jpg', text: 'Cybersecurity' },
  { id: 6, src: 'src/assets/dragon_6.jpg', text: 'UI/UX Design' },
  { id: 7, src: 'src/assets/dragon_7.jpg', text: 'Blockchain' },
  { id: 8, src: 'src/assets/dragon_8.jpg', text: 'E-commerce' },
  { id: 9, src: 'src/assets/dragon_9.jpg', text: 'Big Data' },
  { id: 10, src: 'src/assets/dragon_10.jpg', text: 'DevOps' }
]);

const activeIndex = ref(Math.floor(cards.value.length / 2));
let autoScrollInterval: number | null = null;
const isPaused = ref(false);

const getCardStyle = (index: number) => {
  const centerIndex = Math.floor(cards.value.length / 2);
  const distanceFromCenter = index - centerIndex;
  const absDistance = Math.abs(distanceFromCenter);
  
  // Base z-index calculation - center has highest z-index
  const baseZIndex = 100 - absDistance * 10;
  
  // Adjust z-index for active state
  const zIndex = index === activeIndex.value ? 1000 : baseZIndex;
  
  // Smoother scale calculation
  const scale = Math.max(0.6, 1 - absDistance * 0.12);
  
  // Horizontal position with easing
  const translateX = distanceFromCenter * 140;
  
  // Vertical offset with smoother curve
  const translateY = Math.pow(absDistance, 1.5) * 15;
  
  // Rotation with easing
  const rotate = distanceFromCenter * -8;
  
  // Opacity with smoother falloff
  const opacity = Math.max(0.3, 1 - absDistance * 0.2);

  return {
    transform: `
      translateX(${translateX}px)
      translateY(${translateY}px)
      rotateY(${rotate}deg)
      scale(${scale})
    `,
    zIndex,
    opacity,
    transition: 'all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)'
  };
};

const setCurrentCard = (index: number) => {
  activeIndex.value = index;
};

const pauseAutoScroll = (index: number) => {
  isPaused.value = true;
  activeIndex.value = index;
};

const resumeAutoScroll = () => {
  isPaused.value = false;
};

const rotateCards = () => {
  if (!isPaused.value) {
    const firstCard = cards.value.shift();
    if (firstCard) {
      cards.value.push(firstCard);
    }
  }
};

onMounted(() => {
  autoScrollInterval = window.setInterval(rotateCards, 1000);
});

onUnmounted(() => {
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval);
  }
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
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 40, 40, 0.8) 50%,
    rgba(0, 0, 0, 0.9) 100%
  );
  padding-bottom: 20rem;
  padding-right: 100px;
}

.carousel-title {
  color: white;
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 40px;
  padding-left: 20px;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: -0.5px;
}

.carousel-title span {
  background: linear-gradient(45deg, #4de6ee 30%, #00acff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  position: relative;
  display: inline-block;
}

.carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 2000px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-bottom: 300px;
}

.carousel {
  display: flex;
  transform-style: preserve-3d;
  position: relative;
  transition: transform 0.8s cubic-bezier(0.4, 0.0, 0.2, 1);
}

.card {
  position: absolute;
  width: clamp(180px, 22vw, 240px);
  height: clamp(240px, 32vh, 300px);
  cursor: pointer;
  transform-style: preserve-3d;
  will-change: transform, opacity;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1);
  transform: translateY(0);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.card:hover .card-inner {
  transform: translateY(-10px);
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.4);
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1);
}

.card-text-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  padding: 25px 0;
  text-align: center;
  transform: translateY(100%);
  transition: all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
}

.card:hover .card-text-container {
  transform: translateY(0);
}

.card-text {
  color: #000;
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0;
}

.card-active {
  z-index: 1000 !important;
}

@media (max-width: 768px) {
  .carousel-wrapper {
    height: 90vh;
    padding-right: 0;
    padding-bottom: 10rem;
  }

  .carousel-title {
    font-size: 2.4rem;
    padding: 0 20px;
    margin-bottom: 30px;
  }

  .carousel-container {
    padding-bottom: 150px;
  }

  .card {
    width: clamp(140px, 20vw, 200px);
    height: clamp(180px, 28vh, 260px);
  }

  .card-text {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .carousel-title {
    font-size: 2rem;
  }

  .card {
    width: clamp(120px, 18vw, 180px);
    height: clamp(160px, 25vh, 220px);
  }

  .card-text {
    font-size: 1rem;
  }
}
</style>