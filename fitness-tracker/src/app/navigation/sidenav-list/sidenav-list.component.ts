import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();
  authSubscription: Subscription;
  isAuth = false;
  constructor(private authService: AuthService) {
    this.authSubscription = this.authService.authChange.subscribe(res => {
      this.isAuth = res;
    })
  }

  ngOnInit() {
  }
  onLogout() {
    this.onClose();
    this.authService.logout();
  }
  onClose() {
    this.closeSidenav.emit();
  }

}
