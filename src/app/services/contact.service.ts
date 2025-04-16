
import { Injectable, signal } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private contactsSignal = signal<Contact[]>([
    { fName: 'John', lName: 'Adams', phoneNumber: '701-000-1000', email: 'john.adams@example.com' },
    { fName: 'Mary', lName: 'Jane', phoneNumber: '701-000-1000', email: 'mary.jane@example.com' },
    { fName: 'Zach', lName: 'Hill', phoneNumber: '916-555-4182', email: 'zachhill@example.com' },
    { fName: 'Charli', lName: 'XCX', phoneNumber: '419-555-8912', email: 'charlIXCX@example.com' }
  ]);

  selectedContact = signal<Contact | null>(null);
  contacts = this.contactsSignal.asReadonly();

  addContact(contact: Contact) {
    this.contactsSignal.update(contacts => [...contacts, contact]);
  }

  deleteContact(index: number) {
    this.contactsSignal.update(contacts => contacts.filter((_, i) => i !== index));
  }

  updateContact(index: number, updated: Contact) {
    this.contactsSignal.update(contacts => {
      const copy = [...contacts];
      copy[index] = updated;
      return copy;
    });
  }

  getContact(index: number): Contact | undefined {
    return this.contactsSignal()[index];
  }

  setContactToEdit(contact: Contact) {
    this.selectedContact.set(contact); // Update the selectedContact signal
  }
}