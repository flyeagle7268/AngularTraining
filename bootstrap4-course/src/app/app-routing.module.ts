import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BasicTypographyComponent } from './basic-typography/basic-typography.component';
import { ColorsBackgroundComponent } from './colors-background/colors-background.component';
import { FloatsPositionComponent } from './floats-position/floats-position.component';
import { SizingComponent } from './sizing/sizing.component';
import { SpacingComponent } from './spacing/spacing.component';
import { TextDisplayComponent } from './text-display/text-display.component';
import { RouterEnum } from './services/router.enum';
import { BreakpointComponent } from './breakpoint/breakpoint.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { MyNavbarComponent } from './my-navbar/my-navbar.component';
import { ListGroupsComponent } from './list-groups/list-groups.component';
import { MyFormsComponent } from './my-forms/my-forms.component';
import { InputGroupsComponent } from './input-groups/input-groups.component';
import { AlertsComponent } from './alerts/alerts.component';
import { TablePagingComponent } from './table-paging/table-paging.component';
import { CardsComponent } from './cards/cards.component';
import { MediaObjectComponent } from './media-object/media-object.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { GridsystemComponent } from './gridsystem/gridsystem.component';
import { GridAlignmentComponent } from './grid-alignment/grid-alignment.component';
import { FleboxComponent } from './flebox/flebox.component';
import { AutoMarginsComponent } from './auto-margins/auto-margins.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CollapsAccordionComponent } from './collaps-accordion/collaps-accordion.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { PopoversComponent } from './popovers/popovers.component';
import { ModalsComponent } from './modals/modals.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: RouterEnum.BasicTypo , component: BasicTypographyComponent},
  {path: RouterEnum.TextDisplay, component: TextDisplayComponent},
  {path: RouterEnum.FloatPosition, component: FloatsPositionComponent},
  {path: RouterEnum.ColorsBackGround, component: ColorsBackgroundComponent},
  {path: RouterEnum.Spacing, component: SpacingComponent},
  {path: RouterEnum.Sizing, component: SizingComponent},
  {path: RouterEnum.BreakPoints, component: BreakpointComponent},
  {path: RouterEnum.Buttons, component: ButtonsComponent},
  {path: RouterEnum.NavBar, component: MyNavbarComponent},
  {path: RouterEnum.ListGroups, component: ListGroupsComponent},
  {path: RouterEnum.Forms, component: MyFormsComponent},
  {path: RouterEnum.InputGroups, component: InputGroupsComponent},
  {path: RouterEnum.Alerts, component: AlertsComponent},
  {path: RouterEnum.TablePaging, component: TablePagingComponent},
  {path: RouterEnum.Cards, component: CardsComponent},
  {path: RouterEnum.MediaObject, component: MediaObjectComponent},
  {path: RouterEnum.Jumbotron, component: JumbotronComponent},
  {path: RouterEnum.GridSystem, component: GridsystemComponent},
  {path: RouterEnum.GridAlignment, component: GridAlignmentComponent},
  {path: RouterEnum.Flexbox, component: FleboxComponent},
  {path: RouterEnum.AutoMargins, component: AutoMarginsComponent},
  {path: RouterEnum.Carousel, component: CarouselComponent},
  {path: RouterEnum.CollapseAccordion, component: CollapsAccordionComponent},
  {path: RouterEnum.Tooltips, component: TooltipsComponent},
  {path: RouterEnum.Popovers, component: PopoversComponent},
  {path: RouterEnum.Modals, component: ModalsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
