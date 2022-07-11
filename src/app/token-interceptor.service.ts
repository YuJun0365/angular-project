import { Injectable, Injector } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest , HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { MasterService } from './service/master.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
    let masterService = this.injector.get(MasterService)
    console.log(`Bearer ${masterService.getToken()}`)
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MmM3ZGJjOTVmMmZjZDUxMzE5NzlhNDgiLCJpYXQiOjE2NTc0NDk0ODQsImV4cCI6MTY1NzUzNTg4NH0.3hLewvTlzv8oRm5Zu23PeWETbkEZnUVE0lzLdvpouyA"
    let tkn = masterService.getToken()
    let jwttoken = req.clone({
      setHeaders: {
        //Authorization: `Bearer ${masterService.getToken()}`
        Authorization: "Bearer " + tkn
      }
    })
    return next.handle(jwttoken);
  }
}
