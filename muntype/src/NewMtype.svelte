<script>
    let name ="";
    let type = ""

    const symbols = "abcdefghijklmnopqrstuvwxyz0123456789".split('');
    const base    = symbols.length;

    function mtype(name) {
        let val    = 0;
        let offset = 0;
        let i;

        for (i = 0; i < name.length; i++) {
            let index = symbols.indexOf(name[i]);
            if (index < 0)
                continue;

            val    = base * val + index;
            offset = base * offset + 1;
        }

        return (val + offset);
    }

    function muntype(type) {
        let offset = 0;
        let offsetn = base*offset + 1;
        let len = 0;

        while (offsetn <= type) {
            len++;
            offset = offsetn;
            offsetn = base*offsetn + 1;
        }

        let name = [];

        type -= offset;
        while (len >= 0) {
            len--;
            name[len] = symbols[type%base];
            type = Math.floor(type/base); 
        }
        return name.join("");
    }

	function setBothFromName(value) {
        name = value;
        type = mtype(name);
	}

	function setBothFromType(value) {
        type = +value;
        name = muntype(type);
	}


</script>

<input placeholder="name" value={name} on:input="{e => setBothFromName(e.target.value)}" type=string> 
<input placeholder="type" value={type} on:input="{e => setBothFromType(e.target.value)}" type=number>

<style>
	input {
		width: 10em;
	}
</style>

