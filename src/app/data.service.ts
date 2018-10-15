import {Product} from './product';

export class DataService{

    private data: Product[] = [
        { codde: 1, name:"Apple", price: 23, image: "qw", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},
        { codde: 2, name:"Banana", price: 45, image: "aw", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"},
        { codde: 3, name:"Pineapple", price: 67, image: "tw", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"}
    ];
    getData(): Product[] {

        return this.data;
    }
    addData(codde: number, name: string, price: number, image: string, description: string){

        this.data.push(new Product(codde, name, price, image, description));
    }
}
