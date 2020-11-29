import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapirAmazonicoComponent } from './tapir-amazonico.component';

describe('TapirAmazonicoComponent', () => {
  let component: TapirAmazonicoComponent;
  let fixture: ComponentFixture<TapirAmazonicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapirAmazonicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapirAmazonicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
