import { Component } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'Tree wiki';
  //pages: number = 1;
  //dataset: any[] = ['1','2','3','4','5','6','7','8','9','10'];
}

