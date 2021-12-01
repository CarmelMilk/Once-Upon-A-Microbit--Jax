//Author: Rach Allen

//For testing purposes, turns the servo for the beanstalk mechanic
input.onButtonPressed(Button.A, function () {
    servos.P1.setAngle(180)
})

/*
When the switch from Jay's servo is activated it sends the string "Beans" over radio, 
this detects that and turns the servo for the beanstalk mechanic
*/
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Beans") {
        servos.P1.setAngle(180)
    }
})

//This resets the servo to it's original angle, as to set back up the enclosure for another user
input.onButtonPressed(Button.B, function () {
    servos.P1.setAngle(0)
})

//Makes sure the servo is initially at the correct angle and sets the radio group
servos.P1.setAngle(0)
radio.setGroup(17)

/*
Detects if the switch has been activated, 
once it's activated it sends the string "Cow" for Jay and Char Microbits
*/
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        radio.sendString("Cow")
    }
})

