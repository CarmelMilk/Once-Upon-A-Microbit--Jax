//Author: Charlie Reckling

//For testing purposes, turns the servo for the trader mechanic
input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(136)
})

/*
When the switch from Rach's servo is activated it sends the string "Cow" over radio, 
this detects that and turns the servo for the beanstalk mechanic if also the switch for
this Microbit has deactivated.
*/
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Cow" && pins.digitalReadPin(DigitalPin.P0) == 0) {
        servos.P0.setAngle(0)
    }
})

//This resets the servo to it's original angle, as to set back up the enclosure for another user
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(90)
})

//Makes sure the servo is initially at the correct angle and sets the radio group
servos.P0.setAngle(90)
radio.setGroup(17)

/*
Detects if the switch has been deactivated, 
once it's deactivated it sends the string "Cowsoff" for Jay's Microbit
*/
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        radio.sendString("Cowsoff")
    }
})
