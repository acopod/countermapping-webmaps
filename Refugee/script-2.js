map.on('load',function(){
 /* map.addSource('pr',{
    'type':'raster',
    'url': 'mapbox://acopod.63snp6nk'
  });
  map.addSource('de',{
    'type':'raster',
    'url': 'mapbox://acopod.93n0u2p8'
  });
  map.addSource('br',{
    'type':'raster',
    'url': 'mapbox://acopod.b7ca4bff'
  });*/
  map.addSource('refugee_resettlement',{
    'type':'vector',
    'url': 'mapbox://acopod.94lc4mm3'
  });
  map.addSource('undocumented_mexico',{
    'type':'vector',
    'url': 'mapbox://acopod.51i8pepq'
  });
  map.addSource('documented_border_crossing',{
    'type':'vector',
    'url': 'mapbox://acopod.b4f4k1v7'
  });
  map.addSource('documented_encampments_NYC',{
    'type':'vector',
    'url': 'mapbox://acopod.7v4nhp5e'
  });
  map.addSource('documented_border_encounter',{
    'type':'vector',
    'url': 'mapbox://acopod.a99rce5x'
  });
  map.addSource('documented_border_encounter_circle',{
    'type':'vector',
    'url': 'mapbox://acopod.6grgj01f'
  });
  map.addSource('documented_route_south',{
    'type':'vector',
    'url': 'mapbox://acopod.26ez91pn'
  });
  map.addSource('ti_2021_1',{
    'type':'raster',
    'url': 'mapbox://acopod.88pgqut0'
  });
  map.addSource('ti_2021_7',{
    'type':'raster',
    'url': 'mapbox://acopod.45njaku8'
  });
  map.addSource('del_2021_1',{
    'type':'raster',
    'url': 'mapbox://acopod.cqwexy52'
  });
  map.addSource('del_2021_7',{
    'type':'raster',
    'url': 'mapbox://acopod.8ft6pbgz'
  });
  map.addSource('re_2021_1',{
    'type':'raster',
    'url': 'mapbox://acopod.4xdp9muv'
  });
  map.addSource('re_2022_2',{
    'type':'raster',
    'url': 'mapbox://acopod.0f0b7rql'
  });
  map.addSource('dropin',{
    'type':'vector',
    'url': 'mapbox://acopod.5216otnp'
  });
  map.addSource('afterschool',{
    'type':'vector',
    'url': 'mapbox://acopod.dfy9ma70'
  });
  map.addSource('nroute1',{
    'type':'vector',
    'url': 'mapbox://acopod.1umujka9'
  });
  map.addSource('nroute2',{
    'type':'vector',
    'url': 'mapbox://acopod.709b2b5z'
  });








  map.addLayer({
    'id':'resettlement',
    'type':'fill',
    'source':'refugee_resettlement',
    'source-layer':'inflow_number-79gkq9',
    'paint':{
       'fill-color':['step',
        ['get','2022REFUG'],
        'white',437,'#ffbfbf',874,'#ff8080',1311,'#ff4040',1748,'#ff0000'],
      'fill-opacity': 0,
      //'fill-stroke-width': 0,
    }
  });/*
      map.addLayer({
    'id':'dek',
    'type':'raster',
    'source':'de',

    'paint': {
'raster-fade-duration': 0
}
  });
      map.addLayer({
    'id':'bro',
    'type':'raster',
    'source':'br',

    'paint': {
'raster-fade-duration': 0
}
  });
      map.addLayer({
    'id':'pro',
    'type':'raster',
    'source':'pr',

    'paint': {
'raster-fade-duration': 0
}
  });*/
    map.addLayer({
    'id':'undocumentedmexico',
    'type':'circle',
    'source':'undocumented_mexico',
    'source-layer':'undocumented_mexico-3u9a2t',
    'paint': {
    'circle-color': '#faeb19',
    'circle-radius': ['step',
        ['get','Total Unauthorized Population in Geography'],
        3,191800,8,381600,15,571400,25,951000,40],
    'circle-stroke-width': 0,
    'circle-opacity':0 ,
    }
  });
        map.addLayer({
    'id':'undocumentedmexico_samesize',
    'type':'circle',
    'source':'undocumented_mexico',
    'source-layer':'undocumented_mexico-3u9a2t',
    'paint': {
    'circle-color': '#faeb19',
    'circle-radius': 3,
    'circle-stroke-width': 0,
    'circle-opacity':0 ,
    }
  });
      map.addLayer({
    'id':'route_south_1',
    'type':'line',
    'source':'documented_route_south',
    'source-layer':'route_merged-1-6qudu8',
    
    'paint': {
    'line-color': '#767fe3',
    'line-width': 2,
    'line-opacity':0 ,
    }
  });
     map.addLayer({
    'id':'route_south_2',
    'type':'line',
    'source':'documented_route_south',
    'source-layer':'route_merged-1-6qudu8',
    'paint': {

    'line-color': '#767fe3',
    'line-width': 2,
    'line-opacity':0 ,
    }
  });
    map.addLayer({
    'id':'border_crossing',
    'type':'circle',
    'source':'documented_border_crossing',
    'source-layer':'border_crossing_2019-ahnw80',
    'paint': {
    'circle-color': '#D7CEB2',
    'circle-radius': ['step',
        ['get','Sum'],
        5,7363084,10,14703490,20,22043895,30,29384301,40,36724706,50],
    'circle-stroke-width': 0,
    'circle-opacity':0 ,
    }
  });
    map.addLayer({
    'id':'encampments_NYC',
    'type':'circle',
    'source':'documented_encampments_NYC',
    'source-layer':'encampments_NYC_DBSCAN-56mk3u',
    'paint': {
    'circle-color': ['match',
    ['get', 'CLUSTER_ID'],
    2,
    '#fbb03b',
    8,
    '#63e69a',
    1,
    '#e55e5e',
    13,
    '#3bb2d0',
    4,
    '#db63e6',
    40,
    '#db63e6',
    47,
    '#db63e6',
    /* other */ 'grey'
    ],
    'circle-radius': 2,
    'circle-opacity': 0.2,
    'circle-opacity':0 ,
    }
  });
  map.addLayer({
    'id':'borderencounter_b2021',
    'type':'fill',
    'source':'documented_border_encounter',
    'source-layer':'borderencounter-63ctgi',
    'paint':{
       'fill-color':['step',
        ['get','COUNT'],
        '#fef0d9',8805,'#fdcc8a',27000,'#fc8d59',65000,'#e34a33',75000,'#b30000'],
      'fill-opacity': 0
    }
      });
      map.addLayer({
    'id':'borderencounter_a2021',
    'type':'fill',
    'source':'documented_border_encounter',
    'source-layer':'borderencounter-63ctgi',
    'paint':{
       'fill-color':['step',
        ['get','COUNT2021'],
        '#fef0d9',92835,'#fdcc8a',143114,'#fc8d59',194303,'#e34a33',225867,'#b30000'],
      'fill-opacity': 0
    }
  });
    map.addLayer({
    'id':'borderencounter_b2021_circle',
    'type':'circle',
    'source':'documented_border_encounter_circle',
    'source-layer':'circle_chart_encounter1-4pkazn',
    'paint': {
    'circle-color': 'black',
    'circle-radius': ['step',
        ['get','COUNT'],
        1,8805,3,27500,4,40433,6.4,64083,7.5,75000,9],
    'circle-opacity': 0,  
    }
  });
    map.addLayer({
    'id':'borderencounter_a2021_circle',
    'type':'circle',
    'source':'documented_border_encounter_circle',
    'source-layer':'circle_chart_encounter1-4pkazn',
    'paint': {
    'circle-color': 'grey',
    'circle-radius': ['step',
        ['get','COUNT2021'],
        3.8,37300,6,60000,12,120000,14,140000,18,180000,21,210000,26,260000,55],
    'circle-opacity': 0,  
    }
  });

     map.addLayer({
    'id':'ti_2021',
    'type':'raster',
    'source':'ti_2021_1',

    'paint': {
'raster-fade-duration': 0
}
  });
      map.addLayer({
    'id':'ti_2021_7',
    'type':'raster',
    'source':'ti_2021_7',

    'paint': {
'raster-fade-duration': 0
}
  });
      map.addLayer({
    'id':'de_2021',
    'type':'raster',
    'source':'del_2021_1',

    'paint': {
'raster-fade-duration': 0
}
  });
      map.addLayer({
    'id':'de_2021_7',
    'type':'raster',
    'source':'del_2021_7',

    'paint': {
'raster-fade-duration': 0
}
  });
      map.addLayer({
    'id':'re_2021',
    'type':'raster',
    'source':'re_2021_1',

    'paint': {
'raster-fade-duration': 0
}
  });
      map.addLayer({
    'id':'re_2022',
    'type':'raster',
    'source':'re_2022_2',

    'paint': {
'raster-fade-duration': 0
}
  });

      map.addLayer({
    'id':'NYC_dropin',
    'type':'circle',
    'source':'dropin',
    'source-layer':'drop-in-bsjkni',
    'paint': {
    'circle-color': '#d99b77',
    'circle-radius': 15,
    'circle-opacity': 0,  
    }
  });
      map.addLayer({
    'id':'NYC_afterschool',
    'type':'circle',
    'source':'afterschool',
    'source-layer':'after_school-cs2oht',
    'paint': {
    'circle-color': '#b277d9',
    'circle-radius': 15,
    'circle-opacity': 0,  
    }
  });

     map.addLayer({
    'id':'route_north_1',
    'type':'line',
    'source':'nroute1',
    'source-layer':'Nroute_1',
    'paint': {

    'line-color': 'orange',
    'line-width': 0.5,
    'line-opacity':0 ,
    }
  });


     map.addLayer({
    'id':'route_north_2',
    'type':'line',
    'source':'nroute2',
    'source-layer':'Nroute_2',
    'paint': {

    'line-color': 'orange',
    'line-width': 0.5,
    'line-opacity':0 ,
    }
  });






});
