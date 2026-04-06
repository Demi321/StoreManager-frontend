import { Component } from '@angular/core';
import { Menu } from "../menu/menu";
import {RouterLink} from '@angular/router';
@Component({
  selector: 'app-menu-container',
  imports: [Menu],
  templateUrl: './menu-container.html',
  styleUrl: './menu-container.css',
})
export class MenuContainer {}
