enemies = {
	// copy the below stuff to create a new location
	slime: {
		name: "Slime",
		description: "Terror of Tutorials",
		stats: {
			// Should die in a few hits while never putting the character in danger.
		},
		moves: {
			exampleMove: {
				name: "Spit",
				damage: 1000,
				// Ew gross
			}
		},
		onEncounter: function() {
			// A wild slime has appeared!
		}

		// any other details you can provide, put them here
	},
	snatcher: {
		name: "Snatcher",
		description: "Loves shinies",
		stats: {
			// A more difficult fight but still nothing to worry about. Idk how the battle system works yet so maybe you have to block sometimes or something.
		},
		moves: {
			exampleMove: {
				name: "Mug",
				damage: 1000,
				// Maybe has a chance to steal an item
			}
		},
		onEncounter: function() {
			// Must be defeated to retrieve the Key to the City Gate!
		}

		// any other details you can provide, put them here
	},
}