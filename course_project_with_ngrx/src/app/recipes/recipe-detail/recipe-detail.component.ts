import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';

import { Recipe } from '../recipe.model';
import { ReceipeService } from '../services/recipe.service';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeItem: Recipe;
  id: number;

  constructor(private recipeService: ReceipeService,
    private router: Router, private route: ActivatedRoute,
    private store: Store<{shoppingList: {ingredient: Ingredient[]}}>) { }

  ngOnInit(): void {
      this.route.params
        .subscribe((params: Params) => {
          this.id = +params['id'];
          this.recipeItem = this.recipeService.getRecipe(this.id);
        });
    }

  addToShoppingList(){
    //ngrx logic
    this.store.dispatch(new ShoppingListActions.AddIngredients(this.recipeItem.ingredients));

    //non ngrx logic
    // this.recipeService.addIngridentsToShoppingList(this.recipeItem.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['recipes'])
  }

}
