import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';

import { ShoppingListService } from '../service/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: false}) slForm: NgForm;
  editItemSubscription: Subscription;
  ingredientItem: Ingredient;
  editMode = false;
  itemIndex: number;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.editItemSubscription = this.shoppingListService.editItemSubject
      .subscribe((index: number) => {
        this.editMode = true;
        this.itemIndex = index;
        this.ingredientItem = this.shoppingListService.getIngredient(index);
        this.slForm.setValue({
          name: this.ingredientItem.name,
          amount: this.ingredientItem.amount
        });
      });
  }

  onItemAdded(form: NgForm){
    const ngForm = form.value;
    if (this.editMode){
      this.shoppingListService.updateIngredient(this.itemIndex, {name: ngForm.name, amount: ngForm.amount});
    }else{
      this.shoppingListService.addIngredient({name: ngForm.name, amount: ngForm.amount});
    }

    this.onReset();
  }

  ngOnDestroy(): void {
    this.editItemSubscription.unsubscribe();
  }

  onDelete(){
    this.shoppingListService.deleteItem(this.itemIndex);
    this.onReset();
  }

  onReset(){
    this.slForm.reset();
    this.editMode = false;
  }

}
