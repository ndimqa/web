import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  onNotify(){
    window.alert('You will be notified when the product goes on sale');
  }

  share(product: any) {
    window.open("https://t.me/share/url?text=Hey Look what cool product I've found"+product.name+"&url="+product.link);
  }
}
