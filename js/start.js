state = {
	character: {
		name: "",
		race: "",
		stats: {
			strength: 0,
			agility: 0
		}
	},
	itemsHeld: [],
	currentLocation: "inside",
	inputCallback: false
}

commands = {
	move: function(input) {
		newLocation = input.substr(5);
		if (newLocation == state.currentLocation)
			{
				output("You are already here.")
			}
		else if (newLocation in locations) {
			output('moved to ' + newLocation);
			locations[newLocation].onEnter();
			state.currentLocation = newLocation;
		}
	},
	look: function(input) {
		locations[state.currentLocation].onLook();
	},

}

// Register input
$('#input').keypress(function(e) {
	if (e.which == 13) {
		evaluateInput(e.target.value);
		e.target.value = "";
	}
});

// Content

startGame = function() {
	askForInput("Please provide your name.", function(input) {
		console.log(input);

		state.character.name = input;
		output('Hello, ' + state.character.name + '.');

		askForInput("What race do you belong to? [human|elf|dwarf]", function(input) {
			state.character.race = input;

			output('You stand in your tidy little home. Your sister resides on the other side of the city, and given the terrific weather last night, it seems pertinent to check on her.');
		});
	});
}

startGame();

