import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AnswerOption, Question } from '../../models/question.model';
import { FormBuilderService } from '../../services/form-builder.service';
import { FormBuilderModalComponent } from '../form-builder-modal/form-builder-modal.component';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  modalRef: BsModalRef | undefined;
  form!: FormGroup;
  attemptedSubmit = false;

  constructor(
    private modalService: BsModalService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilderService: FormBuilderService
    ) { }

  ngOnInit(): void {
    this.form = this.buildForm();
  }

  private buildForm() {
    return this.fb.group({
      questions: this.fb.array([])
    });
  }

  onAddNewQuestion() {
    this.modalRef = this.modalService.show(FormBuilderModalComponent, {
      ignoreBackdropClick: true,
      initialState: {
        submitQuestionCallback: (question: Question) => {
          this.addData(question);
        }
      },
      class: 'modal-lg'
    });
  }

  addData(question: Question) {
    const questionForm = this.fb.group({
      questionType: [question.questionType],
      questionTitle: [question.questionTitle],
      answerArea: [''],
      answerOptions: this.fb.array(this.buildAnswerOptions(question.answerOptions || [])),
      isRequiredFields: [question.isRequiredFields]
    });
    this.questions.push(questionForm);
  }

  get questions() {
    return this.form.controls["questions"] as FormArray;
  }

  getAnswerOption(form: any) {
    form = form as FormGroup;
    return form.controls["answerOptions"] as FormArray;
  }

  buildAnswerOptions(answerOptions: AnswerOption[]) {
    const answerOptionForms: FormGroup[] = [];
    answerOptions.forEach(element => {
      answerOptionForms.push(this.fb.group({
        option: [],
        optionLabel: [element.answerOption]
      }));
    });
    return answerOptionForms;
  }

  onSubmit() {
    this.attemptedSubmit = true;
    if (!this.form.valid) { return; }
    this.attemptedSubmit = false;
    this.formBuilderService.updateAnswers(this.form.value);
    this.router.navigate(['../answers'], {relativeTo: this.activatedRoute});
  }
}
