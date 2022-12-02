import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-form-builder-modal',
  templateUrl: './form-builder-modal.component.html',
  styleUrls: ['./form-builder-modal.component.scss']
})
export class FormBuilderModalComponent implements OnInit {
  @Input()
  submitQuestionCallback!: ((question: Question) => any);

  form!: FormGroup;
  questionTypeItems = [
    {
      label: 'Checkbox List',
      value: 'checkbox'
    },
    {
      label: 'Paragraph',
      value: 'paragraph'
    }
  ];
  attemptedSubmit: boolean = false;

  constructor(
    private fb: FormBuilder,
    public modalRef: BsModalRef
  ) { }

  ngOnInit(): void {
    this.form = this.buildForm();
  }

  private buildForm() {
    return this.fb.group({
      questionType: ['checkbox'],
      questionTitle: ['', [Validators.required]],
      answerOptions: this.fb.array([
        this.fb.group({
          answerOption: ['']
        }),
        this.fb.group({
          answerOption: ['']
        })
      ]),
      isAllowUserSpecifyTheirOwnAnswer: [true],
      isRequiredFields: [true],
    });
  }

  get answerOptions() {
    return this.form.controls["answerOptions"] as FormArray;
  }

  addAnswerOption() {
    const answerOption = this.fb.group({
      answerOption: ['']
    });
    this.answerOptions.push(answerOption);
  }

  onSubmit() {
    this.attemptedSubmit = true;
    if (!this.form.valid) { return; }
    this.modalRef.hide();
    this.attemptedSubmit = false;
    const question = this.form.value;
    this.submitQuestionCallback(question);
  }

}
