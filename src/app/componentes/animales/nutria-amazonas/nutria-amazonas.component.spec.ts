import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutriaAmazonasComponent } from './nutria-amazonas.component';

describe('NutriaAmazonasComponent', () => {
  let component: NutriaAmazonasComponent;
  let fixture: ComponentFixture<NutriaAmazonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutriaAmazonasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutriaAmazonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
