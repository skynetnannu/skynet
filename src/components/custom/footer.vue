<script setup>
import { ref } from 'vue';
import { Cpu } from 'lucide-vue-next'; // Import Lucide Vue Icons

const currentYear = ref(new Date().getFullYear());

const services = ['Web Development', '3D Animation', 'Digital Marketing', 'SEO Optimization'];
const company = ['About Us', 'Contact'];
const social = ['Youtube', 'LinkedIn', 'Instagram', 'Facebook'];
</script>

<template>
  <footer class="bg-muted py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <Cpu class="h-6 w-6 text-primary" />
            <span class="text-lg font-bold">SkyNet</span>
          </div>
          <p class="text-foreground/60">
            Transforming ideas into digital reality through innovative solutions and cutting-edge technology.
          </p>
        </div>

        <!-- Services Section -->
        <div>
          <h3 class="font-semibold mb-4">Services</h3>
          <ul class="space-y-2 text-foreground/60">
            <li v-for="service in services" :key="service">{{ service }}</li>
          </ul>
        </div>

        <!-- Company Section -->
        <div>
          <h3 class="font-semibold mb-4">Company</h3>
          <ul class="space-y-2 text-foreground/60">
            <li v-for="item in company" :key="item">{{ item }}</li>
          </ul>
        </div>

        <!-- Social Media Section -->
        <div>
          <h3 class="font-semibold mb-4">Follow Us</h3>
          <ul class="space-y-2 text-foreground/60">
            <li v-for="platform in social" :key="platform">{{ platform }}</li>
          </ul>
        </div>
      </div>

      <!-- Copyright Section -->
      <div class="border-t mt-12 pt-8 text-center text-foreground/60">
        <p>&copy; {{ currentYear }} SkyNet. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
