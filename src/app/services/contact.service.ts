
import { Injectable, signal } from '@angular/core';
import { Contact } from '../contact.model';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private contactsSignal = signal<Contact[]>([
  ]);

  selectedContact = signal<Contact | null>(null);
  contacts = this.contactsSignal.asReadonly();

  addContact(contact: Contact) {
    this.contactsSignal.update(contacts => [...contacts, contact]);
  }

  deleteContact(id: number) {
    this.contactsSignal.update(contacts =>
      contacts.filter(contact => contact.id !== id)
    );
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
    this.selectedContact.set(contact);
  }
}