import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { AuthService } from "../auth/auth.service";
import { ReceipeService } from "../recipes/services/recipe.service";
import { DataStorageService } from "../shared/data-storage.service";
import { environment } from "src/environments/environment";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private userSub: Subscription;
  isAuthenticated = false;
  appEnvironment: string = environment.appEnvironment;

  constructor(private recipeService: ReceipeService,
    private dataService: DataStorageService,
    private authService: AuthService ){
    }

    ngOnInit(){
      this.userSub =  this.authService.user
        .subscribe(user => {
          this.isAuthenticated = !!user;
          console.log(!user);
          console.log(!!user);
        })
    }

    onSaveData(){
      let recipes = this.recipeService.getRecipes();
      this.dataService.storeRecipes(recipes);

    }

    onLogout(){
      this.authService.logout();
    }

    onFetchData(){
      this.dataService.fetchRecipes().subscribe();
    }

    ngOnDestroy(){
      this.userSub.unsubscribe();
    }

}
