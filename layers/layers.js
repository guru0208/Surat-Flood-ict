var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Buildings_1 = new ol.format.GeoJSON();
var features_Buildings_1 = format_Buildings_1.readFeatures(json_Buildings_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_1.addFeatures(features_Buildings_1);
var lyr_Buildings_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buildings_1, 
                style: style_Buildings_1,
                interactive: true,
                title: '<img src="styles/legend/Buildings_1.png" /> Buildings'
            });
var format_FloodLevel7M_2 = new ol.format.GeoJSON();
var features_FloodLevel7M_2 = format_FloodLevel7M_2.readFeatures(json_FloodLevel7M_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FloodLevel7M_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FloodLevel7M_2.addFeatures(features_FloodLevel7M_2);
var lyr_FloodLevel7M_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FloodLevel7M_2, 
                style: style_FloodLevel7M_2,
                interactive: true,
    title: 'Flood Level @ 7M<br />\
    <img src="styles/legend/FloodLevel7M_2_0.png" /> 7 M<br />\
    <img src="styles/legend/FloodLevel7M_2_1.png" /> <br />'
        });
var format_FloodLevel2M_3 = new ol.format.GeoJSON();
var features_FloodLevel2M_3 = format_FloodLevel2M_3.readFeatures(json_FloodLevel2M_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FloodLevel2M_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FloodLevel2M_3.addFeatures(features_FloodLevel2M_3);
var lyr_FloodLevel2M_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FloodLevel2M_3, 
                style: style_FloodLevel2M_3,
                interactive: true,
    title: 'Flood Level @ 2M<br />\
    <img src="styles/legend/FloodLevel2M_3_0.png" />  2 M<br />\
    <img src="styles/legend/FloodLevel2M_3_1.png" /> <br />'
        });
var format_HelpCenters_4 = new ol.format.GeoJSON();
var features_HelpCenters_4 = format_HelpCenters_4.readFeatures(json_HelpCenters_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HelpCenters_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HelpCenters_4.addFeatures(features_HelpCenters_4);
var lyr_HelpCenters_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HelpCenters_4, 
                style: style_HelpCenters_4,
                interactive: true,
    title: 'Help Centers<br />\
    <img src="styles/legend/HelpCenters_4_0.png" /> blood_bank<br />\
    <img src="styles/legend/HelpCenters_4_1.png" /> clinic<br />\
    <img src="styles/legend/HelpCenters_4_2.png" /> community_centre<br />\
    <img src="styles/legend/HelpCenters_4_3.png" /> doctors<br />\
    <img src="styles/legend/HelpCenters_4_4.png" /> fire_station<br />\
    <img src="styles/legend/HelpCenters_4_5.png" /> hospital<br />\
    <img src="styles/legend/HelpCenters_4_6.png" /> pharmacy<br />\
    <img src="styles/legend/HelpCenters_4_7.png" /> police<br />'
        });
var format_EssentialInfrastructure_5 = new ol.format.GeoJSON();
var features_EssentialInfrastructure_5 = format_EssentialInfrastructure_5.readFeatures(json_EssentialInfrastructure_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EssentialInfrastructure_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EssentialInfrastructure_5.addFeatures(features_EssentialInfrastructure_5);
var lyr_EssentialInfrastructure_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EssentialInfrastructure_5, 
                style: style_EssentialInfrastructure_5,
                interactive: true,
    title: 'Essential Infrastructure<br />\
    <img src="styles/legend/EssentialInfrastructure_5_0.png" /> Agro Industry<br />\
    <img src="styles/legend/EssentialInfrastructure_5_1.png" /> Bank<br />\
    <img src="styles/legend/EssentialInfrastructure_5_2.png" /> Bedded Hospital<br />\
    <img src="styles/legend/EssentialInfrastructure_5_3.png" /> Block Headquarter<br />\
    <img src="styles/legend/EssentialInfrastructure_5_4.png" /> Bus Stand<br />\
    <img src="styles/legend/EssentialInfrastructure_5_5.png" /> Cold Storage<br />\
    <img src="styles/legend/EssentialInfrastructure_5_6.png" /> Collection Centre or Pack House<br />\
    <img src="styles/legend/EssentialInfrastructure_5_7.png" /> Community Health Centre<br />\
    <img src="styles/legend/EssentialInfrastructure_5_8.png" /> Degree College<br />\
    <img src="styles/legend/EssentialInfrastructure_5_9.png" /> Fuel Station<br />\
    <img src="styles/legend/EssentialInfrastructure_5_10.png" /> High School - General<br />\
    <img src="styles/legend/EssentialInfrastructure_5_11.png" /> High School - Girls<br />\
    <img src="styles/legend/EssentialInfrastructure_5_12.png" /> Higher Secondary School<br />\
    <img src="styles/legend/EssentialInfrastructure_5_13.png" /> ITI<br />\
    <img src="styles/legend/EssentialInfrastructure_5_14.png" /> Mandi (Notified)<br />\
    <img src="styles/legend/EssentialInfrastructure_5_15.png" /> Panchayat Headquarter<br />\
    <img src="styles/legend/EssentialInfrastructure_5_16.png" /> Primary Health Centre<br />\
    <img src="styles/legend/EssentialInfrastructure_5_17.png" /> Sugar Mills<br />\
    <img src="styles/legend/EssentialInfrastructure_5_18.png" /> Veterinary Hospital<br />\
    <img src="styles/legend/EssentialInfrastructure_5_19.png" /> Warehouse<br />'
        });
