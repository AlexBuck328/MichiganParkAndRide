# MichiganParkAndRide
Michigan Department of Transportation Carpool Lot Program 

I downloaded MDOT carpool lot data from http://gis-michigan.opendata.arcgis.com/datasets/mdot::mdot-carpool-lots then I downloaded MDOT region data from http://gis-michigan.opendata.arcgis.com/datasets/mdot::mdot-regions

I then unzipped the MDOT_Regions.zip with the following command:
unzip MDOT_Regions-shp.zip -d MDOT-Regions

I inspected the MDOT_Regions.shp file by utilizing:
mapshaper MDOT_Regions.shp -info

To filter the shapefile down to only the desired attributes I used the following command:
mapshaper MDOT_Regions.shp -filter-fields Code,Name,OfficeCity -simplify dp 15% -o precision=.0001 format=geojson ../../data/mdot-regions.json

Ran app.js script to pull Earth color palette from CARTOColors.

Installed csv2geojson in order to parse park and ride lot locations (downloaded from MDOT in CSV format) to JSON.

