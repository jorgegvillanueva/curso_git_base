export const formtDateNumber = (value: number): string => {
    return value < 10 ? '0' + value.toString() : value.toString();
}
