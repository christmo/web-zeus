//$(document).on("ready",inicio);

// // API key for http://openlayers.org. Please get your own at
// http://bingmapsportal.com/ and use that instead.
var apiKey = "AqTGBsziZHIJYYxgivLBf0hVdrAk9mWO5cQcb8Yux8sW5M8c8opEC2lZqKR1ZZXf";

// initialize map when page ready
var map;
var st = new OpenLayers.Projection("EPSG:4326"); //standar
var gm = new OpenLayers.Projection("EPSG:900913");//google map
var geolocate;
var vector;

function inicio(){
    if (window.map && window.map instanceof OpenLayers.Map) {
        map.updateSize();
    } else {
        //initialize map
        init(onSelectFeatureFunction);
        
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            error('not supported');
        }
    }
    $("#map").on("swipe swipe release",mapZoonIn);
    $("#map").on("drag",mapZoomOut);
    $("#a").on("click",clickBoton);
    $("#b").on("click",clickBotonB);
    $("#c").on("click",clickBotonC);
}

function init(onSelectFeatureFunction) {
    vector = new OpenLayers.Layer.Vector("Vector Layer", {});
    var sprintersLayer = new OpenLayers.Layer.Vector("Sprinters", {
        styleMap: new OpenLayers.StyleMap({
            externalGraphic: "resources/img/mobile-loc.png",
            graphicOpacity: 1.0,
            graphicWidth: 16,
            graphicHeight: 26,
            graphicYOffset: -26
        })
    });

    var sprinters = getFeatures();
    sprintersLayer.addFeatures(sprinters);

    var selectControl = new OpenLayers.Control.SelectFeature(sprintersLayer, {
        autoActivate:true,
        onSelect: onSelectFeatureFunction
    });

    // create map
    map = new OpenLayers.Map({
        div: "map",
        theme: null,
        projection: st,
        displayProjection: st,
        numZoomLevels: 18,
        controls: [
        //        new OpenLayers.Control.Attribution(),
        new OpenLayers.Control.TouchNavigation({
            dragPanOptions: {
                enableKinetic: true
            }
        }),
        new OpenLayers.Control.Zoom(),
        //        new OpenLayers.Control.MousePosition(),
        selectControl
        ],
        layers: [
        new OpenLayers.Layer.OSM("OpenStreetMap", null, {
            transitionEffect: 'resize'
        }),
        new OpenLayers.Layer.Bing({
            key: apiKey,
            type: "Road",
            // custom metadata parameter to request the new map style - only useful
            // before May 1st, 2011
            metadataParams: {
                mapVersion: "v1"
            },
            name: "Bing Road",
            transitionEffect: 'resize'
        }),
        new OpenLayers.Layer.Bing({
            key: apiKey,
            type: "Aerial",
            name: "Bing Aerial",
            transitionEffect: 'resize'
        }),
        new OpenLayers.Layer.Bing({
            key: apiKey,
            type: "AerialWithLabels",
            name: "Bing Aerial + Labels",
            transitionEffect: 'resize'
        }),
        vector,
        sprintersLayer
        ],
        center: new OpenLayers.LonLat(0, 0),
        zoom: 1//,
//        eventListeners: {
//            "moveend": moveMap
//        //            "zoomend": mapEvent,
//        //            "changelayer": mapLayerChanged,
//        //            "changebaselayer": mapBaseLayerChanged
//        }
    });

    function getFeatures() {
        var features = {
            "type": "FeatureCollection",
            "features": [
            {
                "type": "Feature", 
                "geometry": {
                    "type": "Point", 
                    "coordinates": [1332700, 7906300]
                },
                "properties": {
                    "Name": "Igor Tihonov", 
                    "Country":"Sweden", 
                    "City":"Gothenburg"
                }
            },

            {
                "type": "Feature", 
                "geometry": {
                    "type": "Point", 
                    "coordinates": [790300, 6573900]
                },
                "properties": {
                    "Name": "Marc Jansen", 
                    "Country":"Germany", 
                    "City":"Bonn"
                }
            },

            {
                "type": "Feature", 
                "geometry": {
                    "type": "Point", 
                    "coordinates": [568600, 6817300]
                },
                "properties": {
                    "Name": "Bart van den Eijnden", 
                    "Country":"Netherlands", 
                    "City":"Utrecht"
                }
            },
            {
                "type": "Feature", 
                "geometry": {
                    "type": "Point", 
                    "coordinates": [-7909900, 5215100]
                },
                "properties": {
                    "Name": "Christopher Schmidt", 
                    "Country":"United States of America", 
                    "City":"Boston"
                }
            },
            {
                "type": "Feature", 
                "geometry": {
                    "type": "Point", 
                    "coordinates": [-937400, 5093200]
                },
                "properties": {
                    "Name": "Jorge Gustavo Rocha", 
                    "Country":"Portugal", 
                    "City":"Braga"
                }
            },
            {
                "type": "Feature", 
                "geometry": {
                    "type": "Point", 
                    "coordinates": [-355300, 7547800]
                },
                "properties": {
                    "Name": "Jennie Fletcher ", 
                    "Country":"Scotland", 
                    "City":"Edinburgh"
                }
            },
            {
                "type": "Feature", 
                "geometry": {
                    "type": "Point", 
                    "coordinates": [657068.53608487, 5712321.2472725]
                },
                "properties": {
                    "Name": "Bruno Binet ", 
                    "Country":"France", 
                    "City":"Chambéry"
                }
            },
            {
                "type": "Feature", 
                "geometry": {
                    "type": "Point", 
                    "coordinates": [667250.8958124, 5668048.6072737]
                },
                "properties": {
                    "Name": "Eric Lemoine", 
                    "Country":"France", 
                    "City":"Theys"
                }
            },
            {
                "type": "Feature", 
                "geometry": {
                    "type": "Point", 
                    "coordinates": [653518.03606319, 5721118.5122914]
                },
                "properties": {
                    "Name": "Antoine Abt", 
                    "Country":"France", 
                    "City":"La Motte Servolex"
                }
            },
            {
                "type": "Feature", 
                "geometry": {
                    "type": "Point", 
                    "coordinates": [657985.78042416, 5711862.6251028]
                },
                "properties": {
                    "Name": "Pierre Giraud", 
                    "Country":"France", 
                    "City":"Chambéry"
                }
            },
            {
                "type": "Feature", 
                "geometry": {
                    "type": "Point", 
                    "coordinates": [742941.93818208, 5861818.9477535]
                },
                "properties": {
                    "Name": "Stéphane Brunner", 
                    "Country":"Switzerland", 
                    "City":"Paudex"
                }
            },
            {
                "type": "Feature", 
                "geometry": {
                    "type": "Point", 
                    "coordinates": [736082.61064069, 5908165.4649505]
                },
                "properties": {
                    "Name": "Frédéric Junod", 
                    "Country":"Switzerland", 
                    "City":"Montagny-près-Yverdon"
                }
            },
            {
                "type": "Feature", 
                "geometry": {
                    "type": "Point", 
                    "coordinates": [771595.97057525, 5912284.7041793]
                },
                "properties": {
                    "Name": "Cédric Moullet", 
                    "Country":"Switzerland", 
                    "City":"Payerne"
                }
            },
            {
                "type": "Feature", 
                "geometry": {
                    "type": "Point", 
                    "coordinates": [744205.23922364, 5861277.319748]
                },
                "properties": {
                    "Name": "Benoit Quartier", 
                    "Country":"Switzerland", 
                    "City":"Lutry"
                }
            },
            {
                "type": "Feature", 
                "geometry": {
                    "type": "Point", 
                    "coordinates": [1717430.147101, 5954568.7127565]
                },
                "properties": {
                    "Name": "Andreas Hocevar", 
                    "Country":"Austria", 
                    "City":"Graz"
                }
            },
            {
                "type": "Feature", 
                "geometry": {
                    "type": "Point", 
                    "coordinates": [-12362007.067301,5729082.2365672]
                },
                "properties": {
                    "Name": "Tim Schaub", 
                    "Country":"United States of America", 
                    "City":"Bozeman"
                }
            }
            ]
        };

        var reader = new OpenLayers.Format.GeoJSON();

        return reader.read(features);
    }

}

