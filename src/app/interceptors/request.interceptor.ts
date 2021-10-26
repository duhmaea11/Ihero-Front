import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { 
    HttpEvent,
    HttpRequest,
    HttpHandler,
    HttpResponse,
    HttpInterceptor, 
    HttpErrorResponse
} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            setHeaders: { 'Content-Type': 'application/json' }
        });
       
        return next.handle(request).pipe(
            map((response: any) => response),
            catchError((error: HttpErrorResponse) => {
                if(error.status === 401) this.router.navigate(['/']);
                return throwError(error);
            })
        )
    }
}
