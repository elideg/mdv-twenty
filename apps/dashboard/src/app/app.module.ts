import { UiLibModule } from './../../../../libs/ui-lib/src/lib/ui-lib.module';
import { CoreStateModule } from './../../../../libs/core-state/src/lib/core-state.module';
import { FruitsComponent } from './fruits/fruits.component';
import { FruitsDetailsComponent } from './fruits/fruits-details/fruits-details.component';
import { FruitsItemComponent } from './fruits/fruits-item/fruits-item.component';
import { FruitsListComponent } from './fruits/fruits-list/fruits-list.component';
import { RoutingModule } from './routing.module';
import { CoreDataModule } from '@mdv-twenty/core-data';
import { MaterialModule } from '@mdv-twenty/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, FruitsComponent, FruitsItemComponent, FruitsListComponent, FruitsDetailsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreDataModule,
    CoreStateModule,
    UiLibModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
