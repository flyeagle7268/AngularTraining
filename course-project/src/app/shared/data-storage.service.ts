import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, map, tap, take } from 'rxjs/operators';

import { AuthService } from '../auth/auth.service';
import { Recipe } from '../recipes/recipe.model';
import { ReceipeService } from '../recipes/services/recipe.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {

  url: string = 'https://ng-recipe-course-a4273-default-rtdb.asia-southeast1.firebasedatabase.app/recipe.json'

  constructor(private http: HttpClient, private recipeService: ReceipeService, private authService: AuthService){

  }

  storeRecipes(recipes: Recipe[]){
    this.http.put(this.url, recipes)
    .subscribe(response => {
      console.log(response);
    })
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(this.url
      )
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      )
  }

}
