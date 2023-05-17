class Calculadora {
    memo: number = 0;
    tempValue: number = 0;

    add(value: number): number {
        this.tempValue += value;
        return this.tempValue;
    }
}
