import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RequestComponent } from './request.component';
import { HttpClientModule } from '@angular/common/http';
import { RequestService } from './services/request.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    RequestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    MatCardModule
  ],
  providers: [RequestService],
  bootstrap: [RequestComponent]
})
export class RequestModule { }