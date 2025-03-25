<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch, computed } from 'vue';
import { gsap } from 'gsap';

interface SlideItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

const props = defineProps<{
  interval?: number;
}>();

// Sample images and text data with high-quality 3D-like images
const slides = ref<SlideItem[]>([
  {
    id: 1,
    image: 'src/assets/U_14.png',
    title: 'The Beauty of Virtual Nature',
    description: 'In Unreal Engine, every tree whispers, every river flows, and the world feels alive.'
  },
  {
    id: 2,
    image: 'src/assets/U_6.png',
    title: 'Crafting Digital Landscapes',
    description: 'With light, shadow, and detail, Unreal brings the essence of nature into the digital realm'
  },
  {
    id: 3,
    image: 'src/assets/U_3.png',
    title: 'A World Without Limits',
    description: 'From towering mountains to endless forests, Unreal Engine redefines what’s possible in virtual environments'
  },
  {
    id: 4,
    image: 'src/assets/U_8.png',
    title: 'Exploring the Cosmos',
    description: 'With Unreal Engine, the universe isn’t the limit—it’s just the beginning of a new frontier.'
  }
]);

const currentIndex = ref(0);
const isAnimating = ref(false);
const timer = ref<number | null>(null);
const imageRef = ref<HTMLElement | null>(null);
const textRef = ref<HTMLElement | null>(null);
const containerRef = ref<HTMLElement | null>(null);
const mousePosition = ref({ x: 0, y: 0 });
const isHovering = ref(false);

// Compute next and previous indices for 3D carousel effect
const nextIndex = computed(() => (currentIndex.value + 1) % slides.value.length);
const prevIndex = computed(() => (currentIndex.value - 1 + slides.value.length) % slides.value.length);

// GSAP animations
const animateImageOut = () => {
  if (!imageRef.value) return;
  
  gsap.to(imageRef.value, {
    opacity: 0,
    scale: 0.85,
    rotationY: -15,
    z: -100,
    duration: 0.8,
    ease: "power3.out"
  });
};

const animateImageIn = () => {
  if (!imageRef.value) return;
  
  gsap.fromTo(imageRef.value, 
    { opacity: 0, scale: 1.15, rotationY: 15, z: -100 },
    { opacity: 1, scale: 1, rotationY: 0, z: 0, duration: 1.2, ease: "power3.inOut" }
  );
};

const animateTextOut = () => {
  if (!textRef.value) return;
  
  gsap.to(textRef.value, {
    opacity: 0,
    y: 30,
    rotationX: 5,
    duration: 0.6,
    ease: "power2.in"
  });
};

