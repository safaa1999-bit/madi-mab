var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenTopoMap_1 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_1_2 = new ol.format.GeoJSON();
var features_1_2 = format_1_2.readFeatures(json_1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_2.addFeatures(features_1_2);
var lyr_1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1_2, 
                style: style_1_2,
                popuplayertitle: '1',
                interactive: true,
                title: '<img src="styles/legend/1_2.png" /> 1'
            });
var format_2_3 = new ol.format.GeoJSON();
var features_2_3 = format_2_3.readFeatures(json_2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_3.addFeatures(features_2_3);
var lyr_2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2_3, 
                style: style_2_3,
                popuplayertitle: '2',
                interactive: true,
                title: '<img src="styles/legend/2_3.png" /> 2'
            });
var format_3_4 = new ol.format.GeoJSON();
var features_3_4 = format_3_4.readFeatures(json_3_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3_4.addFeatures(features_3_4);
var lyr_3_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3_4, 
                style: style_3_4,
                popuplayertitle: '3',
                interactive: true,
                title: '<img src="styles/legend/3_4.png" /> 3'
            });
var format_4_5 = new ol.format.GeoJSON();
var features_4_5 = format_4_5.readFeatures(json_4_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4_5.addFeatures(features_4_5);
var lyr_4_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4_5, 
                style: style_4_5,
                popuplayertitle: '4',
                interactive: true,
                title: '<img src="styles/legend/4_5.png" /> 4'
            });
var format_5_6 = new ol.format.GeoJSON();
var features_5_6 = format_5_6.readFeatures(json_5_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5_6.addFeatures(features_5_6);
var lyr_5_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_5_6, 
                style: style_5_6,
                popuplayertitle: '5',
                interactive: true,
                title: '<img src="styles/legend/5_6.png" /> 5'
            });
var format_6_7 = new ol.format.GeoJSON();
var features_6_7 = format_6_7.readFeatures(json_6_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6_7.addFeatures(features_6_7);
var lyr_6_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_6_7, 
                style: style_6_7,
                popuplayertitle: '6',
                interactive: true,
                title: '<img src="styles/legend/6_7.png" /> 6'
            });
var format_7_8 = new ol.format.GeoJSON();
var features_7_8 = format_7_8.readFeatures(json_7_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_7_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_7_8.addFeatures(features_7_8);
var lyr_7_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_7_8, 
                style: style_7_8,
                popuplayertitle: '7',
                interactive: true,
                title: '<img src="styles/legend/7_8.png" /> 7'
            });
var format_8_9 = new ol.format.GeoJSON();
var features_8_9 = format_8_9.readFeatures(json_8_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8_9.addFeatures(features_8_9);
var lyr_8_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_8_9, 
                style: style_8_9,
                popuplayertitle: '8',
                interactive: true,
                title: '<img src="styles/legend/8_9.png" /> 8'
            });
var format_rent2_10 = new ol.format.GeoJSON();
var features_rent2_10 = format_rent2_10.readFeatures(json_rent2_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rent2_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rent2_10.addFeatures(features_rent2_10);
var lyr_rent2_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rent2_10, 
                style: style_rent2_10,
                popuplayertitle: 'rent2',
                interactive: true,
                title: '<img src="styles/legend/rent2_10.png" /> rent2'
            });
var format_sale2_11 = new ol.format.GeoJSON();
var features_sale2_11 = format_sale2_11.readFeatures(json_sale2_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sale2_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sale2_11.addFeatures(features_sale2_11);
var lyr_sale2_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sale2_11, 
                style: style_sale2_11,
                popuplayertitle: 'sale2',
                interactive: true,
                title: '<img src="styles/legend/sale2_11.png" /> sale2'
            });

