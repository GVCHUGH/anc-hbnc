import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AncService } from '../../../service/anc.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-anc',
  templateUrl: './add-anc.component.html',
  styleUrl: './add-anc.component.scss',
})
export class AddAncComponent {
  ancForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ancService: AncService,
    private dialogRef: MatDialogRef<AddAncComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  pctsPrefix = '07060900200';
  ngOnInit() {
    this.ancForm = this.fb.group({
      pcts: [
        null,
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(5),
        ],
      ],
      name: [null, [Validators.required]],
      husbandName: [null, [Validators.required]],
      lmpDate: [null, [Validators.required]],
      aadhar: [
        null,
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(12),
        ],
      ],
      account: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      janAadhar: [
        null,
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(10),
        ],
      ],
      motherBirthDate: [null, [Validators.required]],
      mobile: [
        null,
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(10),
        ],
      ],
    });

    this.getEditData();
  }

  getEditData() {
    this.pctsPrefix = this.data.ancData.pcts.slice(0, -5);
    this.ancForm.patchValue({
      pcts: this.data.ancData.pcts.slice(-5),
      name: this.data.ancData.name,
      husbandName: this.data.ancData.husbandName,
      lmpDate: this.data.ancData.lmpDate,
      aadhar: this.data.ancData.aadhar,
      account: this.data.ancData.account,
      janAadhar: this.data.ancData.janAadhar,
      motherBirthDate: this.data.ancData.motherBirthDate,
      mobile: this.data.ancData.mobile,
    });
  }

  onSubmit() {
    this.ancForm.patchValue({
      pcts: this.pctsPrefix + this.ancForm.value.pcts,
    });
    if (this.data.isEdit) {
      // console.log();
      this.ancService
        .updateANC(this.ancForm.value, this.data.ancData.id)
        .subscribe((res: any) => {
          if (res) {
            this.dialogRef.close(true);
            this.ancForm.reset();
          }
        });
    } else {
      this.ancService.addANC(this.ancForm.value).subscribe((res: any) => {
        if (res) {
          this.dialogRef.close(true);
          this.ancForm.reset();
        }
      });
    }
  }

  selectPCTSPrefix(event: any) {
    this.pctsPrefix = event;
  }

  toReset() {
    this.ancForm.reset();
  }
  toClose() {
    this.dialogRef.close(false);
  }
}
