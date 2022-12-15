<script>
	import { Search } from 'lucide-svelte';
	export let search;
	export let activeFilters;

	function toggleFilter(name) {
		activeFilters.all = false;
		activeFilters[name] = !activeFilters[name];
		let anyActive = Object.values(activeFilters).some((item) => item);

		if (!anyActive) {
			activeFilters.all = true;
		}

		if (name === 'all') {
			activeFilters = { all: true };
		}
	}
</script>

<header class="bg-nord-0">
	<div class="px-2 mx-auto max-w-7xl sm:px-4 lg:divide-y lg:divide-nord-1 lg:px-8">
		<div class="relative flex h-16 justify-between">
			<div
				class=" z-0 flex flex-1 items-center justify-center relative px-2 sm:absolute sm:inset-0"
			>
				<div class="w-full sm:max-w-xs">
					<label for="search" class="sr-only">Search</label>
					<div class="relative">
						<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<!-- Heroicon name: mini/magnifying-glass -->
							<Search class="h-5 w-5 text-gray-400" />
						</div>
						<input
							bind:value={search}
							class="block w-full rounded-md border border-transparent bg-nord-2 py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:border-white focus:bg-nord-5 focus:text-gray-900 focus:placeholder-gray-500 focus:outline-none focus:ring-white sm:text-sm"
							placeholder="Search for snacko's"
							type="search"
						/>
					</div>
				</div>
			</div>
		</div>
		<nav class="hidden lg:flex lg:space-x-16 justify-center lg:py-2" aria-label="Global">
			<!-- Current: "bg-gray-900 text-nord-5", Default: "text-gray-300 hover:bg-nord-1 hover:text-nord-5" -->
			<button
				class="text-gray-300 cursor-pointer rounded-md py-2 px-3 inline-flex items-center text-sm font-medium"
				class:active={activeFilters.all}
				tabindex="-1"
				on:click={() => toggleFilter('all')}
			>
				All
			</button>

			<button
				class="text-gray-300  cursor-pointer hover:bg-nord-1 hover:text-nord-5 rounded-md py-2 px-3 inline-flex items-center text-sm font-medium"
				class:active={activeFilters.meat}
				tabindex="-1"
				on:click={() => toggleFilter('meat')}
			>
				Vlees
			</button>

			<button
				class="text-gray-300  cursor-pointer hover:bg-nord-1 hover:text-nord-5 rounded-md py-2 px-3 inline-flex items-center text-sm font-medium"
				class:active={activeFilters.vega}
				tabindex="-1"
				on:click={() => toggleFilter('vega')}
			>
				Vegatarisch
			</button>

			<button
				class="text-gray-300 cursor-pointer hover:bg-nord-1 hover:text-nord-5 rounded-md py-2 px-3 inline-flex items-center text-sm font-medium"
				class:active={activeFilters.vegan}
				tabindex="-1"
				on:click={() => toggleFilter('vegan')}
			>
				Veganistisch
			</button>
		</nav>
	</div>
</header>

<style lang="css">
	.active {
		@apply bg-gray-900 text-nord-5;
	}
</style>
