import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFormBuilderComponent } from './basic-form-builder.component';

describe('BasicFormBuilderComponent', () => {
  let component: BasicFormBuilderComponent;
  let fixture: ComponentFixture<BasicFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicFormBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
