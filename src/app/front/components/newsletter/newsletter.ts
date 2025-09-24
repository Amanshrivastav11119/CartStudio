import { Component } from '@angular/core';

@Component({
  selector: 'app-newsletter',
   standalone: false,
  templateUrl: './newsletter.html',
  styleUrl: './newsletter.css'
})
export class Newsletter {
  message: string = '';
  messageColor: string = 'white';

  subscribeNewsletter(email: string) {
    const emailTrimmed = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailTrimmed) {
      this.message = "Please enter your email.";
      this.messageColor = "yellow";
      return;
    }

    if (!emailRegex.test(emailTrimmed)) {
      this.message = "Please enter a valid email.";
      this.messageColor = "yellow";
      return;
    }

    // Simulate subscription success
    this.message = "Thank you for subscribing!";
    this.messageColor = "lightgreen";

    // TODO: Send emailTrimmed to your backend API
    console.log("Subscribed email:", emailTrimmed);
  }
}
