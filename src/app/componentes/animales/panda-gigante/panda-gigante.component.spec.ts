import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PandaGiganteComponent } from './panda-gigante.component';

describe('PandaGiganteComponent', () => {
  let component: PandaGiganteComponent;
  let fixture: ComponentFixture<PandaGiganteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PandaGiganteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PandaGiganteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
