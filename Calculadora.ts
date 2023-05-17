import {formtDateNumber} from "./utils";

class Calculadora {
    memo: number = 0;
    tempValue: number = 0;

    suma(value: number): number {
        this.tempValue += value;
        return this.tempValue;
    }

    resta(value: number): number {
        this.tempValue -= value;
        return this.tempValue;
    }

    show(): string {
        return formtDateNumber(this.tempValue);
    }
}
