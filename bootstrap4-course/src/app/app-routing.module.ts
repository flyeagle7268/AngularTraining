import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { BasicTypographyComponent } from './basic-typography/basic-typography.component';
import { ColorsBackgroundComponent } from './colors-background/colors-background.component';
import { FloatsPositionComponent } from './floats-position/floats-position.component';
import { SizingComponent } from './sizing/sizing.component';
import { SpacingComponent } from './spacing/spacing.component';
import { TextDisplayComponent } from './text-display/text-display.component';
import { RouterEnum } from './services/router.enum';
import { BreakpointComponent } from './breakpoint/breakpoint.component';
import { ButtonsComponent } from './buttons/buttons.component';


const routes: Routes = [
  {path: RouterEnum.BasicTypo , component: BasicTypographyComponent},
  {path: RouterEnum.TextDisplay, component: TextDisplayComponent},
  {path: RouterEnum.FloatPosition, component: FloatsPositionComponent},
  {path: RouterEnum.ColorsBackGround, component: ColorsBackgroundComponent},
  {path: RouterEnum.Spacing, component: SpacingComponent},
  {path: RouterEnum.Sizing, component: SizingComponent},
  {path: RouterEnum.BreakPoints, component: BreakpointComponent},
  {path: RouterEnum.Buttons, component: ButtonsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
