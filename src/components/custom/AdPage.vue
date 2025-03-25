<script setup lang="ts">
import { ref } from 'vue';
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=1000",
    name: "Switzerland",
    description: "X-Dev, Transforming code into visual poetry..!"
  },
  {
    image: "https://images.unsplash.com/photo-1550742863-4b5f0f2b1fcc?q=80&w=1000",
    name: "Finland",
    description: "X-Dev, Transforming code into visual poetry..!"
  },
  {
    image: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?q=80&w=1000",
    name: "Iceland",
    description: "X-Dev, Transforming code into visual poetry..!"
  },
  {
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1000",
    name: "Australia",
    description: "X-Dev, Transforming code into visual poetry..!"
  },
  {
    image: "https://images.unsplash.com/photo-1558434789-df86cfc58981?q=80&w=1000",
    name: "Netherland",
    description: "X-Dev, Transforming code into visual poetry..!"
  },
  {
    image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?q=80&w=1000",
    name: "Ireland",
    description: "X-Dev, Transforming code into visual poetry..!"
  }
];

const currentSlides = ref([...slides]);

const nextSlide = () => {
  const [first, ...rest] = currentSlides.value;
  currentSlides.value = [...rest, first];
};

const prevSlide = () => {
  const last = currentSlides.value[currentSlides.value.length - 1];
  const rest = currentSlides.value.slice(0, -1);
  currentSlides.value = [last, ...rest];
};
</script>

<template>
  <div class="h-screen overflow-hidden background-main">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[#f5f5f5] shadow-[0_30px_50px_#dbdbdb]">
      <div class="slide relative h-full">
        <div
          v-for="(slide, index) in currentSlides"
          :key="slide.name"
          :class="[
            'absolute bg-cover bg-center shadow-[0_30px_50px_#505050] transition-all duration-500',
            index <= 1 
              ? 'top-0 left-0 w-full h-full rounded-none' 
              : 'top-1/2 -translate-y-1/2 w-[200px] h-[300px] rounded-[20px]',
            index === 2 ? 'left-1/2' : '',
            index === 3 ? 'left-[calc(50%+220px)]' : '',
            index === 4 ? 'left-[calc(50%+440px)]' : '',
            index >= 5 ? 'left-[calc(50%+660px)] opacity-0' : ''
          ]"
          :style="{ backgroundImage: `url(${slide.image})` }"
        >
          <div
            :class="[
              'absolute top-1/2 left-[100px] w-[300px] text-left text-[#eee] -translate-y-1/2 font-system',
              index === 1 ? 'block' : 'hidden'
            ]"
          >
            <div class="text-4xl font-bold uppercase opacity-0 animate-[slideUp_1s_ease-in-out_forwards]">
              {{ slide.name }}
            </div>
            <div class="mt-2.5 mb-5 opacity-0 animate-[slideUp_1s_ease-in-out_0.3s_forwards]">
              {{ slide.description }}
            </div>
            <button class="px-5 py-2.5 border-none cursor-pointer opacity-0 animate-[slideUp_1s_ease-in-out_0.6s_forwards]">
              See More
            </button>
          </div>
        </div>
      </div>

      <div class="absolute bottom-5 w-full text-center">
        <button
          @click="prevSlide"
          class="w-10 h-[35px] rounded-lg border border-black mx-1.5 transition-colors duration-300 hover:bg-[#ababab] hover:text-white"
        >
          <ChevronLeft class="mx-auto" />
        </button>
        <button
          @click="nextSlide"
          class="w-10 h-[35px] rounded-lg border border-black mx-1.5 transition-colors duration-300 hover:bg-[#ababab] hover:text-white"
        >
          <ChevronRight class="mx-auto" />
        </button>
      </div>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #ccc6c6;
  overflow: hidden;
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  height: 500px;
  background: #f5f5f5;
  box-shadow: 0 30px 50px #dbdbdb;
}

.slide .item {
  width: 200px;
  height: 300px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  border-radius: 20px;
  box-shadow: 0 30px 50px #505050;
  background-position: 50% 50%;
  background-size: cover;
  display: inline-block;
  transition: 0.5s;
}

.slide .item:nth-child(1),
.slide .item:nth-child(2) {
  top: 0;
  left: 0;
  transform: translate(0, 0);
  border-radius: 0;
  width: 100%;
  height: 100%;
}

.slide .item:nth-child(3) {
  left: 50%;
}

.slide .item:nth-child(4) {
  left: calc(50% + 220px);
}

.slide .item:nth-child(5) {
  left: calc(50% + 440px);
}

.slide .item:nth-child(n + 6) {
  left: calc(50% + 660px);
  opacity: 0;
}

.item .content {
  position: absolute;
  top: 50%;
  left: 100px;
  width: 300px;
  text-align: left;
  color: #eee;
  transform: translate(0, -50%);
  font-family: system-ui;
  display: none;
}

.slide .item:nth-child(2) .content {
  display: block;
}

.content .name {
  font-size: 40px;
  text-transform: uppercase;
  font-weight: bold;
  opacity: 0;
  animation: animate 1s ease-in-out 1 forwards;
}

.content .des {
  margin-top: 10px;
  margin-bottom: 20px;
  opacity: 0;
  animation: animate 1s ease-in-out 0.3s 1 forwards;
}

.content button {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  opacity: 0;
  animation: animate 1s ease-in-out 0.6s 1 forwards;
}

@keyframes animate {
  from {
    opacity: 0;
    transform: translate(0, 100px);
    filter: blur(33px);
  }

  to {
    opacity: 1;
    transform: translate(0);
    filter: blur(0);
  }
}

.button {
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 20px;
}

.button button {
  width: 40px;
  height: 35px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin: 0 5px;
  border: 1px solid #000;
  transition: 0.3s;
}

.button button:hover {
  background: #ababab;
  color: #fff;
}

.background-main{
    background:  
  linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 1) 100%), 
  linear-gradient(109.6deg, rgb(0, 0, 0) 11.2%, rgb(11, 132, 145) 91.1%);
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(100px);
    filter: blur(33px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}
</style>