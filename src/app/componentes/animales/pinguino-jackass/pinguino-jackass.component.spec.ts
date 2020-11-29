import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinguinoJackassComponent } from './pinguino-jackass.component';

describe('PinguinoJackassComponent', () => {
  let component: PinguinoJackassComponent;
  let fixture: ComponentFixture<PinguinoJackassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinguinoJackassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinguinoJackassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
