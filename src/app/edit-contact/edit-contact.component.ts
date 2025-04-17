import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { Contact } from '../contact.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-contact',
  imports: [FormsModule],
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  contact: Contact | undefined;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.contact = this.contactService.getContact(id);
  }

  onSubmit() {
    if (this.contact) {
      this.contactService.updateContact(this.contact.id, this.contact);
      this.router.navigate(['/']);
    }
  }
}