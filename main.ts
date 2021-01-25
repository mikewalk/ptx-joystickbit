enum btnList {

    //% block="A"
    BUTTON_A,// = DAL.MICROBIT_BUTTON_EVT_DOWN,
    //% block="B"
    BUTTON_B,// = DAL.MICROBIT_BUTTON_EVT_DOWN,
    //% block="C"
    BUTTON_C,// = DAL.MICROBIT_BUTTON_EVT_DOWN,
    //% block="D"
    BUTTON_D,// = DAL.MICROBIT_BUTTON_EVT_DOWN,
    //% block="E"
    BUTTON_E,// = DAL.MICROBIT_BUTTON_EVT_DOWN,
    //% block="F"
    BUTTON_F,// = DAL.MICROBIT_BUTTON_EVT_DOWN,
}

enum btnStateList {
    //% block="Pressed"
    pressed = 1,
    //% block="Released"
    released = 0
}

//% weight=0
//% color=#335533 icon="\uf11b" block="OldJoystickBit"
namespace oldjoystickbit {

    let midX: number = 512;
    let midY: number = 512;

    let joyMax: number = 1023;
    let joyMid: number = 512;
    let joyMin: number = 0;
    
    /**
    * Get the left-right position of the Joystick
    */
    //% block="Joystick X"
    //% blockId=oldjoystickbit_X
    export function JoystickX(): number {
        let rawRead = pins.analogReadPin(AnalogPin.P0);
        if (rawRead >= midX) {
            return Math.map(rawRead,midX,joyMax,joyMid,joyMax);
        } else {
            return Math.map(rawRead,joyMin,midX-1,joyMin,joyMid-1);
        }
    }

    /**
    * Get the up-down position of the Joystick
    */
    //% block="Joystick Y"
    //% blockId=oldjoystickbit_Y
    export function JoystickY(): number {
        let rawRead = pins.analogReadPin(AnalogPin.P1);
        if (rawRead >= midY) {
            return Math.map(rawRead,midY,joyMax,joyMid,joyMax);
        } else {
            return Math.map(rawRead,joyMin,midY-1,joyMin,joyMid-1);
        }
    }

    /**
    * Check if a spoecified button is pressed down
    */
    //% block="Button %btn||  %btnEvent"
    //% blockId=oldjoystickbit_Btn
    //% expandableArgumentMode="toggle"
    //% btn.defl=btnList.BUTTON_A
    //% btn.fieldEditor="gridpicker" btn.fieldOptions.columns=3
    export function buttonPressed(btn:btnList, btnState:btnStateList=btnStateList.pressed): boolean {
        let btnRead = pins.analogReadPin(AnalogPin.P2)
        let releaseCheck = (btnState == btnStateList.released)
        
        if (btnRead >= 0 &&  btnRead < 256 && btn == btnList.BUTTON_A) {
            return (releaseCheck?false:true);
        } else if (btnRead >= 256 && btnRead < 597 && btn == btnList.BUTTON_B) {
            return (releaseCheck?false:true);
        } else if (btnRead >= 597 && btnRead < 725 && btn == btnList.BUTTON_C) {
            return (releaseCheck?false:true);
        } else if (btnRead >= 725 && btnRead < 793 && btn == btnList.BUTTON_D) {
            return (releaseCheck?false:true);
        } else if (btnRead >= 793 && btnRead < 836 && btn == btnList.BUTTON_F) {
            return (releaseCheck?false:true);
        } else if (btnRead >= 836 && btnRead < 938 && btn == btnList.BUTTON_E) {
            return (releaseCheck?false:true);
        } else {
            return (releaseCheck?true:false);
        }
    }
    
    /**
    * Calibrate Joysticks central position
    */
    //% block="Calibrate Joystick"
    //% blockId=oldjoystickbit_Calibrate 
    export function calibrate() {
        midX = pins.analogReadPin(AnalogPin.P0);
        midY = pins.analogReadPin(AnalogPin.P1);
    }
    

}