lyr_OSMStandard_0.setVisible(true);lyr_OpenTopoMap_1.setVisible(true);lyr_1_2.setVisible(true);lyr_2_3.setVisible(true);lyr_3_4.setVisible(true);lyr_4_5.setVisible(true);lyr_5_6.setVisible(true);lyr_6_7.setVisible(true);lyr_7_8.setVisible(true);lyr_8_9.setVisible(true);lyr_rent2_10.setVisible(true);lyr_sale2_11.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_OpenTopoMap_1,lyr_1_2,lyr_2_3,lyr_3_4,lyr_4_5,lyr_5_6,lyr_6_7,lyr_7_8,lyr_8_9,lyr_rent2_10,lyr_sale2_11];
lyr_1_2.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_2_3.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_3_4.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_4_5.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'population': 'population', });
lyr_5_6.set('fieldAliases', {'osm_id': 'osm_id', 'timestamp': 'timestamp', 'name': 'name', 'type': 'type', });
lyr_6_7.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_7_8.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'ref': 'ref', 'type': 'type', 'oneway': 'oneway', 'bridge': 'bridge', 'maxspeed': 'maxspeed', });
lyr_8_9.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'width': 'width', });
lyr_rent2_10.set('fieldAliases', {'Type': 'Type', 'Area': 'Area', 'Rooms': 'Rooms', 'Bathrooms': 'Bathrooms', 'Floor': 'Floor', 'Constraction year\delivery': 'Constraction year\delivery', 'Finishing': 'Finishing', 'View': 'View', 'Adv no': 'Adv no', 'Payment method': 'Payment method', 'Advertiser': 'Advertiser', 'Price': 'Price', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Description': 'Description', 'Image URL': 'Image URL', });
lyr_sale2_11.set('fieldAliases', {'Type': 'Type', 'Area': 'Area', 'Rooms': 'Rooms', 'Bathrooms': 'Bathrooms', 'Floor': 'Floor', 'Constraction year\delivery': 'Constraction year\delivery', 'Finishing': 'Finishing', 'View': 'View', 'Adv-no': 'Adv-no', 'Price of one meter': 'Price of one meter', 'Payment method': 'Payment method', 'Advertiser': 'Advertiser', 'Total price': 'Total price', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Description': 'Description', 'Image URL': 'Image URL', });
lyr_1_2.set('fieldImages', {'osm_id': '', 'name': '', 'type': '', });
lyr_2_3.set('fieldImages', {'osm_id': '', 'name': '', 'type': '', });
lyr_3_4.set('fieldImages', {'osm_id': '', 'name': '', 'type': '', });
lyr_4_5.set('fieldImages', {'osm_id': '', 'name': '', 'type': '', 'population': '', });
lyr_5_6.set('fieldImages', {'osm_id': '', 'timestamp': '', 'name': '', 'type': '', });
lyr_6_7.set('fieldImages', {'osm_id': '', 'name': '', 'type': '', });
lyr_7_8.set('fieldImages', {'osm_id': '', 'name': '', 'ref': '', 'type': '', 'oneway': '', 'bridge': '', 'maxspeed': '', });
lyr_8_9.set('fieldImages', {'osm_id': '', 'name': '', 'type': '', 'width': '', });
lyr_rent2_10.set('fieldImages', {'Type': '', 'Area': '', 'Rooms': '', 'Bathrooms': '', 'Floor': '', 'Constraction year\delivery': '', 'Finishing': '', 'View': '', 'Adv no': '', 'Payment method': '', 'Advertiser': '', 'Price': '', 'Longitude': '', 'Latitude': '', 'Description': '', 'Image URL': '', });
lyr_sale2_11.set('fieldImages', {'Type': '', 'Area': '', 'Rooms': '', 'Bathrooms': '', 'Floor': '', 'Constraction year\delivery': '', 'Finishing': '', 'View': '', 'Adv-no': '', 'Price of one meter': '', 'Payment method': '', 'Advertiser': '', 'Total price': '', 'Longitude': '', 'Latitude': '', 'Description': '', 'Image URL': '', });
lyr_1_2.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_2_3.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_3_4.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_4_5.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'type': 'no label', 'population': 'no label', });
lyr_5_6.set('fieldLabels', {'osm_id': 'no label', 'timestamp': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_6_7.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_7_8.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'ref': 'no label', 'type': 'no label', 'oneway': 'no label', 'bridge': 'no label', 'maxspeed': 'no label', });
lyr_8_9.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'type': 'no label', 'width': 'no label', });
lyr_rent2_10.set('fieldLabels', {'Type': 'inline label - always visible', 'Area': 'inline label - always visible', 'Rooms': 'inline label - always visible', 'Bathrooms': 'inline label - always visible', 'Floor': 'inline label - always visible', 'Constraction year\delivery': 'inline label - always visible', 'Finishing': 'inline label - always visible', 'View': 'inline label - always visible', 'Adv no': 'inline label - always visible', 'Payment method': 'inline label - always visible', 'Advertiser': 'inline label - always visible', 'Price': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Description': 'inline label - always visible', 'Image URL': 'inline label - always visible', });
lyr_sale2_11.set('fieldLabels', {'Type': 'inline label - always visible', 'Area': 'inline label - visible with data', 'Rooms': 'inline label - always visible', 'Bathrooms': 'inline label - always visible', 'Floor': 'inline label - always visible', 'Constraction year\delivery': 'inline label - always visible', 'Finishing': 'inline label - always visible', 'View': 'inline label - always visible', 'Adv-no': 'inline label - always visible', 'Price of one meter': 'inline label - always visible', 'Payment method': 'inline label - always visible', 'Advertiser': 'inline label - always visible', 'Total price': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Description': 'inline label - always visible', 'Image URL': 'inline label - always visible', });
lyr_sale2_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});