<script>
    import NewMtype from "./NewMtype.svelte"
    import OldMtype from "./OldMtype.svelte"
</script>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
    .warning {
        font-size:0.75em;
        font-weight: 300;
        margin-top: -1.8em;
        margin-bottom: 1.8em;

    }
</style>

<main>
	<h1>m(un)type</h1>
    <div><h2>New Format</h2>
        <NewMtype/>
    </div>
    <div><h2>Old Format</h2>
        <div class="warning">Warning: not unique</div>
        <OldMtype/>
    </div>

</main>

