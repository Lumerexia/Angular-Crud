import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentsComponent } from './add-students/add-students.component';
import { EditStudentsComponent } from './edit-students/edit-students.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { LoginStudentComponent } from './login-student/login-student.component';



export const routes: Routes = [
    
    { path: '', component: ListStudentsComponent, pathMatch: 'full' },
    { path: 'home', component: ListStudentsComponent },
    { path: 'add-student', component: AddStudentsComponent },
    { path: 'edit/:id', component: EditStudentsComponent },
    { path: 'login-student', component: LoginStudentComponent },

];

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
  })

  export class AppRoutingModule { }

