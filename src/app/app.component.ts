import { Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div class="sticky">
                    <nav [ngClass]="{header:true}">
                        <a routerLink="/note">Admin</a>
                        <a routerLink="">Client</a>
                    </nav>
                    <router-outlet></router-outlet>
               </div>`,
    styleUrls: ['./css/main.component.css']
})
export class AppComponent {}
