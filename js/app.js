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

output = function(text) {
	$('#output').append(text + '<br>');
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

askForInput = function(message, callback) {
	output(message);
	state.inputCallback = callback;
}

evaluateInput = function(input) {
	if (state.inputCallback) {
		callback = state.inputCallback;
		state.inputCallback = false;
		callback(input);
		return;
	}

	command = input.split(" ")[0];

	if (command in commands) {
		commands[command](input);
		return;
	} else {
		output('Invalid command. (super helpful amirite)');
	}

	if (input.indexOf('move') == 0) {

	}
}

// Register input
$('#input').keypress(function(e) {
	if (e.which == 13) {
		evaluateInput(e.target.value);
		e.target.value = "";
	}
});

// Content



locations = {
	inside: {
		name: "Inside the House",
		description: "The inside of the House",
		visits: 0,
		onEnter: function() {
			locations.inside.visits++
		},
		onLook: function() {
			output('there are like chairs and shit idk');
		}
	},
	outside: {
		name: "Outside the House",
		description: "The outside of the House",
		visits: 0,
		onEnter: function() {
			console.log('went outside house');
			locations.outside.visits++
		}
	}
}

startGame = function() {
	askForInput("Please provide your name.", function(input) {
		console.log(input);

		state.character.name = input;
		output('Hello, ' + state.character.name + '.');

		askForInput("What race do you belong to? [human|elf|dwarf]", function(input) {
			state.character.race = input;

			output('You are in a small house. What next?');
		});
	});
}

startGame();

