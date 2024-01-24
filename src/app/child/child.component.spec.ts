import { ChildComponent } from './child.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { input } from '@angular/core';

describe('ChildComponent', () => {
  let fixture: ComponentFixture<ChildComponent>;
  let component: ChildComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Test Case: Checks if the ChildComponent is successfully created
  it('should create the ChildComponent', () => {
    expect(component).toBeTruthy();
  });


  it('should have input1 as string equals to \'value changed input 1\'', () => {
    const input1 = 'value changed input 1';

    // fixture.componentRef.setInput('input1', input1) // not work
    //Error: NG0303: Can't set value of the 'input1' input on the 'ChildComponent' component. Make sure that the 'input1' property is annotated with @Input() or a mapped @Input('input1') exists.

    // component.input1 = input1;  // not work
    // TS2322: Type string is not assignable to type InputSignal<string, string>

    component.input1 = input(input1); //works
    expect(component.input1()).toBe(input1);
  });

  it('should have input2 equals to \'value changed input 2\'', () => {
    const input2 = 'value changed input 2';
    // fixture.componentRef.setInput('input2', input2) // not work
    //Error: NG0303: Can't set value of the 'input2' input on the 'ChildComponent' component. Make sure that the 'input2' property is annotated with @Input() or a mapped @Input('input2') exists.
    component.input2 = input(input2);
    expect(component.input2()).toBe(input2);
  });

  it('should set input3 value correctly and compute the double of input3 correctly for different values', () => {
    let input3 = 5;
    // fixture.componentRef.setInput('input3', input(input3)) // not work
    //Error: NG0303: Can't set value of the 'input3' input on the 'ChildComponent' component. Make sure that the 'input3' property is annotated with @Input() or a mapped @Input('input3') exists.

    component.input3 = input(input3);
    expect(component.input3()).toBe(input3);
    expect(component.input3DoubleComputed()).toBe(input3  * 2); // 10

    input3 = 8;
    component.input3 = input(input3);
    expect(component.input3()).toBe(input3);
    expect(component.input3DoubleComputed()).toBe(10); // return 10(5*2) not used directly the signal input3

    expect(component.input3DoubleComputedDirect()).toBe(input3  * 2); //16
  });
});
