import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../types/product.dto";
import { environment } from "../../environments/environment.development";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProductsSmall(categoryId: number): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${environment.apiUrl}/products/${categoryId}`
    );
  }
}