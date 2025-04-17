import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  templateUrl: './contact-list.component.html',
  imports: [CommonModule],
})
export class ContactListComponent {
  @Input() contacts: Contact[] = [];
  @Output() edit = new EventEmitter<Contact>();
  @Output() delete = new EventEmitter<number>();

  onEdit(contact: Contact) {
    this.edit.emit(contact);
  }

  onDelete(id: number) {
    this.delete.emit(id);
  }
}
