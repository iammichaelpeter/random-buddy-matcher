import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputFormComponent } from './input-form/input-form.component';
import { ResultTableComponent } from './result-table/result-table.component';

@Component({
  selector: 'app-employee-pairing',
  imports: [InputFormComponent, ResultTableComponent],
  templateUrl: './employee-pairing.component.html',
  styleUrl: './employee-pairing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeePairingComponent {
}
