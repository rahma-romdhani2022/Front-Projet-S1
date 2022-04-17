import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from './gards/service.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test1TP2';
  constructor(private service: UserService) { }

  ngOnInit() {
    
  }
}