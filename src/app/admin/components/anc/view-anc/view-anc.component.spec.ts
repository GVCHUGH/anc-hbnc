import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAncComponent } from './view-anc.component';

describe('ViewAncComponent', () => {
  let component: ViewAncComponent;
  let fixture: ComponentFixture<ViewAncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAncComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
