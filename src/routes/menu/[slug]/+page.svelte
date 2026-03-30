<script lang="ts">
	import { page } from '$app/stores';
	import { ArrowLeft, Coffee, Leaf, Flame, Star } from 'lucide-svelte';
	
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

		<div class="grid lg:grid-cols-2 gap-12 items-start">
			<!-- Image -->
			<div class="relative">
				<div class="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
					<img 
						src={item.image} 
						alt={item.name}
						class="w-full h-full object-cover"
					/>
				</div>
				{#if item.popular}
					<div class="absolute top-6 left-6 px-4 py-2 bg-wood text-white font-medium rounded-full flex items-center gap-2">
						<Star size={16} fill="currentColor" />
						Popular Choice
					</div>
				{/if}
			</div>

			<!-- Info -->
			<div class="space-y-6">
				<div>
					<div class="flex flex-wrap gap-2 mb-3">
						{#each item.tags || [] as tag}
							<span class="px-3 py-1 bg-wood/10 text-wood text-sm font-medium rounded-full">
								{tag}
							</span>
						{/each}
					</div>
					<h1 class="text-4xl md:text-5xl font-bold mb-2">{item.name}</h1>
					<p class="text-2xl font-bold text-wood">{item.price}</p>
				</div>

				<p class="text-gray-warm text-lg leading-relaxed">
					{item.fullDesc}
				</p>

				<!-- Nutrition Info -->
				<div class="flex gap-6 py-4 border-y border-gray-200">
					<div class="flex items-center gap-2">
						<Flame size={20} class="text-wood" />
						<div>
							<div class="text-sm text-gray-warm">Calories</div>
							<div class="font-semibold">{item.calories}</div>
						</div>
					</div>
					<div class="flex items-center gap-2">
						<Leaf size={20} class="text-green" />
						<div>
							<div class="text-sm text-gray-warm">100%</div>
							<div class="font-semibold">Arabica</div>
						</div>
					</div>
					<div class="flex items-center gap-2">
						<Coffee size={20} class="text-wood" />
						<div>
							<div class="text-sm text-gray-warm">Fresh</div>
							<div class="font-semibold">Daily Brew</div>
						</div>
					</div>
				</div>

				<!-- Order Button -->
				<button class="w-full py-4 bg-charcoal text-white font-semibold rounded-2xl hover:bg-wood-dark transition-all hover:scale-[1.02] active:scale-[0.98]">
					Order Now - {item.price}
				</button>

				<p class="text-center text-sm text-gray-warm">
					Hot & Cold options available
				</p>
			</div>
		</div>

		<!-- Related Items -->
		{#if relatedItems.length > 0}
			<div class="mt-20">
				<h2 class="text-2xl font-bold mb-8">You Might Also Like</h2>
				<div class="grid md:grid-cols-3 gap-6">
					{#each relatedItems as related}
						<a href="/menu/{related.name.toLowerCase().replace(/ /g, '-')}" class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
							<div class="aspect-[4/3] overflow-hidden">
								<img 
									src={related.image} 
									alt={related.name}
									class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								/>
							</div>
							<div class="p-5">
								<h3 class="font-bold text-lg mb-1 group-hover:text-wood transition-colors">{related.name}</h3>
								<p class="text-sm text-gray-warm mb-2">{related.desc}</p>
								<span class="text-wood font-bold">{related.price}</span>
							</div>
						</a>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</main>