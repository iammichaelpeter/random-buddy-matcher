import { ChangeDetectionStrategy, Component, computed, inject, Signal } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { PairingService } from '../services/pairing.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-result-table',
  imports: [MatTableModule],
  templateUrl: './result-table.component.html',
  styleUrl: './result-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultTableComponent {
  pairingService = inject(PairingService);

  leftEmployee: Signal<Employee | null> = computed(() => this.pairingService.leftEmployee$());

  displayedColumns: string[] = ['couple', 'employeeOneName', 'employeeOneSection', 'employeeTwoName', 'employeeTwoSection'];
  dataSource = computed(() => this.pairingService.couples$());
}
