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
    });
  }
}