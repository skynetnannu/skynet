<script setup>
  import { Flame, Zap, Gift, Database, Coins, Stars } from 'lucide-vue-next'
  import FeatureCard from '@/components/custom/FeatureCard.vue'
  import { CheckIcon } from '@heroicons/vue/20/solid'

  const shops = [
  {
    name: 'Responsive Design',
    location: 'Adaptive, fast, and flawless on any device',
    date: 'Premium Feature',
    image: 'https://img.freepik.com/free-vector/gradient-responsive-website-design_23-2149496043.jpg?t=st=1742829961~exp=1742833561~hmac=34ef85302944574252b7c424b7f6855b283eb08effdb38de9948eb07fb0267af&w=996',
    color: '#7E22CE'
  },
  {
    name: 'Ecommerce Feature',
    location: 'Enable secure, user-friendly, and efficient online shopping on your website.',
    date: 'Premium Feature',
    image: 'https://img.freepik.com/free-vector/online-shopping-concept-landing-page_52683-22153.jpg?t=st=1742834517~exp=1742838117~hmac=0d66d9618480be0a315bc738c2538b2da7bb5072b56f1822fe9c94189a7e2ceb&w=996',
    color: '#F97316'
  },
  {
    name: 'SEO',
    location: 'Boost visibility and rank higher with powerful SEO optimization.',
    date: 'Premium Feature',
    image: 'https://img.freepik.com/free-vector/seo-optimization-banner_33099-1690.jpg?t=st=1742834623~exp=1742838223~hmac=d5f2d3e558df03a05a58edfc029c0e4f458c49788826df699c377ab650c06163&w=996',
    color: '#EF4444'
  },
  {
    name: 'Maintenance',
    location: 'Ensure smooth performance with updates and reliable maintenance.',
    date: 'Basic Feature',
    image: 'https://img.freepik.com/free-vector/computer-trouble-shooting-concept-illustration_114360-7376.jpg?t=st=1742834972~exp=1742838572~hmac=8c92c01ca9c4bed0d7ff40b22feecb57919bf11b1c71d1bb921c1d07df52994c&w=996',
    color: '#3B82F6'
  },
  {
    name: 'App Development',
    location: 'Build high-performing, user-friendly apps tailored to your needs using website',
    date: 'Premium Feature',
    image: 'https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?t=st=1742835139~exp=1742838739~hmac=702f52ef3a0fd57a910ed82e9d96a348e897f062efcdfe8bbe2981c8997e1462&w=996',
    color: '#10B981'
  },
  {
    name: 'Custom Design & Features',
    location: 'Get tailored designs and unique features crafted to fit your needs',
    date: 'Basic Feature',
    image: 'https://asesasoft.com/images/blogs/custom-web-design-blog.jpg',
    color: '#8B5CF6'
  }
]


  const tiers = [
  {
    name: 'Basic',
    id: 'tier-hobby',
    href: '#',
    priceMonthly: '$29',
    description: "The perfect plan if you're just getting started with our product.",
    features: ['25 products', 'Up to 10,000 subscribers', 'Advanced analytics', '24-hour support response time'],
    featured: false,
  },
  {
    name: 'Premium',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '$99',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      'Dedicated support representative',
      'Marketing automations',
      'Custom integrations',
    ],
    featured: true,
  },
]
  </script>

