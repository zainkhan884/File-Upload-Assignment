import { Component,OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  uploadedFiles!: Array<File>;

  // http: any;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'File-Upload-Assignment';
  constructor(private http: HttpClient) { }

  fileChange(element: { target: { files: any; }; }) {
    this.uploadedFiles = element.target.files;
  }

  upload() {
    let formData = new FormData();
    for (var i = 0; i < this.uploadedFiles.length; i++) {
        formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
    }
    this.http.post('/api/upload', formData)
    .subscribe((response: any) => {
         console.log('File Response - ', response);
    })
  }
}
