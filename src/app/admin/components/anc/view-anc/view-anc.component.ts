import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-anc',
  templateUrl: './view-anc.component.html',
  styleUrl: './view-anc.component.scss',
})
export class ViewAncComponent {
  ancDetail: any;
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      const viewData = navigation.extras.state['viewData'];
      this.ancDetail = viewData;
    }
  }
  toClose() {
    this.router.navigate(['/anc']);
  }
}
