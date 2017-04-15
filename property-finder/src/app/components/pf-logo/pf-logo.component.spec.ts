import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfLogoComponent } from './pf-logo.component';

describe('PfLogoComponent', () => {
  let component: PfLogoComponent;
  let fixture: ComponentFixture<PfLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
