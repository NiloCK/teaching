squareRoot();

function squareRoot() {

    // write("Hi Francis");

    // var age = prompt("How old are you?");
    // if (age > 10){
    //     write("You are old!")
    // } else {
    //     write("You are a baby!")
    // }

    // Finding() the square root of 20

    //var number = 3 * 3;

    var input = prompt("input number");
    
    // eval(input);

    var search = input.search(/[a-z]|[A-Z]/);
    // write(search);
    //write(input)
    if ((
        input.includes('+') ||
        input.includes('-') ||
        input.includes('*') ||
        input.includes('/')
    ) && (
            input.search(/[a-z]|[A-Z]/) == -1
        )) {

        input = eval(input);
    }
    // write(input);

    //  if (input >= 1000000) {
    //alert("That number is too high")
    //  squareRoot();/*} else*/
    if (input === null) {
        alert("Please insert input");
        squareRoot();
    } else if (isNaN(0 * input)) {
        alert("Input Not a Number");
        squareRoot();
    } else if (input == 0) {
        sayTheSquareRoot(input, input)
    } else {
        var high = 0

        var increment = 1;
        if (input > 1000000) {
            increment = input / 10
        }
        while (high * high < input) {
            //  write (high * high + " is too small");
            high = high + increment;

        }

        // write("high value is now: " + high);
        var finished = false;


        var low = high - increment;
        //  write("low value is: " + low)
        var var1 = low + 0.5
        // write("var1 is: " + var1)2

        if (var1 * var1 < input) {
            low = var1
            //  write("low is now:" + low)



        }
        if (var1 * var1 > input) {
            high = var1
            // write("high = " + high)

        }

        if (var1 * var1 == input) {
            finished = true;
            alert(var1 * var1)
        }

    }
    //write(high)
    // write(low)


    var counter = 200000;

    while (counter > 0) {

        var1 = (high - low) / 2 + low

        // write("Low: " + low + "\tHigh: " + high + "\tNew Guess: " + var1)
        if (var1 * var1 > input) {
            high = var1
        } if (var1 * var1 < input) {
            low = var1
        } if (var1 * var1 == input) {
            finished = true

            sayTheSquareRoot(high, input)
            squareRoot()
        }

        counter = counter - 1;
    }

    //  write(high)
    // write(low)
    alert("the square root of " + input + " is " + high)
    squareRoot();

}

function sayTheSquareRoot(high, input) {
    alert("the square root of " + input + " is " + high)
}

function write(message) {
    var text = document.createElement('p');
    text.innerText = message;
    document.body.appendChild(text);
}
