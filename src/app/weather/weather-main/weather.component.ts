import { Component, Input, OnInit } from '@angular/core';
import { WeatherRegions } from '../../shared/classes/weather';
import { Regions } from '../../shared/classes/constants';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})

export class WeatherComponent implements OnInit {

  @Input() regions: Regions[] = WeatherRegions;
  @Input() empty_keyword: boolean = false;

  constructor() {
  }

  checkKeyword(keyword: string): void {
    if (!keyword) {
      this.empty_keyword = true;
    }
  }

  ngOnInit(): void {
    if (!this.regions) {
      throw new Error('WeatherComponent attribute "regions" is required');
		}
  }

}