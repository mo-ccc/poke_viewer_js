<script>
	import {c_sprite} from './store.js';
	var img;
	c_sprite.subscribe(value => {
		img = value;
	})
</script>

<img src={img}/>