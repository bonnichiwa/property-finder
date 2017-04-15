import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfCarouselComponent } from './pf-carousel.component';

describe('PfCarouselComponent', () => {
  let component: PfCarouselComponent;
  let fixture: ComponentFixture<PfCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
