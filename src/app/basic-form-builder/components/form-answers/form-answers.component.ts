import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilderService } from '../../services/form-builder.service';

@Component({
  selector: 'app-form-answers',
  templateUrl: './form-answers.component.html',
  styleUrls: ['./form-answers.component.scss']
})
export class FormAnswersComponent implements OnInit, OnDestroy {
  private sub: Subscription = new Subscription();
  answers = [];

  constructor(
    private formBuilderService: FormBuilderService
  ) { }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub.add(
      this.formBuilderService.answers$.subscribe(data => {
        this.answers = data.questions;
      })
    );
  }

}
