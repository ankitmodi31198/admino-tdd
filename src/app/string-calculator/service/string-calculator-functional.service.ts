import { Injectable } from '@angular/core';

@Injectable()
export class StringCalculatorFunctionalService {

  constructor() { }

  add(stringToBeAdd: string): number {
    let sum: number = 0;

    if (stringToBeAdd) {
      const numbers = stringToBeAdd.split(',');
      if (numbers?.length) {
        for (let i = 0; i < numbers.length; i++) {
          const num = parseInt(numbers[i], 10);
          if (!isNaN(num)) {
            sum += num;
          }
        }
      }
    }

    return sum;
  }

}
