import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AncService } from '../../../service/anc.service';

@Component({
  selector: 'app-add-hbnc',
  templateUrl: './add-hbnc.component.html',
  styleUrl: './add-hbnc.component.scss',
})
export class AddHbncComponent {
  hbncForm!: FormGroup;

  selectedId: any;
  constructor(
    private fb: FormBuilder,
    private ancService: AncService,
    private dialogRef: MatDialogRef<AddHbncComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
    this.selectedId = data.ancData.id;
  }

  ngOnInit() {
    this.hbncForm = this.fb.group({
      childBirthDate: '',
      gender: '',
      hbnc: this.fb.array([this.createHbncRecord()]),
    });

    this.getEditData();
  }

  getEditData() {
    this.hbncForm.patchValue({
      childBirthDate: this.data.ancData.childBirthDate,
      gender: this.data.ancData.gender,
    });
    this.hbnc.clear();

    // Populate hbnc records from data
    this.data.ancData.hbnc.forEach((record: any) => {
      this.hbnc.push(this.createHbncRecordWithData(record));
    });
  }

  createHbncRecordWithData(data: any): FormGroup {
    return this.fb.group({
      date: data.date || '',
      weight: data.weight || '',
    });
  }

  createHbncRecord(): FormGroup {
    return this.fb.group({
      date: '',
      weight: '',
    });
  }

  get hbnc(): FormArray {
    return this.hbncForm.get('hbnc') as FormArray;
  }

  addHbncRecord() {
    console.log(this.hbnc.length);
    let newDate = this.hbncForm.value.childBirthDate;

    switch (this.hbnc.length) {
      case 0:
        newDate = this.hbncForm.value.childBirthDate;
        break;
      case 1:
        newDate = this.addDays(this.hbncForm.value.childBirthDate, 3);
        break;
      case 2:
        newDate = this.addDays(this.hbncForm.value.childBirthDate, 7);
        break;
      case 3:
        newDate = this.addDays(this.hbncForm.value.childBirthDate, 14);
        break;
      case 4:
        newDate = this.addDays(this.hbncForm.value.childBirthDate, 21);
        break;
      case 5:
        newDate = this.addDays(this.hbncForm.value.childBirthDate, 28);
        break;
      case 6:
        newDate = this.addDays(this.hbncForm.value.childBirthDate, 42);
        break;
      default:
        console.log('All records added');
        return; // Prevent adding more records after 5 entries
    }

    const hbncRecord = this.fb.group({
      date: newDate,
      weight: '',
    });

    this.hbnc.push(hbncRecord);
  }

  addDays(date: string, days: number): string {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result.toISOString().split('T')[0]; // Return date in YYYY-MM-DD format
  }

  onSubmit() {
    const updatedData = { ...this.data.ancData, ...this.hbncForm.value };
    this.ancService
      .updateANC(updatedData, this.selectedId)
      .subscribe((res: any) => {
        if (res) {
          this.dialogRef.close(true);
          this.hbncForm.reset();
        }
      });
  }

  toReset() {
    this.hbncForm.reset();
  }
  toClose() {
    this.dialogRef.close(false);
  }
}
