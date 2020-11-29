import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiburonToroComponent } from './tiburon-toro.component';

describe('TiburonToroComponent', () => {
  let component: TiburonToroComponent;
  let fixture: ComponentFixture<TiburonToroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiburonToroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiburonToroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
