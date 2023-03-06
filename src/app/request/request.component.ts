import { Component, OnInit } from '@angular/core';
import { PlantInterface, PlantResponseInterface } from './models/plant.interface';
import { RequestService } from './services/request.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss'],
  providers: [RequestService]
})
export class RequestComponent implements OnInit {
  PlantList: PlantInterface[] = [];
  page: number = 1;
  itemsPerPage: number = 25;
  numPages: number = 1;

  constructor(private requestService: RequestService) {}
  
  ngOnInit() {
    this.requestService.getPlants()
    .subscribe((data: PlantResponseInterface) => {
      const results: PlantInterface[] = data;

      const formattedResults = results.map(({ id,common_name,scientific_name,family_common_name,family,duration,edible,image_url, distribution }) => ({
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
      this.PlantList = formattedResults;

      this.numPages = results.length / this.itemsPerPage;
    });
  }

  firstPage() {
    this.page = 1;
  }

  lastPage() {
    this.page = this.numPages;
  }

  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
  }
}