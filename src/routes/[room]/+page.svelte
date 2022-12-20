<script>
	import { page } from '$app/stores';

	const name = $page.params.room;
	const roomdata = $page.data;
</script>

<h1>Coming someday</h1>
{#if roomdata.success === false}
	Room '{name}' {roomdata.reason}, might i suggest adding one?
	{roomdata.reason}
{:else}
	Room '{name}' expires at: {roomdata.expires}
{/if}
