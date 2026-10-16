import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonaComponents } from './components/persona-components/persona-components';

@Component({
  imports: [RouterOutlet, PersonaComponents],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('app_tres');
}
