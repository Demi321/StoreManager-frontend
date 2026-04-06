import { Component, signal } from '@angular/core';
import { MenuContainer } from "./menu-container/menu-container";
import { RouterOutlet } from "@angular/router";
import { Frame } from "./frame/frame";

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, Frame],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('StoreManager-fontend');
}
