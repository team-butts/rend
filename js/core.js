output = function(text) {
	$('#output').append(text + '<br>');
	$('#output')[0].scrollTop = $('#output')[0].scrollHeight;
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
}