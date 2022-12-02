import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderModalComponent } from './form-builder-modal.component';

describe('FormBuilderModalComponent', () => {
  let component: FormBuilderModalComponent;
  let fixture: ComponentFixture<FormBuilderModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBuilderModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBuilderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
