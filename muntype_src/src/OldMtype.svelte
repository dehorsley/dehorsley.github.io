<script>
    let name ="";
    let type = ""

    const symbols = "abcdefghijklmnopqrstuvwxyz0123456789".split('');

    function mtype(name) {
        name = name.toLowerCase();
        let val = 0;
        for (let i=0;i<name.length;i++) {
            let index = symbols.indexOf(name[i]);
            if(index < 0) {
                continue;
            }
            val += index<<(6*i);
        }
        return val;
    }

    function muntype(type) {
        let i = 0;
        let name = [];
        let base =(1<<6);
        while (type > 0) {
            if(type%base >= symbols.length) {
                console.log('error');
            } else {
                name.push(symbols[type%base]);
            }
            type = Math.floor(type/base); 
        }
        return (name.reverse().join(''));
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

