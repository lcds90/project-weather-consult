import { CityWeather } from './../../../../shared/models/weather.model';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
  // NOTE o OnPush sera so atualizada, somente quando input for modificado
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentWeatherComponent {

  @Input() cityWeather: CityWeather;
  @Input() isFavorite: boolean;
  @Output() toggleBookmark = new EventEmitter();

  get cityName(): string {
    return `${this.cityWeather.city.name} ${this.cityWeather.city.country}`;
  }

   onToggleBookmark(){
    this.toggleBookmark.emit();
  }
}
