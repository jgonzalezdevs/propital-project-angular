import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpEventType, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';  
import { Notification } from '../notification/notification.component';
import { AuthService } from './auth.service';
import { NotificationRegister } from '../dialog/notification-register/notification-register.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NotificationService implements OnInit, HttpInterceptor {
  private baseUrl = 'http://localhost:8000/api/notifications/';
  public token:any = this.auth.getToken()
  private dataSubject = new BehaviorSubject<any>(null);  
  data$ = this.dataSubject.asObservable();

  setData(data: any) {
    this.dataSubject.next(data);  
  }

  getData() {
    return this.dataSubject.value
  }

  ngOnInit(): void {
    this.token=this.auth.getToken()
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    this.token = this.auth.getToken()
    if (this.token) {
        const modReq = req.clone({
            setHeaders: {
                'Authorization': this.token
            }
        });
        return next.handle(modReq);
    }
    return next.handle(req);
}

  constructor(private http: HttpClient, private auth: AuthService) { }

  getAllNotifications(token:any = this.auth.getToken()): Observable<Notification[]> {
    console.log(this.token)
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    console.log(headers)
    return this.http.get<Notification[]>(this.baseUrl, {headers: headers});  
  }

  getNotificationById(token:any = this.auth.getToken(), id: number): Observable<Notification> {
    var headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Notification>(`${this.baseUrl}/${id}`, { headers });
  }

  createNotification(notification: NotificationRegister): Observable<Notification> {
    var headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.post<Notification>(this.baseUrl, notification, {headers});
  }

  updateNotification(id: number, notification: NotificationRegister): Observable<Notification> {
    var headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.put<Notification>(`${this.baseUrl}${id}/`, notification, {headers});
  }

  deleteNotification(id: number): Observable<void> {
    var headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.delete<void>(`${this.baseUrl}${id}`, {headers});
  }

  deleteNotifications(): Observable<void> {
    var headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.delete<void>(`${this.baseUrl}`, {headers});
  }
}
