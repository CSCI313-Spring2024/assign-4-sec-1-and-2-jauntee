import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';  // Import RouterModule
import { ContactBookComponent } from './contact-book/contact-book.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet, ContactBookComponent],  // Add RouterModule here
  templateUrl: './app.component.html'
})
export class AppComponent {
  title!: string;
}