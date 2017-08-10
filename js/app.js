
//Set count down expiry date and time
var expiryDate = new Date('Aug 16, 2018 00:00:00').getTime();

// Update count for every 1 second
var updateCount = setInterval(function() {
	
	// Today's date and time
	var todayDate = new Date().getTime();

	// Find remaining time
	var timeLeft = expiryDate - todayDate;
	
	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
	var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
	
	// Display countdown
	document.getElementById('count').innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

	// Show expired text when time = 0
	if (timeLeft < 0) {
		clearInterval(updateCount);
		document.getElementById('count').innerHTML = 'Expired';
	}
}, 1000);