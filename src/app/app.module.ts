// ===== app.module.ts =====
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // <-- Import FormsModule

import { AppComponent } from './app.component';
import { ContactBookComponent } from './contact-book/contact-book.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactService } from './services/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactBookComponent,
    ContactFormComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // <-- Add FormsModule here
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule {}
