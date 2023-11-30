<template>
	<div class="bg-gray-900 p-4 pb-10">
		<div
			class="container mx-auto lg:flex lg:flex-wrap justify-center items-center lg:justify-start lg:order-first order-last"
		>
			<div class="p-2" v-for="p in projects" :key="p.title">
				<a
					:href="p.link"
					class="w-full lg:w-72 lg:h-48 block max-w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:-translate-y-0.8 hover:scale-105 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 sm:w-full sm:h-32"
				>
					<h5
						class="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
					>
						{{ p.title }}
					</h5>
					<p
						class="font-normal text-sm md:text-base text-gray-700 dark:text-gray-400"
					>
						{{ p.description }}
					</p>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			link: {
				type: String,
				required: true,
			},
			title: {
				type: String,
				required: true,
			},
			description: {
				type: String,
				required: true,
			},
		},
		data() {
			return {
				projects: [
					{
						title: "OpenBCI",
						description:
							"Classification on geometric shapes using EEG data. Machine learning project.",
						link: "https://github.com/David-Sajina/OpenBCI",
					},
					{
						title: "Gallery-CMS",
						description:
							"React.js project - Content Managment System for a hotel that owns a gallery",
						link: "https://github.com/David-Sajina/Galerija-CMS",
					},
					{
						title: "FuelPriceTracking",
						description:
							"Java android app project -  Application for tracking fuel prices",
						link: "https://github.com/David-Sajina/FuelPriceTracker",
					},
					{
						title: "FuelPrice API",
						description: "Backend that gets prices of fuel",
						link: "https://github.com/David-Sajina/Fuel-API",
					},
					{
						title: "Hand Gesture Recognition",
						description: "Machine Learning project",
						link: "https://github.com/David-Sajina/NMDU",
					},
					{
						title: "TicketMaster",
						description:
							"Vue.js project - A solution for all websites that need support ticketing system",
						link: "https://github.com/David-Sajina/TicketMaster",
					},
					{
						title: "TicketMaster-Backend",
						description: "Backend for TicketMaster (node.js).",
						link: "https://github.com/David-Sajina/TicketMaster-backend",
					},
					{
						title: "FIPU Restoran",
						description:
							"Vue.js project - A project of a restourant that has inbeded menu, orders, tables and staff administration",
						link: "https://github.com/David-Sajina/FIPURestoran",
					},
					{
						title: "Restoran",
						description: "Flask project - A project of a restaurant website",
						link: "https://github.com/David-Sajina/Restoran",
					},
					{
						title: "Personal page",
						description: "Vue + Vite + Tailwind project - personal page",
						link: "https://github.com/David-Sajina/david-sajina.github.io",
					},
				],
			};
		},
	};
</script>
