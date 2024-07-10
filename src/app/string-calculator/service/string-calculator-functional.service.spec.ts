import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { StringCalculatorComponent } from '../string-calculator.component';
import { StringCalculatorModule } from '../string-calculator.module';
import { StringCalculatorFunctionalService } from './string-calculator-functional.service';


describe('StringCalculatorFunctionalService', () => {
  let component: StringCalculatorComponent;
  let fixture: ComponentFixture<StringCalculatorComponent>;
  let service: StringCalculatorFunctionalService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StringCalculatorModule, FormsModule]
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

  it('should return 0 for an empty string', () => {
    expect(service.add('')).toBe(0);
  });

});