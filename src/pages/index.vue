<script setup lang="ts">
import { ref } from 'vue'
import AboutUs from '@/components/custom/AboutUs.vue';
import ContactForm from '@/components/custom/ContactForm.vue';
import Experties from '@/components/custom/ex.vue';

import "@fontsource/poppins"; // Default weight & style
import "@fontsource/poppins/400.css"; // Regular
import "@fontsource/poppins/700.css"; // Bold

interface Card {
  image: string;
  title: string;
  description: string;
}

const cards: Card[] = [
  {
    image: 'https://mojodesign.io/wp-content/uploads/2023/12/Screenshot_7.jpeg',
    title: 'Website Development',
    description: 'At SkyNet, we don’t just build websites – we craft powerful digital experiences that drive growth. Our cutting-edge, scalable, and secure solutions ensure seamless performance and user engagement. From startups to enterprises, we deliver customized web solutions that keep you ahead in the digital era.'
  },
  {
    image: 'https://www.thescxchange.com/media-library/scx24-05-virtual-prototype-1200x800-jpg.jpg?id=53557011&width=980&quality=90',
    title: '3D Amination',
    description: 'At SkyNet, we don’t just create animations — we craft immersive experiences using Unreal Engine and Blender to captivate, engage, and inspire. Whether you need dynamic brand storytelling, realistic product visualizations, or stunning visual effects, our expertise ensures your ideas come to life with cutting-edge precision and creativity.'
  },
  {
    image: 'https://aimarketingengineers.com/wp-content/uploads/2024/05/The-Importance-of-Creative-Development-in-Ad-Design-and-Visual-Elements4-1024x439.png',
    title: 'Ad Creations',
    description: 'At SkyNet, we craft compelling ad campaigns through high-quality video ads, social media posts, and motion graphics that drive engagement. Whether its a captivating commercial, an eye-catching promotional post, or a dynamic animated ad, we leverage creativity and strategy to make your brand stand out.'
  }
]

const showButtons = ref(false)

const toggleContent = () => {
  showButtons.value = !showButtons.value
  if (!showButtons.value) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="black-background">Data</div>
  <div class="min-h-screen">
    <!-- Hero Section with Video Background -->
    <div class="relative h-[70vh] overflow-hidden">
      <div class="video-container">
        <video 
          class="absolute inset-0 w-full h-full object-cover"
          autoplay 
          loop 
          muted 
          playsinline
        >
          <source src="../assets/Skynet Logo.mp4" type="video/mp4">
        </video>
        <div class="video-overlay"></div>
      </div>
      
      
      <!-- Content -->
      <div class="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        <div :class="{ 'transform translate-y-0 opacity-100 transition-all duration-700': !showButtons, 'transform -translate-y-16 opacity-0': showButtons }">
          <h1 class="text-5xl md:text-6xl font-bold mb-6 text-center first-text">
            Welcome To 
            <!-- <span class="colour-class">SkyNet</span> -->
          </h1>
          <p class="text-xl md:text-2xl text-center max-w-3xl mx-auto text-gray-200 second-text">
            Leading the future of technology with cutting-edge solutions that drive business success and redefine industries.
          </p>
        </div>

        <!-- Action Buttons -->
        <div 
          class="mb-20 flex gap-4"
          :class="{ 'transform translate-y-32 opacity-0': !showButtons, 'transform translate-y-0 opacity-100 transition-all duration-700 delay-300': showButtons }"
        >
          <button class="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
            Get Started
          </button>
          <button class="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition-colors">
            Learn More
          </button>
        </div>

        <!-- Scroll Arrow -->
        <button 
          @click="toggleContent"
          class="absolute bottom-8 -translate-x-1/2 text-white bg-gray-800/80 hover:bg-gray-700/80 p-4 rounded-full transition-transform duration-600 shadow-lg animate-bounce"
          :class="{ 'rotate-180': showButtons }"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-6 w-6 transition-transform duration-300"
            :class="{ 'rotate-180': showButtons }"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </div>
    
    <AboutUs />

    <!-- this is for cards -->
    <div class="container main-card">
        <h2 class="heading-main">Our Business <span>Solutions</span></h2>
        <div class="cards-container">
          <div v-for="(card, index) in cards" :key="index" class="card">
            <div class="card-content">
              <img :src="card.image" :alt="card.title" class="card-image">
              <div class="card-text">
                <h2>{{ card.title }}</h2>
                <p>{{ card.description }}</p>
              </div>
            </div>
          </div>
        </div>
    </div>
     
    <ContactForm />
    <Experties />

  </div>
</template>

<style scoped>

.colour-class {
  background: linear-gradient(180deg, #ffffff 0%, #00d4ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}

.first-text{
  background: linear-gradient(to right, #fff, #888);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-bottom: 10px;
  padding-right: 75vh;
  padding-top: 80px;
  font-family: "Poppins", sans-serif;
}

.second-text {
  padding-top: 230px;
  font-family: "Poppins", sans-serif;
}

.black-background{
  height: 70px;
  background-color: rgb(0, 0, 0);
}

.heading-main{
  background: linear-gradient(to right, #fff, #888);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  padding-bottom: 40px;
  font-size: 40px;
  font-weight: bolder;
}

.heading-main span {
  background: linear-gradient(45deg, #00c7d2 0%, #00acff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}

video {
  filter: brightness(0.7);
}

.video-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%; /* Adjust height for more/less effect */
  background: linear-gradient(to top, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0) 100%);
  pointer-events: none; /* Ensures the video remains interactive */
}

.main-card {
  background: 
    linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 1) 100%), 
    linear-gradient(109.6deg, rgb(0, 0, 0) 11.2%, rgb(11, 132, 145) 91.1%);
  padding: 2rem;
  position: relative;
}

.container {
  max-width: 100%;
  margin: 0 auto;
  padding: 2rem;
}

.cards-container {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Optional: Ensures vertical centering if needed */
  gap: 2rem;
  max-width: 1600px;
  margin: 0 auto; /* Ensures the container itself is centered */
}

/* General Card Styling */
.card {
  background: white;
  border-radius: 150px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  opacity: 0; /* Initially hidden for animation */
  transform: translateY(50px); /* Start position */
  animation: fadeInUp 1s ease-out forwards;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  
}

/* Card Content */
.card-content {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  gap: 2rem;
  flex-direction: row; /* Ensuring image is always on the left */
}

/* Card Hover Effects */
.card:hover {
  transform: scale(1.05); /* Slight pop-up effect */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* Image Styling */
.card-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

/* Image Hover Effect */
.card-image:hover {
  transform: scale(1.1);
  box-shadow: 0 0 15px rgba(11, 132, 145, 0.7);
}

/* Card Text */
.card-text {
  flex: 1;
}

.card-text h2 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
  background: linear-gradient(45deg, #646464 0%, #000000 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}

.card-text h2:hover {
  font-size: 1.75rem; /* Increased size for better scaling */
  background: linear-gradient(45deg, #00c7d2 0%, #00acff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  transition: font-size 0.3s ease, transform 0.3s ease; /* Smooth scaling */
}

.card-text p {
  color: #666;
  line-height: 1.6;
}

/* Animation Keyframes */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .card-content {
    flex-direction: column; /* Stack content in mobile view */
    text-align: center;
  }

  .card-image {
    width: 120px;
    height: 120px;
  }

  .card{
    border-radius: 50px;
  }

  .first-text{
    padding-left: 75vh;
    padding-top: 120px;
  }

  .second-text{
    font-size: 15px;
    padding-left: 20vh;
    padding-right: 20vh;

  }
}
</style>