import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { NgChartjsModule } from 'ng-chartjs';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FlexModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@/app/app-routing.module';
import { HomeComponent } from '@/app/pages/home/home.component';
import { HeaderComponent } from './pages/header/header.component';
import { BinaryComponent } from './pages/features/binary/binary.component';
import { UniqueElementComponent } from './pages/features/unique-element/unique-element.component';
import { ComponentsModule } from '@/app/shared/components/components.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, BinaryComponent, UniqueElementComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgChartjsModule.registerPlugin(),
    AppRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FlexModule,
    ComponentsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
