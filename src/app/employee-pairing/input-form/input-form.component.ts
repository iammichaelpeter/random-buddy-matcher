import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PairingService } from '../services/pairing.service';
import { Section } from '../models/employee.model';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.scss',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatTooltipModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputFormComponent {
  pairingService = inject(PairingService);

  employeeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    section: new FormControl('', Validators.required),
  });

  addedEmployees = computed(() => this.pairingService.persistedEmployees$());

  addEmployee() {
    this.pairingService.persistAddedEmployee(
      this.employeeForm.value.name!,
      this.employeeForm.value.section as Section
    );
  }

  getCouples() {
    this.pairingService.generateCouples();
  }

  deleteEmployee(id: number) {
    this.pairingService.deleteEmployee(id);
  }
}
