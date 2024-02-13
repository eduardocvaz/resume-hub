import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioEntryComponent } from './portfolio-entry.component';

describe('PortifolioEntryComponent', () => {
  let component: PortfolioEntryComponent;
  let fixture: ComponentFixture<PortfolioEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioEntryComponent]
    });
    fixture = TestBed.createComponent(PortfolioEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
