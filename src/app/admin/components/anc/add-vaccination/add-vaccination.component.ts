import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AncService } from '../../../service/anc.service';

@Component({
  selector: 'app-add-vaccination',
  templateUrl: './add-vaccination.component.html',
  styleUrl: './add-vaccination.component.scss',
})
export class AddVaccinationComponent {
  vaccineForm!: FormGroup;

  selectedId: any;
  constructor(
    private dialogRef: MatDialogRef<AddVaccinationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private ancService: AncService
  ) {
    this.selectedId = data.ancData.id;
    console.log(data.ancData);
  }

  ngOnInit() {
    this.vaccineForm = this.fb.group({
      date: '',
      weight: '',
      vaccine: '',
    });
  }

  getDueVaccines(currentAgeInMonths: number): any[] {
    const missedVaccines = this.data.ancData.vaccinationSchedule.filter(
      (v: any) => v.dueAgeInMonths < currentAgeInMonths && !v.isGiven
    );

    const currentVaccines = this.data.ancData.vaccinationSchedule.filter(
      (v: any) => v.dueAgeInMonths === currentAgeInMonths
    );

    return [...missedVaccines, ...currentVaccines];
  }

  onSubmit() {
    const filled = this.vaccineForm.value;

    const updatedVaccines = this.data.ancData.vaccinationSchedule.map(
      (vaccine: any) => {
        const matched = filled.vaccine.find((v: any) => v === vaccine.name);
        console.log(matched);
        if (matched) {
          return {
            ...vaccine,
            date: filled.date,
            isGiven: true,
            weight: filled.weight, // only if you want to include weight per vaccine
          };
        }
        return vaccine;
      }
    );
    const updatedData = {
      ...this.data.ancData,
      vaccineNumber: this.data.ancData.vaccineNumber + 1,
      vaccinationSchedule: updatedVaccines,
    };
    this.ancService
      .updateANC(updatedData, this.selectedId)
      .subscribe((res: any) => {
        if (res) {
          this.dialogRef.close(true);
        }
      });
  }

  toReset() {
    this.vaccineForm.reset();
  }
  toClose() {
    this.dialogRef.close(false);
  }
}
