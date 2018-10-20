import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';

// interface alert {
//   success: boolean
//   message: string
// }

@Injectable()
export class AlertService {
  private subject = new Subject<any>();
  private keepAfter = false;

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfter) {
          this.keepAfter = false;
        } else {
          this.subject.next();
        }
      }
    });
  }

  success(message: string, keepAfter = false) {
    this.keepAfter = keepAfter;
    this.subject.next({ type: 'success', text: message });
  }

  error(message: string, keepAfter = false) {
    this.keepAfter = keepAfter;
    this.subject.next({ type: 'error', text: message });
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
