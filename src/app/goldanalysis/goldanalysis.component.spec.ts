import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldanalysisComponent } from './goldanalysis.component';

describe('GoldanalysisComponent', () => {
  let component: GoldanalysisComponent;
  let fixture: ComponentFixture<GoldanalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoldanalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoldanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
