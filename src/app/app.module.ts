import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DformComponent } from './components/dform/dform.component';
import { TestfilterComponent } from './components/testfilter/testfilter.component';
import { FilterPipe} from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DformComponent, FilterPipe,
    TestfilterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule, ReactiveFormsModule, FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
