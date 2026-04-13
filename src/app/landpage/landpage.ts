import { Component, inject, OnInit, } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { LandpageService } from './service/landpage-service';

@Component({
  selector: 'app-landpage',
  imports: [AvatarModule, BadgeModule, MenubarModule, InputTextModule,
    RippleModule, CommonModule, PanelModule, DialogModule, ButtonModule,
    SelectModule, FormsModule],
  templateUrl: './landpage.html',
  styleUrl: './landpage.css',
})
export class Landpage implements OnInit {

  items: MenuItem[] | undefined;
  visible: boolean = false; 
  sectors: any[] | undefined;
  selectedSector:any[] | undefined; 
  
  private landpageService = inject(LandpageService);

  showDialog() {
    this.visible = true;
  }

  ngOnInit() {
    
    this.landpageService.getAllSectors().subscribe(data=>{
    
      this.sectors = data.map(item=>{
        return {
            name:item.name,
            code:item.id
          }
        })

    });


    this.items = [
      {
        label: 'Store-Manager',
        icon: 'pi pi-home'
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        badge: '3',
        items: [
          {
            label: 'Core',
            icon: 'pi pi-bolt',
            shortcut: '⌘+S'
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server',
            shortcut: '⌘+B'
          },
          {
            separator: true
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil',
            shortcut: '⌘+U'
          }
        ]
      },
      {
        label: 'Login',
        icon: 'pi pi-user'
      },
      {
        label: 'Registro',
        icon: 'pi pi-user-plus'
      },
    ];
 
  }
}
