import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { provideRoutes } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor() { }

  
  products = [
    {
      id: 1,
      title: 'Headphone Bluetooth 4.0',
      price: 269.00,
    },
    {
      id: 2,
      title: 'Fone Bluetooth 5.0',
      price: 269.00,
    },
    {
      id: 3,
      title: 'Monitor de Áudio 24W',
      price: 664.05,
    },
    {
      id: 4,
      title: 'Headset Gamer Grey',
      price: 759.05,
    },
    {
      id: 5,
      title: 'Fone Black/Red',
      price: 113.05,
    },
    {
      id: 6,
      title: 'Soundbar 88W',
      price: 113.05,
    },
    {
      id: 7,
      title: 'BoxGrove 1000',
      price: 7499.00,
    },
    {
      id: 8,
      title: 'TuneBT 500',
      price: 299.00,
    },
    {
      id: 9,
      title: 'Run 2',
      price: 199.00,
    },
    {
      id: 10,
      title: '130ST Age',
      price: 1799.00,
    },
    {
      id: 11,
      title: 'Rekordbox DJ',
      price:  1234.05,
    },
    {
      id: 12,
      title: 'Mixer',
      price: 1799.00,
    },
    {
      id: 13,
      title: 'Amplify 15w',
      price: 7499.00,
    },
  ];
  card = [] as any;
  amount = 0;


  addToCard(product: any) : void {
    let filtered = this.card.filter((filterItem : any) => filterItem.id === product.id)

    if(filtered.length === 0){
      product.quantity = 1;
      this.card.push(product);
    }
    else
    {
      this.card = this.card.filter((filterItem : any) => filterItem.id !== product.id)
      filtered = filtered[0];
      filtered.quantity++;
      this.card.push(filtered);

    }
    console.log(this.card)
    this.amount+= product.price;
  }

  clearCard() : void {
    this.card = [];
    this.amount = 0;
  }

  ngOnInit(): void {
  }

}
