import { Pipe, PipeTransform } from '@angular/core';
import { PlantInterface } from '../request/models/plant.interface';

@Pipe({
  name: 'paginationPipe'
})
export class PaginationPipe implements PipeTransform {

  transform(list: PlantInterface[], page: number, itemsPerPage: number): PlantInterface[] {
    return list.slice((page-1)*itemsPerPage, page*itemsPerPage);
  }

}
