import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Couples, Employee, Section } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class PairingService {

  persistedEmployees$: WritableSignal<Employee[]> = signal(this.getInitialEmployees());
  persistedEmployees: Signal<Employee[]> = computed(() => this.persistedEmployees$());

  couples$: WritableSignal<Couples[]> = signal([]);

  leftEmployee$: WritableSignal<Employee | null> = signal(null);
  
  persistAddedEmployee(name: string, section: Section) {
    const currentMaxId = Math.max(...this.persistedEmployees().map(emp => emp.id));
    const newEmployee: Employee = {
      id: currentMaxId + 1,
      name: name,
      section: section
    };
    
    this.persistedEmployees$.update(employees => [...employees, newEmployee]);
    localStorage.setItem('BUDDY_MATCHER_ADDED_EMPLOYEE', JSON.stringify( this.persistedEmployees()));
  }

  private getInitialEmployees(): Employee[] {
    const storedEmployees = localStorage.getItem('BUDDY_MATCHER_ADDED_EMPLOYEE');
    if (!storedEmployees) {
      return [];
    }
    return JSON.parse(storedEmployees);
  }

  generateCouples() {
    const employees = this.persistedEmployees();
    let availableEmployees = [...employees];
    let couples: Couples[] = [];
    let coupleId = 1;
    
    this.leftEmployee$.set(null);

    while (availableEmployees.length >= 2) {
      const employee = availableEmployees.splice(
        Math.floor(Math.random() * availableEmployees.length), 
        1
      )[0];
      const partnerIndex = Math.floor(Math.random() * availableEmployees.length);
      const partner = availableEmployees.splice(partnerIndex, 1)[0];

      couples.push({
        id: coupleId++,
        employee: employee,
        partner: partner
      });
    }

    if (availableEmployees.length === 1) {
      this.leftEmployee$.set(availableEmployees[0]);
    }

    this.couples$.set(couples);
  }

  deleteEmployee(id: number) {
    this.persistedEmployees$.update(employees => 
      employees.filter(emp => emp.id !== id)
    );

    localStorage.setItem(
      'BUDDY_MATCHER_ADDED_EMPLOYEE', 
      JSON.stringify(this.persistedEmployees$())
    );
  }
}
