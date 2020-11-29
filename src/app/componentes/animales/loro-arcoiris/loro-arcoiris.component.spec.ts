import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoroArcoirisComponent } from './loro-arcoiris.component';

describe('LoroArcoirisComponent', () => {
  let component: LoroArcoirisComponent;
  let fixture: ComponentFixture<LoroArcoirisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoroArcoirisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoroArcoirisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
