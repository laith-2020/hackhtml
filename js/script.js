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
       adult='nothing';

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

