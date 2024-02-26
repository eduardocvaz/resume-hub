import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorePortfolioComponent } from './explore-portfolio.component';

describe('ExplorePortfolioComponent', () => {
  let component: ExplorePortfolioComponent;
  let fixture: ComponentFixture<ExplorePortfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExplorePortfolioComponent]
    });
    fixture = TestBed.createComponent(ExplorePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
