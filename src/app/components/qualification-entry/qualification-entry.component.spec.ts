import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationEntryComponent } from './qualification-entry.component';

describe('QualificationEntryComponent', () => {
  let component: QualificationEntryComponent;
  let fixture: ComponentFixture<QualificationEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QualificationEntryComponent]
    });
    fixture = TestBed.createComponent(QualificationEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
