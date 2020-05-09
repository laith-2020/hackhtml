'use strict'

// confirm("Click Ok to Enter"); // this code if i want to add a confirm

// to close the window 
function closeWin() {
    window.close();
}
// to change the background color
function newfunc() {
    document.body.style.background = 'blue';
}


alert(" Atention This web site not for Kids ");

function enterweb() {
    // input
    var age = prompt("what is your age");
    //processing
    if (age == 0) {
        alert('You should enter your age');
        window.location = "index.html";
    }
    else if (age <= 18 ) {
        window.location = "goodby.html";
    }
    else {
        alert('You are adult Welcome To our Hacker Web Site');
    }
    //output
    return age;
}
enterweb();


var showresult = function () {
    //input
    var order = prompt('enter your name');
    //processing
    if (order) {
        alert('welcome To The Web Site' + ' ' + order);
    } else {
        alert('You should enter your Name');
        window.location = "index.html";
    }
    //output
    return order;
}
showresult();

var showord = function () {
    //input
    var ord = prompt('what Would you like to choose , please write blackhat or whitehat');
    var item = '';

    // process
    while (ord !== 'blackhat' && ord !== 'whitehat') {
        ord = prompt('please pick blackhat or whitehat');
    }

    var numberOfOrder = prompt('how many would you like to choose');
    console.log(numberOfOrder);

    for (var i = 0; i < numberOfOrder; i++) {
        console.log('index', i);

        if (ord === 'blackhat') {
            item = item + '<img src="images/blackhat.jpg">';

        } else if (ord === 'whitehat') {
            item = item + '<img src="images/whitehat.jpg">';
        }
    }
    //output
    return item;
}
