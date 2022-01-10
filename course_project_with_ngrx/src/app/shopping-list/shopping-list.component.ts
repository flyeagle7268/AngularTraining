import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./service/shopping-list.service";

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css'],
    providers: []
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    //ngrx logic
    ingredients: Observable<{ ingredients: Ingredient[] }>;

    //non ngrx logic
    // ingredients: Ingredient[];
    // slSubscription: Subscription;

    constructor(private shoppingListService: ShoppingListService,
                //ngrx logic
                //shoppingList same key defined in app module
                //ingredients same key defined in initialState that returns array
                private store: Store<{ shoppingList: {ingredients: Ingredient[]} }> ){}

    //Initialize the component
    ngOnInit(): void {
      //ngrx same key as defined in app module
      this.ingredients = this.store.select('shoppingList');
      //non ngrx logic
      // this.ingredients = this.shoppingListService.getIngredients();

      // this.slSubscription = this.shoppingListService.ingredientAdded.subscribe(
      //   (ingredients: Ingredient[]) => {
      //     this.ingredients = ingredients;
      //   }
      // );
    }

    onEditItem(index: number){
      this.shoppingListService.editItemSubject.next(index);
    }

    //Cleanup
    ngOnDestroy(): void {
      //non ngrx logic
      //this.slSubscription.unsubscribe();
    }
}
