input.onButtonPressed(Button.A, function () {
    servos.P1.setAngle(180)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Cow") {
        music.playTone(262, music.beat(BeatFraction.Whole))
        servos.P1.setAngle(0)
    }
})
input.onButtonPressed(Button.B, function () {
    servos.P1.setAngle(0)
})
servos.P1.setAngle(0)
radio.setGroup(17)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        music.playTone(784, music.beat(BeatFraction.Whole))
        radio.sendString("Beans")
    }
})