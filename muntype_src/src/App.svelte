
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

    h3 {
        margin-top: 4em;
    }
    a {
        text-decoration: underline;
    }
    p {
        max-width: 65ch;
        margin:auto;
        text-align: justify;
    }

</style>

<script>
    import NewMtype from "./NewMtype.svelte"
    import OldMtype from "./OldMtype.svelte"

    import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';


    let visible = false;
</script>


<main>
	<h1>m(un)type</h1>
    <div><h2>New Format</h2>
        <NewMtype/>
    </div>
    <div><h2>Old Format</h2>
        <OldMtype/>
    </div>

    <h3><button on:click={(e) => {e.preventDefault(); visible = !visible}}>What is this?</button></h3>
    {#if visible}
	<p transition:slide="{{delay: 0, duration: 250, easing: quintOut }}">
        The scheduling messaging system in the <a
            href="https://github.com/nvi-inc/fs">VLBI Field System</a> uses a message
        type "<code>mtype</code>" to convert a human readable string into a
        number. In the current
        design, a hash function would be inconvenient as there is no easy way
        to avoid clashes and there are only 28 bits available so using large
        hash range is not an option. Instead we use an encoding of the strings
        matched by the regular expression <code>[a-z0-9]*</code>. The old
        format, pre v9.13, used an encoding which was not completely dense, and
        to free up a few more bits for flags, the new format was created. This
        new encoding is a bijection, rather than just an injection as the old type.
    </p>
    {/if}


</main>

