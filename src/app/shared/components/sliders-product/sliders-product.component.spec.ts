import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidersProductComponent } from './sliders-product.component';

describe('SlidersProductComponent', () => {
  let component: SlidersProductComponent;
  let fixture: ComponentFixture<SlidersProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlidersProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidersProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