var format_Firestationssurat_6 = new ol.format.GeoJSON();
var features_Firestationssurat_6 = format_Firestationssurat_6.readFeatures(json_Firestationssurat_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Firestationssurat_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Firestationssurat_6.addFeatures(features_Firestationssurat_6);
var lyr_Firestationssurat_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Firestationssurat_6, 
                style: style_Firestationssurat_6,
                interactive: true,
                title: '<img src="styles/legend/Firestationssurat_6.png" /> Fire stations surat'
            });
var format_Sirenwarning_7 = new ol.format.GeoJSON();
var features_Sirenwarning_7 = format_Sirenwarning_7.readFeatures(json_Sirenwarning_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sirenwarning_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sirenwarning_7.addFeatures(features_Sirenwarning_7);
var lyr_Sirenwarning_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sirenwarning_7, 
                style: style_Sirenwarning_7,
                interactive: true,
                title: '<img src="styles/legend/Sirenwarning_7.png" /> Siren (warning)'
            });
var format_Waterbodies_8 = new ol.format.GeoJSON();
var features_Waterbodies_8 = format_Waterbodies_8.readFeatures(json_Waterbodies_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waterbodies_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterbodies_8.addFeatures(features_Waterbodies_8);
var lyr_Waterbodies_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Waterbodies_8, 
                style: style_Waterbodies_8,
                interactive: false,
    title: 'Water bodies<br />\
    <img src="styles/legend/Waterbodies_8_0.png" /> canal<br />\
    <img src="styles/legend/Waterbodies_8_1.png" /> drain<br />\
    <img src="styles/legend/Waterbodies_8_2.png" /> river<br />\
    <img src="styles/legend/Waterbodies_8_3.png" /> stream<br />'
        });
var format_2016SUDABoundary_9 = new ol.format.GeoJSON();
var features_2016SUDABoundary_9 = format_2016SUDABoundary_9.readFeatures(json_2016SUDABoundary_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2016SUDABoundary_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2016SUDABoundary_9.addFeatures(features_2016SUDABoundary_9);
var lyr_2016SUDABoundary_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2016SUDABoundary_9, 
                style: style_2016SUDABoundary_9,
                interactive: false,
                title: '<img src="styles/legend/2016SUDABoundary_9.png" /> 2016 SUDA Boundary '
            });
var format_SMCBoundary_10 = new ol.format.GeoJSON();
var features_SMCBoundary_10 = format_SMCBoundary_10.readFeatures(json_SMCBoundary_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMCBoundary_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMCBoundary_10.addFeatures(features_SMCBoundary_10);
var lyr_SMCBoundary_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SMCBoundary_10, 
                style: style_SMCBoundary_10,
                interactive: false,
                title: '<img src="styles/legend/SMCBoundary_10.png" /> SMC Boundary'
            });
