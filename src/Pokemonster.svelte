<script>
	export let selected = undefined;
	$: pokelink = 'https://pokeapi.co/api/v2/pokemon/' + selected;
	
	$: {
		update(pokelink);
	}
	var c_sprite;
	var c_types = [];
	var c_abilities = [];
	var c_stats = {'hp': 0, 'attack': 0, 'defense': 0, 'special-attack': 0, 'special-defense': 0, 'speed': 0};
	
	async function update(plink) {
		let l = await fetch(plink);
		let j = await l.json();
		c_sprite = j.sprites.front_default;
		c_types = [];
		c_abilities = [];
		c_stats = {};
		for(const i in j.types) {
			c_types.push(j.types[i].type.name);
		}
		
		for (const i in j.abilities) {
			c_abilities.push(j.abilities[i].ability.name);
		}
		
		for (const i in j.stats) {
			const s_name = j.stats[i].stat.name;
			c_stats[s_name] = j.stats[i].base_stat;
		}

	}
</script>

<main>
</main>