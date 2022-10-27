var config = {
    style: 'mapbox://styles/acopod/cl9r4xmnj001n15p8heixjraz',
    accessToken: 'pk.eyJ1IjoiYWNvcG9kIiwiYSI6ImNsOHg1OG5ybjAxajIzb2s0OGgzbmIxbDAifQ.hdscZl9C1nd35pLqEB1xsg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Public and Affordable Housing Flood Risk',
    subtitle: 'Do you still want to put your asset near waterfront after Hurricane Sandy?',
    byline: 'By a Digital Storyteller',
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
                center: [-122.418398, 37.759483],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
            
                    {
                     layer: 'pluto-hous-type',
                     opacity: 0,
                     duration: 5000 
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
            image: 'images/2362.webp',
            description: 'The city classifies Red Hook Houses as being in flood zone 1, indicating high flood risk. During Hurricane Sandy in 2012, the development was inundated with 6 feet (1.8 m) of flood water through sewer overflow and high tides.[16][2][17] The storm left residents without power and fresh water for months. This caused leaks, resulting in mold that affected many residents health. Prior to Sandy, various city reports outlined the need for increased flood protection projecting floods as high as 5 feet during storm surges yet NYCHA officials did not anticipate storm surges being that strong.',
            location: {
                center: [-74.01240, 40.67357],
                zoom: 14.99,
                pitch: 44.53,
                bearing: 84.22,
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
