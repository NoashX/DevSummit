## Demo app for TypeScript Demo Theater


# JavaScript code converted to TypeScript 
```
import FeatureLayer from "esri/layers/FeatureLayer";
import Map from "esri/Map";
import MapView from "esri/views/MapView";
import { geodesicLength } from "esri/geometry/geometryEngine";

// Create the Map
var map = new Map({
  basemap: "gray"
});

// Create the MapView
var view = new MapView({
  container: "viewDiv",
  map,
  center: [-117.08, 34.1],
  zoom: 12
});

// Add this action to the popup so it is always available in this view
var measureThisAction = {
  title: "Measure Length",
  id: "measure-this",
  className: "esri-icon-measure"
} as __esri.ActionButton;

var popupTemplate = {
  title: "Trail run",
  content: "{name}",
  actions: [measureThisAction]
};

var featureLayer = new FeatureLayer({
  url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/TrailRuns/FeatureServer/0",
  outFields: ["*"],
  popupTemplate
});
map.add(featureLayer);

// Execute each time the "Measure Length" is clicked
function measureThis() {
  var geom = view.popup.selectedFeature.geometry;
  var distance = geodesicLength(geom, "miles");
  distance = parseFloat((Math.round(distance * 100) / 100).toFixed(2));
  view.popup.content = `${view.popup.selectedFeature.attributes.name} ${distance} miles`;
}

// Event handler that fires each time an action is clicked.
view.popup.on("trigger-action", function (event) {
  // Execute the measureThis() function if the measure-this action is clicked
  if (event.action.id === "measure-this") {
    measureThis();
  }
});




```