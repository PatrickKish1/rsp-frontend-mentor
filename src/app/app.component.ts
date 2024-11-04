import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RspPageComponent } from "./rsp-page/rsp-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RspPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rps-frontend-mentor';
}
