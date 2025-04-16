import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
})
export class ContactListComponent {
  @Input() contacts: Contact[] = [];
  @Output() editContact = new EventEmitter<Contact>();
  @Output() deleteContact = new EventEmitter<Contact>();

  onEdit(contact: Contact) {
    this.editContact.emit(contact);
  }

  onDelete(contact: Contact) {
    this.deleteContact.emit(contact);
  }
}