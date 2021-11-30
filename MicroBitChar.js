input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(136)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Trade" && pins.digitalReadPin(DigitalPin.P0) == 0) {
        servos.P0.setAngle(0)
    }
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(90)
})
radio.setGroup(17)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        radio.sendString("Cowsoff")
    }
})