var format_2035sudaboundary_11 = new ol.format.GeoJSON();
var features_2035sudaboundary_11 = format_2035sudaboundary_11.readFeatures(json_2035sudaboundary_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2035sudaboundary_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2035sudaboundary_11.addFeatures(features_2035sudaboundary_11);
var lyr_2035sudaboundary_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2035sudaboundary_11, 
                style: style_2035sudaboundary_11,
                interactive: false,
                title: '<img src="styles/legend/2035sudaboundary_11.png" /> 2035 suda boundary'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Buildings_1.setVisible(true);lyr_FloodLevel7M_2.setVisible(true);lyr_FloodLevel2M_3.setVisible(true);lyr_HelpCenters_4.setVisible(true);lyr_EssentialInfrastructure_5.setVisible(true);lyr_Firestationssurat_6.setVisible(true);lyr_Sirenwarning_7.setVisible(true);lyr_Waterbodies_8.setVisible(true);lyr_2016SUDABoundary_9.setVisible(true);lyr_SMCBoundary_10.setVisible(true);lyr_2035sudaboundary_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Buildings_1,lyr_FloodLevel7M_2,lyr_FloodLevel2M_3,lyr_HelpCenters_4,lyr_EssentialInfrastructure_5,lyr_Firestationssurat_6,lyr_Sirenwarning_7,lyr_Waterbodies_8,lyr_2016SUDABoundary_9,lyr_SMCBoundary_10,lyr_2035sudaboundary_11];
lyr_Buildings_1.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_FloodLevel7M_2.set('fieldAliases', {'DN': 'DN', });
lyr_FloodLevel2M_3.set('fieldAliases', {'DN': 'DN', 'Area_ha': 'Area_ha', });
lyr_HelpCenters_4.set('fieldAliases', {'osm_id': 'osm_id', 'timestamp': 'timestamp', 'name': 'name', 'type': 'type', });
lyr_EssentialInfrastructure_5.set('fieldAliases', {'Facility N': 'Facility N', 'Address': 'Address', 'Facility C': 'Facility C', 'Facility S': 'Facility S', 'Lattitude': 'Lattitude', 'Longitude': 'Longitude', 'field_7': 'field_7', });
lyr_Firestationssurat_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'placepageU': 'placepageU', 'snippet': 'snippet', });
lyr_Sirenwarning_7.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Waterbodies_8.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'width': 'width', });
lyr_2016SUDABoundary_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_SMCBoundary_10.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', });
lyr_2035sudaboundary_11.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', });
lyr_Buildings_1.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_FloodLevel7M_2.set('fieldImages', {'DN': 'Range', });
lyr_FloodLevel2M_3.set('fieldImages', {'DN': 'Range', 'Area_ha': 'TextEdit', });
lyr_HelpCenters_4.set('fieldImages', {'osm_id': 'TextEdit', 'timestamp': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_EssentialInfrastructure_5.set('fieldImages', {'Facility N': 'TextEdit', 'Address': 'TextEdit', 'Facility C': 'TextEdit', 'Facility S': 'TextEdit', 'Lattitude': 'TextEdit', 'Longitude': 'TextEdit', 'field_7': 'TextEdit', });
lyr_Firestationssurat_6.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'placepageU': 'TextEdit', 'snippet': 'TextEdit', });
lyr_Sirenwarning_7.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Waterbodies_8.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'width': 'Range', });
lyr_2016SUDABoundary_9.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_SMCBoundary_10.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', });
lyr_2035sudaboundary_11.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', });
lyr_Buildings_1.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_FloodLevel7M_2.set('fieldLabels', {'DN': 'no label', });
lyr_FloodLevel2M_3.set('fieldLabels', {'DN': 'no label', 'Area_ha': 'no label', });
lyr_HelpCenters_4.set('fieldLabels', {'osm_id': 'no label', 'timestamp': 'no label', 'name': 'inline label', 'type': 'header label', });
lyr_EssentialInfrastructure_5.set('fieldLabels', {'Facility N': 'inline label', 'Address': 'inline label', 'Facility C': 'no label', 'Facility S': 'header label', 'Lattitude': 'inline label', 'Longitude': 'inline label', 'field_7': 'no label', });
lyr_Firestationssurat_6.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'placepageU': 'no label', 'snippet': 'inline label', });
lyr_Sirenwarning_7.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Waterbodies_8.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'type': 'no label', 'width': 'no label', });
lyr_2016SUDABoundary_9.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_SMCBoundary_10.set('fieldLabels', {'id': 'no label', 'NAME': 'no label', });
lyr_2035sudaboundary_11.set('fieldLabels', {'id': 'no label', 'NAME': 'no label', });
lyr_2035sudaboundary_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});