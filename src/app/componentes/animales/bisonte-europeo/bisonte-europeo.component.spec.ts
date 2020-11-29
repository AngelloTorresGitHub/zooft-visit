import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BisonteEuropeoComponent } from './bisonte-europeo.component';

describe('BisonteEuropeoComponent', () => {
  let component: BisonteEuropeoComponent;
  let fixture: ComponentFixture<BisonteEuropeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BisonteEuropeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BisonteEuropeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
