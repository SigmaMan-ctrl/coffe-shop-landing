<script lang="ts">
  import { onMount } from 'svelte';
  import { Coffee, MapPin, Clock, Phone, ArrowRight, Leaf, Award, Menu, X, Star, Mail } from 'lucide-svelte';

  let scrollY = $state(0);
  let mounted = $state(false);
  let mobileMenuOpen = $state(false);
  
  onMount(() => {
    mounted = true;
  });

  const menuItems = [
    { name: 'Espresso Single', price: '18k', desc: 'Single shot espresso', popular: false, image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&fit=crop', slug: 'espresso-single' },
    { name: 'Espresso Double', price: '22k', desc: 'Double shot espresso', popular: false, image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&fit=crop', slug: 'espresso-double' },
    { name: 'Americano', price: '25k', desc: 'Espresso + hot water', popular: false, image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop', slug: 'americano' },
    { name: 'Latte', price: '28k', desc: 'Espresso + steamed milk', popular: true, image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=400&h=300&fit=crop', slug: 'latte' },
    { name: 'Cappuccino', price: '28k', desc: 'Equal parts espresso, milk, foam', popular: false, image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop', slug: 'cappuccino' },
    { name: 'Flat White', price: '28k', desc: 'Velvet microfoam', popular: false, image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&h=300&fit=crop', slug: 'flat-white' },
    { name: 'Cold Brew', price: '30k', desc: '18-hour steep', popular: true, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop', slug: 'cold-brew' },
    { name: 'Matcha Latte', price: '32k', desc: 'Premium Japanese matcha', popular: false, image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&h=300&fit=crop', slug: 'matcha-latte' },
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop',
  ];
</script>

<svelte:window bind:scrollY />

<svelte:head>
  <link rel="preconnect" href="https://api.fontshare.com" />
  <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&f[]=outfit@400,500,600&display=swap" rel="stylesheet" />
  <title>Kopihuis - Artisan Coffee in Semarang</title>
</svelte:head>

<!-- Navigation -->
<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrollY > 50 ? 'bg-cream/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}">
  <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    <a href="/" class="flex items-center gap-2 group">
      <Coffee size={28} class="text-wood transition-transform group-hover:rotate-12" />
      <span class="text-xl font-bold tracking-tight">Kopihuis</span>
    </a>
    
    <!-- Desktop Menu -->
    <div class="hidden md:flex items-center gap-8">
      <a href="#about" class="text-sm font-medium hover:text-wood transition-colors">About</a>
      <a href="#menu" class="text-sm font-medium hover:text-wood transition-colors">Menu</a>
      <a href="#gallery" class="text-sm font-medium hover:text-wood transition-colors">Gallery</a>
      <a href="#location" class="text-sm font-medium hover:text-wood transition-colors">Visit</a>
      <a href="#menu" class="px-5 py-2.5 bg-charcoal text-white text-sm font-medium rounded-full hover:bg-wood-dark transition-all hover:scale-[1.02] active:scale-[0.98]">
        Order Now
      </a>
    </div>

    <!-- Mobile Menu Button -->
    <button 
      class="md:hidden p-2"
      onclick={() => mobileMenuOpen = !mobileMenuOpen}
      aria-label="Toggle menu"
    >
      {#if mobileMenuOpen}
        <X size={24} />
      {:else}
        <Menu size={24} />
      {/if}
    </button>
  </div>

  <!-- Mobile Menu -->
  {#if mobileMenuOpen}
    <div class="md:hidden bg-cream border-t border-gray-100 px-6 py-4 space-y-4">
      <a href="#about" class="block py-2" onclick={() => mobileMenuOpen = false}>About</a>
      <a href="#menu" class="block py-2" onclick={() => mobileMenuOpen = false}>Menu</a>
      <a href="#gallery" class="block py-2" onclick={() => mobileMenuOpen = false}>Gallery</a>
      <a href="#location" class="block py-2" onclick={() => mobileMenuOpen = false}>Visit</a>
    </div>
  {/if}
</nav>

<!-- Hero Section -->
<header class="relative min-h-[100dvh] flex items-center overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-cream via-warm-white to-cream"></div>
  <div class="absolute top-20 right-0 w-[600px] h-[600px] bg-wood/5 rounded-full blur-3xl"></div>
  <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green/5 rounded-full blur-3xl"></div>
  
  <div class="absolute top-32 left-[10%] w-px h-32 bg-wood/20"></div>
  <div class="absolute top-48 left-[15%] w-px h-48 bg-wood/10"></div>
  
  <div class="relative max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 items-center">
    <div class="space-y-8 {mounted ? 'animate-slide-up' : 'opacity-0'}">
      <div class="inline-flex items-center gap-2 px-4 py-2 bg-wood/10 rounded-full">
        <span class="w-2 h-2 bg-green rounded-full animate-pulse"></span>
        <span class="text-sm font-medium text-wood-dark">Now Open in Kota Lama</span>
      </div>
      
      <h1 class="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
        Better Coffee,
        <span class="block text-wood">Better Days</span>
      </h1>
      
      <p class="text-lg text-gray-warm max-w-md leading-relaxed">
        Artisan coffee crafted with passion in the heart of Semarang. 
        Premium beans, expert brewing, cozy ambiance.
      </p>
      
      <div class="flex flex-wrap gap-4">
        <a href="#menu" class="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white font-medium rounded-full hover:bg-wood-dark transition-all hover:scale-[1.02] active:scale-[0.98]">
          View Menu
          <ArrowRight size={18} />
        </a>
        <a href="#location" class="inline-flex items-center gap-2 px-6 py-3 border-2 border-charcoal text-charcoal font-medium rounded-full hover:bg-charcoal hover:text-white transition-all">
          <MapPin size={18} />
          Visit Us
        </a>
      </div>
      
      <div class="flex gap-12 pt-4">
        <div>
          <div class="text-3xl font-bold text-wood">5+</div>
          <div class="text-sm text-gray-warm">Years Experience</div>
        </div>
        <div>
          <div class="text-3xl font-bold text-wood">15+</div>
          <div class="text-sm text-gray-warm">Signature Drinks</div>
        </div>
        <div>
          <div class="text-3xl font-bold text-wood">10k+</div>
          <div class="text-sm text-gray-warm">Happy Customers</div>
        </div>
      </div>
    </div>
    
    <div class="relative {mounted ? 'animate-fade-in' : 'opacity-0'}" style="animation-delay: 0.3s;">
      <div class="grid grid-cols-2 gap-4">
        <div class="space-y-4 mt-8">
          <div class="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=500&fit=crop" 
              alt="Coffee preparation"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div class="aspect-square rounded-3xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop" 
              alt="Latte art"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
        <div class="space-y-4">
          <div class="aspect-square rounded-3xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&h=400&fit=crop" 
              alt="Coffee beans"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div class="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=500&fit=crop" 
              alt="Coffee shop interior"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
      
      <div class="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl flex items-center gap-4 hover:scale-105 transition-transform">
        <div class="w-12 h-12 bg-green/10 rounded-full flex items-center justify-center">
          <Leaf size={24} class="text-green" />
        </div>
        <div>
          <div class="text-sm font-semibold">100% Arabica</div>
          <div class="text-xs text-gray-warm">Premium Beans</div>
        </div>
      </div>
    </div>
  </div>
</header>

<!-- About Section -->
<section id="about" class="py-24 bg-white">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <div class="relative">
        <div class="aspect-[4/5] rounded-3xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=750&fit=crop" 
            alt="Cozy coffee shop interior"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="absolute -bottom-8 -right-8 bg-wood text-white p-6 rounded-2xl shadow-xl">
          <Award size={40} class="mb-2" />
          <div class="font-bold">Best Local</div>
          <div class="text-sm opacity-80">Coffee Shop 2025</div>
        </div>
      </div>
      
      <div class="space-y-6">
        <div class="inline-flex items-center gap-2 text-wood font-medium">
          <span class="w-8 h-px bg-wood"></span>
          Our Story
        </div>
        
        <h2 class="text-4xl md:text-5xl font-bold leading-tight">
          Crafting Moments,
          <span class="text-wood">One Cup at a Time</span>
        </h2>
        
        <p class="text-gray-warm leading-relaxed">
          Born from a passion for exceptional coffee, Kopihuis brings the art of specialty 
          brewing to Kota Lama, Semarang. We source premium Arabica beans from trusted 
          Indonesian farmers and roast them to perfection in-house.
        </p>
        
        <p class="text-gray-warm leading-relaxed">
          Our space is designed for you to slow down, connect, and enjoy. Whether you're 
          here for a quick morning brew or a leisurely afternoon with friends, every cup 
          is crafted with care.
        </p>
        
        <div class="grid grid-cols-2 gap-6 pt-4">
          <div class="flex items-start gap-3">
            <div class="w-10 h-10 bg-wood/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Coffee size={20} class="text-wood" />
            </div>
            <div>
              <div class="font-semibold">Expert Baristas</div>
              <div class="text-sm text-gray-warm">Certified & passionate</div>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-10 h-10 bg-wood/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Leaf size={20} class="text-wood" />
            </div>
            <div>
              <div class="font-semibold">Sustainable</div>
              <div class="text-sm text-gray-warm">Eco-friendly practices</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Menu Section -->
<section id="menu" class="py-24 bg-cream">
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center mb-16">
      <div class="inline-flex items-center gap-2 text-wood font-medium mb-4">
        <span class="w-8 h-px bg-wood"></span>
        Our Menu
        <span class="w-8 h-px bg-wood"></span>
      </div>
      <h2 class="text-4xl md:text-5xl font-bold mb-4">Signature Selections</h2>
      <p class="text-gray-warm max-w-xl mx-auto">
        Handcrafted beverages made with premium ingredients and love
      </p>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each menuItems as item, i}
        <div 
          class="group relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 {mounted ? 'animate-card-appear' : ''}"
          style="animation-delay: {i * 0.1}s"
        >
          {#if item.popular}
            <div class="absolute -top-3 left-4 px-3 py-1 bg-wood text-white text-xs font-medium rounded-full">
              Popular
            </div>
          {/if}
          <div class="flex justify-between items-start mb-3">
            <h3 class="font-bold text-lg group-hover:text-wood transition-colors">{item.name}</h3>
            <span class="text-wood font-bold">{item.price}</span>
          </div>
          <p class="text-sm text-gray-warm">{item.desc}</p>
          <div class="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
            <span class="text-xs text-gray-warm">Hot / Cold available</span>
            <span class="w-8 h-8 bg-wood/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowRight size={16} class="text-wood" />
            </span>
          </div>
        </div>
      {/each}
    </div>
    
    <div class="text-center mt-12">
      <a href="javascript:void(0)" class="inline-flex items-center gap-2 text-wood font-medium hover:gap-3 transition-all">
        View Full Menu
        <ArrowRight size={18} />
      </a>
    </div>
  </div>
</section>

<!-- Gallery Section -->
<section id="gallery" class="py-24 bg-charcoal text-white">
  <div class="max-w-7xl mx-auto px-6">
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
      <div>
        <div class="inline-flex items-center gap-2 text-wood mb-4">
          <span class="w-8 h-px bg-wood"></span>
          Gallery
        </div>
        <h2 class="text-4xl md:text-5xl font-bold">Our Space</h2>
      </div>
      <p class="text-gray-400 max-w-md">
        A cozy sanctuary in the heart of Kota Lama. Perfect for work, catch-ups, or simply savoring the moment.
      </p>
    </div>
    
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      {#each galleryImages as img, i}
        <div class="aspect-square rounded-2xl overflow-hidden group {i % 3 === 0 ? 'md:row-span-2' : ''}">
          <img 
            src={img} 
            alt="Gallery {i + 1}"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Location Section -->
<section id="location" class="py-24 bg-white">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid lg:grid-cols-2 gap-16">
      <div class="space-y-8">
        <div>
          <div class="inline-flex items-center gap-2 text-wood font-medium mb-4">
            <span class="w-8 h-px bg-wood"></span>
            Visit Us
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-6">Find Your Way</h2>
        </div>
        
        <div class="space-y-6">
          <div class="flex items-start gap-4 p-5 bg-cream rounded-2xl">
            <div class="w-12 h-12 bg-wood/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPin size={24} class="text-wood" />
            </div>
            <div>
              <div class="font-semibold mb-1">Address</div>
              <p class="text-gray-warm">Jl. Kepodang No.64, Kota Lama<br/>Purwodinatan, Semarang Tengah<br/>Semarang, Jawa Tengah 50137</p>
            </div>
          </div>
          
          <div class="flex items-start gap-4 p-5 bg-cream rounded-2xl">
            <div class="w-12 h-12 bg-wood/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Clock size={24} class="text-wood" />
            </div>
            <div>
              <div class="font-semibold mb-1">Opening Hours</div>
              <p class="text-gray-warm">Mon - Fri: 07:00 - 22:00<br/>Sat - Sun: 08:00 - 23:00</p>
            </div>
          </div>
          
          <div class="flex items-start gap-4 p-5 bg-cream rounded-2xl">
            <div class="w-12 h-12 bg-wood/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Phone size={24} class="text-wood" />
            </div>
            <div>
              <div class="font-semibold mb-1">Contact</div>
              <p class="text-gray-warm">+62 812 3456 7890<br/>@kopihuis_id</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="relative">
        <div class="aspect-auto h-[500px] bg-cream rounded-3xl overflow-hidden">
          <iframe 
            title="Location map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2!2d110.42!3d-6.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTgnMDAuMCJTIDExMMKwMjUnMjEuMCJF!5e0!3m2!1sen!2sid!4v1234567890"
            width="100%" 
            height="100%" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy"
            class="rounded-3xl"
          ></iframe>
        </div>
        <a 
          href="https://maps.app.goo.gl/siU6ryuy4AB1JgGV7"
          target="_blank"
          rel="noopener"
          class="absolute bottom-6 right-6 inline-flex items-center gap-2 px-5 py-3 bg-wood text-white font-medium rounded-full shadow-lg hover:bg-wood-dark transition-all hover:scale-105"
        >
          <MapPin size={18} />
          Open in Maps
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Footer -->
<footer class="py-16 bg-charcoal text-white">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid md:grid-cols-4 gap-12 mb-12">
      <div class="md:col-span-2">
        <div class="flex items-center gap-2 mb-4">
          <Coffee size={28} class="text-wood" />
          <span class="text-xl font-bold">Kopihuis</span>
        </div>
        <p class="text-gray-400 max-w-sm mb-6">
          Artisan coffee in the heart of Kota Lama, Semarang. 
          Join us for an experience beyond just a cup of coffee.
        </p>
        <div class="flex gap-4">
          <a href="javascript:void(0)" class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-wood transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="javascript:void(0)" class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-wood transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
          </a>
          <a href="javascript:void(0)" class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-wood transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
      
      <div>
        <div class="font-semibold mb-4">Quick Links</div>
        <ul class="space-y-3 text-gray-400">
          <li><a href="#about" class="hover:text-wood transition-colors">About Us</a></li>
          <li><a href="#menu" class="hover:text-wood transition-colors">Menu</a></li>
          <li><a href="#gallery" class="hover:text-wood transition-colors">Gallery</a></li>
          <li><a href="javascript:void(0)" class="hover:text-wood transition-colors">Contact</a></li>
        </ul>
      </div>
      
      <div>
        <div class="font-semibold mb-4">Legal</div>
        <ul class="space-y-3 text-gray-400">
          <li><a href="javascript:void(0)" class="hover:text-wood transition-colors">Privacy Policy</a></li>
          <li><a href="javascript:void(0)" class="hover:text-wood transition-colors">Terms of Service</a></li>
          <li><a href="javascript:void(0)" class="hover:text-wood transition-colors">FAQ</a></li>
        </ul>
      </div>
    </div>
    
    <div class="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
      <p>&copy; 2025 Kopihuis. All rights reserved. Made with love in Semarang.</p>
    </div>
  </div>
</footer>

<style>
  @keyframes slide-up {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes fade-in {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
  
  @keyframes card-appear {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .animate-slide-up { animation: slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  .animate-fade-in { animation: fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  .animate-card-appear { animation: card-appear 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
</style>