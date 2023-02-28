import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestComponent } from './request/request.component';
import { HeaderComponent } from './request/components/header/header.component'
import { FooterComponent } from './request/components/footer/footer.component'
import { HttpClientModule } from '@angular/common/http';
import { RequestService } from './request/services/request.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    RequestComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    MatCardModule,
    MatPaginatorModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }