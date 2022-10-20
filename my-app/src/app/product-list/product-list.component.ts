import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title: string = "Product Management System";
  products: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getTitle(): string {
    return this.title;
  }

}
