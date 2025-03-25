<script setup lang="ts">
interface SocialIcon {
  name: string;
  url: string;
  image: string;
}

const socialIcons: SocialIcon[] = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    image: 'src/assets/lingding.png'
  },
  {
    name: 'WhatsApp',
    url: 'https://whatsapp.com',
    image: 'src/assets/wattsapp.png'
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com',
    image: 'src/assets/youtube.png'
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com',
    image: 'src/assets/facebook.png'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com',
    image: 'src/assets/instagram.png'
  }
];
</script>

<template>
  <div class="social-icons-container">
    <a 
      v-for="(icon, index) in socialIcons" 
      :key="icon.name"
      :href="icon.url"
      target="_blank"
      rel="noopener noreferrer"
      class="social-icon"
      :style="{ '--delay': index * 0.2 + 's' }"
    >
      <img :src="icon.image" :alt="icon.name">
    </a>
  </div>
</template>

<style scoped>
/* Container Styles */
.social-icons-container {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  flex-wrap: wrap;
  perspective: 1200px;
}

/* Icon Styles */
.social-icon {
  width: 80px;
  height: 80px;
  position: relative;
  transition: transform 0.5s ease, filter 0.5s ease;
  transform-style: preserve-3d;
  animation: floatAnimation 4s ease-in-out infinite alternate;
  animation-delay: var(--delay);
}

.social-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 16px;
  transition: transform 0.5s ease, filter 0.5s ease;
}

/* Hover Effects */
.social-icon:hover {
  transform: scale(1.2) rotateY(20deg) rotateX(10deg);
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
}

.social-icon:hover img {
  filter: brightness(1.3);
}

/* Glowing Effect */
.social-icon::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 16px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 10%, rgba(0, 0, 0, 0) 70%);
  opacity: 0;
  transition: opacity 0.5s ease;
}

.social-icon:hover::before {
  opacity: 1;
}

/* Floating Animation */
@keyframes floatAnimation {
  0% {
    transform: translateY(0px) rotateY(0deg);
  }
  50% {
    transform: translateY(-10px) rotateY(10deg);
  }
  100% {
    transform: translateY(0px) rotateY(0deg);
  }
}

/* Shadow Effect Below Icons */
.social-icon::after {
  content: '';
  position: absolute;
  bottom: -12px; /* Adjusts the shadow position */
  left: 50%;
  width: 80%;
  height: 12px; /* Adjusts the size of the shadow */
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  transform: translateX(-50%);
  filter: blur(3px);
  opacity: 1;
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.social-icon:hover::after {
  opacity: 1;
  transform: translateX(-50%) scale(1.2);
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .social-icons-container {
    gap: 1rem;
  }

  .social-icon {
    width: 65px;
    height: 65px;
    animation-duration: 3s;
  }

  .social-icon:hover {
    transform: scale(1.1) rotateY(10deg) rotateX(5deg);
  }

  .social-icon::after {
    height: 8px;
    bottom: -8px;
    filter: blur(3px);
  }
}

@media (max-width: 480px) {
  .social-icons-container {
    gap: 0.8rem;
  }

  .social-icon {
    width: 50px;
    height: 50px;
    animation-duration: 2.5s;
  }

  .social-icon:hover {
    transform: scale(1.05);
  }

  .social-icon::after {
    height: 6px;
    bottom: -6px;
    filter: blur(3px);
  }
}
</style>
