export interface ApiResponse {
    datasetid: string;
    recordid: string;
    fields: ApiFields;
    geometry: ApiGeometry;
}

export interface ApiFields {
    prix_valeur: number;
    rupture_nom: string;
    pop: string;
    dep_name: string;
    services_service: string;
    rupture_debut: string;
    prix_maj: string;
    com_arm_name: string;
    adresse: string;
    horaires: string; //bizaaaaaare
    ville: string;
    rupture: string; //bizaaaaaare
    reg_code: string;
    epci_name: string;
    com_arm_code: string;
    prix_nom: string;
    cp: string;
    horaires_automate_24_24: boolean;
    dep_code: string;
    epci_code: string;
    reg_name: string;
    geom: number[]; //2
    prix_id: string;
    id: string;
}

export interface ApiGeometry {
    type: string;
    coordinates: number[]; //2
}

/*nhits: number;
    parameters: ApiParameters;
    records: ApiRecords[]; //plusieurs records, particulier
    facet_groups: ApiFacetGroups[];*/
/*dataset: string[]; //1 //soit tableau soit API contenant un seul élément
    rows: number;
    start: number;
    facet: string[] ; //10 //soit tableau soit API contenant un seul élément
    format: string;
    timezone: string;*/