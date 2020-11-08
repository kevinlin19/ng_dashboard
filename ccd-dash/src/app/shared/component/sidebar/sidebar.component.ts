import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  fruitNames: String[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  vegNames: String[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  eateries: String[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  constructor() { 
    
  }

  ngOnInit(): void {
    // typesOfShoes: String[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  }

}
