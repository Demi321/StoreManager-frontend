import { Component } from '@angular/core';
import { MenuContainer } from "../menu-container/menu-container";
import { WorkArea } from "../work-area/work-area";

@Component({
  selector: 'app-interfaz-view',
  imports: [MenuContainer, WorkArea],
  templateUrl: './interfaz-view.html',
  styleUrl: './interfaz-view.css',
})
export class InterfazView {}
