import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHbncComponent } from './add-hbnc.component';

describe('AddHbncComponent', () => {
  let component: AddHbncComponent;
  let fixture: ComponentFixture<AddHbncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddHbncComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddHbncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
