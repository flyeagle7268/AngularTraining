import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BasicTypographyComponent } from './basic-typography/basic-typography.component';
import { TextDisplayComponent } from './text-display/text-display.component';
import { FloatsPositionComponent } from './floats-position/floats-position.component';
import { ColorsBackgroundComponent } from './colors-background/colors-background.component';
import { SpacingComponent } from './spacing/spacing.component';
import { SizingComponent } from './sizing/sizing.component';
import { BreakpointComponent } from './breakpoint/breakpoint.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { MyNavbarComponent } from './my-navbar/my-navbar.component';
import { ListGroupsComponent } from './list-groups/list-groups.component';
import { HomeComponent } from './home/home.component';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PopoversComponent } from './popovers/popovers.component';
import { ModalsComponent } from './modals/modals.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BasicTypographyComponent,
    TextDisplayComponent,
    FloatsPositionComponent,
    ColorsBackgroundComponent,
    SpacingComponent,
    SizingComponent,
    BreakpointComponent,
    ButtonsComponent,
    MyNavbarComponent,
    ListGroupsComponent,
    HomeComponent,
    MyFormsComponent,
    InputGroupsComponent,
    AlertsComponent,
    TablePagingComponent,
    CardsComponent,
    MediaObjectComponent,
    JumbotronComponent,
    GridsystemComponent,
    GridAlignmentComponent,
    FleboxComponent,
    AutoMarginsComponent,
    CarouselComponent,
    CollapsAccordionComponent,
    TooltipsComponent,
    PopoversComponent,
    ModalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
