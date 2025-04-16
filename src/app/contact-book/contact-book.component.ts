// ===== contact-book.component.ts =====
import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-contact-book',
  templateUrl: './contact-book.component.html',
})
export class ContactBookComponent implements OnInit {
  contacts: Contact[] = [];
  contactToEdit: Contact | null = null;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    // Set contacts list
    this.contacts = this.contactService.contacts();
    
    // Subscribe to selectedContact signal
    this.contactService.selectedContact.subscribe((contact: Contact | null) => {
      this.contactToEdit = contact;
    });
  }

  // Call this method when user selects a contact to edit
  onEdit(contact: Contact) {
    this.contactService.setContactToEdit(contact);  // Set the contact for editing
  }

  // Handle delete
  onDelete(contact: Contact) {
    const index = this.contacts.indexOf(contact);
    this.contactService.deleteContact(index);
  }

  // Handle submit (add or update)
  onSubmit(contact: Contact) {
    if (this.contactToEdit) {
      const index = this.contacts.indexOf(this.contactToEdit);
      this.contactService.updateContact(index, contact);  // Update the contact
    } else {
      this.contactService.addContact(contact);  // Add the contact
    }
  }
}
