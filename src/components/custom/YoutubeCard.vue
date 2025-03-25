<script setup lang="ts">
const props = defineProps<{
  channelName: string;
  channelUrl: string;
  subscribers: string;
  description: string;
}>();
</script>

<template>
  <div class="scene">
    <div class="youtube-card">
      <div class="card-content">
        <div class="card-left">
          <div class="youtube-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </div>
        </div>
        <div class="card-right">
          <h2>{{ channelName }}</h2>
          <!-- <p class="subscribers">{{ subscribers }} subscribers</p> -->
          <p class="description">{{ description }}</p>
          <a :href="channelUrl" target="_blank" class="subscribe-btn">
            Subscribe
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scene {
  perspective: 1000px;
  padding: 2rem;
}

.youtube-card {
  position: relative;
  width: 600px;
  height: 250px;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  cursor: pointer;
}

.youtube-card:hover {
  transform: rotateY(10deg) rotateX(5deg) translateZ(10px);
}

.card-content {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #1a1a1a, #2d2d2d);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  display: flex;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.card-content::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 20px;
  background: linear-gradient(45deg, #ff0000, #ff4444);
  opacity: 0;
  transition: opacity 0.6s;
}

.youtube-card:hover .card-content::before {
  opacity: 0.1;
}

.card-left {
  flex: 0 0 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateZ(30px);
}

.card-right {
  flex: 1;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  transform: translateZ(20px);
}

.youtube-icon {
  width: 120px;
  height: 120px;
  color: #ff0000;
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.youtube-card:hover .youtube-icon {
  transform: scale(1.1);
}

h2 {
  color: #ffffff;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.subscribers {
  color: #ff0000;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.description {
  color: #a0a0a0;
  font-size: 0.9rem;
  line-height: 1.4;
  margin-bottom: 1.5rem;
}

.subscribe-btn {
  background: #ff0000;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  width: fit-content;
  transition: all 0.3s ease;
}

.subscribe-btn:hover {
  background: #ff2222;
  transform: scale(1.05);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotateX(5deg);
  }
  50% {
    transform: translateY(-10px) rotateX(5deg);
  }
}

.youtube-card {
  animation: float 6s ease-in-out infinite;
}

@media (max-width: 640px) {
  .youtube-card {
    width: 320px;
    height: 400px;
  }

  .card-content {
    flex-direction: column;
  }

  .card-left {
    flex: 0 0 auto;
    margin-bottom: 1.5rem;
  }

  .card-right {
    padding-left: 0;
    text-align: center;
    align-items: center;
  }
}
</style>