//Author: Jayden Chavez

//For testing purposes, turns the servo for the cow-->beans mechanic
input.onButtonPressed(Button.A, function () {
    servos.P1.setAngle(180)
})

/*
For the first if statement, when the switch from Char's servo is deactivated it 
sends the string "Cowsoff" over radio, this detects that and increases the variable 
'gocow' to keep track of the event.

For the second if statement, when the switch from Rach's servo is activated it 
sends the string "Cow" over radio, this detects that and turns the servo for 
the cow-->beans mechanic if the first if statement has already come to fruition.
*/
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Cowsoff") {
        gocow = 1
    }
    if (receivedString == "Cow" && gocow == 1) {
        servos.P1.setAngle(0)
    }
})

//This resets the servo to it's original angle, as to set back up the enclosure for another user
input.onButtonPressed(Button.B, function () {
    servos.P1.setAngle(0)
})

//Makes sure the servo is initially at the correct angle and sets the radio group and sets the variable 'gocow' to 0
let gocow = 0
servos.P1.setAngle(0)
radio.setGroup(17)

/*
Detects if the switch has been activated, 
once it's activated it sends the string "Beans" for Rach's Microbit
*/
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        radio.sendString("Beans")
    }
})