<script setup>
	import { RouterLink, RouterView } from "vue-router";
</script>

<template>
	<div>
		<div class="bg-gray-900">
			<nav
				class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center"
			>
				<div class="flex items-center justify-between">
					<router-link
						to="/"
						class="flex float-left text-xl font-bold text-gray-100 md:text-2xl hover:text-purple-300"
						style="font-family: cursive; float: left"
						>David Šajina
					</router-link>
					<div @click="showMenu = !showMenu" class="flex md:hidden">
						<button
							type="button"
							class="text-gray-100 hover:text-purple-200 focus:outline-none purple-300"
						>
							<svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
								<path
									fill-rule="evenodd"
									d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
								></path>
							</svg>
						</button>
					</div>
				</div>
				<ul
					:class="showMenu ? 'flex' : 'hidden'"
					class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
				>
					<li
						class="text-m font-bold text-gray-100 hover:text-purple-300 hover:-translate-y-0.3 hover:scale-125 duration-200"
					>
						<router-link to="/">Home </router-link>
					</li>
					<li
						class="text-m font-bold text-gray-100 hover:text-purple-300 hover:-translate-y-0.3 hover:scale-125 duration-200"
					>
						<router-link to="#about">
							<a @click="scrollToAbout('about')">About me</a></router-link
						>
					</li>
					<li
						class="text-m font-bold text-gray-100 hover:text-purple-300 hover:-translate-y-0.3 hover:scale-125 duration-200"
					>
						<router-link to="/"
							><a @click="scrollToAbout('projects')"> My projects</a>
						</router-link>
					</li>
					<li
						class="text-m font-bold text-gray-100 hover:text-purple-300 hover:-translate-y-0.3 hover:scale-125 duration-200 animated"
					>
						<router-link to="/">Contact me </router-link>
					</li>
				</ul>
			</nav>
		</div>
	</div>
	<HomeView ref="homeView"></HomeView>
</template>

<style scoped>
	.animated:hover {
		animation-name: shake;
		animation-duration: 1s;
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
<script>
	import HomeView from "./views/HomeView.vue";
	export default {
		components: { HomeView },
		methods: {
			scrollToAbout(x) {
				this.$refs.homeView.scrollMeTo(x);
			},
		},
		data() {
			return {
				showMenu: false,
			};
		},
	};
</script>
