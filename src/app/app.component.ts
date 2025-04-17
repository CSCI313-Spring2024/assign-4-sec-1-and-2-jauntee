import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ContactBookComponent } from './contact-book/contact-book.component';


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet, ContactBookComponent,],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title!: string;
}