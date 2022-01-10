import { Subject } from "rxjs";

import { Ingredient } from "src/app/shared/ingredient.model";

export class ShoppingListService {

  private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)];

  ingredientAdded = new Subject<Ingredient[]>();
  editItemSubject = new Subject<number>();

  //Add ingredient
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    console.log(this.ingredients);

    this.ingredientAdded.next(this.ingredients.slice());
  }

  //Add ingredients
  addIngredients(ingredients: Ingredient[]){
    //approach 1
    // ingredients.forEach(ingredient => {
    //   this.ingredients.push(ingredient);
    // });
    //approach 2
    //coverts array to list
    this.ingredients.push(...ingredients);
    this.ingredientAdded.next(this.ingredients.slice());
  }

  updateIngredient(index:number, ingredient: Ingredient){
    this.ingredients[index] = ingredient;
    this.ingredientAdded.next(this.ingredients.slice());
  }

  deleteItem(index: number){
    this.ingredients.splice(index, 1);
    this.ingredientAdded.next(this.ingredients.slice());
  }

  getIngredients(){
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

}
