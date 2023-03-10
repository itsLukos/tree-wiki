import { Component } from '@angular/core';
import { PlantInterface, PlantResponseInterface } from 'src/app/request/models/plant.interface';
import { RequestService } from 'src/app/request/services/request.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['../../request/request.component.scss']
})
export class SearchComponent {
  AllPlants: PlantInterface[];
  PlantList: PlantInterface[];
  searchString: string;

  constructor(private requestService: RequestService) {
    this.AllPlants = [];
    this.PlantList = [];
    this.searchString = '';
  }

  ngOnInit(): void {
    this.requestService.getPlants()
      .subscribe((data: PlantResponseInterface) => {
        const results: PlantInterface[] = data;

        const formattedResults = results.map(({ id, common_name, scientific_name, family_common_name, family, duration, edible, image_url, distribution }) => ({
          id,
          common_name,
          scientific_name,
          family_common_name,
          family,
          duration,
          edible,
          image_url,
          distribution,
        }));
        this.AllPlants = formattedResults;
      });
  }

}
