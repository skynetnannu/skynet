<script setup>
import { ref, computed } from 'vue';

const selectedCard = ref(0);
const isMobile = computed(() => window.innerWidth <= 768);

const cards = ref([
  { title: 'Winter', text: 'Winter has so much to offer - creative activities', image: 'src/assets/U_14.png' },
  { title: 'Digital Technology', text: 'Gets better every day - stay tuned', image: 'img2.jpeg' },
  { title: 'Globalization', text: 'Help people all over the world', image: 'img3.jpeg' },
  { title: 'New technologies', text: 'Space engineering becomes more and more advanced', image: 'img4.jpeg' }
]);
</script>

<template>
  <div class="wrapper">
    <div class="Heading">
      <h1 class="main-heading">This Is <span>Ad Creation Page </span></h1>
      <h4 class="second-heading">To showcase our ad creation work</h4>
    </div>
    <div class="container" v-if="isMobile">
      <div 
        class="image-preview" 
        :style="{ backgroundImage: `url(${cards[selectedCard].image})` }">
      </div>
      <div class="thumbnail-container">
        <div 
          v-for="(card, index) in cards" 
          :key="index" 
          class="thumbnail" 
          :style="{ backgroundImage: `url(${card.image})` }"
          @click="selectedCard = index">
        </div>
      </div>
    </div>
    <div class="container" v-else>
      <label 
        v-for="(card, index) in cards" 
        :key="index" 
        class="card" 
        :class="{ active: selectedCard === index }"
        @click="selectedCard = index">
        <div class="row">
          <div class="icon">{{ index + 1 }}</div>
          <div class="description">
            <h4>{{ card.title }}</h4>
            <p>{{ card.text }}</p>
          </div>
        </div>
      </label>
    </div>
  </div>
</template>


<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  background-color: #eeeeea;
}

.wrapper {
  width: 100%;
  height: 115vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background:  
  linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 1) 100%), 
  linear-gradient(109.6deg, rgb(0, 0, 0) 11.2%, rgb(11, 132, 145) 91.1%);
}

.container {
  height: 600px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
}

.card {
  width: 80px;
  border-radius: 2rem;
  background-size: cover;
  cursor: pointer;
  overflow: hidden;
  margin: 0 10px;
  display: flex;
  align-items: flex-end;
  transition: .6s cubic-bezier(.28,-0.03,0,.99);
  box-shadow: 0px 10px 30px -5px rgba(0,0,0,0.8);
  background-position: center;
}

.card.active {
  width: 600px;
}

.card .row {
  color: white;
  display: flex;
  flex-wrap: nowrap;
}

.card .row .icon {
  background: #223;
  color: white;
  border-radius: 50%;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
}

.card .row .description {
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  height: 80px;
  width: 520px;
  opacity: 0;
  transform: translateY(30px);
  transition-delay: .3s;
  transition: all .3s ease;
}

.card.active .description {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

.card:nth-child(1) { background-image: url('src/assets/Ad_2.png');}
.card:nth-child(2) { background-image: url('src/assets/Ad_1.jpg');}
.card:nth-child(3) { background-image: url('src/assets/Ad_3.png');}
.card:nth-child(4) { background-image: url('src/assets/Ad_4.jpg');}

.Heading{
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 80px;
}

.main-heading{
  font-size: 32px;
  font-weight: bolder;
  padding-bottom: 2px;
}

.main-heading span{
  background: linear-gradient(45deg, #4de6ee 30% , #00acff );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}

.second-heading{
  font-weight: bold;
  display: flex;
  justify-content: center;
}

@media (max-width: 768px) {
  .card{
    width: 110px;
    margin: 0 3px;
  }

  .card .row .icon{
    width: 30px;
    height: 30px;
    margin-left: 7px;
    margin-top: 30px;
  }

  .container{
    height: 400px;
  }

  .card .row .description{
    font-size: 11px;
    width: 180px;
  }

  .main-heading{
    font-size: 26px;
  }

  .second-heading{
    font-size: 13px;
    font-weight: 300;
  }
}
</style>
