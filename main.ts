input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        knipperlicht_rechts.showColor(neopixel.colors(NeoPixelColors.Orange))
        basic.pause(200)
        knipperlicht_rechts.showColor(neopixel.colors(NeoPixelColors.Yellow))
        basic.pause(200)
    }
    kitronik_servo_lite.turnRight(90)
})
input.onButtonPressed(Button.AB, function () {
    kitronik_servo_lite.driveForwards(200)
    remlicht.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(500)
    remlicht.showColor(neopixel.colors(NeoPixelColors.Black))
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        knipperlicht_links.showColor(neopixel.colors(NeoPixelColors.Orange))
        basic.pause(200)
        knipperlicht_links.showColor(neopixel.colors(NeoPixelColors.Yellow))
        basic.pause(200)
    }
    kitronik_servo_lite.turnLeft(90)
})
let remlicht: neopixel.Strip = null
let knipperlicht_rechts: neopixel.Strip = null
let knipperlicht_links: neopixel.Strip = null
let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
let voorlicht_links = strip.range(3, 2)
let voorlicht_rechts = strip.range(0, 2)
knipperlicht_links = strip.range(4, 1)
knipperlicht_rechts = strip.range(0, 1)
remlicht = strip.range(2, 1)
strip.setBrightness(100)
voorlicht_links.showColor(neopixel.colors(NeoPixelColors.Yellow))
voorlicht_rechts.showColor(neopixel.colors(NeoPixelColors.Yellow))
