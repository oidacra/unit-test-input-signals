import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';


@Component({
  selector: 'unit-test-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  input1 = input<string>('');
  input2 = input.required<string>();
  input3 = input<number>(0);

  input3DoubleComputed = computed(()=>{
    return this.double( this.input3())
  })

  input3DoubleComputedDirect = computed(()=>{
    return this.input3() * 2
  })

  double(num: number){
    return num * 2
  }


}
