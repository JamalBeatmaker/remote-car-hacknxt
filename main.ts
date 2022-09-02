radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showIcon(IconNames.Happy)
        hackbitmotors.MotorRunDual(
        hackbitmotors.Motors.M1A,
        150,
        hackbitmotors.Motors.M1B,
        150
        )
    }
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Sad)
        hackbitmotors.MotorRunDual(
        hackbitmotors.Motors.M1A,
        0,
        hackbitmotors.Motors.M1B,
        0
        )
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
    basic.showIcon(IconNames.Happy)
})
function Esquerda () {
    hackbitmotors.MotorRunDual(
    hackbitmotors.Motors.M1A,
    0,
    hackbitmotors.Motors.M1B,
    150
    )
}
function direita () {
    hackbitmotors.MotorRunDual(
    hackbitmotors.Motors.M1A,
    150,
    hackbitmotors.Motors.M1B,
    0
    )
}
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
    basic.showIcon(IconNames.Sad)
})
radio.onReceivedValue(function (name, value) {
    if (name == "D") {
        direita()
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # . #
            . . . # .
            . . # . .
            `)
    }
    if (name == "E") {
        Esquerda()
        basic.showLeds(`
            . . # . .
            . # . . .
            # . # # #
            . # . . .
            . . # . .
            `)
    }
})
radio.setGroup(1)
basic.forever(function () {
	
})
