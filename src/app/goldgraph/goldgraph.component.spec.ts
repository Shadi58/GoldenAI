import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldgraphComponent } from './goldgraph.component';

describe('GoldgraphComponent', () => {
  let component: GoldgraphComponent;
  let fixture: ComponentFixture<GoldgraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoldgraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoldgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
