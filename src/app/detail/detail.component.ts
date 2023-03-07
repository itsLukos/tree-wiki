import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PlantInterface, PlantResponseInterface } from '../request/models/plant.interface';
import { RequestService } from '../request/services/request.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  detailPlant!: PlantInterface | undefined;

  constructor(
    private route: ActivatedRoute,
    private requestService: RequestService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const plantId: number = params["id"];

      this.requestService.getPlants()
        .subscribe((data: PlantResponseInterface) => {
          const results: PlantInterface[] = data;

          this.detailPlant = results.find(p => p.id == plantId) as PlantInterface;
        })

    })
  }

}
