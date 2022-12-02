import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicFormBuilderRoutingModule } from './basic-form-builder-routing.module';
import { BasicFormBuilderComponent } from './basic-form-builder.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { FormAnswersComponent } from './components/form-answers/form-answers.component';
import { SharedModule } from '../shared/shared.module';
import { FormBuilderModalComponent } from './components/form-builder-modal/form-builder-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BasicFormBuilderComponent,
    FormBuilderComponent,
    FormAnswersComponent,
    FormBuilderModalComponent
  ],
  imports: [
    CommonModule,
    BasicFormBuilderRoutingModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    SharedModule
  ]
})
export class BasicFormBuilderModule { }
