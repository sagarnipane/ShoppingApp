import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Products } from './products';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  apiUrl = environment.apiUrl;
  //apiLive = environment.apiLive;
  constructor(private http:HttpClient) { }

  getProducts():Observable<any> {
    return this.http.get(this.apiUrl);
  }
  getProductsByName(name:string):Observable<any>{
    return this.http.post(this.apiUrl+'GetProductsByName',{"name":name});
  }
}
