import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicFormBuilderComponent } from './basic-form-builder.component';
import { FormAnswersComponent } from './components/form-answers/form-answers.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';

const routes: Routes = [
  {
    path: '',
    component: BasicFormBuilderComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'builder'
      },
      {
        path: 'builder',
        component: FormBuilderComponent
      },
      {
        path: 'answers',
        component: FormAnswersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicFormBuilderRoutingModule { }
