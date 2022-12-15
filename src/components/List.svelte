<script>
	import { ShoppingCart } from 'lucide-svelte';
	export let filteredOptions;
</script>

<div class="flex w-full h-[75vh] justify-center">
	<div class="flex flex-col w-9/12 inset-1 bg-slate-600 -shadow-xl">
		<div class="flex w-full justify-center bg-nord-1 p-2 bold">
			<div class="w-1/6">Rating</div>
			<div class="w-2/6">Naam</div>
			<div class="w-2/6">Bijpassende sauzen</div>
			<div class="w-1/6">&nbsp;</div>
		</div>

		<ul tabindex="-1" class="scroll-py-3 overflow-y-scroll p-3">
			{#each filteredOptions as snack}
				<li class="flex p-3 select-none rounded-xl hover:bg-nord-4/40">
					<div class="w-1/6">{snack.rating * 10}</div>
					<div class="w-2/6">
						{snack.name}
						<!-- Tags -->
						{#each snack.tags as tag}
							<span class="bg-{tag.color} rounded-sm p-1 text-xs">{tag.label}</span> &nbsp;
						{/each}
					</div>
					<div class="w-2/6">
						{#each snack.sauces as sauce}
							<a href={sauce.url} tabindex="-1" class="hover:text-teal-500" target="_BLANK"
								>{sauce.label}</a
							>,&nbsp;
						{/each}
					</div>
					<div class="w-1/6">
						<a
							href={snack.url}
							tabindex="-1"
							target="_BLANK"
							class="flex rounded-sm p-1 hover:text-teal-500"
						>
							Bestel&nbsp;<ShoppingCart class="w-4" />
						</a>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</div>
