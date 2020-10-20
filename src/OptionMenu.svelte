<script>
	import Pokemonster from './Pokemonster.svelte';
	let pokemons = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander',
                    'charmeleon', 'charizard', 'squirtle', 'wartortle',
					 'blastoise', 'caterpie', 'metapod', 'butterfree',
					 'weedle', 'kakuna', 'beedrill', 'pidgey',
					 'pidgeotto', 'pidgeot', 'rattata', 'raticate',
					 'spearow', 'fearow', 'ekans', 'arbok', 'pikachu',
					 'raichu', 'sandshrew', 'sandslash', 'nidoran-f',
					 'nidorina', 'nidoqueen', 'nidoran-m', 'nidorino',
					 'nidoking', 'clefairy', 'clefable', 'vulpix',
					 'ninetales', 'jigglypuff', 'wigglytuff', 'zubat',
					 'golbat', 'oddish', 'gloom', 'vileplume', 'paras',
					 'parasect', 'venonat', 'venomoth', 'diglett',
					 'dugtrio', 'meowth', 'persian', 'psyduck', 'golduck',
					 'mankey', 'primeape', 'growlithe', 'arcanine',
					 'poliwag', 'poliwhirl', 'poliwrath', 'abra',
					 'kadabra', 'alakazam', 'machop', 'machoke',
					 'machamp', 'bellsprout', 'weepinbell', 'victreebel',
					 'tentacool', 'tentacruel', 'geodude', 'graveler',
					 'golem', 'ponyta', 'rapidash', 'slowpoke', 'slowbro',
					 'magnemite', 'magneton', 'farfetchd', 'doduo',
					 'dodrio', 'seel', 'dewgong', 'grimer', 'muk',
					 'shellder', 'cloyster', 'gastly', 'haunter',
					 'gengar', 'onix', 'drowzee', 'hypno', 'krabby',
					 'kingler', 'voltorb', 'electrode', 'exeggcute',
					 'exeggutor', 'cubone', 'marowak', 'hitmonlee',
					 'hitmonchan', 'lickitung', 'koffing', 'weezing',
					 'rhyhorn', 'rhydon', 'chansey', 'tangela',
					 'kangaskhan', 'horsea', 'seadra', 'goldeen',
					 'seaking', 'staryu', 'starmie', 'mr-mime',
					 'scyther', 'jynx', 'electabuzz', 'magmar', 'pinsir',
					 'tauros', 'magikarp', 'gyarados', 'lapras', 'ditto',
					 'eevee', 'vaporeon', 'jolteon', 'flareon', 'porygon',
					 'omanyte', 'omastar', 'kabuto', 'kabutops',
					 'aerodactyl', 'snorlax', 'articuno', 'zapdos',
					 'moltres', 'dratini', 'dragonair', 'dragonite',
					 'mewtwo', 'mew'];
					 
	let selected = 'bulbasaur';
</script>

<main>
	<!-- create select element and fill with pokemons -->
	<select bind:value={selected}>
		{#each pokemons as pokemon}
		  <option value={pokemon}>
			{pokemon}
		  </option>
		{/each}
	</select>
	
	<!-- pass the selected value to Pokemonster -->
	<Pokemonster selected={selected}/>
	<h1>{selected}</h1>
</main>