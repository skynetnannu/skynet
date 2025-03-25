<script setup>
import { ref, useTemplateRef } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import emailjs from '@emailjs/browser';


const target = ref(null)
const isVisible = ref(false)

useIntersectionObserver(target, ([entry]) => {
  isVisible.value = entry.isIntersecting
})

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitted = ref(false)
const activeField = ref('')

const form = useTemplateRef('form')
  
const handleSubmit = () => {
  isSubmitted.value = true
  if (formData.value.name.trim() === '' || formData.value.email.trim() === '' || formData.value.subject.trim() === '' || formData.value.message.trim() === '') {
    activeField.value = 'all'
    return
  }
  emailjs.sendForm(
    import.meta.env.VITE_YOUR_SERVICE_ID,
    import.meta.env.VITE_YOUR_TEMPLATE_ID,
    form.value,
    {
      publicKey: import.meta.env.VITE_publicKey,
    }
  ).then(
    () => {
      console.log('SUCCESS!');
      formData.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
      isSubmitted.value = false
    },
    (error) => {
      console.log('FAILED...', error);
    },
  );
}

const setActiveField = (field) => {
  activeField.value = field
}
</script>

<template>
  <div ref="target"
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-6 main-class">
    <div
      class="max-w-2xl w-full bg-white rounded-3xl p-10 shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] transform transition-all duration-700"
      :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
      <div class="text-center mb-10">
        <h2
          class="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 main-text">
          Get in Touch</h2>
        <p class="text-gray-600">We're excited to hear from you! Let's create something amazing together.</p>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-7" ref="form">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div class="group relative"
            :class="{ 'transform scale-[1.02] transition-transform': activeField === 'name' }">
            <input type="text" v-model="formData.name" required @focus="setActiveField('name')"
              @blur="setActiveField('')" name="name"
              class="w-full bg-gray-50 border-2 border-gray-100 rounded-xl px-5 py-4 text-gray-700 placeholder-transparent outline-none focus:border-blue-400 transition-all duration-300 peer"
              placeholder="Your Name" id="name">
            <label for="name" class="absolute left-5 -top-2.5 text-sm text-gray-500 transition-all duration-300 transform bg-white px-2
                peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400
                peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500">Your Name</label>
          </div>
          <div class="group relative"
            :class="{ 'transform scale-[1.02] transition-transform': activeField === 'email' }">
            <input type="email" v-model="formData.email" required @focus="setActiveField('email')"
              @blur="setActiveField('')" name="email"
              class="w-full bg-gray-50 border-2 border-gray-100 rounded-xl px-5 py-4 text-gray-700 placeholder-transparent outline-none focus:border-blue-400 transition-all duration-300 peer"
              placeholder="Your Email" id="email">
            <label for="email" class="absolute left-5 -top-2.5 text-sm text-gray-500 transition-all duration-300 transform bg-white px-2
                peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400
                peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500">Your Email</label>
          </div>
        </div>

        <div class="relative" :class="{ 'transform scale-[1.02] transition-transform': activeField === 'subject' }">
          <input type="text" v-model="formData.subject" required @focus="setActiveField('subject')"
            @blur="setActiveField('')" name="subject"
            class="w-full bg-gray-50 border-2 border-gray-100 rounded-xl px-5 py-4 text-gray-700 placeholder-transparent outline-none focus:border-blue-400 transition-all duration-300 peer"
            placeholder="Subject" id="subject">
          <label for="subject" class="absolute left-5 -top-2.5 text-sm text-gray-500 transition-all duration-300 transform bg-white px-2
              peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400
              peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500">Subject</label>
        </div>

        <div class="relative" :class="{ 'transform scale-[1.02] transition-transform': activeField === 'message' }">
          <textarea v-model="formData.message" required @focus="setActiveField('message')" @blur="setActiveField('')"
            rows="5" name="message"
            class="w-full bg-gray-50 border-2 border-gray-100 rounded-xl px-5 py-4 text-gray-700 placeholder-transparent outline-none focus:border-blue-400 transition-all duration-300 resize-none peer"
            placeholder="Your Message" id="message"></textarea>
          <label for="message" class="absolute left-5 -top-2.5 text-sm text-gray-500 transition-all duration-300 transform bg-white px-2
              peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400
              peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500">Your Message</label>
        </div>

        <div class="text-center">
          <button type="submit" :disabled="isSubmitted"
            class="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl transform hover:scale-105 hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed second-class">
            <span v-if="!isSubmitted" class="flex items-center justify-center space-x-2">
              <span>Send Message</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                </path>
              </svg>
            </span>
            <span v-else class="flex items-center justify-center space-x-2">
              <span>Message Sent!</span>
              <svg class="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
.main-class {
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 1) 100%),
    linear-gradient(109.6deg, rgb(0, 0, 0) 11.2%, rgb(11, 132, 145) 91.1%);
  padding: 2rem;
  position: relative;
}

.main-text {
  background: linear-gradient(45deg, #4de6ee 30%, #00acff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}

.second-class {
  background: linear-gradient(45deg, #00edfa 30%, #00acff);
  color: rgb(255, 255, 255);
}
</style>