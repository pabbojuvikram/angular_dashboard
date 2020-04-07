import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../_services/user.service';
import { User } from '../_models/index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: User;
  users: User[] = []
    
  constructor(private userService: UserService){
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

  }
  ngOnInit() {
    console.log(this.currentUser);
 
  }
  private loadAllUsers() {
    this.userService.getAll().subscribe(users => { this.users = users; });
  }
 
 }

