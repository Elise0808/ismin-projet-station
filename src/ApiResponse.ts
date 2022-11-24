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
    horaires: string;
    ville: string;
    rupture: string;
    reg_code: string;
    epci_name: string;
    com_arm_code: string;
    prix_nom: string;
    cp: string;
    horaires_automate_24_24: boolean;
    dep_code: string;
    epci_code: string;
    reg_name: string;
    geom: number[];
    prix_id: string;
    id: string;
}

export interface ApiGeometry {
    type: string;
    coordinates: number[];
}