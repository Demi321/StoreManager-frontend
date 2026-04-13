import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AppConstantes } from '../../app-constants/app-constantes';

@Injectable({
  providedIn: 'root',
})
export class LandpageService {

  private http = inject(HttpClient);


  getAllSectors() {
    return this.http.get<any[]>(AppConstantes.API_URL+"sectors")
       
  }
}
