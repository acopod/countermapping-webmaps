var config = {
    style: 'mapbox://styles/acopod/cl9r4xmnj001n15p8heixjraz',
    accessToken: 'pk.eyJ1IjoiYWNvcG9kIiwiYSI6ImNsOXI4NHEzZTBkbWU0MHFtZGJuaGZkYWMifQ.sZmqyas3S7qPVHJO032xuA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Public and Affordable Housing Flood Risk',
    subtitle: 'Do you still want to put your asset near waterfront after Hurricane Sandy?',
    byline: 'By acopod',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
            {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Introduction',
            image: 'images/Water1-superJumbo.jpg',
            description: 'In the fall of 2012, New York City was hit with hurricane that left tens of thousands of public housing residents <a href = "https://www1.nyc.gov/site/nycha/about/press/pr-2012/nycha-has-restored-power-to-buildings-affected-by-hurricane-sandy.page">without power for days or even weeks</a>. New York City Housing Authority public housing developments were affected. <a href="https://furmancenter.org/files/publications/SandysEffectsOnHousingInNYC.pdf">24,000 government-subsidized apartments and 40,000 rent-stabilized apartments were also affected. With rising sea levels from climate change and the <a href="https://www.nytimes.com/2017/04/18/magazine/when-rising-seas-transform-risk-into-certainty.html">promise</a> of more flooding, which areas and <i>who</i> will likely be most affected? How is affordable housing construction responding to this? </p>',
            location: {
                center: [-73.97269, 40.75511],
zoom: 12,
pitch: 46.04,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
            
                    {
                     layer: 'pluto-hous-type',
                     opacity: 0,
                    }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Damages to the Red Hook Houses',
            image: 'images/2362.png',
            description: 'New York City has classified the Red Hook as a high-risk flooding zone. During Hurricane Sandy, most of the area was inundated with 6 feet of floodwater due to sewer overflow and high tide, leaving the residents without electricity and fresh water for months. Therefore, NYCHA conceived a new public housing program at Red Hook that address the issue of sustainability. The development is the red area that includes 28 housing complexes and a capacity of over 6,000 people. However, the site locates precisely on the 2050 and 2100 predicted floodplains, possibly increasing the effort of design and planning. Whether there will have a better site for the housing development?',
            location: {
                center: [-74.00578, 40.67455],
zoom: 15.5,
pitch: 56.45,
bearing: 49.96
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [    
                    {
                     layer: 'pluto-hous-type',
                     opacity: 1,
                     duration: 5000
                    }
                 ],
            onChapterExit: []
        },
        /*{
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Third Title',
            image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [6.15116, 46.20595],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Third Title',
            image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-58.54195, -34.71600],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }*/
    ]
};
