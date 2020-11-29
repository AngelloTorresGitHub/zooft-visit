import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoboGrisComponent } from './lobo-gris.component';

describe('LoboGrisComponent', () => {
  let component: LoboGrisComponent;
  let fixture: ComponentFixture<LoboGrisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoboGrisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoboGrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
