import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth = false;
  authSubscription : Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
   this.authSubscription = this.authService.authChange.subscribe(res => {
      this.isAuth = res;
    })
  }

  onToggleSidenav(){
      this.sidenavToggle.emit();
  }

ngOnDestroy(){
    this.authSubscription.unsubscribe();
  }
}
