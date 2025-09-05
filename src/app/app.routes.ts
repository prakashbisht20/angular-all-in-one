import { Routes } from '@angular/router';
import { App } from './app';
import { TodoList } from './todo-list/todo-list';
import { RxjsList } from './rxjs-list/rxjs-list';
import { ReactiveForm } from './angular-forms/reactive-form/reactive-form';
import { AngularForms } from './angular-forms/angular-forms';
import { TemplateForm } from './angular-forms/template-form/template-form';
import { Main } from './main/main';

export const routes: Routes = [
    { path: '', component: Main },
    { path: 'todo', component: TodoList },
    { path: 'rxjs', component: RxjsList },
    {
        path: 'angular-forms', component: AngularForms,
        children: [           
            { path: 'reactive-form', component: ReactiveForm },
            { path: 'template-form', component: TemplateForm },
        ],
    }
];
