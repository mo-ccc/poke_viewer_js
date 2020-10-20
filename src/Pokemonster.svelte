<script>
	import Psprite from './Psprite.svelte';
	import {c_abilities} from './store.js';
	import {c_sprite} from './store.js';
	import {c_stats} from './store.js';
	import {c_types} from './store.js';
	export let selected = 'bulbasaur';
	
	
	
	$: pokelink = 'https://pokeapi.co/api/v2/pokemon/' + selected;
	
	$: {
		update(pokelink);
	}
	
	async function update(plink) {
		let l = await fetch(plink);
		let j = await l.json();
		
		c_sprite.set(j.sprites.front_default);
		
		let types = [];
		for(const i in j.types) {
			types.push(j.types[i].type.name);
		}
		c_types.set(types);
		
		let abilities = [];
		for (const i in j.abilities) {
			abilities.push(j.abilities[i].ability.name);
		}
		c_abilities.set(abilities);
		
		let stats = {};
		for (const i in j.stats) {
			const s_name = j.stats[i].stat.name;
			stats[s_name] = j.stats[i].base_stat;
		}
		c_stats.set(stats);

	}
</script>