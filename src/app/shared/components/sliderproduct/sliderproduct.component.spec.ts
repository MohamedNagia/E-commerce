import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderproductComponent } from './sliderproduct.component';

describe('SliderproductComponent', () => {
  let component: SliderproductComponent;
  let fixture: ComponentFixture<SliderproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderproductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
