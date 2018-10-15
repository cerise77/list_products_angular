import { Component, OnInit} from '@angular/core';

import {DataService} from './data.service';
import {Product} from './product';

/*export class User{
    codde: number;
    name: string;
    price: number;
    image: string;
    description: string;
}*/

@Component({
    selector: 'note-app',
    template: `<div class="form-group">
          <div class="form-inline">

                  <div class="field">
                    <label class="lab" for="in1">Code</label>
                    <input class="form-control" name="codde" [(ngModel)]="codde" required pattern="[0-9]{2}" id="in1" />
                  </div>

                  <div class="field">
                    <label class="lab" for="in2">Name</label>
                    <input class="form-control" name="name" [(ngModel)]="name" required id="in2"/>
                  </div>

                  <div class="field">
                    <label class="lab" for="in3">Price</label>
                    <input class="form-control" name="price" [(ngModel)]="price" required pattern="[0-9]{3}" id="in3" />
                  </div>

                  <div class="fields">
                    <label for="in3">Available</label>
                    <input type="checkbox" checked/>
                  </div>

                  <div class="field">
                    <label class="lab" for="in4">Image</label>
                    <input class="form-control" name="image" [(ngModel)]="image" required id="in4"/>
                  </div>

                  <div class="field">
                    <label class="lab" for="in5">Description</label>
                    <textarea class="form-control" name="description" [(ngModel)]="description" required id="in5"></textarea>
                  </div>

                  <button class="btn btn-default but" (click)="addItem(codde, name, price, image, description, available)">Add</button>

                  <button class="btn btn-default but delete-b" (click)="deleteItem()">Delete</button>

            </div>


    </div>

    <div class="table-main">
    <table class="table table-striped">
     <thead>
         <tr>
             <th>Code</th>
             <th>Name</th>
             <th>Price</th>
             <th>Image</th>
             <th>Description</th>
         </tr>
     </thead>
     <tbody>
         <tr *ngFor="let item of items">
              <td>{{item.codde}}</td>
             <td>{{item.name}}</td>
             <td>{{item.price}}</td>
             <td>{{item.image}}</td>
             <td>{{item.description}}</td>
         </tr>
     </tbody>
     </table>
    </div>
    `,
    styleUrls: ['./css/about.component.css'],
    providers: [DataService]
})

/*export class NoteComponent {
  user: User = new User();
  addUser(){
    //console.log(this.user);
  }
}*/

 export class NoteComponent implements OnInit {

    items: Product[] = [];
    constructor(private dataService: DataService){}

    addItem(codde: number, name: string, price: number, image: string, description: string){

        this.dataService.addData(codde, name, price, image, description);
    }

    deleteItem(){
          this.items.splice(this.items.length - 1, 1);
    }


    ngOnInit(){
        this.items = this.dataService.getData();
    }
}
