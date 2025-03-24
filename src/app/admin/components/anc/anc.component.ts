import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddAncComponent } from './add-anc/add-anc.component';
import { AncService } from '../../service/anc.service';
import { DeleteConfirmationComponent } from '../../../shared/components/delete-confirmation/delete-confirmation.component';
import { AddHbncComponent } from './add-hbnc/add-hbnc.component';

@Component({
  selector: 'app-anc',
  templateUrl: './anc.component.html',
  styleUrl: './anc.component.scss',
})
export class AncComponent {
  constructor(private dialog: MatDialog, private ancService: AncService) {}

  ngOnInit() {
    this.getAllANC();
  }

  toAdd() {
    this.dialog
      .open(AddAncComponent, {
        data: {
          isEdit: false,
        },
      })
      .afterClosed()
      .subscribe((res: any) => {
        if (res) {
          this.getAllANC();
        }
      });
  }

  ancData: any = [];
  getAllANC() {
    this.ancService.getANC().subscribe((res: any) => {
      this.ancData = res;
    });
  }

  toEdit(data: any) {
    this.dialog
      .open(AddAncComponent, {
        data: {
          isEdit: true,
          ancData: data,
        },
      })
      .afterClosed()
      .subscribe((res: any) => {
        if (res) {
          this.getAllANC();
        }
      });
  }
  toView(data: any) {}
  toDelete(data: any) {
    this.dialog
      .open(DeleteConfirmationComponent, {
        data: {
          deleteData: data,
        },
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.ancService.deleteANC(data.id).subscribe((res: any) => {
            this.getAllANC();
          });
        }
      });
  }
  toHBNC(data: any) {
    this.dialog
      .open(AddHbncComponent, {
        data: {
          ancData: data,
        },
      })
      .afterClosed()
      .subscribe((res) => {
        console.log(res);
        if (res) {
          this.getAllANC();
        }
      });
  }
}
