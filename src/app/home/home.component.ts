import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private _currentUser: string;
  get currentUser() {
    return this._currentUser;
  }
  private _showFiller = false;
  get showFiller() {
    return this._showFiller;
  }
  constructor(private authService: AuthService) { 
    this._currentUser = this.authService.userDetail.username;
  }

  ngOnInit(): void {

  }

  onShowFiller() {
    this._showFiller = !this._showFiller;
  }

}