export type BreedDetails = {
  id: number;
  name: string;
  weight: string;
  height: string;
  life_span: string;
  bred_for: string;
  breed_group: string;
};

export type Breed = {
  id: string;
  name: string;
  alt_names: string;
  origin: string;
  life_span: string;
  description: string;
  temperament: string;

  adaptability: number;
  affection_level: number;
  child_friendly: number;
  grooming: number;
  intelligence: number;
  health_issues: number;
  social_needs: number;
  stranger_friendly: number;

  dog_friendly: number;
  energy_level: number;
  experimental: number;
  hairless: number;
  hypoallergenic: number;
  indoor: number;
  lap: number;
  shedding_level: number;

  natural: number;
  rare: number;
  reference_image_id: string;
  rex: number;

  weight: {
    imperial: string;
    metric: string;
  };

  cfa_url: string;
  vcahospitals_url: string;
  vetstreet_url: string;
  wikipedia_url: string;
};

export type CatTraits = {
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  grooming: number;
  intelligence: number;
  health_issues: number;
  social_needs: number;
  stranger_friendly: number;
};
