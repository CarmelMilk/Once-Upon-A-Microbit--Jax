radio.onReceivedString(function (receivedString) {
    if (receivedString == "Trade" && pins.digitalReadPin(DigitalPin.P0) == 0) {
        servos.P1.setAngle(0)
    }
})
servos.P1.setAngle(180)
radio.setGroup(17)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        radio.sendString("Cowsoff")
    }
})
