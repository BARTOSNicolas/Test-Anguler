import { Component } from '@angular/core';
import { MeteoService } from '../../services/meteo.service';

@Component({
  selector: 'app-http-api',
  imports: [],
  templateUrl: './http-api.html',
  styleUrl: './http-api.css'
})
export class HttpApi {
  title:string='apiData';
  newData:any;
constructor(private apiService:MeteoService){}

ngOnInit(){
  this.apiService.getData().subscribe(responseApi=>{
    this.newData=responseApi;
    console.log(this.newData);
    console.log(this.newData.city_info.name);
  })
}
}
