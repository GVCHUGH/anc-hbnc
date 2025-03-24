import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AncComponent } from './anc.component';

describe('AncComponent', () => {
  let component: AncComponent;
  let fixture: ComponentFixture<AncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AncComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
