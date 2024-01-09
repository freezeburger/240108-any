import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { Product } from '../interfaces/product';
import { BehaviorSubject } from 'rxjs';

const ENDPOINT = 'https://dummyjson.com/products'

interface ServerResponse{
  products:Product[]
}

export enum CommandType{
  SEARCH,
  GET_ALL
}

interface Command{
  name:CommandType;
  payload:null | string;
}

@Injectable()
export class ProductService {

  private http = inject(HttpClient);

  private _collection = new BehaviorSubject<Product[]>([]);
  public collection = this._collection.asObservable();

  // Surcharge TypeScript
  public execute(command:{name:CommandType.GET_ALL, payload:null}):void;
  public execute(command:{name:CommandType.SEARCH, payload:string}):void;
  public execute(command:Command): void{
    switch (command.name) {
      case CommandType.GET_ALL:
        this.getAll();
        break;
      case CommandType.SEARCH:
        this.search(command.payload as string);
        break;
      default:
        break;
    }
  }

  private getAll(){
    this.http.get<ServerResponse>(ENDPOINT).subscribe(data => this._collection.next(data.products) );
  }

  private search(keyword:string){
    this.http.get<ServerResponse>(`${ENDPOINT}/search?q=${keyword}`).subscribe(data => this._collection.next(data.products) );
  }

}