const animateTextIn = () => {
  if (!textRef.value) return;
  
  // Staggered text animation for more depth
  const title = textRef.value.querySelector('h2');
  const divider = textRef.value.querySelector('.divider');
  const description = textRef.value.querySelector('p');
  
  gsap.set([title, divider, description], { opacity: 0, y: -30 });
  
  gsap.timeline()
    .to(textRef.value, { opacity: 1, duration: 0.1 })
    .to(title, { opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.7)" })
    .to(divider, { opacity: 1, y: 0, width: "5rem", duration: 0.4, ease: "power1.out" }, "-=0.3")
    .to(description, { opacity: 1, y: 0, duration: 0.6, ease: "power1.out" }, "-=0.2");
};

const nextSlide = () => {
  if (isAnimating.value) return;
  isAnimating.value = true;
  
  animateImageOut();
  animateTextOut();
  
  setTimeout(() => {
    currentIndex.value = (currentIndex.value + 1) % slides.value.length;
    
    setTimeout(() => {
      animateImageIn();
      animateTextIn();
      
      setTimeout(() => {
        isAnimating.value = false;
      }, 800);
    }, 100);
  }, 600);
};

const prevSlide = () => {
  if (isAnimating.value) return;
  isAnimating.value = true;
  
  animateImageOut();
  animateTextOut();
  
  setTimeout(() => {
    currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length;
    
    setTimeout(() => {
      animateImageIn();
      animateTextIn();
      
      setTimeout(() => {
        isAnimating.value = false;
      }, 800);
    }, 100);
  }, 600);
};

const goToSlide = (index: number) => {
  if (isAnimating.value || index === currentIndex.value) return;
  isAnimating.value = true;
  
  animateImageOut();
  animateTextOut();
  
  setTimeout(() => {
    currentIndex.value = index;
    
    setTimeout(() => {
      animateImageIn();
      animateTextIn();
      
      setTimeout(() => {
        isAnimating.value = false;
      }, 800);
    }, 100);
  }, 600);
};

const startAutoplay = () => {
  if (timer.value) clearInterval(timer.value);
   timer.value = setInterval(() => {
    if (!isHovering.value) {
      nextSlide();
    }
  }, props.interval || 5000);
};

const stopAutoplay = () => {
  if (timer.value) {
    clearInterval(timer.value);
    timer.value = null;
  }
};

// Enhanced 3D effects with mouse tracking
const handleMouseMove = (e: MouseEvent) => {
  if (!containerRef.value) return;
  
  // Calculate mouse position relative to container
  const rect = containerRef.value.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  // Normalize coordinates (-1 to 1)
  mousePosition.value = {
    x: (x / rect.width) * 2 - 1,
    y: (y / rect.height) * 2 - 1
  };
  
  if (imageRef.value) {
    // Apply 3D rotation based on mouse position
    const rotateY = mousePosition.value.x * 10; // -10 to 10 degrees
    const rotateX = -mousePosition.value.y * 5; // -5 to 5 degrees
    
    gsap.to(imageRef.value, {
      rotationY: rotateY,
      rotationX: rotateX,
      transformPerspective: 1000,
      transformOrigin: "center center",
      duration: 0.5,
      ease: "power1.out"
    });
    
    // Add depth to shadows based on rotation
    const shadowX = -rotateY * 2;
    const shadowY = -rotateX * 2;
    const shadowBlur = 20 + Math.abs(rotateY) + Math.abs(rotateX);
    
    gsap.to(imageRef.value, {
      boxShadow: `${shadowX}px ${shadowY}px ${shadowBlur}px rgba(0,0,0,0.5)`,
      duration: 0.5
    });
  }
  
  // Subtle movement for text elements
  if (textRef.value) {
    gsap.to(textRef.value, {
      x: mousePosition.value.x * 5,
      y: mousePosition.value.y * 5,
      duration: 0.5,
      ease: "power1.out"
    });
  }
  
  // Animate particles based on mouse movement
  const particles = document.querySelectorAll('.particle');
  particles.forEach((particle, index) => {
    const speed = 1 + (index % 3) * 0.5;
    gsap.to(particle, {
      x: `+=${mousePosition.value.x * speed}`,
      y: `+=${mousePosition.value.y * speed}`,
      duration: 2,
      ease: "power1.out"
    });
  });
};

const handleMouseEnter = () => {
  isHovering.value = true;
  
  // Enhance lighting effect on hover
  if (containerRef.value) {
    gsap.to(containerRef.value.querySelector('.lighting-effect'), {
      opacity: 0.8,
      duration: 0.5
    });
  }
};

const handleMouseLeave = () => {
  isHovering.value = false;
  
  // Reset all transformations
  if (imageRef.value) {
    gsap.to(imageRef.value, {
      rotationY: 0,
      rotationX: 0,
      x: 0,
      y: 0,
      boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
      duration: 0.7,
      ease: "power3.out"
    });
  }
  
  if (textRef.value) {
    gsap.to(textRef.value, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "power3.out"
    });
  }
  
  // Reset lighting effect
  if (containerRef.value) {
    gsap.to(containerRef.value.querySelector('.lighting-effect'), {
      opacity: 0.3,
      duration: 0.5
    });
  }
  
  // Reset particles
  const particles = document.querySelectorAll('.particle');
  particles.forEach((particle) => {
    gsap.to(particle, {
      x: 0,
      y: 0,
      duration: 1.5,
      ease: "elastic.out(1, 0.5)"
    });
  });
};

