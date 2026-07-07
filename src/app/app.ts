import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private router: Router) {}
  protected readonly title = signal('Tools');

  redirectToQR(){
    this.router.navigate(['/qr']);  // redirect to QR Generator page.
  }
}
