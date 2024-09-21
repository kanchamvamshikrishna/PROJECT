import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
constructor(private http:HttpClient){

}

data:any=null;

getData(){
  this.http.get("https://fakestoreapi.com/products?limit=5")
  .subscribe((data)=>{
    this.data=data
  })

}
}
