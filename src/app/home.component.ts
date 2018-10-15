import { Component, OnInit} from '@angular/core';

import {DataService} from './data.service';
import {Product} from './product';

@Component({
    selector: 'home-app',
    template: `<div class="table-main">
      <div class="basket">
        <ul>
          <li><a>Basket</a></li>
          <li><span>{{count}}</span></li>
        </ul>        
      </div>
      <div class="client-bottom">
      <div class="client-m" *ngFor="let item of items" (click)="increase()">
        <div class='codde'>{{item.codde}}</div>
        <div class="name">{{item.name}}</div>
        <div class="price">{{item.price}}$</div>
        <div class="image">{{item.image}}</div>
        <div class="description">{{item.description}}</div>
      </div>
      </div>
    </div>`,
    styleUrls: ['./css/about.component.css'],
    providers: [DataService]
})
export class HomeComponent {
  items: Product[] = [];
  constructor(private dataService: DataService){}

  addItem(codde: number, name: string, price: number, image: string, description: string){
      this.dataService.addData(codde, name, price, image, description);
  }

  ngOnInit(){
      this.items = this.dataService.getData();
  }


  count: number=0;
    increase() : void {
        this.count++;
    }
}
