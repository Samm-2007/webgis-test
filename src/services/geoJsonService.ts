import type { FeatureCollection } from "geojson";
import type { FarmFeature, CountyProperty } from "../types/geo";

export async function getGeoData() {
  try {
    const url = "/data/mockData.geojson";
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data: FeatureCollection = await response.json();
    const farms = data.features.filter(
      (feature) => feature.properties?.featureType === "farm",
    ) as FarmFeature[];
    const county = data.features.find(
      (feature) => feature.properties?.featureType === "county",
    ) as CountyProperty | undefined;
    return { farms, county };
  } catch (error) {
    console.log(error);
  }
}
