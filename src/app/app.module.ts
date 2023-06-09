import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AddStudentsComponent } from './add-students/add-students.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { EditStudentsComponent } from './edit-students/edit-students.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginStudentComponent } from './login-student/login-student.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentsComponent,
    ListStudentsComponent,
    EditStudentsComponent,
    LoginStudentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
