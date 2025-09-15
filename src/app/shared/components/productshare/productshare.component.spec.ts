import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductshareComponent } from './productshare.component';

describe('ProductshareComponent', () => {
  let component: ProductshareComponent;
  let fixture: ComponentFixture<ProductshareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductshareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductshareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
