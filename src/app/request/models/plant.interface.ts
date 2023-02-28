export interface PlantInterface {
  id: number;
  common_name: string;
  scientific_name: string;
  family_common_name: string;
  family: string;
  duration: string[];
  edible: boolean;
  image_url: string;
  distribution: string;
}

export interface PlantResponseInterface {
  data: PlantInterface[];
  meta: {
    total: number;
  };
  links: {
    self: string;
    first: string;
    next: string;
    last: string;
  };
}