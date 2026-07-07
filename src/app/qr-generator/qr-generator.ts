import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-qr-generator',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './qr-generator.html',
  styleUrl: './qr-generator.css',
})
export class QrGenerator {
  url = '';
  qrCodeUrl = '';

  generateQR(): void {
    if (!this.url.trim()) {
      alert('Please enter a URL.');
      return;
    }

    this.qrCodeUrl =
      `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(this.url)}`;
  }

  async downloadQR(): Promise<void> {
    if (!this.qrCodeUrl) return;

    try {
      const response = await fetch(this.qrCodeUrl);
      const blob = await response.blob();

      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');

      link.href = downloadUrl;
      link.download = 'qr-code.png';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(downloadUrl);
    } catch {
      alert('Unable to download QR Code.');
    }
  }
}
