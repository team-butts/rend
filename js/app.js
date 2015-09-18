output = function(text) {
	$('#output').append(text + '<br>');
}

evaluateInput = function(input) {
	if (input.indexOf('move') == 0) {
		newLocation = input.substr(5);
		if (newLocation in locations) {
			output('moved to ' + newLocation);
			locations[newLocation].onEnter();
		}
	}
}

// Register input
$('#input').keypress(function(e) {
	if (e.which == 13) {
		evaluateInput(e.target.value);
		e.target.value = "";
	}
});

// vvvv fucking actual content I guess vvvv

locations = {
	inside: {
		name: "Inside the House",
		description: "The inside of the House",
		visits: 0,
		onEnter: function() {
			console.log('went inside house');
		}
	},
	outside: {
		name: "Outside the House",
		description: "The outside of the House",
		visits: 0,
		onEnter: function() {
			console.log('went outside house');
		}
	}
}