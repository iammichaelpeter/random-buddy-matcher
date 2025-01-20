
export type Section = 'Support' | 'Developer' | 'Marketing' | 'HR';

export interface Employee {
  id: number;
  name: string;
  section: Section;
}

export interface Couples {
  id: number,
  employee: Employee,
  partner: Employee
}