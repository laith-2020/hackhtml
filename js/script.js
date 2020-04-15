'use strict'

alert(" Atention This web site not for Kids ");

function enterweb() {
    // input
    var age = prompt("what is your age");
    var adult;
    //processing
    if (age <= 18 && age != 0) {
        window.location = "goodby.html";
    }
    else {
        adult = 'nothing';

    }
    //output
    return age;

}
enterweb();

// confirm("Click Ok to Enter");

function closeWin() {
    window.close();
}

function newfunc() {
    document.body.style.background = 'blue';
}


var showresult = function () {
    //input
    var order = prompt('enter your name');
    var item;

    //processing
    if (order) {
        alert('welcome To The Web Site' + ' ' + order);
    } else {
        alert('welcome');
    }
    //output
    return item;
}
showresult();

var showord = function () {
    //input
    var ord = prompt('what would you like to choose , please write blackhat or whitehat');
    var item = '';

    // process
    while (ord !== 'blackhat' && ord !== 'whitehat') {
        ord = prompt('please pick blackhat or whitehat');
    }

    var numberOfOrder=prompt('how many would you like to choose');
    console.log(numberOfOrder);

    for (var i=0;i<numberOfOrder;i++) {
        console.log('index',i);                

        if (ord === 'blackhat') {
            item=item+'<img src="images/blackhat.jpg">';

        } else if (ord === 'whitehat') {
            item = item + '<img src="images/whitehat.jpg">';
        }
    }

    //output
    return item;

}

