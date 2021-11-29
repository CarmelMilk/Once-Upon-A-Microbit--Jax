input.onButtonPressed(Button.A, function () {
    servos.P1.setAngle(180)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Beans") {
        music.playTone(131, music.beat(BeatFraction.Whole))
        servos.P1.setAngle(180)
    }
})
input.onButtonPressed(Button.B, function () {
    servos.P1.setAngle(0)
})
servos.P1.setAngle(0)
radio.setGroup(17)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        music.playTone(220, music.beat(BeatFraction.Whole))
        radio.sendString("Cow")
    }
})
