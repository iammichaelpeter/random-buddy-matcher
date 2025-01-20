import { ChangeDetectionStrategy, Component, computed, inject, signal, Signal } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { PairingService } from '../services/pairing.service';
import { Employee } from '../models/employee.model';
import { fromEvent, debounceTime } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-result-table',
  imports: [MatTableModule, MatCardModule, MatDividerModule],
  templateUrl: './result-table.component.html',
  styleUrl: './result-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultTableComponent {
  pairingService = inject(PairingService);

  displayedColumns: string[] = ['couple', 'employeeOneName', 'employeeOneSection', 'employeeTwoName', 'employeeTwoSection'];
  mobileColumns = ['mobileView'];

  isMobile = signal(window.innerWidth < 768);
  leftEmployee: Signal<Employee | null> = computed(() => this.pairingService.leftEmployee$());

  dataSource = computed(() => this.pairingService.couples$());

  constructor() {
    fromEvent(window, 'resize').pipe(
      debounceTime(100)
    ).subscribe(() => {
      this.isMobile.set(window.innerWidth < 768);
    });
  }
}
