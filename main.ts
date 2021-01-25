enum btnList {
    //% block="none"
    None=0,
    //% block="A"
    A=1,
    //% block="B"
    B=2,
    //% block="C"
    C=3,
    //% block="D"
    D=4,
    //% block="E"
    E=5,
    //% block="F"
    F=6
}
enum btnStateList {
    //% block="Pressed"
    pressed = 1,
    //% block="Released"
    released = 0
}

//% weight=0
//% color=#335533 icon="\uf11b"
namespace joystickbit {

    //% block="Joystick X position"
    export function JoystickX(): number {
        return Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, -512, 511)
    }

    //% block="Joystick Y position"
    export function JoystickY(): number {
        return Math.map(pins.analogReadPin(AnalogPin.P1), 0, 1023, -512, 511)
    }

    //% block="Button %btn||  %btnEvent"
    //% expandableArgumentMode="toggle"
    //% btn.defl=btnList.A
    export function buttonPressed(btn:btnList, btnState:btnStateList=btnStateList.pressed): boolean {
        let btnRead = pins.analogReadPin(AnalogPin.P2)
        let releaseCheck = (btnState == btnStateList.released)
        
        if (btnRead >= 0 &&  btnRead < 256 && btn == btnList.A) {
            return (releaseCheck?false:true);
        } else if (btnRead >= 256 && btnRead < 597 && btn == btnList.B) {
            return (releaseCheck?false:true);
        } else if (btnRead >= 597 && btnRead < 725 && btn == btnList.C) {
            return (releaseCheck?false:true);
        } else if (btnRead >= 725 && btnRead < 793 && btn == btnList.D) {
            return (releaseCheck?false:true);
        } else if (btnRead >= 793 && btnRead < 836 && btn == btnList.F) {
            return (releaseCheck?false:true);
        } else if (btnRead >= 836 && btnRead < 938 && btn == btnList.E) {
            return (releaseCheck?false:true);
        } else {
            return (releaseCheck?true:false);
        }
    }

}
