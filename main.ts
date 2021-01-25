input.onButtonPressed(Button.A, function () {
    btnMode = false
})
input.onButtonPressed(Button.B, function () {
    btnMode = true
})
let btnMode = false
btnMode = false
basic.forever(function () {
    if (btnMode) {
        if (joystickbit.buttonPressed(btnList.F, btnStateList.pressed)) {
            basic.showString("F")
        } else if (joystickbit.buttonPressed(btnList.E, btnStateList.pressed)) {
            basic.showString("E")
        } else if (joystickbit.buttonPressed(btnList.D, btnStateList.pressed)) {
            basic.showString("D")
        } else if (joystickbit.buttonPressed(btnList.C, btnStateList.pressed)) {
            basic.showString("C")
        } else if (joystickbit.buttonPressed(btnList.B, btnStateList.pressed)) {
            basic.showString("B")
        } else if (joystickbit.buttonPressed(btnList.A, btnStateList.pressed)) {
            basic.showString("A")
        } else {
            basic.clearScreen()
        }
    } else {
        basic.clearScreen()
        led.plot(Math.map(joystickbit.JoystickX(), -512, 511, 0, 5), Math.map(joystickbit.JoystickY(), -512, 511, 0, 5))
    }
})
