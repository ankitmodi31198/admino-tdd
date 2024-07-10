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

  it('should return 1 for the string "1"', () => {
    expect(service.add('1')).toBe(1);
  });

  it('should return 3 for the string "1,2"', () => {
    expect(service.add('1,2')).toBe(3);
  });
  
  it('should return 3 for the string "1,2,3"', () => {
    expect(service.add('1,2,3')).toBe(6);
  });

});