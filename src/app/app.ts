import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title ='angular-all-in-one';
  footerUrl = 'https://github.com/prakashbisht20';
  footerLink = 'Developed By: Prakash Bisht';
}
