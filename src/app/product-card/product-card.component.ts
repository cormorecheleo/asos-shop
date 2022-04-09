import { Component, OnInit } from '@angular/core';
import {FilterPipe} from "../../pipe/filter.pipe";

export class Product {
  constructor(
    public brandName: string,
    public colour: string,
    public hasMultipleprice: boolean,
    public hasVariantcolours: boolean,
    public id: number,
    public imageUrl: string,
    public isSellingFast: boolean,
    public isSponsored: boolean,
    public name: string,
    public price: Object,
    public productCode: string,
    public productType: string,
    public url: string,
    public liked: boolean
  )  {
  }
}

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  searchText='';
  product: Product[] | undefined;
  constructor() { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    fetch("https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "asos2.p.rapidapi.com",
        "x-rapidapi-key": "05bce46b85msh85730a5ef82861ep1f0462jsnbb7eaafb532c"
      }
    })
      .then(response =>
        response.json()
      )
      .then(json =>
        json.products
      )
      .then(products => {
        this.product = products;
        console.log(this.product);
      })
      .catch(err => {
        console.error(err);
      });
  }

  handleLike(product : Product) {
    if(product.liked){
      product.liked =  false;
    }else {
      product.liked = true;
    }
  }

  getCurrentPrice(ent: Object){
    let obj = Object.entries(ent);
    return (obj[0][1].value);
  }

}
