<script setup lang="ts">
</script>

<template>
  <div class="page-container">
    <div class="about-container" data-aos="fade-up">
      <h1 class="about-title">
        <span class="pink-text" data-aos="fade-right" data-aos-delay="200">About</span>
        <span class="dark-text" data-aos="fade-left" data-aos-delay="400">Us</span>
      </h1>

      <div class="content-wrapper">
        <div class="image-section" data-aos="zoom-in" data-aos-delay="300">
          <div class="image-container">
            <img src="@/assets/first-image.png" 
                alt="Flower field" 
                class="main-image" />
          </div>
          <h2 class="seller-title" data-aos="fade-up" data-aos-delay="500">Best Services</h2>
        </div>

        <div class="text-section" data-aos="fade-left" data-aos-delay="600">
          <h2 class="section-title">Why Choose Us</h2>
          <p class="description">
            At SkyNet, we are redefining the digital landscape by delivering cutting-edge solutions that empower businesses to thrive in an ever-evolving world. Our mission is to bridge the gap between technology and business growth by providing intelligent, scalable, and future-ready solutions that drive innovation and excellence.
          </p>
          <p class="description">
            We offer exclusive deals and customized packages tailored to meet your unique business needs, ensuring cost-effective solutions without compromising on quality. Whether you're a startup or an enterprise, our flexible pricing and premium services help you stay ahead of the competition.
          </p>
          <button class="learn-more">Learn More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  min-height: 50vh;
  background: 
    linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 1) 100%), 
    linear-gradient(109.6deg, rgb(0, 0, 0) 11.2%, rgb(11, 132, 145) 91.1%);
  padding: 4rem 2rem;
  position: relative;
}

.about-container {
  max-width: 1700px;
  margin: 0 auto;
  background: radial-gradient(circle at 10% 20%, rgb(242, 235, 243) 0%, rgb(234, 241, 249) 90.1%);
  border-radius: 20px;
  padding: 1.8rem;
  padding-bottom: 3.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.about-title {
  text-align: center;
  font-size: 3.5rem;
  margin-bottom: 1.3rem;
  position: relative;
}

.about-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 3px;
  background: linear-gradient(90deg, #FF69B4, #333);
}

.pink-text {
  background: linear-gradient(45deg, #00c7d2 0%, #00acff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(255, 105, 180, 0.2);
}

.dark-text {
  background: linear-gradient(to right, #8f8f8f, #838383);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.content-wrapper {
  display: flex;
  gap: 4rem;
  align-items: center;
}

.image-section {
  flex: 1;
  position: relative;
}

.image-container {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.image-container:hover {
  transform: translateY(-10px);
}

.main-image {
  width: 100%;
  height: 500px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.main-image:hover {
  transform: scale(1.05);
}

.seller-title {
  position: absolute;
  bottom: -1.5rem;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 1.2rem 2.5rem;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  color: #333;
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

.seller-title:hover {
  transform: translateX(-50%) translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.text-section {
  flex: 1;
  padding: 2rem;
}

.section-title {
  font-size: 2.2rem;
  color: #333;
  margin-bottom: 1.5rem;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 60px;
  height: 3px;
  background: #FF69B4;
}

.description {
  color: #666;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.learn-more {
  background: linear-gradient(45deg, #00c7d2 0%, #00acff 100%);
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(255, 105, 180, 0.3);
}

.learn-more:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(255, 105, 180, 0.4);
  background: linear-gradient(45deg, #ff8fc7, #FF69B4);
}

@media (max-width: 768px) {
  .page-container {
    padding: 2rem 1rem;
  }

  .about-container {
    padding: 2rem 1rem;
  }

  .content-wrapper {
    flex-direction: column;
    gap: 3rem;
  }

  .about-title {
    font-size: 2.5rem;
  }

  .seller-title {
    font-size: 1.2rem;
    padding: 1rem 2rem;
  }

  .main-image {
    height: 300px;
    width: 300px;
  }

  .text-section {
    padding: 1rem;
  }
}
</style>