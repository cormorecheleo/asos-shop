import { Component } from '@angular/core';

/**
const requestApi = () => {

  return fetch("https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "asos2.p.rapidapi.com",
      "x-rapidapi-key": "05bce46b85msh85730a5ef82861ep1f0462jsnbb7eaafb532c"
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.error(err);
    });
}
export const list: object[] = [];
requestApi().then(response => list.push(...response.products));
console.log(list);
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';

}
