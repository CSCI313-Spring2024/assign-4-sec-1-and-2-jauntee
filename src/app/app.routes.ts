import { Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactBookComponent } from './contact-book/contact-book.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

export const routes: Routes = [
  {
    path: '',
    component: ContactListComponent,
    title: 'Contact List'
  },
  {
    path: 'book',
    component: ContactBookComponent,
    title: 'Contact Book'
  },
  {
    path: 'add',
    component: AddContactComponent,
    title: 'Add Contact'
  },
  {
    path: 'edit/:id',
    component: EditContactComponent,
    title: 'Edit Contact'
  },

  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
