<script>
	import { page } from '$app/stores';

	const name = $page.params.room;
	const roomdata = $page.data;

	$: pageTitle = (() => {
		if (roomdata.success === false) {
			return 'Creating new room';
		}

		return roomdata.room + ' snacks';
	})();
</script>

<h1>Coming someday</h1>
<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

{#if roomdata.success === false}
	Room '{name}' {roomdata.reason}, might i suggest adding it?

	<form method="POST" action="?/createRoom">
		<input name="name" class="text-black" value={name} placeholder="Room name" />
		<button>Submit</button>
	</form>
{:else}
	Welcome to room {name}.<br />
{/if}
