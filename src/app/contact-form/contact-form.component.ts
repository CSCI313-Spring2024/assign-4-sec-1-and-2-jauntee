import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Needed for ngModel
import { CommonModule } from '@angular/common';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent {
  @Input() contact: Contact | null = null;
  @Input() isEditMode = false;
  @Output() save = new EventEmitter<Contact>();

  localContact: Contact = {
    id: 0,
    fName: '',
    lName: '',
    phoneNumber: '',
    email: ''
  };

  ngOnChanges() {
    if (this.contact) {
      this.localContact = { ...this.contact };
    }
  }

  onSubmit() {
    this.save.emit(this.localContact);
    this.localContact = {
      id: 0,
      fName: '',
      lName: '',
      phoneNumber: '',
      email: ''
    };
  }
}
