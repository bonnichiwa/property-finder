import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfNameComponent } from './pf-name.component';

describe('PfNameComponent', () => {
  let component: PfNameComponent;
  let fixture: ComponentFixture<PfNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