function onSelectFeatureFunction(feature){
    console.info(feature);
}

function clickBoton(){
    SitesWS.getSite(showSites);
    
    var center = new OpenLayers.Layer.Vector("center", {});
    center.id = "center";
    map.addLayer(center);
}

function showSites(data){
    console.log(data);
    var style = {
        fillOpacity: 0.1,
        fillColor: '#000',
        strokeColor: '#f0F',
        strokeOpacity: 0.6
    };
    
    var point = new OpenLayers.Geometry.Point(data.lon,data.lat);
    point.transform(st,gm);
    
    //    vector.removeAllFeatures();
    vector.addFeatures([
        new OpenLayers.Feature.Vector(
            point,
            {},
            {
                graphicName: 'cross',
                strokeColor: '#f00',
                strokeWidth: 2,
                fillOpacity: 0,
                pointRadius: 10
            }
            ),
        new OpenLayers.Feature.Vector(
            OpenLayers.Geometry.Polygon.createRegularPolygon(
                new OpenLayers.Geometry.Point(point.x, point.y),
                200,
                50,
                0
                ),
                {},
            style
            )
        ]);
        
    console.log(vector.getDataExtent());
    map.zoomToExtent(vector.getDataExtent());
    
}

var mapZoonIn = function(){
    map.zoomIn();
}
var mapZoomOut = function(){
    map.zoomOut();
}

