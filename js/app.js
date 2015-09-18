var PlayerName = "Bob";
var PlayerRace = "Human";

var PlayerStrenth = 10;
var PlayerAgility = 5;

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

	//started messing around with adding a name and race. Works
	if (input.indexOf('my name is') == 0)
		{
			NewName = input.substr(10);
			if (NewName !== "")
			{
				output('your new name is ' + NewName)
				PlayerName = NewName;
			}
		}

	if (input.indexOf('my race is') == 0)
		{
			NewRace = input.substr(10);
			if (NewRace !== "")
			{
				output('your new race is ' + NewRace)
				PlayerRace = NewRace;
			}
		}

	if (input.indexOf('info') == 0)
		{
			output("Name: "+ PlayerName + '<br>' + "Race: " + PlayerRace);
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
PlayerInfo = {
	Info: {
		Name: PlayerName,
		Race: PlayerRace,
		//Add more shit here

	},
	Stats: {
		Strength: PlayerStrenth,
		Agility: PlayerAgility,
		//and here
	}
}

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