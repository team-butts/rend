locations = {
	// copy the below stuff to create a new location
	exampleLocation: {
		name: "Example location",
		description: "A description",
		coordinates: {
			x: -1,
			y: 0
		},
		visits: 0,
		onEnter: function() {
			// write an explanation of what should happen when you arrive here, we'll make code for it later
			output('welcome to debugville!');
		},
		onLook: function() {
			// describe what the player would see if they were like "wtf is here"
			output('console output, console output everywhere');
		}

		// any other details you can provide, put them here
	},
	home: {
		name: "Home",
		description: "Sweet Home",
		coordinates: {
			x: 0,
			y: 0
		},
		visits: 0,
		onEnter: function() {
			// Beginning area, safe zone, chests, exit to dirt path. After a stormy night the character decides to check on his/her sister who lives on the other side of the city.
			output('Home sweet home!');
		},
		onLook: function() {
			output('You scan your home. There is a [chest] nearby, along with a [bed]. A [dirtpath] is visible through a south-facing window.');
			// The character's home, a small shack on the edge of the city. There are chests with some basic equipment and survival items lying around and a place to rest to restore health/stamina.
		},
		staticItems: {
			bed: {
				name: "Bed",
				description: "A comfy place to rest.",
				onUse: function() {
					state.character.currentHealth = state.character.stats.maxHealth;
					output('You rest a while, and regain energy.');
				}
			}
		}

		// Beginning area, leads to Dirt Path zone
	},
	dirtpath: {
		name: "Dirt Path",
		description: "Preferable to the broken glass path",
		coordinates: {
			x: 0,
			y: 1
		},
		state: {
			enemies: {
				slime: {
					type: 'slime'
				}
			},
			creatureDefeated: false,
			visits: 0,
		},
		onEnter: function() {
			// Encounters strange creature, battle tutorial
			if (locations.dirtpath.state.creatureDefeated) {
				output('A strange [slime] creature blocks your path. You\'re probably going to have to [battle] it.')
			}
		},
		onLook: function() {
			if (locations.dirtpath.state.creatureDefeated) {
				output('Thick foliage covers either side of the path, but the way to the [citygate] is clear.');
			} else {
				output('The [slime] creature is still sitting there, waiting for you to [battle] it.')
			}
			// A path that leads to the city. With thick foliage on either side, forward is the only way to go.
		}

		// Arrives from Home area, leads to City Gate.
	},
	citygate: {
		name: "City Gate",
		description: "A gate to the city",
		coordinates: {
			x: 0,
			y: 2
		},
		visits: 0,
		onEnter: function() {
			// Arrives to find the Gate Closed and the area deserted, requires key to enter city. 
			output('You arrive at the gate, only to find the area deserted and the gate locked. You will probably need to source a [key] to gain access to the city.')
		},
		onLook: function() {
			// The city walls loom ominously against the dark sky. Normally a bustling area with merchants and knights coming and going, it is all to quiet. A guard tower stands quietly to the right of the gate.
			output('The city walls loom ominously against the dark sky. Normally a bustling area with merchants and knights coming and going, it is eerily quiet. A [guardtower] sits to the right of the gate.')
		}

		// Arrives from Dirt Path area. Leads to City Square (once gate key is aquired) and Guard Tower.
	},
	guardtower: {
		name: "Guard Tower",
		description: "Knee injuries not a problem!",
		coordinates: {
			x: 2,
			y: 1
		},
		visits: 0,
		onEnter: function() {
			// As the character enters the tower something scurrys up the steps. What was that thing?
		},
		onLook: function() {
			// With food on tables it's clear this place was occupied only recently. The armory is unfortunatly locked away but there's a chest on the far side of the room. There is also a staircase leading to the top of the tower.
		}

		// Arrives from City Gate, Leads to Guard Tower Roof area
	},
	guardtowerroof: {
		name: "Guard tower Roof",
		description: "Lovely view",
		coordinates: {
			x: 1,
			y: 2
		},
		visits: 0,
		onEnter: function() {
			// As the character reaches the top of the tower the trapdoor slams behind him. From behind a crate a feral looking creature emerges. It has a set of keys around its neck.
		},
		onLook: function() {
			// You can't see over the wall into the city, but you can almost see your house from here!
		}

		// Arrives from Guard Tower
	}
}