import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TigreBengalaComponent } from './tigre-bengala.component';

describe('TigreBengalaComponent', () => {
  let component: TigreBengalaComponent;
  let fixture: ComponentFixture<TigreBengalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TigreBengalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TigreBengalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
