import {formtDateNumber} from "./utils";


/*
rama main paso 2
y con dos líneas
 */
class Calculadora {
    memo: number = 0;
    tempValue: number = 0;

    suma(value: number): string {
        this.tempValue += value;
        return this.show();
    }

    resta(value: number): string {
        this.tempValue -= value;
        return this.show();
    }

    show(): string {
        return formtDateNumber(this.tempValue);
    }
}
