export const prerender = true;

import { error } from '@sveltejs/kit';

export const load = ({ params }) => {
	const menuItems: Record<string, any> = {
		'espresso': {
			name: 'Espresso',
			price: '18k',
			desc: 'Bold single shot',
			fullDesc: 'A classic single shot of our premium espresso, roasted to perfection. Served with a glass of water to cleanse your palate.',
			image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&h=600&fit=crop&q=80',
			popular: false,
			tags: ['Hot', 'Espresso', 'Coffee'],
			calories: 5
		},
		'americano': {
			name: 'Americano',
			price: '22k',
			desc: 'Espresso + water',
			fullDesc: 'Espresso diluted with hot water for a smoother, milder taste. The perfect balance of flavor and strength.',
			image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?w=800&h=600&fit=crop&q=80',
			popular: false,
			tags: ['Hot', 'Espresso', 'Coffee'],
			calories: 15
		},
		'latte': {
			name: 'Latte',
			price: '26k',
			desc: 'Espresso + steamed milk',
			fullDesc: 'Smooth espresso with steamed milk and a light layer of foam. Creamy, balanced, and absolutely delicious.',
			image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=800&h=600&fit=crop&q=80',
			popular: true,
			tags: ['Hot', 'Milk-based', 'Coffee'],
			calories: 190
		},
		'cappuccino': {
			name: 'Cappuccino',
			price: '26k',
			desc: 'Espresso, milk, foam',
			fullDesc: 'A perfect trio of espresso, steamed milk, and thick foam. Italian classic done right.',
			image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&h=600&fit=crop&q=80',
			popular: false,
			tags: ['Hot', 'Milk-based', 'Coffee'],
			calories: 120
		},
		'flat-white': {
			name: 'Flat White',
			price: '28k',
			desc: 'Velvet microfoam',
			fullDesc: 'Double shot espresso with velvety microfoam. Slightly stronger than a latte with a smoother texture.',
			image: 'https://images.unsplash.com/photo-1587080413959-06b859f7f50a?w=800&h=600&fit=crop&q=80',
			popular: false,
			tags: ['Hot', 'Milk-based', 'Coffee'],
			calories: 150
		},
		'cold-brew': {
			name: 'Cold Brew',
			price: '30k',
			desc: '18-hour steeped',
			fullDesc: 'Slow-steeped for 18 hours for a smooth, less acidic coffee. Served cold over ice for ultimate refreshment.',
			image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=800&h=600&fit=crop&q=80',
			popular: true,
			tags: ['Cold', 'Brew', 'Coffee'],
			calories: 5
		},
		'v60-pour-over': {
			name: 'V60 Pour Over',
			price: '28k',
			desc: 'Hand-brewed precision',
			fullDesc: 'Hand-poured V60 for a clean, nuanced cup that highlights the beans origin. For the purist.',
			image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop&q=80',
			popular: false,
			tags: ['Hot', 'Brew', 'Coffee'],
			calories: 10
		},
		'matcha-latte': {
			name: 'Matcha Latte',
			price: '32k',
			desc: 'Japanese matcha',
			fullDesc: 'Premium ceremonial grade matcha whisked with steamed milk. Earthy, creamy, and wonderfully balanced.',
			image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=800&h=600&fit=crop&q=80',
			popular: false,
			tags: ['Hot', 'Matcha', 'Tea'],
			calories: 180
		},
		'affogato': {
			name: 'Affogato',
			price: '35k',
			desc: 'Espresso + gelato',
			fullDesc: 'Hot espresso poured over vanilla gelato. The perfect mix of hot and cold, bitter and sweet.',
			image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=800&h=600&fit=crop&q=80',
			popular: false,
			tags: ['Hot', 'Dessert', 'Sweet'],
			calories: 220
		},
		'aeropress': {
			name: 'AeroPress',
			price: '30k',
			desc: 'Smooth & clean',
			fullDesc: 'Brewed with AeroPress for a remarkably clean, smooth cup. Low acidity with full body.',
			image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&h=600&fit=crop&q=80',
			popular: false,
			tags: ['Hot', 'Brew', 'Coffee'],
			calories: 10
		},
		'mocha': {
			name: 'Mocha',
			price: '32k',
			desc: 'Espresso + chocolate',
			fullDesc: 'A delightful blend of espresso, rich chocolate, and steamed milk. Perfect for chocolate lovers.',
			image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop&q=80',
			popular: false,
			tags: ['Hot', 'Chocolate', 'Sweet'],
			calories: 280
		},
		'kopi-susu': {
			name: 'Kopi Susu',
			price: '24k',
			desc: 'Classic Indonesian style',
			fullDesc: 'Our take on the classic Indonesian coffee with sweetened condensed milk. Rich, sweet, and comforting.',
			image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=600&fit=crop&q=80',
			popular: true,
			tags: ['Hot', 'Local', 'Sweet'],
			calories: 200
		},
		'teh-tarik': {
			name: 'Teh Tarik',
			price: '20k',
			desc: 'Pulled milk tea',
			fullDesc: 'Fragrant Teh Tarik pulled between cups to create a frothy, creamy texture. Malaysian-style milk tea.',
			image: 'https://images.unsplash.com/photo-1556679343-c7306c1972bc?w=800&h=600&fit=crop&q=80',
			popular: false,
			tags: ['Hot', 'Tea', 'Local'],
			calories: 150
		},
		'croffle': {
			name: 'Croffle',
			price: '25k',
			desc: 'Croissant + waffle',
			fullDesc: 'Crispy croissant baked into waffle form, served warm. Sweet, flaky, and utterly moreish.',
			image: 'https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=800&h=600&fit=crop&q=80',
			popular: false,
			tags: ['Food', 'Pastry', 'Sweet'],
			calories: 320
		},
		'banana-bread': {
			name: 'Banana Bread',
			price: '22k',
			desc: 'House-baked',
			fullDesc: 'House-baked banana bread with walnuts. Moist, sweet, and perfect with your coffee.',
			image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=800&h=600&fit=crop&q=80',
			popular: false,
			tags: ['Food', 'Baked', 'Sweet'],
			calories: 280
		},
		'croissant': {
			name: 'Croissant',
			price: '20k',
			desc: 'Buttery flaky pastry',
			fullDesc: 'Buttery, flaky croissant baked fresh daily. Light, crispy, and perfect with any drink.',
			image: 'https://images.unsplash.com/photo-1623334044303-241021148842?w=800&h=600&fit=crop&q=80',
			popular: false,
			tags: ['Food', 'Pastry'],
			calories: 250
		}
	};

	const item = menuItems[params.slug];
	if (!item) throw error(404, 'Menu item not found');

	const menuItemsArray = Object.entries(menuItems).map(([slug, data]) => ({ slug: params.slug, ...data }));
	return { item, menuItems: menuItemsArray };
};

export const entries = () => {
	return [
		{ slug: 'espresso' },
		{ slug: 'americano' },
		{ slug: 'latte' },
		{ slug: 'cappuccino' },
		{ slug: 'flat-white' },
		{ slug: 'cold-brew' },
		{ slug: 'v60-pour-over' },
		{ slug: 'matcha-latte' },
		{ slug: 'affogato' },
		{ slug: 'aeropress' },
		{ slug: 'mocha' },
		{ slug: 'kopi-susu' },
		{ slug: 'teh-tarik' },
		{ slug: 'croffle' },
		{ slug: 'banana-bread' },
		{ slug: 'croissant' }
	];
};