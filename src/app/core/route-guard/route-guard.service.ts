import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { StoreComponent } from 'src/app/features/store/store.component';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanDeactivate<any> {
  component: Object;
  route: ActivatedRouteSnapshot;

  constructor() {
  }

  canDeactivate(component: StoreComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return component.canExit();
  }
}