function success(position) {
    var style = {
        fillOpacity: 0.1,
        fillColor: '#000',
        strokeColor: '#f00',
        strokeOpacity: 0.6
    };
    
    var point = new OpenLayers.Geometry.Point(position.coords.longitude,position.coords.latitude);
    point.transform(st,gm);
    
    vector.removeAllFeatures();
    vector.addFeatures([
        new OpenLayers.Feature.Vector(
            point,
            {},
            {
                graphicName: 'cross',
                strokeColor: '#f00',
                strokeWidth: 2,
                fillOpacity: 0,
                pointRadius: 10
            }
            ),
        new OpenLayers.Feature.Vector(
            OpenLayers.Geometry.Polygon.createRegularPolygon(
                new OpenLayers.Geometry.Point(point.x, point.y),
                position.coords.accuracy / 2,
                50,
                0
                ),
                {},
            style
            )
        ]);
        
//    map.zoomToExtent(vector.getDataExtent());
}

function error(msg) {
    alert('No Hay soporte para el navegador utilizado!!!');
// console.log(arguments);
}

function moveMap(data){
    var pointCentro = new OpenLayers.Geometry.Point(data.object.center.lon,data.object.center.lat);
    var features = new Array();
    var puntoMap = new OpenLayers.Feature.Vector( pointCentro, {
        ci : "datos[i].ci",
        lat : "datos[i].lat",
        lon : "datos[i].lon",
        dir : "datos[i].dir",
        poppedup : true
    });
    features.push(puntoMap);
    
    vector.addFeatures(features);
}

function clickBotonB(){
    console.log(map);
}
function clickBotonC(){
//    var center = map.getLayersByName("center");
//    console.log(center);
//    
//    var style = {
//        fillOpacity: 0.1,
//        fillColor: '#000',
//        strokeColor: '#f0F',
//        strokeOpacity: 0.6
//    };
//    center[0].removeLayer();
//    
//    var mark= new OpenLayers.Feature.Vector(
//            pointCentro,
//            {},
//            {
//                graphicName: 'cross',
//                strokeColor: '#f00',
//                strokeWidth: 2,
//                fillOpacity: 0,
//                pointRadius: 10
//            });
//            
//    center[0].addFeatures([mark]);
}