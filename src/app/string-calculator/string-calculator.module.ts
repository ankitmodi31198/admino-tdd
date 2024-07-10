import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StringCalculatorFunctionalService } from './service/string-calculator-functional.service';
import { StringCalculatorComponent } from './string-calculator.component';



@NgModule({
  declarations: [
    StringCalculatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    StringCalculatorComponent
  ],
  providers: [
    StringCalculatorFunctionalService
  ]
})
export class StringCalculatorModule { }
