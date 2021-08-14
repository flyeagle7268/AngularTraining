import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./service/shopping-list.service";

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css'],
    providers: []
})
export class ShoppingListComponent implements OnInit, OnDestroy {

    ingredients: Ingredient[];
    slSubscription: Subscription;

    constructor(private shoppingListService: ShoppingListService ){}

    //Initialize the component
    ngOnInit(): void {
      this.ingredients = this.shoppingListService.getIngredients();

      this.slSubscription = this.shoppingListService.ingredientAdded.subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
    }

    onEditItem(index: number){
      this.shoppingListService.editItemSubject.next(index);
    }

    //Cleanup
    ngOnDestroy(): void {
      this.slSubscription.unsubscribe();
    }
}
