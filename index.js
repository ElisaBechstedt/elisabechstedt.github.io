var today = new Date()
    var currentTime = today.getHours()
    console.log(currentTime);
    if (currentTime >= 0 && currentTime < 6) {
      document.getElementById("greeting").innerHTML = 'Good Night!';
    } else if (currentTime >= 6 && currentTime < 12) {
      document.getElementById("greeting").innerHTML = 'Good Morning!';
    } else if (currentTime >= 12 && currentTime < 18) {
      document.getElementById("greeting").innerHTML = 'Good Afternoon!';
    } else if (currentTime >= 18 && currentTime < 24) {
      document.getElementById("greeting").innerHTML = 'Good Evening!';
    }