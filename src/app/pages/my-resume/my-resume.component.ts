import { Component, ElementRef, HostBinding, Renderer2, ViewChild } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ThemeService } from '../../theme.service';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { CommonModule } from '@angular/common';

// import html2pdf from 'html2pdf.js';


@Component({
  selector: 'app-my-resume',
  standalone: true,
  imports: [
    MatCardModule, 
    MatButtonModule, 
    FontAwesomeModule,
    CommonModule
  ],
  providers: [ThemeService],
  templateUrl: './my-resume.component.html',
  styleUrl: './my-resume.component.scss'
})


export class MyResumeComponent {

  isDarkMode: boolean;
  isDarkTheme = false;
  darkMode: boolean = false;

  @HostBinding('class') get themeMode() {
    return this.darkMode ? 'dark-theme' : '';
  }
  @ViewChild('pdfTable') pdfTable: ElementRef;
  constructor(private themeService: ThemeService,
    private renderer: Renderer2) {
    this.isDarkMode = this.themeService.isDarkMode() 
    this.pdfTable = {} as ElementRef;

  }

  ngOnInit(): void {
  }

  toggleTheme() {
    this.darkMode = !this.darkMode;
    const cv = document.getElementById('contentToConvert');
    if (this.darkMode) {
      cv?.classList.add('dark-theme');
    } else {
      cv?.classList.remove('dark-theme');
    }
  }

  downloadAsPDF(){
    let data = document.getElementById('contentToConvert');
    let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
    const source = document.getElementById('contentToConvert');
    if (source) {
      html2canvas(source as HTMLCanvasElement, {
        ignoreElements: (element) => {
          return element.id === 'theme-btn' || element.id === 'pdf-button';
        }
      })
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/jpeg', 1.0);
          const pageWidth = pdf.internal.pageSize.getWidth();
          const pageHeight = pdf.internal.pageSize.getHeight();
          const imgWidth = canvas.width;
          const imgHeight = canvas.height;
          const ratio = Math.min(pageWidth / imgWidth, pageHeight / imgHeight);
    
          const newWidth = imgWidth * ratio;
          const newHeight = imgHeight * ratio;
    
          pdf.addImage(imgData, 'JPEG', 0, 0, newWidth, newHeight);
        const pdfWindow = window.open('', '_blank');
        pdfWindow?.document.write('<html><body><embed src="' + pdf.output('datauristring') + '" type="application/pdf" width="100%" height="90%"></embed></body></html>');    
        pdf.save('Anjali.pdf'); // Generated PDF
        });
    } else {
      console.error("Element with ID 'contentToConvert' not found.");
    }
  }


  socialLink(type: string){
    if(type == 'linkedin'){
      window.open('https://www.linkedin.com/in/anjali-sen-76997717a/', '_blank');

    }else{
      window.open('https://github.com/sAnjali12', '_blank')
    }
  }



}