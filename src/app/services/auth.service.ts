import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    // Check if localStorage is available
    if (typeof localStorage !== 'undefined') {
      const isAuthenticated = localStorage.getItem('token');
      if (!isAuthenticated) {
        // If user is not authenticated, redirect to login page
        this.router.navigate(['/login']);
        return false;
      }
      // If user is authenticated, allow access
      return true;
    } else {
      // For safety, you might also want to redirect to login or some fallback page
      this.router.navigate(['/login']);
      return false;
    }
  }
}
