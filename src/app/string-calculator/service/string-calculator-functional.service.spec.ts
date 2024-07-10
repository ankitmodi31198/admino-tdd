import { TestBed } from '@angular/core/testing';

import { StringCalculatorFunctionalService } from './string-calculator-functional.service';

describe('StringCalculatorFunctionalService', () => {
  let service: StringCalculatorFunctionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringCalculatorFunctionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
