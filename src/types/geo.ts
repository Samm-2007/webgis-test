import type { Feature, Polygon } from "geojson";

export type LicenseStatus = "licensed" | "unlicensed";
export interface farmProperties {
  featuretype: "farm" | "county";
  id: number;
  name: string;
  owner: string;
  area: number;
  licenseStatus: LicenseStatus;
  cultivationType: string;
  lastUpdate: string;
}
export interface countyProperty {
  Featuretype: "county";
  name: string;
}
export type FarmFeature = Feature<Polygon, farmProperties>;
export type CountyProperty = Feature<Polygon, countyProperty>;
