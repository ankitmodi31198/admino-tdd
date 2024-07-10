import { Component } from '@angular/core';
import { StringCalculatorFunctionalService } from './service/string-calculator-functional.service';

@Component({
  selector: 'app-string-calculator',
  templateUrl: './string-calculator.component.html',
  styleUrls: ['./string-calculator.component.scss']
})
export class StringCalculatorComponent {

  stringToBeCalculateSum: string = null;

  calculatedSum: number = null;

  constructor(
    private functionalService: StringCalculatorFunctionalService
  ) { }

  stringToBeCalculateSumChangeHandler() {
    this.calculatedSum = this.functionalService.add(this.stringToBeCalculateSum);
  }

}
