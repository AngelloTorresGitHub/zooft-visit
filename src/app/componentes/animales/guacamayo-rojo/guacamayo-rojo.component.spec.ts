import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuacamayoRojoComponent } from './guacamayo-rojo.component';

describe('GuacamayoRojoComponent', () => {
  let component: GuacamayoRojoComponent;
  let fixture: ComponentFixture<GuacamayoRojoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuacamayoRojoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuacamayoRojoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
