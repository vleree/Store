import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable, from } from "rxjs";
import { Order } from "./order.model";

@Injectable()
export class StaticDataSource {
 private products: Product[] = [
 new Product(1, "Indiya 100", "Heels", "The right shoe can make everything different", 795),
 new Product(2, "Indiya Mule", "Heels", "The right shoe can make everything different", 725),
 new Product(3, "Averly 100", "Heels", "The right shoe can make everything different", 895),
 new Product(4, "Anise 95", "Heels", "The right shoe can make everything different", 695),
 new Product(5, "Saeda 100", "Heels", "The right shoe can make everything different", 925),
 new Product(6, "Bon Bon Bucket", "Bags", "I want Choo", 1795),
 new Product(7, "Beach Tote S", "Bags", "I want Choo", 1295),
 new Product(8, "Avenue Quad", "Bags", "I want Choo", 1650),
 new Product(9, "Diamond Soft Hobo S", "Bags", "I want Choo", 1395),
 new Product(10, "Callie", "Bags", "I want Choo", 2195),
 new Product(11, "Rose Passion EDP 40ml", "Parfume", "I want Choo", 55),
 new Product(12, "Jimmy Choo EDT 40ml", "Parfume", "I want Choo", 46),
 new Product(13, "I Want Choo 40ml", "Parfume", "I want Choo)", 54),
 new Product(14, "Iris Crush EDP 125ml", "Parfume", "I want Choo", 190),
 new Product(15, "Floral Edt 90ml", "Parfume", "I want Choo", 98),
 ];
 getProducts(): Observable<Product[]> {
    return from([this.products]);
    }

saveOrder(order: Order): Observable<Order> {
   console.log(JSON.stringify(order));
   return from([order]);
   }
}