// Centralized data for the portfolio. Edit this file to update content.

export const personal = {
	name: 'Radhika Patel',
	email: 'patelradhika.me@gmail.com',
	github: 'https://github.com/patelradhi',
	linkedin: 'https://www.linkedin.com/in/patelradhi/',
};

export const skillCategories = [
	{ role: 'Languages', stack: 'JavaScript · TypeScript' },
	{ role: 'Frontend', stack: 'React · Tailwind' },
	{ role: 'Mobile', stack: 'React Native' },
	{ role: 'Backend', stack: 'Node.js · Express' },
	{ role: 'Database', stack: 'MongoDB · Postgres · Supabase' },
	{ role: 'Auth & Cache', stack: 'Clerk · Redis' },
	{ role: 'Tools', stack: 'Git · Figma · OpenAI API' },
];

export const skillsMarquee = [
	{ name: 'React', accent: true },
	{ name: 'TypeScript' },
	{ name: 'React Native' },
	{ name: 'Node.js', accent: true },
	{ name: 'Express' },
	{ name: 'MongoDB', accent: true },
	{ name: 'PostgreSQL' },
	{ name: 'Supabase' },
	{ name: 'Clerk', accent: true },
	{ name: 'Redis' },
	{ name: 'OpenAI API' },
	{ name: 'Tailwind CSS', accent: true },
	{ name: 'Figma' },
	{ name: 'Git' },
];

export const sketchRise = {
	name: 'SketchRise',
	tagline: 'Turn any 2D floor plan into a photorealistic 3D space in seconds — powered by AI.',
	github: 'https://github.com/patelradhi/sketch-rise',
	stats: [
		{ num: 'Solo', lbl: 'Built end-to-end' },
		{ num: '2', lbl: 'Platforms — Web & Mobile' },
		{ num: '<2s', lbl: 'Render Time' },
		{ num: 'AI', lbl: 'Powered Pipeline' },
	],
	flow: [
		{ img: '/images/sketchrise-input.png', step: 'Step 01', title: 'Draw or upload', alt: '2D floor plan input' },
		{
			img: '/images/sketchrise-upload.png',
			step: 'Step 02',
			title: 'Drop & process',
			alt: 'Upload your floor plan',
		},
		{
			img: '/images/sketchrise-output.png',
			step: 'Step 03',
			title: 'Get 3D render',
			alt: 'Photorealistic 3D output',
		},
	],
	techStack: ['TypeScript', 'React', 'React Native', 'Node.js', 'Express', 'MongoDB', 'Clerk', 'Redis'],
};

export const projects = [
	{
		title: 'AI Recipe Generator',
		type: 'AI · TypeScript',
		description:
			'A smart recipe generator that takes whatever ingredients you have on hand and returns step-by-step recipes you can actually cook. Built to solve the daily "what should I make for dinner?" question with an AI-powered suggestion engine.',
		link: 'https://github.com/patelradhi/ai-recipe-generator',
	},
	{
		title: 'HireLoop',
		type: 'Web App · JavaScript',
		description:
			'A full-stack job board and hiring platform that connects job seekers with recruiters. Includes role-based dashboards, application tracking, profile management, and a clean job-search experience for candidates.',
		link: 'https://github.com/patelradhi/HireLoop',
	},
	{
		title: 'Shopyy',
		type: 'E-commerce · JavaScript',
		description:
			'A complete e-commerce web app with product browsing, cart, checkout, and user accounts. Built end-to-end with a focus on a smooth shopping experience — from product discovery all the way to order confirmation.',
		link: 'https://github.com/patelradhi/Shopyy',
	},
	{
		title: 'Insta-Clone',
		type: 'Social · JavaScript',
		description:
			'A social media clone inspired by Instagram — featuring photo uploads, a personalized feed, likes, comments, and user profiles. A deep dive into building social-network-style flows and image-heavy UX from scratch.',
		link: 'https://github.com/patelradhi/Insta-Clone',
	},
	{
		title: 'Blogger',
		type: 'Content Platform · JavaScript',
		description:
			'A blogging platform where users can write, publish, and manage their own posts. Includes a rich-text editor, author profiles, post categorization, and a clean reading experience focused on typography and content-first design.',
		link: 'https://github.com/patelradhi/Blogger',
		fullWidth: true,
	},
];
