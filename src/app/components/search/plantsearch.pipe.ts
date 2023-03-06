import { Pipe, PipeTransform } from '@angular/core';
import { PlantInterface } from 'src/app/request/models/plant.interface';

@Pipe({ name: 'plantSearch' })
export class PlantSearchPipe implements PipeTransform {

  plantHasValue = (plant: PlantInterface, value: string): boolean => {
    return Object.values(plant).toString().toLowerCase().includes(value.toLowerCase());
  }

  transform(value: PlantInterface[], searchString: string): PlantInterface[] {
    return value.filter(plant => {
      return this.plantHasValue(plant, searchString);
    });
  }
}
