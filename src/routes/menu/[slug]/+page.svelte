<script lang="ts">
	import { page } from '$app/stores';
	import { ArrowLeft, Coffee, Leaf, Flame, Star, Clock, Thermometer } from 'lucide-svelte';
	
	let { data } = $props();
	let { item, menuItems } = data;
	
	// Get related items (same tags, max 3)
	let relatedItems = menuItems
		.filter((m: any) => m.name !== item.name && m.tags?.some((t: string) => item.tags?.includes(t)))
		.slice(0, 3);
</script>

<svelte:head>
	<title>{item.name} - Kopihuis Menu</title>
</svelte:head>

<!-- Navigation -->
<nav class="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md shadow-sm">
	<div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
		<a href="/" class="flex items-center gap-2 group">
			<Coffee size={28} class="text-wood transition-transform group-hover:rotate-12" />
			<span class="text-xl font-bold tracking-tight">Kopihuis</span>
		</a>
		<a href="/#menu" class="flex items-center gap-2 text-sm font-medium hover:text-wood transition-colors">
			<ArrowLeft size={18} />
			Back to Menu
		</a>
	</div>
</nav>

<main class="pt-24 pb-16 bg-cream min-h-screen">
	<div class="max-w-6xl mx-auto px-6">
		<!-- Back Link (mobile) -->
		<a href="/#menu" class="md:hidden inline-flex items-center gap-2 text-gray-warm mb-6">
			<ArrowLeft size={18} />
			Back to Menu
		</a>

		<div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
			<!-- Image -->
			<div class="relative">
				<div class="aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
					<img 
						src={item.image} 
						alt={item.name}
						class="w-full h-full object-cover"
					/>
				</div>
				{#if item.popular}
					<div class="absolute top-4 left-4 md:top-6 md:left-6 px-3 py-1.5 md:px-4 md:py-2 bg-wood text-white font-medium rounded-full flex items-center gap-2 shadow-lg">
						<Star size={14} fill="currentColor" />
						<span class="text-xs md:text-sm">Popular</span>
					</div>
				{/if}
			</div>

			<!-- Info -->
			<div class="space-y-5 lg:space-y-6">
				<div>
					<div class="flex flex-wrap gap-2 mb-3">
						{#each item.tags || [] as tag}
							<span class="px-3 py-1 bg-wood/10 text-wood text-xs md:text-sm font-medium rounded-full">
								{tag}
							</span>
						{/each}
					</div>
					<h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{item.name}</h1>
					<p class="text-2xl md:text-3xl font-bold text-wood">{item.price}</p>
				</div>

				<p class="text-gray-warm text-base md:text-lg leading-relaxed">
					{item.fullDesc}
				</p>

				<!-- Nutrition Info -->
				<div class="grid grid-cols-3 gap-3 md:gap-4 py-4 md:py-5 border-y border-gray-200/50">
					<div class="text-center p-3 bg-white rounded-xl">
						<Flame size={20} class="text-wood mx-auto mb-1" />
						<div class="text-lg md:text-xl font-bold">{item.calories}</div>
						<div class="text-[10px] md:text-xs text-gray-warm">Calories</div>
					</div>
					<div class="text-center p-3 bg-white rounded-xl">
						<Leaf size={20} class="text-green mx-auto mb-1" />
						<div class="text-lg md:text-xl font-bold">100%</div>
						<div class="text-[10px] md:text-xs text-gray-warm">Arabica</div>
					</div>
					<div class="text-center p-3 bg-white rounded-xl">
						<Coffee size={20} class="text-wood mx-auto mb-1" />
						<div class="text-lg md:text-xl font-bold">Fresh</div>
						<div class="text-[10px] md:text-xs text-gray-warm">Daily Brew</div>
					</div>
				</div>

				<!-- Options -->
				<div class="space-y-3">
					<div class="flex items-center gap-3 p-3 bg-white rounded-xl">
						<Thermometer size={20} class="text-wood" />
						<span class="text-sm font-medium">Temperature Options</span>
					</div>
					<div class="flex gap-2">
						<button class="flex-1 py-3 bg-charcoal text-white font-medium rounded-xl hover:bg-wood-dark transition-colors text-sm">
							Hot ☕
						</button>
						<button class="flex-1 py-3 bg-white text-charcoal font-medium rounded-xl hover:bg-cream transition-colors border border-gray-200 text-sm">
							Cold 🧊
						</button>
					</div>
				</div>

				<!-- Order Button -->
				<button class="w-full py-4 bg-charcoal text-white font-semibold rounded-xl md:rounded-2xl hover:bg-wood-dark transition-all hover:scale-[1.01] active:scale-[0.99] text-base md:text-lg">
					Order Now — {item.price}
				</button>

				<div class="flex items-center justify-center gap-4 text-xs md:text-sm text-gray-warm">
					<span class="flex items-center gap-1">
						<Clock size={14} />
						5-10 min
					</span>
					<span>•</span>
					<span>Available for dine-in & take away</span>
				</div>
			</div>
		</div>

		<!-- Related Items -->
		{#if relatedItems.length > 0}
			<div class="mt-16 md:mt-20">
				<h2 class="text-2xl md:text-3xl font-bold mb-6 md:mb-8">You Might Also Like</h2>
				<div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
					{#each relatedItems as related}
						<a 
							href="/menu/{related.name.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}"
							class="group bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-0.5"
						>
							<div class="aspect-[4/3] overflow-hidden">
								<img 
									src={related.image} 
									alt={related.name}
									class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								/>
							</div>
							<div class="p-4 md:p-5">
								<h3 class="font-bold text-base md:text-lg mb-1 group-hover:text-wood transition-colors">{related.name}</h3>
								<p class="text-xs md:text-sm text-gray-warm mb-2">{related.desc}</p>
								<span class="text-wood font-bold text-sm md:text-base">{related.price}</span>
							</div>
						</a>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</main>