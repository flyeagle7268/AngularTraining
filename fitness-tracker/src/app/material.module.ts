import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import { MatCheckboxModule } from "@angular/material/checkbox";

@NgModule({
  imports: [MatButtonModule,
            MatDividerModule,
            MatIconModule,
            MatFormFieldModule,
            MatInputModule,
            MatDatepickerModule ,
            MatNativeDateModule,
            MatCheckboxModule
          ],
  exports: [MatButtonModule,
            MatDividerModule,
            MatIconModule,
            MatFormFieldModule,
            MatInputModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatCheckboxModule
          ]
})
export class MaterialMOdule {

}
