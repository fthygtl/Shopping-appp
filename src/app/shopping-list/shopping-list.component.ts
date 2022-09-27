import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {


  ingredients: Ingredient[] = [

    new Ingredient('Apples',4),
    new Ingredient('Lemons',7),
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

}
