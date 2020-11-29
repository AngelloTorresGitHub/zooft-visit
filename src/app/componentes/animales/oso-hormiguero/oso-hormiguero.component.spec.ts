import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsoHormigueroComponent } from './oso-hormiguero.component';

describe('OsoHormigueroComponent', () => {
  let component: OsoHormigueroComponent;
  let fixture: ComponentFixture<OsoHormigueroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsoHormigueroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsoHormigueroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
