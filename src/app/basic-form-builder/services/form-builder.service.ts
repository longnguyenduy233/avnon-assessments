import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FormBuilderService {

    private answers = new BehaviorSubject<any>([]);

    constructor() { }

    updateAnswers(answers: any) {
        this.answers.next(answers);
    }

    get answers$() {
        return this.answers.asObservable();
    }
}
