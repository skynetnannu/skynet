<script setup lang="ts">
defineProps<{
  shop: {
    name: string;
    location: string;
    date: string;
    products: number;
    image: string;
    color: string;
  }
}>();
</script>

<template>
  <div class="rounded-2xl overflow-hidden shadow-xl bg-white h-full transform transition duration-300 hover:scale-105 hover:shadow-2xl">
    <div class="flex flex-col h-full">
      <!-- Left side with image and color - full width on mobile, left side on desktop -->
      <div class="w-full h-48 relative overflow-hidden" :style="{ backgroundColor: shop.color }">
        <img :src="shop.image" alt="Shop image" class="absolute inset-0 object-cover w-full h-full transition-transform duration-700 hover:scale-110" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div class="absolute top-4 left-4">
          <div class="text-sm text-white font-semibold px-2 py-1 bg-blue-600/80 rounded-md backdrop-blur-sm animate-fadeIn">Feature</div>
        </div>
      </div>
      
      <!-- Right side with text content -->
      <div class="w-full p-6 flex flex-col justify-between bg-white flex-grow">
        <div>
          <h2 class="text-xl font-bold text-gray-800 mb-4 transition-colors duration-300 hover:text-blue-700">{{ shop.name }}</h2>
          
          <div class="flex items-center text-gray-600 text-sm mb-3 group">
            <div class="p-1.5 rounded-full bg-gray-100 mr-2 group-hover:bg-blue-100 transition-colors duration-300">
              <img width="24" height="24" src="https://img.icons8.com/fluency/48/instagram-check-mark.png" alt="instagram-check-mark"/>
            </div>
            <span class="group-hover:text-blue-600 transition-colors duration-300">{{ shop.location }}</span>
          </div>
          
          <div class="flex items-center text-gray-600 text-sm group">
            <div class="p-1.5 rounded-full bg-gray-100 mr-2 group-hover:bg-blue-100 transition-colors duration-300">
              <img width="24" height="24" src="https://img.icons8.com/parakeet/48/warranty-card.png" alt="warranty-card"/>
            </div>
            <span class="group-hover:text-blue-600 transition-colors duration-300 custom">{{ shop.date }}</span>
          </div>
        </div>
        
        
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom{
  font-weight: bold;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fadeIn {
  animation: fadeIn 0.5s ease-out forwards;
}
</style>