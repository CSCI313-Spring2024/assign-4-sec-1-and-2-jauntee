import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { Contact } from '../contact.model';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  imports: [FormsModule],
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  contact: Contact = {
    id: 0,
    fName: '',
    lName: '',
    phoneNumber: '',
    email: ''
  };

  constructor(private contactService: ContactService, private router: Router) {}

  onSubmit() {
    this.contactService.addContact(this.contact);
    this.router.navigate(['/']);
  }
}