input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    servos.P0.setAngle(180)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(0)
})
servos.P0.setAngle(0)