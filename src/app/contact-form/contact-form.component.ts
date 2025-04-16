import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent {
  @Input() contactToEdit: Contact | null = null;  // Input to bind to contact data
  @Output() submitContact = new EventEmitter<Contact>();  // Output to send back the form data

  contact: Contact = {
    fName: '',
    lName: '',
    phoneNumber: '',
    email: ''
  };

  ngOnChanges() {
    // When contactToEdit changes, populate the form with contact details
    if (this.contactToEdit) {
      this.contact = { ...this.contactToEdit }; // Clone the contact to avoid direct mutation
    }
  }

  submit() {
    this.submitContact.emit(this.contact);  // Emit the contact object to parent component
  }
}
}