input.onButtonPressed(Button.A, function () {
    if (input.temperature() > 30) {
        basic.showString("\"hot!!!\"")
        music.playTone(523, music.beat(BeatFraction.Double))
    } else if (input.temperature() < 30) {
        basic.showString("COLD! ")
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
input.onButtonPressed(Button.B, function () {
    music.setTempo(291)
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    basic.showNumber(input.temperature())
    basic.pause(500)
})
led.setBrightness(255)
for (let index = 0; index < 2; index++) {
    basic.showIcon(IconNames.Cow)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
}
