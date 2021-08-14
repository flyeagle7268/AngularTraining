import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "src/app/shopping-list/service/shopping-list.service";
import { Recipe } from "../recipe.model";

@Injectable({providedIn: 'root'})
export class ReceipeService {

  notifyAddRecipy = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe('Pizza', 'This is my fav pizza',
  //      'https://live.staticflickr.com/2015/2269983942_96804244fb_b.jpg',
  //      [new Ingredient('Dove', 1),
  //       new Ingredient('Cheeze', 5)]),
  //   new Recipe('Burger', 'This is my fav burger',
  //       'https://live.staticflickr.com/65535/48436455446_163bfdb6ac_b.jpg',
  //       [new Ingredient('Bun', 2),
  //       new Ingredient('Chicken', 2)])
  // ];
  private recipes: Recipe[];

  constructor(private shoppingListService: ShoppingListService){}

  getRecipes(){
    if (!this.recipes) return null;

    return this.recipes.slice();

  }

  getRecipe(index: number){
    if (!this.recipes) return null;

    return this.recipes[index];
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.notifyAddRecipy.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe){
    this.recipes[index] = recipe;
    this.notifyAddRecipy.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1)
    this.notifyAddRecipy.next(this.recipes.slice());
  }

  addIngridentsToShoppingList(ingridents: Ingredient[]){
    this.shoppingListService.addIngredients(ingridents);
  }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.notifyAddRecipy.next(this.recipes.slice());
  }

}
