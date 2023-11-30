<template>
	<div class="lg:pt-32 lg:pb-36 bg-gray-900 p-4">
		<div
			class="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between"
		>
			<div
				class="text-white max-w-2xl lg:w-2/3 px-5 lg:text-3xl sm:text-lg md:text-xl text-center lg:text-left mb-8 lg:mb-0"
			>
				<div>
					I'm a full-stack developer, poised and ready to embrace fresh
					challenges in the ever-evolving landscape of coding creativity.
				</div>
				<button
					@click="scrollMeTo('about')"
					class="mt-4 lg:mt-10 bg-transparent hover:bg-purple-900 text-white-700 font-semibold hover:text-white py-2 px-4 border border-purple-900 hover:border-transparent rounded animated"
				>
					Contact me
				</button>
			</div>

			<img
				class="w-full lg:w-1/3 h-auto sm:w-2/3 lg:h-1/3"
				src="../assets/Dave.png"
				alt=""
			/>
		</div>
	</div>
	<div ref="about">
		<AboutMe></AboutMe>
	</div>
	<AboutMeFipu></AboutMeFipu>
	<div ref="projects"></div>
	<Card />
</template>

<script>
	import AboutMe from "../components/AboutMe.vue";
	import AboutMeFipu from "../components/AboutMeFipu.vue";
	import Card from "../components/Card.vue";
	export default {
		name: "home-view",
		methods: {
			scrollMeTo(refName) {
				var element = this.$refs[refName];
				var top = element.offsetTop;

				window.scrollTo({
					top: top,
					behavior: "smooth",
				});
			},
		},
		components: {
			AboutMe,
			AboutMeFipu,
			Card,
		},
	};
</script>

<style>
	.animated:hover {
		animation-name: shake;
		animation-duration: 0.5s;
		animation-iteration-count: infinite;
		cursor: pointer;
	}
	@keyframes shake {
		0% {
			transform: translate(1px, 1px) rotate(0deg);
		}
		10% {
			transform: translate(-1px, -2px) rotate(-1deg);
		}
		20% {
			transform: translate(-3px, 0px) rotate(1deg);
		}
		30% {
			transform: translate(3px, 2px) rotate(0deg);
		}
		40% {
			transform: translate(1px, -1px) rotate(1deg);
		}
		50% {
			transform: translate(-1px, 2px) rotate(-1deg);
		}
		60% {
			transform: translate(-3px, 1px) rotate(0deg);
		}
		70% {
			transform: translate(3px, 1px) rotate(-1deg);
		}
		80% {
			transform: translate(-1px, -1px) rotate(1deg);
		}
		90% {
			transform: translate(1px, 2px) rotate(0deg);
		}
		100% {
			transform: translate(1px, -2px) rotate(-1deg);
		}
	}
</style>
