import { Component, inject, Input } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  
  private router = inject(Router);
  @Input() icon:string="";
  @Input() title:string="";
  @Input() route:string="";

   navigate() {
    
    this.router.navigate([this.route]);
   }
}
