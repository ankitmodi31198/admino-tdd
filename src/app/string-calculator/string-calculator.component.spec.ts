import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { StringCalculatorFunctionalService } from './service/string-calculator-functional.service';
import { StringCalculatorComponent } from './string-calculator.component';

describe('StringCalculatorComponent', () => {
  let component: StringCalculatorComponent;
  let fixture: ComponentFixture<StringCalculatorComponent>;
  let service: StringCalculatorFunctionalService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StringCalculatorComponent],
      imports: [FormsModule],
      providers: [StringCalculatorFunctionalService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringCalculatorComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(StringCalculatorFunctionalService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
