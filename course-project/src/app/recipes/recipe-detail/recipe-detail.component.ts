import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';



import { Recipe } from '../recipe.model';
import { ReceipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeItem: Recipe;
  id: number;

  constructor(private recipeService: ReceipeService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.route.params
        .subscribe((params: Params) => {
          this.id = +params['id'];
          this.recipeItem = this.recipeService.getRecipe(this.id);
        });
    }

  addToShoppingList(){
    this.recipeService.addIngridentsToShoppingList(this.recipeItem.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['recipes'])
  }

}
