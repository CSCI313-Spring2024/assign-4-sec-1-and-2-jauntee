import { Component } from '@angular/core';
import { Contact } from '../contact.model';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';
import { ContactListComponent } from '../contact-list/contact-list.component';

@Component({
  selector: 'app-contact-book',
  standalone: true,
  imports: [CommonModule, ContactFormComponent, 
    ContactListComponent, FormsModule],
  templateUrl: './contact-book.component.html'
})
export class ContactBookComponent {
  contacts: Contact[] = [
    { id: 1, fName: 'John', lName: 'Adams', phoneNumber: '701-000-1000', email: 'john.adams@example.com' },
    { id: 2, fName: 'Mary', lName: 'Jane', phoneNumber: '701-000-1000', email: 'mary.jane@example.com' },
    { id: 3, fName: 'Zach', lName: 'Hill', phoneNumber: '916-555-4182', email: 'zachhill@example.com' },
    { id: 4, fName: 'Charli', lName: 'XCX', phoneNumber: '419-555-8912', email: 'charlIXCX@example.com' }
  ];
  selectedContact: Contact | null = null;
  isEditMode = false;
  private nextId = 1;

  onSave(contact: Contact) {
    if (this.isEditMode && this.selectedContact) {
      const index = this.contacts.findIndex(c => c.id === this.selectedContact!.id);
      if (index !== -1) {
        this.contacts[index] = { ...contact, id: this.selectedContact.id };
      }
    } else {
      contact.id = this.nextId++;
      this.contacts.push({ ...contact });
    }
    this.resetForm();
  }

  onEdit(contact: Contact) {
    this.selectedContact = { ...contact };
    this.isEditMode = true;
  }

  onDelete(id: number) {
    this.contacts = this.contacts.filter(c => c.id !== id);
    if (this.selectedContact?.id === id) {
      this.resetForm();
    }
  }

  resetForm() {
    this.selectedContact = null;
    this.isEditMode = false;
  }
}
