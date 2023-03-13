import { Component, OnInit } from '@angular/core';

export interface ICardClass {
  img: string;
  name: string;
  address: string;
  price: string
}

export const housing:ICardClass[] = [
  {
    img: '123',
    name: 'Отель Иванов',
    address: 'г. Москва',
    price: '2500'
  },
  {
    img: '123',
    name: 'Отель Иванов',
    address: 'г. Москва',
    price: '2500'
  },
  {
    img: '123',
    name: 'Отель Иванов',
    address: 'г. Москва',
    price: '2500'
  }
];

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})


export class CardComponent implements OnInit{
  housing: ICardClass[];

  constructor() {
    this.housing = [];
  }

  ngOnInit() {
    this.housing = housing;
  }
}
