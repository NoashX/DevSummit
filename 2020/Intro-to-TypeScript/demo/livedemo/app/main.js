require([
  "esri/Map",
  "esri/layers/FeatureLayer",
  "esri/views/MapView",
  "esri/geometry/geometryEngine"
], function (Map, FeatureLayer, MapView, geometryEngine) {

  var map = new Map({
    basemap: "topo-vector"
  });

  var view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-105.29, 39.93],
    zoom: 14
  });

  var measureThisAction = {
    title: "Measure",
    id: "measure-this",
    className: "esri-icon-measure"
  };

  var popupTemplate = {
    title: "Trail run",
    content: "{Name}",
    overwriteActions: true,
    actions: [measureThisAction]
  };

  var featureLayer = new FeatureLayer({
    url: "http://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/OSMPTrails/FeatureServer/0",
    outFields: ["*"],
    popupTemplate: popupTemplate
  });
  map.add(featureLayer);




  view.popup.on("trigger-action", function (event) {
    if (event.action.id === "measure-this") {
      var geom = view.popup.selectedFeature.geometry;
      var distance = geometryEngine.geodesicLength(geom, "miles");
      distance = parseFloat((Math.round(distance * 100) / 100).toFixed(2));
      view.popup.content =
        view.popup.selectedFeature.attributes.Name + " trail is " +
        distance +
        " miles long.";
    }
  });
});
