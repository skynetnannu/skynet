<template>
  <nav class="navbar">
    <div class="logo">
      <img src="@/assets/skynetlogo.png" alt="">
    </div>
    
    <ul class="nav-links">
      <RouterLink :to="{name:'index'}" class="nav-item">Home</RouterLink>
      <RouterLink :to="{name:'services'}" class="nav-item">Web Development</RouterLink>
      <RouterLink :to="{name:'Animation'}" class="nav-item">3D Animations</RouterLink>
      <RouterLink :to="{name:'AdCreation'}" class="nav-item">Ad Creation</RouterLink>
      <!-- <RouterLink to="/more" class="nav-item">More</RouterLink> -->
    </ul>
    
    <div class="mobile-menu">
      <button @click="toggleMenu" class="menu-button">
        <Menu class="menu-icon" />
      </button>
      <ul v-if="isOpen" class="mobile-nav">
        <RouterLink :to="{name:'index'}" class="mobile-nav-item">Home</RouterLink>
        <RouterLink :to="{name:'services'}" class="mobile-nav-item">Web Development</RouterLink>
        <RouterLink :to="{name:'Animation'}" class="mobile-nav-item">3D Animations</RouterLink>
        <RouterLink :to="{name:'AdCreation'}" class="mobile-nav-item">Ad Creation</RouterLink>
        <!-- <RouterLink to="/more" class="mobile-nav-item">More</RouterLink> -->
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { Menu } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style>
.navbar {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  background: radial-gradient(circle at 10% 20%, rgb(242, 235, 243) 0%, rgb(234, 241, 249) 90.1%); /* More opaque white */
  backdrop-filter: blur(5px); /* Increased blur for better effect */
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  z-index: 1000;
  margin-top: 20px;
  height: 70px;
}

.logo {
  font-size: 20px;
  font-weight: bold;
  color: white;
}

.logo img {
    height: 50px;
    width: auto;
    margin-left: 20px;

    /* Initial fade-in effect */
    animation: fadeIn 1.5s ease-in-out, pulse 2s infinite alternate;

    /* Smooth transition */
    transition: transform 0.3s ease-in-out;
}

/* Zoom effect on hover */
.logo img:hover {
    transform: scale(1.2); /* Increases size by 20% */
}

/* Fade-in effect */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.8);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

/* Soft Pulse Effect */
@keyframes pulse {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.05);
    }
}


.nav-links {
  display: flex;
  gap: 20px;
  list-style: none;
}

.nav-item {
  color: rgb(0, 0, 0);
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.3s ease-in-out, color 0.3s;
}

.nav-item:hover {
  color: #2c2c2c;
  transform: scale(1.1);
}

.mobile-menu {
  display: none;
}

.menu-button {
  background: none;
  border: none;
  cursor: pointer;
  color: rgb(0, 0, 0);
}

.menu-icon {
  width: 28px;
  height: 28px;
}

.mobile-nav {
  position: absolute;
  top: 50px;
  right: 10px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  list-style: none;
}

.mobile-nav-item {
  color: rgb(0, 0, 0);
  padding: 10px;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s;
}

.mobile-nav-item:hover {
  color: #ddd;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  .mobile-menu {
    display: block;
  }
}
</style>