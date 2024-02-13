import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationEntryComponent } from './certification-entry.component';

describe('CertificationEntryComponent', () => {
  let component: CertificationEntryComponent;
  let fixture: ComponentFixture<CertificationEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificationEntryComponent]
    });
    fixture = TestBed.createComponent(CertificationEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
