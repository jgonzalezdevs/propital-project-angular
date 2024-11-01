import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'propital-project-angular';
  images = [
    { 'src': 'https://img.indiafilings.com/learn/wp-content/uploads/2015/10/12011006/Real-Estate-Agent-Business-India.jpg', 'alt': 'First slide' },
  ];
  constructor(public router: Router) {}
  ngOnInit(): void {
  }
}