onMounted(() => {
  startAutoplay();
  animateImageIn();
  animateTextIn();
  
  // Create dynamic lighting effect
  const createLightingEffect = () => {
    if (!containerRef.value) return;
    
    const lightingEffect = containerRef.value.querySelector('.lighting-effect');
    
    gsap.to(lightingEffect, {
      backgroundPosition: '200% 200%',
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  };
  
  // Animate floating particles
  const animateParticles = () => {
    const particles = document.querySelectorAll('.particle');
    
    particles.forEach((particle, index) => {
      const duration = 5 + Math.random() * 10;
      const delay = Math.random() * 5;
      
      gsap.to(particle, {
        y: `${Math.random() > 0.5 ? '+' : '-'}=${20 + Math.random() * 30}`,
        x: `${Math.random() > 0.5 ? '+' : '-'}=${10 + Math.random() * 20}`,
        opacity: Math.random() * 0.5 + 0.3,
        duration: duration,
        delay: delay,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });
  };
  
  // Initialize 3D effects
  setTimeout(() => {
    createLightingEffect();
    animateParticles();
  }, 100);
  
  // Add event listeners
  if (containerRef.value) {
    containerRef.value.addEventListener('mousemove', handleMouseMove);
    containerRef.value.addEventListener('mouseenter', handleMouseEnter);
    containerRef.value.addEventListener('mouseleave', handleMouseLeave);
  }
  
  onBeforeUnmount(() => {
    stopAutoplay();
    if (containerRef.value) {
      containerRef.value.removeEventListener('mousemove', handleMouseMove);
      containerRef.value.removeEventListener('mouseenter', handleMouseEnter);
      containerRef.value.removeEventListener('mouseleave', handleMouseLeave);
    }
  });
});

// Reset animations when current index changes
watch(currentIndex, () => {
  if (imageRef.value) {
    gsap.set(imageRef.value, { clearProps: "all" });
  }
  if (textRef.value) {
    gsap.set(textRef.value, { clearProps: "all" });
  }
});
</script>

<template>
  <div 
    ref="containerRef"
    class="relative w-full max-w-7xl mx-auto overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-[#0abab5] to-[#003153]"
  >
    <!-- Enhanced 3D-like frame with dynamic glow effect -->
    <div class="absolute inset-0 bg-gradient-to-r from-accent-400/20 to-primary-500/20 rounded-2xl animate-glow"></div>
    
    <!-- Dynamic lighting effect -->
    <div class="lighting-effect absolute inset-0 bg-gradient-to-br from-primary-500/10 via-accent-400/5 to-primary-400/10 opacity-30 rounded-2xl" style="background-size: 200% 200%; background-position: 0% 0%;"></div>
    
    <!-- 3D scene container -->
    <div class="relative z-10 flex flex-col md:flex-row min-h-[500px] perspective">
      <!-- Image Section with 3D effects -->
      <div class="w-full md:w-3/5 p-6 flex items-center justify-center overflow-hidden">
        <!-- Main image container with 3D transform -->
        <div 
          ref="imageRef"
          class="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden transform-gpu shadow-xl"
          style="transform-style: preserve-3d; box-shadow: 0 10px 30px rgba(0,0,0,0.3);"
        >
          <!-- Main image -->
          <img 
            :src="`${slides[currentIndex].image}?auto=format&fit=crop&w=800&h=600&q=80`" 
            alt="Carousel image" 
            class="w-full h-full object-cover rounded-xl"
          />
          
        </div>
      </div>
      
      <!-- Text Section with 3D effects -->
      <div class="w-full md:w-2/5 p-8 flex flex-col justify-center">
        <div 
          ref="textRef"
          class="text-content transform-gpu"
          style="transform-style: preserve-3d;"
        >
          <h2 class="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-white">
            {{ slides[currentIndex].title }}
          </h2>
          
          <div class="divider w-20 h-1 bg-gradient-to-br from-[#242124] to-[#003366] rounded-full mb-6 transform transition-all duration-500 hover:w-40"></div>
          
          <p class="text-lg text-gray-200 leading-relaxed">
            {{ slides[currentIndex].description }}
          </p>
          
          <!-- 3D floating accent elements -->
          <div class="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-accent-500/10 blur-xl" style="transform: translateZ(-10px);"></div>
          <div class="absolute -bottom-5 -left-5 w-16 h-16 rounded-full bg-primary-500/10 blur-lg" style="transform: translateZ(-5px);"></div>
        </div>
      </div>
    </div>
    
    <!-- Controls with 3D effects -->
    <div class="relative z-10 flex justify-between items-center p-4 bg-black/50 backdrop-blur-sm">
      <button 
        @click="prevSlide" 
        @mouseenter="stopAutoplay" 
        @mouseleave="startAutoplay" 
        class="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 backdrop-blur-sm transform hover:scale-110 active:scale-95"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <div class="flex space-x-2">
        <button 
          v-for="(slide, index) in slides" 
          :key="slide.id" 
          @click="goToSlide(index)"
          @mouseenter="stopAutoplay"
          @mouseleave="startAutoplay"
          class="w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125"
          :class="[
            index === currentIndex 
              ? 'bg-gradient-to-r from-primary-400 to-accent-500 scale-125 shadow-lg shadow-primary-500/30' 
              : 'bg-white/30 hover:bg-white/50'
          ]"
        ></button>
      </div>
      
      <button 
        @click="nextSlide" 
        @mouseenter="stopAutoplay" 
        @mouseleave="startAutoplay" 
        class="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 backdrop-blur-sm transform hover:scale-110 active:scale-95"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.text-content {
  @apply transition-all duration-500;
}

/* Enhanced 3D-like depth effect */
.transform-gpu {
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

.perspective {
  perspective: 2000px;
}

/* Custom animation for particles */
.particle {
  will-change: transform, opacity;
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

/* Custom animation for lighting effect */
.lighting-effect {
  will-change: background-position, opacity;
}

/* Translate Z utility */
.translate-z-\[-50px\] {
  transform: translateZ(-50px);
}
</style>