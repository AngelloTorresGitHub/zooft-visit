import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RinoceronteBlancoComponent } from './rinoceronte-blanco.component';

describe('RinoceronteBlancoComponent', () => {
  let component: RinoceronteBlancoComponent;
  let fixture: ComponentFixture<RinoceronteBlancoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RinoceronteBlancoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RinoceronteBlancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
