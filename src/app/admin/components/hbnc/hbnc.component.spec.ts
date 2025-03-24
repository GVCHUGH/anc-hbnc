import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HbncComponent } from './hbnc.component';

describe('HbncComponent', () => {
  let component: HbncComponent;
  let fixture: ComponentFixture<HbncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HbncComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HbncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
