import type { Feature, Polygon } from "geojson";

export type LicenseStatus = "licensed" | "unlicensed";

export interface FarmProperties {
  featureType: "farm";
  id: number;
  name: string;
  owner: string;
  area: number;
  licenseStatus: LicenseStatus;
  cultivationType: string;
  lastUpdate: string;
}

export interface CountyProperties {
  featureType: "county";
  name: string;
}

export type FarmFeature = Feature<Polygon, FarmProperties>;

export type CountyProperty = Feature<Polygon, CountyProperties>;
