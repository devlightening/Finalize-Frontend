import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product}  from '../models/product';
import { ListResponseModule } from '../models/listResponseModule';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl='https://localhost:44363/api/products/getall';
  constructor(private httpClient:HttpClient) { }
  getProducts():Observable<ListResponseModule<Product>>{
    return this.httpClient.get<ListResponseModule<Product>>(this.apiUrl)  
    }
  } 
