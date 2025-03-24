import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAncComponent } from './add-anc.component';

describe('AddAncComponent', () => {
  let component: AddAncComponent;
  let fixture: ComponentFixture<AddAncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAncComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
