<script setup>
const services = [
    { iconType: 'fas', iconName: 'brain', title: "AI Solutions", desc: "Advanced artificial intelligence systems designed torevolutionize your business operations." },
    { iconType: 'fas', iconName: 'shield', title: "Cybersecurity", desc: "Next-generation security protocols to protect yourdigital assets." },
    { iconType: 'fas', iconName: 'microchip', title: "Neural Networks", desc: "Custom neural network solutions for complex dataprocessing needs." },
    { iconType: 'fas', iconName: 'database', title: "Big Data Analytics", desc: "Transform your raw data into actionableinsights with our advanced analytics solutions." },
    { iconType: 'fas', iconName: 'cloud', title: "Cloud Integration", desc: "Seamless cloud solutions for scalable andefficient business operations." },
    { iconType: 'fas', iconName: 'robot', title: "Automation Systems", desc: "Intelligent automation solutions to streamline yourworkflows." },
    { iconType: 'fas', iconName: 'network-wired', title: "IoT Solutions", desc: "Connected device ecosystems for smart businessoperations." },
    { iconType: 'fas', iconName: 'lock', title: "Blockchain", desc: "Secure and transparent blockchain solutions for modernbusinesses." },
    { iconType: 'fas', iconName: 'globe', title: "Digital Transformation", desc: "End-to-end digital transformation consultingand implementation." }
]
</script>

<template>
    <div className="min-h-screen bg-gray-900 text-white">
        <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-bold text-center mb-4 fade-in">Our Services</h2>
                <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto text-lg fade-in">
                    Comprehensive technology solutions tailored to drive your business forward
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    <div v-for="(service, index) in services" :key="index"
                        className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 fade-in group">
                        <font-awesome-icon :icon="[service.iconType, service.iconName]" class="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold mb-4 text-gray-100">{{ service.title }}</h3>
                        <p className="text-gray-400">{{ service.desc }}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
