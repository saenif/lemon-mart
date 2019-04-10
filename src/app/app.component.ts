import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary" fxLayoutGap="8px">
      <a mat-icon-button routerLink="/home">
        <mat-icon svgIcon="lemon"></mat-icon>
        <span class="mat-h2">LemonMart</span>
      </a>
      <span class="flex-spacer"></span>
      <button mat-mini-fab routerLink="/user/profile" matTooltip="Profile" aria-label="User Profile">
        <mat-icon>account_circle</mat-icon>
      </button>
      <button mat-mini-fab routerLink="/user/logout" matTooltip="logout" aria-label="Logout">
        <mat-icon>lock_open</mat-icon>
      </button>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'lemon-mart';
}
