import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { Product } from '../../models/product'; 

@Component({
  selector: 'app-products',
  standalone: true,  
  imports: [CommonModule], 
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
     new Product('H3 Flow', 'Micro-ATX Airflow Case', 'assets/H3Flow.jpg', 60),
    new Product('H5 ELite', 'Compact Mid-tower Case', 'assets/H5 Elite.jpg',90),
    new Product('H5 Flow', 'ATX Airflow Case', 'assets/H5 Flow.jpg', 70),
    new Product('H5 Flow RGB', 'ATX Mid-Tower Airflow Case with RGB', 'assets/H5 FlowRGB.jpg', 90),
    new Product('H6 Flow Hero', 'Compact Mid-tower Case', 'assets/H6 Flow Hero.jpg', 85),
    new Product('H6 Flow', 'ATX Airflow Case', 'assets/H6 Flow.jpg',80),
    new Product('H7 Elite', 'ATX Airflow Case', 'assets/H7 Elite.jpg', 90),
    new Product('H7 Flow 2022', 'ATX Airflow Case', 'assets/H7 Flow 2022.jpg', 85),
    new Product('H7 Flow', 'ATX Airflow Case', 'assets/H7 Flow.jpg', 80),
    new Product('H7 Flow RGB', 'ATX Airflow Case with RGB Fans', 'assets/H7 FlowRgb.jpg', 100),
    new Product('H9 Hero', 'ATX Airflow Case', 'assets/H9 Hero.jpg', 100),
    new Product('H9 Flow', 'Mid-Tower Airflow Case', 'assets/H9Flow.jpg', 110),
    new Product('H9 Flow RGB', 'ATX Airflow Case with RGB', 'assets/H9FlowRGB.jpg', 120),
    new Product('H9 Flow RGB+', 'ATX Airflow Case with RGB', 'assets/H9FlowRGB+.jpg', 130),
    new Product('N7 B650E', 'AMD Motherboard with Wi-Fi ', 'assets/N7 B650E.jpg', 150),
    new Product('N7 Z790', 'Z790 ATX', 'assets/N7 Z790.jpg', 170),
    new Product('N7 Z890', 'Z890 ATX Gaming Wi-Fi', 'assets/N7 Z890.jpg', 180),
    new Product('N9 X870E', 'X870E ATX Gaming Wi-Fi ', 'assets/N9 X870E.jpg', 160),
    new Product('N9 Z890', 'Z890 ATX Gaming Wi-Fi', 'assets/N9 Z890.jpg', 150),
    new Product('F360 RGB Core', '360mm Single-Frame RGB', 'assets/F360 RGB Core.jpg', 45),

  ];
}
