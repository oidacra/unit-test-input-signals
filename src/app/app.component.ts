import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChildComponent } from './child/child.component';

@Component({
  standalone: true,
  imports: [ RouterModule, ChildComponent],
  selector: 'unit-test-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'unit-test';

  input1  = 'default value of input 1';
  input2  = 'required value of input 2';
}
