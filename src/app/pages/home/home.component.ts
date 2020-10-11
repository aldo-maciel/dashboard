import { Component } from '@angular/core';
import * as chartProps from './line-chart';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  charts = chartProps;
  inlinePlugin: any;
}
