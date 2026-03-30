export const prerender = true;

import { error } from '@sveltejs/kit';

export const load = ({ params }) => {
	const menuItems: Record<string, any> = {
		'espresso-single': {
			name: 'Espresso Single',
			price: '18k',
			desc: 'Single shot espresso',
			fullDesc: 'A classic single shot of our premium espresso, roasted to perfection. Served with a glass of water to cleanse your palate.',
			image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=600&h=400&fit=crop',
			popular: false,
			tags: ['Hot', 'Espresso'],
			calories: 5
		},
		'espresso-double': {
			name: 'Espresso Double',
			price: '22k',
			desc: 'Double shot espresso',
			fullDesc: 'Double shot of our signature espresso blend. Perfect for those who need an extra kick to start their day.',
			image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=600&h=400&fit=crop',
			popular: false,
			tags: ['Hot', 'Espresso'],
			calories: 10
		},
		'americano': {
			name: 'Americano',
			price: '25k',
			desc: 'Espresso + hot water',
			fullDesc: 'Espresso diluted with hot water for a smoother, milder taste. The perfect balance of flavor and strength.',
			image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&h=400&fit=crop',
			popular: false,
			tags: ['Hot', 'Espresso'],
			calories: 15
		},
		'latte': {
			name: 'Latte',
			price: '28k',
			desc: 'Espresso + steamed milk',
			fullDesc: 'Smooth espresso with steamed milk and a light layer of foam. Creamy, balanced, and absolutely delicious.',
			image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=600&h=400&fit=crop',
			popular: true,
			tags: ['Hot', 'Milk-based'],
			calories: 190
		},
		'cappuccino': {
			name: 'Cappuccino',
			price: '28k',
			desc: 'Equal parts espresso, milk, foam',
			fullDesc: 'A perfect trio of espresso, steamed milk, and thick foam. Italian classic done right.',
			image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&h=400&fit=crop',
			popular: false,
			tags: ['Hot', 'Milk-based'],
			calories: 120
		},
		'flat-white': {
			name: 'Flat White',
			price: '28k',
			desc: 'Velvet microfoam',
			fullDesc: 'Double shot espresso with velvety microfoam. Slightly stronger than a latte with a smoother texture.',
			image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=600&h=400&fit=crop',
			popular: false,
			tags: ['Hot', 'Milk-based'],
			calories: 150
		},
		'cold-brew': {
			name: 'Cold Brew',
			price: '30k',
			desc: '18-hour steep',
			fullDesc: 'Slow-steeped for 18 hours for a smooth, less acidic coffee. Served cold over ice for ultimate refreshment.',
			image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=400&fit=crop',
			popular: true,
			tags: ['Cold', 'Brew'],
			calories: 5
		},
		'matcha-latte': {
			name: 'Matcha Latte',
			price: '32k',
			desc: 'Premium Japanese matcha',
			fullDesc: 'Premium ceremonial grade matcha whisked with steamed milk. Earthy, creamy, and wonderfully balanced.',
			image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600&h=400&fit=crop',
			popular: false,
			tags: ['Hot', 'Matcha'],
			calories: 180
		},
		'mocha': {
			name: 'Mocha',
			price: '32k',
			desc: 'Espresso + chocolate + milk',
			fullDesc: 'A delightful blend of espresso, rich chocolate, and steamed milk. Perfect for chocolate lovers.',
			image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=600&h=400&fit=crop',
			popular: false,
			tags: ['Hot', 'Chocolate'],
			calories: 280
		},
		'caramel-macchiato': {
			name: 'Caramel Macchiato',
			price: '35k',
			desc: 'Vanilla + espresso + caramel',
			fullDesc: 'Vanilla-flavored milk espresso with caramel drizzle. Sweet, creamy, and indulgent.',
			image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=600&h=400&fit=crop',
			popular: false,
			tags: ['Hot', 'Sweet'],
			calories: 250
		}
	};

	const item = menuItems[params.slug];
	if (!item) throw error(404, 'Menu item not found');

	return { item, menuItems };
};

export const entries = () => {
	return [
		{ slug: 'espresso-single' },
		{ slug: 'espresso-double' },
		{ slug: 'americano' },
		{ slug: 'latte' },
		{ slug: 'cappuccino' },
		{ slug: 'flat-white' },
		{ slug: 'cold-brew' },
		{ slug: 'matcha-latte' },
		{ slug: 'mocha' },
		{ slug: 'caramel-macchiato' }
	];
};