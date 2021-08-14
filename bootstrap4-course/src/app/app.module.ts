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
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
