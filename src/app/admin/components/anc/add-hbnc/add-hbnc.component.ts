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
    const hbncRecord = this.fb.group({
      date: '',
      weight: '',
    });

    this.hbnc.push(hbncRecord);
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
