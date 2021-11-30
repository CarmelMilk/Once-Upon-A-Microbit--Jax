/**
 * Author: Charlie Reckling
 */
enum RadioMessage {
    message1 = 49434
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Trade" && pins.digitalReadPin(DigitalPin.P0) == 1) {
        servos.P1.setAngle(0)
        radio.sendString("Beans")
    }
})
pins.digitalWritePin(DigitalPin.P0, 0)
servos.P1.setAngle(180)
radio.setGroup(17)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        servos.P1.setAngle(0)
        radio.sendString("Trade")
    } else {
        servos.P1.setAngle(180)
    }
})