<template>
    <div class="min-h-screen bg-[#0a061f] text-white overflow-x-hidden">
      <!-- Hero Section -->
      <div class="top opacity-60">soumya</div>
      <section class="min-h-screen  pb-20 px-4 text-center relative flex items-center">
        <div class="absolute inset-0 bg-[url('src/assets/background.png')] bg-cover bg-center opacity-60" />
        <div class="absolute inset-0 " />
        <div class="absolute inset-0 " />
        <div class="relative z-10 container mx-auto">
        <!-- djadaoidjiadpiadpioadpad -->
        <h2 class="text-center text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
        <p class="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white-950 sm:text-5xl">Everything you need to deploy your Website</p>
        <div class="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div class="relative lg:row-span-2">
            <div class="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]" />
            <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div class="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Mobile friendly</p>
                <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Enjoy a seamless browsing experience on any device! Our website is fully optimized for mobile, ensuring fast loading times, easy navigation, and a responsive design that adapts perfectly to your screen. Stay connected wherever you go!</p>
                </div>
                <img 
                    class="responsive-image "
                    src="../assets/mobile.png" 
                    alt="" 
                />
            </div>
            <div class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]" />
            </div>
            <div class="relative max-lg:row-start-1">
            <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]" />
            <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div class="px-8 pt-8 sm:px-10 sm:pt-10">
                <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Performance</p>
                <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Enjoy lightning-fast speeds and smooth performance on any device. Our optimized design ensures efficiency, reliability, and a seamless user experience.</p>
                </div>
                <div class="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img class="w-full max-lg:max-w-xs" src="https://tailwindui.com/plus-assets/img/component-images/bento-03-performance.png" alt="" />
                </div>
            </div>
            <div class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]" />
            </div>
            <div class="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div class="absolute inset-px rounded-lg bg-white" />
            <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <div class="px-8 pt-8 sm:px-10 sm:pt-10">
                <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Security</p>
                <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Your security is our priority. We use advanced encryption and robust safeguards to keep your data safe and protected at all times.</p>
                </div>
                <div class="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <img class="h-[min(152px,40cqw)] object-cover" src="https://tailwindui.com/plus-assets/img/component-images/bento-03-security.png" alt="" />
                </div>
            </div>
            <div class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5" />
            </div>
            <div class="relative lg:row-span-2">
            <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
            <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div class="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Awesome Design</p>
                <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Experience a sleek, modern design crafted for beauty and functionality. Our intuitive interface ensures a visually stunning and user-friendly experience.</p>
                </div>
                <div class="relative min-h-[30rem] w-full grow">
                <div class="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                    <div class="flex bg-gray-800/40 ring-1 ring-white/5">
                    <div class="-mb-px flex text-sm/6 font-medium text-gray-400">
                        <img 
                            class="responsiveimage"
                            src="../assets/design.png" 
                            alt="" 
                        />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
            </div>
        </div>
          <!-- <h1 class="text-4xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-pink-200 text-transparent bg-clip-text">
            Metaverse Ecosystem For<br />Growing New Projects
          </h1>
          <div class="flex flex-wrap justify-center gap-6 mt-12">
            <button class="px-8 py-6 text-lg bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white rounded-lg">
              Connect Wallet
            </button>
            <button class="px-8 py-6 text-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg">
              Buy MAVE Tokens
            </button>
            <button class="px-8 py-6 text-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg">
              Connect Wallet
            </button>
          </div>
          
          Partner Logos
          <div class="mt-32 flex justify-center items-center gap-16 flex-wrap">
            <div class="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text">Magicmeta</div>
            <div class="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text">Augury</div>
            <div class="text-3xl font-bold bg-gradient-to-r from-red-400 to-pink-400 text-transparent bg-clip-text">Vogodo</div>
            <div class="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">Qualify</div>
          </div> -->
        </div>
      </section>
  
      <!-- About Section -->
      <section class="py-32 px-4 relative overflow-hidden">
        <div class="absolute top-0 left-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div class="container mx-auto grid md:grid-cols-2 gap-16 items-center relative">
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-[30px] blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div class="relative bg-[url('src/assets/scroll.png')] bg-contain bg-no-repeat bg-center w-full aspect-square rounded-[30px] border border-purple-500/20">
              <div class="absolute inset-0 rounded-[30px]" />
              <!-- <div class="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-[30px]" /> -->
            </div>
          </div>
          <div>
            <h2 class="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-purple-200 text-transparent bg-clip-text">
              Premium Service with Seamless Discounts & Customizations
            </h2>
            <p class="text-gray-300 text-lg mb-12 leading-relaxed">
              We provide top-notch service with exclusive discounts, ensuring you get the best value for your money. Our seamless customization options allow you to tailor services to your unique needs effortlessly. With a focus on quality, affordability, and flexibility, we deliver solutions that meet your expectations. Enjoy a hassle-free experience with personalized offerings designed just for you. Your satisfaction is our priority, combining premium service with unbeatable savings.
            </p>
            <div class="flex gap-6">
              <button class="w-12 h-12 rounded-full border border-purple-500/50 hover:bg-purple-500/20">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" class="w-6 h-6 mx-auto" />
              </button>
              <button class="w-12 h-12 rounded-full border border-purple-500/50 hover:bg-purple-500/20">
                <img src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new" class="w-6 h-6 mx-auto" />
              </button>
              <button class="w-12 h-12 rounded-full border border-purple-500/50 hover:bg-purple-500/20">
                <img src="https://img.icons8.com/color/48/youtube-play.png" alt="youtube-play" class="w-6 h-6 mx-auto" />
              </button>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Features Section -->
      <section class="py-32 px-4 bg-[#110c2a] relative">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,182,0.1)_0%,transparent_50%)]" />
        <div class="container mx-auto relative">
          <h2 class="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-white to-purple-200 text-transparent bg-clip-text">
            Features We Offer On Our Websites
          </h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(shop, index) in shops" :key="index" 
             class="transform transition duration-500" 
             :style="{ animationDelay: (index % 3) * 0.2 + 's' }"
             :class="{ 'animate-card-appear': true }">
          <FeatureCard :shop="shop" />
        </div>
          </div>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="bg-[#0a061f] py-20 px-4 relative overflow-hidden">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,0,182,0.1)_0%,transparent_50%)]" />
           <!-- this is for pricing -->
           <div class="relative isolate px-6 py-24 sm:py-32 lg:px-8">
            <div class="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
              <div class="mx-auto aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
            </div>
            <div class="mx-auto max-w-4xl text-center">
              <h2 class="text-base/7 font-semibold text-white-600">Pricing</h2>
              <p class="mt-2 text-5xl font-semibold tracking-tight text-balance text-white-900 sm:text-6xl">Choose the right plan for you</p>
            </div>
            <p class="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-white-600 sm:text-xl/8">Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.</p>
            <div class="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
              <div v-for="(tier, tierIdx) in tiers" :key="tier.id" :class="[tier.featured ? 'relative bg-gray-900 shadow-2xl' : 'bg-gradient-to-r from-slate-300 to-slate-500', tier.featured ? '' : tierIdx === 0 ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl' : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none', 'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10']">
                <h3 :id="tier.id" :class="[tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'text-base/7 font-semibold']">{{ tier.name }}</h3>
                <p class="mt-4 flex items-baseline gap-x-2">
                  <span :class="[tier.featured ? 'text-white' : 'text-gray-900', 'text-5xl font-semibold tracking-tight']">{{ tier.priceMonthly }}</span>
                  <span :class="[tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base']">/month</span>
                </p>
                <p :class="[tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-6 text-base/7']">{{ tier.description }}</p>
                <ul role="list" :class="[tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-8 space-y-3 text-sm/6 sm:mt-10']">
                  <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
                    <CheckIcon :class="[tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'h-6 w-5 flex-none']" aria-hidden="true" />
                    {{ feature }}
                  </li>
                </ul>
                <a :href="tier.href" :aria-describedby="tier.id" :class="[tier.featured ? 'bg-indigo-500 text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-indigo-500' : 'text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline-indigo-600', 'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10']">Get started today</a>
              </div>
            </div>
          </div>
        <!-- <div class="container mx-auto relative">
          <div class="text-center">
            <h2 class="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-white to-purple-200 text-transparent bg-clip-text">
              The Ignition Of Metaverse
            </h2>
            <div class="flex justify-center gap-6 flex-wrap">
              <button class="px-8 py-6 text-lg border border-purple-500/50 hover:bg-purple-500/20 rounded-lg">
                Metaverse Marketplace
              </button>
              <button class="px-8 py-6 text-lg border border-purple-500/50 hover:bg-purple-500/20 rounded-lg">
                Launch Pad
              </button>
              <button class="px-8 py-6 text-lg border border-purple-500/50 hover:bg-purple-500/20 rounded-lg">
                Metafi DEX Vault
              </button>
            </div>
          </div>
        </div> -->
      </footer>
    </div>
  </template>

  <style>
  .top{
    background-image: url('src/assets/background.png');
    backdrop-filter: 10px;
    height: 90px;
    color: transparent;
  }

  @media (max-width: 768px) {
    .top {
      backdrop-filter: 10px;
      opacity: 200px;
    }
  }
</style>

  
  