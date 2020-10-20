import {writable} from 'svelte/store';

export var c_sprite = writable('');
export var c_types = writable([]);
export var c_abilities = writable([]);
export var c_stats = writable({'hp': 0, 'attack': 0, 'defense': 0, 'special-attack': 0, 'special-defense': 0, 'speed': 0});