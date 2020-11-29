import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinceIbericoComponent } from './lince-iberico.component';

describe('LinceIbericoComponent', () => {
  let component: LinceIbericoComponent;
  let fixture: ComponentFixture<LinceIbericoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinceIbericoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinceIbericoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
