import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IbisSagradoComponent } from './ibis-sagrado.component';

describe('IbisSagradoComponent', () => {
  let component: IbisSagradoComponent;
  let fixture: ComponentFixture<IbisSagradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbisSagradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbisSagradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
