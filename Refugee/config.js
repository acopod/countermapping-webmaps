var config = {
    style:  'mapbox://styles/acopod/clak76x5h000015m4sgcnwkr7',
    accessToken: 'pk.eyJ1IjoiYWNvcG9kIiwiYSI6ImNsOHg1OG5ybjAxajIzb2s0OGgzbmIxbDAifQ.hdscZl9C1nd35pLqEB1xsg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'mercator',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Refugees as Weapons?',
    subtitle: 'The sequel of unauthorized migrants from US-Mexico border',
   
    para1: 'The diversification of modern warfare, such as information warfare, economic warfare, or the deliberate manipulation of fears of war, has caused tremendous changes in the built environment and cities. Among them, a new tactic is using refugees as weapons. Through deliberate manipulation of refugees, paralyzing or undermining the organization, and dislocating civilians for an economic purpose, the targeted country is forced to put resources in the humanitarian space and overwhelmed. Behind this phenomenon are the refugees who are forced to migrate. A refugee camp or an unfamiliar city will be their new home. The overwhelmed situation of immigrants makes the targeted country need to make concessions on political agreements. Some methodologies in weaponized migration have been articulated by Kelly Greenhill. This paper will highlight the effect of migration infiltration.',
    para2: 'The migration infiltration indicates that the invisible hands manipulate the flow of migrants to facilitate terrorist operations in states offering asylum. For homeland security, the states offering asylum label the migrants with distinct characteristics which can justify not providing assistance for them, such as people related to crime, drugs, and terrorism. The attacker thus mobilized the demographic into a sudden influx to the targeted country through propaganda to raise their impulse of migration. For the United States, the most obvious example is the US-Mexico border. Many people are waiting to enter the United States at the border, and they set up camps there, hoping to one day enter the United States to find more opportunities. Camps are the places of desperation that the public imagines. It has also been seen as an incubator for further migration infiltration. If the counter-mapping creates a new perspective, the camps may not be a catalyst for migration infiltrations. And we can understand the sequel of migration in a different way beyond the endless suffering.',
    //byline: 'By Tung Chen',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
     {
            id: '1-2-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Border Crossing',
            image: 'images/numbers.png',
            description: 'Migration Infiltration is an operation between unsuspecting, innocent, and unwitting refugees. Violent criminal groups have recently used it by exploiting vulnerable groups and facilitating terrorist operations in asylum-providing states. In the United States, the site for this phenomenon is best represented by immigrants and refugees at the US-Mexico border. Due to the difference in living standards and economic levels between the United States and Mexico, about 1 million illegal immigrants try to cross the border to live in the United States every year. More than 80% of them are Mexicans, and the other 20% are mostly Central Americans.In fiscal year 2021, a total of 188,228,921 people crossed the US-Mexico border. Among them, San Ysidro, El Paso, and Laredo have the highest number of passers-by, accounting for 40% of the total.',
            location: {
                center:  [-95.78645, 33.69030],
                zoom: 4.2,
                pitch: 60,
                bearing: 0,
                speed: 0.05,

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
                        onChapterEnter: [
                 {
                     layer: 'border_crossing',
                     opacity: 0,
                     duration: 1
                 },
                                  {
                     layer: 'borderencounter_b2021_circle',
                     opacity: 0,
                     duration: 1
                 },
                 {
                     layer: 'borderencounter-simple-zone-2021',
                     opacity: 0,
                     duration: 1
                 },
                 {
                     layer: 'borderencounter-simple-zone-2020',
                     opacity: 0,
                     duration: 1
                 },
                 {
                     layer: 'bordercrossing-bar-1-6pgh5r',
                     opacity: 0.75,
                     duration: 3000
                 },
                 {
                     layer: 'dek',
                     opacity: 0,
                     duration: 1
                 },
                 {
                     layer: 'bro',
                     opacity: 0,
                     duration: 1
                 },
                 {
                     layer: 'pro',
                     opacity: 0,
                     duration: 1
                 },

            ],
            onChapterExit: [
                 

            ]


        },
                
        {
            id: '1-1-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Southwest Border Encounters Before January 20, 2021',
            image: 'images/50040937841.jpg',
            description: 'During the Trump administration, <a href = "https://">there were many policies on the U.S.-Mexico border that restricted immigration and illegal entry.</a> These include the U.S.-Mexico fence, enhanced border control, and restrictions on the number of refugees. From 2017 to 2021, the number of encounters with migrants on the southern border fell to a new low in recent years. This is also Trumps main policy, border security and control of illegal immigration. In his announcement speech he stated in part, When Mexico sends its people, they are not sending their best...They are sending people that have lots of problems, and they are bringing those problems. ... They are bringing drugs. They are bringing crime. They are rapists. And some, I assume, are good people.',
            location: {
                center: //[-122.36687, 34.58745]
                [-95.78645, 33.69030],
                zoom: 4.2,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'borderencounter_b2021',
                     opacity: 0,
                     duration: 3000
                 },
                 {
                     layer: 'borderencounter_b2021_circle',
                     opacity: 0,
                     duration: 3000
                 },
                  {
                     layer: 'undocumented-mexico-bar-9ouf4k',
                     opacity: 0,
                     duration: 1
                 }, 
                 
                 {
                     layer: 'borderencounter-simple-zone-2020',
                     opacity: 0.5,
                     duration: 3000
                 },
                 {
                     layer: 'borderencounter-simple-zone-2021',
                     opacity: 0,
                     duration: 3000
                 },
                 {
                     layer: 'bordercrossing-bar-1-6pgh5r',
                     opacity: 0.75,
                     duration: 3000
                 },

            ],
            onChapterExit: [
                 {
                     layer: 'borderencounter_b2021',
                     opacity: 0,
                     duration: 3000
                 },
                                  
            ]
        },
        {
            id: '1-1-1-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Southwest Border Encounters After January 20, 2021',
            image: 'images/biden.jpg',
            description: 'Former U.S. President Donald Trump swore an oath to crack down on illegal immigration and built a wall on the U.S.-Mexico border, but the project was only halfway through after he lost his re-election campaign. During the Biden administration, <a href = "https://">The announced the complete cancellation of the wall construction plan.</a> Will such background conditions change the effectiveness of this weapon? Regardless, the number of people crossing the border has skyrocketed since Trump took office. Because of this situation, camps on the US-Mexico border are spread over Mexican territory, compared to other countries where the camps are located on the territory of the country providing assistance. It reflects the United States awareness of this weapons destructive power. It also highlights the statement that it is essential to reframe the spatial impact caused by refugees to counter the labeling of migrants from Mexico.',
            location: {
                center: [-95.78645, 33.69030],
                zoom: 4.2,
                pitch: 60,
                bearing: 0,
                speed: 0.05
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'borderencounter_a2021',
                     opacity: 0,
                     duration: 3000
                 },
                {
                     layer: 'borderencounter_a2021_circle',
                     opacity: 0,
                     duration: 3000
                 },
                                  {
                     layer: 'borderencounter_b2021_circle',
                     opacity: 0,
                     duration: 3000
                 },
                 {
                     layer: 'border_crossing',
                     opacity: 0,
                     duration: 3000
                 },
                 {
                     layer: 'borderencounter-simple-zone-2020',
                     opacity: 1,
                     duration: 3000
                 },
                 {
                     layer: 'bordercrossing-bar-1-6pgh5r',
                     opacity: 0.75,
                     duration: 3000
                 },

                 {
                     layer: 'borderencounter-simple-zone-2021',
                     opacity: 0.5,
                     duration: 3000
                 },
                 {
                     layer: 'route_south_1',
                     opacity: 0,
                     duration: 3000
                 },
                                  {
                     layer: 'route_south_2',
                     opacity: 0,
                     duration: 3000
                 },
            ],
            onChapterExit: [
                {
                     layer: 'borderencounter_a2021',
                     opacity: 0,
                     duration: 3000
                 },
                {
                     layer: 'borderencounter_a2021_circle',
                     opacity: 0,
                     duration: 3000
                 },
                 {
                     layer: 'borderencounter-2021',
                     opacity: 0,
                     duration: 3000
                 },

            ]
        },
        {
            id: '1-2-1-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Route for opportunities',
            image: 'images/Screenshot 2022-11-22 043710.png',
            description: '<a href = "https://">The journey to the United States is farther than imagined.</a> The average time it takes to get to the border is one month, and when you add the time spent waiting in the camps, it can take up to two months to enter the United States. Therefore, more people chose to enter illegally, which is also the main source of migration infiltration. Because it is hard to confirm the identity of the person coming through the border control, illegal immigrants are labeled as a possible crime. The war of migration is not caused by a single decision, but by aggregation. Similarly, the illegal crossing could present a disastrous effect on the built environment if we do not read it carefully. What are the real environments they created after arriving at their new home? Border crossing is not just the moment, but the accumulated time of the journey one experienced.',
            location: {
                center: [-117.51896, 25.34866],
                zoom: 4,
                pitch: 0,
                bearing: 0,
                speed: 0.05,
                //curve: 0.8, // change the speed at which it zooms out

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
                        onChapterEnter: [
                 {
                     layer: 'route_south_1',
                     opacity: 1,
                     duration: 3000
                 },
                                  {
                     layer: 'route_south_2',
                     opacity: 1,
                     duration: 15000
                 },
                 {
                     layer: 'border_crossing',
                     opacity: 0,
                     duration: 3000
                 },
                 {
                     layer: 'bordercrossing-bar-1-6pgh5r',
                     opacity: 0,
                     duration: 3000
                 },
                 {
                     layer: 'inflow-number-79gkq9',
                     opacity: 0,
                     duration: 3000
                 },
                 {
                     layer: 'borderencounter-simple-zone-2020',
                     opacity: 0,
                     duration: 3000
                 },

                 {
                     layer: 'borderencounter-simple-zone-2021',
                     opacity: 1,
                     duration: 3000
                 },
                 
            ],
            onChapterExit: [
                 
                                  {
                     layer: 'border_crossing',
                     opacity: 0,
                     duration: 3000
                 },
            ]

        },
        {
            id: '0-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Refugees and Sanctuary City',
            image: 'images/out.png',
            description: 'The U.S. government has deployed a large number of patrols on the U.S.-Mexico border to patrol the border in order to crack down on illegal immigrants and drug trafficking organizations. The U.S. Army and U.S. Customs and Border Protection jointly used infrared surveillance and helicopters to control the border. This configuration made the border defense a remarkable success and slowed down illegal entry. However, due to the changes of policy after the September 11 attacks, Arizona and New Mexico state governments stated that they are gradually unable to resist a large number of illegal immigrants, which has caused a considerable impact. Coupled with the fact that the number of refugees allowed by law is far smaller than the number of applicants, the number of illegal border crossers continues to rise. This is why migration infiltration is presented. It means that the stage in which this weapon is gradually taking shape.',
            location: {
                center: [-122.14940, 39.31806],
                zoom: 3,
                pitch: 45,
                bearing: 0,
                speed: 0.1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'inflow-number-79gkq9',
                     opacity: 0.7,
                     duration: 3000
                 },
                
                 
                 {
                     layer: 'route_south_1',
                     opacity: 1,
                     duration: 3000
                 },
                                  {
                     layer: 'route_south_2',
                     opacity: 1,
                     duration: 3000
                 },
                 {
                     layer: 'borderencounter-simple-zone-2020',
                     opacity: 0,
                     duration: 3000
                 },

                 {
                     layer: 'borderencounter-simple-zone-2021',
                     opacity: 1,
                     duration: 3000
                 },
                 {
                     layer: 'undocumented-mexico-bar-2-3iwd2r',
                     opacity: 0,
                     duration: 3000
                 },
            ],
            onChapterExit: [
                 
                    
            ]
        },
{
            id: '2-1-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Unauthorized Immigrant Populations from Mexico',
            image: 'images/imig.png',
            description: 'Therefore, unauthorized immigrant populations from Mexico appeared in the city. <a href = "https://calmatters.org/california-divide/2022/04/california-undocumented-immigrants/">The government began to centrally manage these populations, and they became the mysterious population of the city.</a> Compared with the refugees who live around the U.S.-Mexico border, although these urban immigrants will directly receive assistance and welfare, they will have a more substantial structural impact on the receiving cities. But on the other hand, how will the refugees themselves be marginalized due to the fragmentation of the camps?',
            location: {
              center: [-122.14940, 39.31806],
              zoom: 3,
              pitch: 45,
              bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'undocumentedmexico',
                     opacity: 0,
                     duration: 3000
                 },
                 {
                     layer: 'undocumented-mexico-bar-2-3iwd2r',
                     opacity: 0.75,
                     duration: 3000
                 },
                 {
                     layer: 'inflow-number-79gkq9',
                     opacity: 0.3,
                     duration: 3000
                 },{
                     layer: 'route_north_1',
                     opacity: 0,
                     duration: 3000
                 },
                 {
                     layer: 'route_north_2',
                     opacity: 0,
                     duration: 3000
                 },
                 {
                     layer: 'borderencounter-simple-zone-2021',
                     opacity: 0,
                     duration: 3000
                 },
                 {
                     layer: 'route_south_1',
                     opacity: 0,
                     duration: 3000
                 },
                                  {
                     layer: 'route_south_2',
                     opacity: 0,
                     duration: 3000
                 }],
            onChapterExit: [{
                     layer: 'undocumentedmexico',
                     opacity: 0,
                     duration: 3000
                 }]
        },
        {
            id: '2-1-1-chapter',
            alignment: 'left',
            hidden: false,
            title: 'The Long Journey',
            //image: 'images/14_1009_s1_border_slide-34.jpg',
            description: 'The war or conflict is not caused by a single decision, but it is the aggregation. Similarly, the innocent refugee under matriculation could present a disastrous effect on the built environment if we do not read it carefully. Can the introduction of a series of routes intervene in the outcome or hierarchy of the mapping process? The connection behind the plurality and singularity is this target that the analysis wants to approach. When a map focuses too much on the integration of data, will it ignore the uniqueness of the individuals presented in it? This is the topic that the methodology wants to discuss. Therefore, the datasets mentioned above not only focus on official information but also hope to use media such as reports, articles, biographies, and social media to find information and phenomena that data cannot elicit. Especially as a refugee, did he find himself a part of the weapon? Was the exaggerated propaganda and fear of wars making him embark on the path of migration?',
            location: {
              center: [-122.14940, 39.31806],
              zoom: 3,
              pitch: 45,
              bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'undocumentedmexico_samesize',
                     opacity: 0,
                     duration: 3000
                 },
                 {
                     layer: 'route_north_1',
                     opacity: 0.5,
                     duration: 3000
                 },
                 {
                     layer: 'route_north_2',
                     opacity: 0.5,
                     duration: 9000
                 },
                 {
                     layer: 'inflow-number-79gkq9',
                     opacity: 0,
                     duration: 3000
                 },
                 {
                     layer: 'sites-6rpdnp',
                     opacity: 0,
                     duration: 3000
                 },
                 {
                     layer: 'undocumented-mexico-bar-2-3iwd2r',
                     opacity: 0.75,
                     duration: 3000
                 }],
            onChapterExit: [
                 {
                     layer: 'undocumentedmexico_samesize',
                     opacity: 0,
                     duration: 3000
                 },
                ]
        },
        {
            id: 'X-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Three sites',
            //image: 'images/14_1009_s1_border_slide-34.jpg',
            description: 'Copy these sections to add to your story.',
            location: {
              center: [-122.14940, 39.31806],
              zoom: 3,
              pitch: 45,
              bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'undocumentedmexico_samesize',
                     opacity: 0,
                     duration: 3000
                 },
                 {
                     layer: 'sites-6rpdnp',
                     opacity: 0.5,
                     duration: 3000
                 },
                 {
                     layer: 'undocumented-mexico-bar-2-3iwd2r',
                     opacity: 0,
                     duration: 3000
                 },

                 {
                     layer: 'inflow-number-79gkq9',
                     opacity: 0,
                     duration: 3000
                 },
                 {
                     layer: 'route_north_1',
                     opacity: 0,
                     duration: 3000
                 },
                 {
                     layer: 'route_north_2',
                     opacity: 0,
                     duration: 9000
                 },
                 {
                     layer: 'route_south_1',
                     opacity: 0,
                     duration: 3000
                 },
                                  {
                     layer: 'route_south_2',
                     opacity: 0,
                     duration: 3000
                 },
                 {
                     layer: 'borderencounter-simple-zone-2021',
                     opacity: 0,
                     duration: 3000
                 }
                 ],
            onChapterExit: [
                 {
                     layer: 'undocumentedmexico_samesize',
                     opacity: 0,
                     duration: 3000
                 },
                 {
                     layer: 'sites-6rpdnp',
                     opacity: 0,
                     duration: 3000
                 }
                 ]
        },
        {
            id: '1-3-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Tijuana',
            image: 'images/SanYsidroBorderCrossing.jpg',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-117.03060, 32.54027],
                zoom: 17,
                pitch: 0,
                bearing: 0,
                speed: 0.8,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'ti_2021',
                     opacity: 1,
                     duration: 3000
                 },
                 {
                     layer: 'ti_2021_7',
                     opacity: 0,
                     duration: 3000
                 },
                 {
                     layer: 'sites-6rpdnp',
                     opacity: 0,
                     duration: 3000
                 },
                 {
                     layer: 'route_south_1',
                     opacity: 0,
                     duration: 3000
                 },
                                  {
                     layer: 'route_south_2',
                     opacity: 0,
                     duration: 3000 
                 },
            ],
            onChapterExit: [
                 {
                     layer: 'ti_2021',
                     opacity: 0,
                     duration: 3000
                 },
                 {
                     layer: 'ti_2021_7',
                     opacity: 1,
                     duration: 3000
                 },]
        },
        {
            id: '1-3-1-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Tijuana',
            image: 'images/ti.jpeg',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-117.03060, 32.54027],
                zoom: 17,
                pitch: 0,
                bearing: 0,
                speed: 0.8,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [

                 {
                     layer: 'ti_2021_7',
                     opacity: 0,
                     duration: 3000
                 },]
        },

        {
    id: 'interlude',
    alignment: 'center',
    hidden: false,
    description: 'Besides, since a large part of this study will focus on the impact of the pre-refugee and post- refugee camps on urban space, the intention of the reading of time through interactive maps could be enhanced. So, this map will show the spatial relationship between different regions and refugee camps. The analysis results will show whether they successfully accommodate these new residents or bring more separation and discrimination. ',
    //video: 'images/902-1_902-2364-PD2_preview.mp4',
    location: {
      center: [-117.03060, 32.54027],
                zoom: 12,
                pitch: 0,
                bearing: 0,
                speed: 0.8,
    },
},
        {
            id: '1-4-1-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Ciudad Acuna',
            image: 'images/479261-L.jpg',
            description: 'Copy these sections to add to your story.',
            location: {
              center: [-100.92339, 29.32778],
              zoom: 16.5,
              pitch: 0,
              bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'de_2021',
                     opacity: 1,
                     duration: 3000
                 },
                 {
                     layer: 'de_2021_7',
                     opacity: 0,
                     duration: 3000
                 },],
            onChapterExit: [
            {
                     layer: 'de_2021',
                     opacity: 1,
                     duration: 3000
                 },
                 {
                     layer: 'de_2021_7',
                     opacity: 1,
                     duration: 3000
                 }]
        },
        {
            id: '1-4-2-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Ciudad Acuna',
            image: 'images/cui.jpg',
            description: '<a href ="https://graphics.reuters.com/USA-IMMIGRATION/MEXICO/mopankddwva/">Border refugees</a>',
            location: {
              center: [-100.92339, 29.32778],
              zoom: 16.5,
              pitch: 0,
              bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               ],
            onChapterExit: [
            {
                     layer: 'de_2021',
                     opacity: 0,
                     duration: 3000
                 },
                 {
                     layer: 'de_2021_7',
                     opacity: 0,
                     duration: 3000
                 }]
        },

        {
    id: 'interlude-1',
    alignment: 'center',
    hidden: false,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies tempor purus, eget tempus sem bibendum vel. Maecenas at justo non felis accumsan condimentum vitae et leo. Sed sodales nec risus maximus congue. Ut quis tincidunt leo. Pellentesque sapien nisl, congue tempus mauris in, pulvinar mattis turpis. Nullam sit amet justo egestas, laoreet mauris ut, pulvinar ipsum. Pellentesque vehicula imperdiet iaculis. Nam in tellus metus. Donec a est non orci efficitur ornare id mattis eros. Aliquam vel facilisis ligula. Nullam tincidunt, sapien vitae bibendum consequat, nibh eros eleifend ligula, et aliquam enim justo eget felis. Sed nec vehicula metus. Pellentesque rutrum dui quis egestas hendrerit. Nullam auctor et tortor sit amet congue.',
    //video: 'images/902-1_902-2364-PD2_preview.mp4',
    location: {
      center: [-100.92339, 29.32778],
      zoom: 12,
      pitch: 0,
      bearing: 0,
    },
},
        {
            id: '1-5-1-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Reynosa',
            image: 'images/1200x0.jpg',
            description: '<a href ="https://www.mysanantonio.com/news/us-world/border-mexico/article/Mexican-governor-warns-citizens-to-not-travel-to-12790814.php">Mexican governor warns citizens to not travel to U.S. via Reynosa-McAllen bridge</a>',
            location: {
              center: [-98.27050, 26.09213],
              zoom: 17,
              pitch: 0,
              bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 're_2021',
                     opacity: 1,
                     duration: 3000
                 },
                 {
                     layer: 're_2022',
                     opacity: 0,
                     duration: 3000
                 },],
            onChapterExit: [
                 {
                     layer: 're_2021',
                     opacity: 0,
                     duration: 3000
                 },
                 {
                     layer: 're_2022',
                     opacity: 1,
                     duration: 3000
                 },]
        },
        {
            id: '1-5-2-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Reynosa',
            image: 'images/rey.png',
            description: '<a href ="https://www.nytimes.com/2021/08/25/us/migrant-camp-reynosa-remain-in-mexico.html/">A Squalid Border Camp Finally Closed. Now Another One Has Opened.</a>',
            location: {
              center: [-98.27050, 26.09213],
              zoom: 17,
              pitch: 0,
              bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                ],
            onChapterExit: [
                 {
                     layer: 're_2021',
                     opacity: 1,
                     duration: 3000
                 },
                 {
                     layer: 're_2022',
                     opacity: 0,
                     duration: 3000
                 },
                 {
                     layer: 'sites-6rpdnp',
                     opacity: 0.5,
                     duration: 3000
                 },]
        },
                {
    id: 'interlude-2',
    alignment: 'center',
    hidden: false,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies tempor purus, eget tempus sem bibendum vel. Maecenas at justo non felis accumsan condimentum vitae et leo. Sed sodales nec risus maximus congue. Ut quis tincidunt leo. Pellentesque sapien nisl, congue tempus mauris in, pulvinar mattis turpis. Nullam sit amet justo egestas, laoreet mauris ut, pulvinar ipsum. Pellentesque vehicula imperdiet iaculis. Nam in tellus metus. Donec a est non orci efficitur ornare id mattis eros. Aliquam vel facilisis ligula. Nullam tincidunt, sapien vitae bibendum consequat, nibh eros eleifend ligula, et aliquam enim justo eget felis. Sed nec vehicula metus. Pellentesque rutrum dui quis egestas hendrerit. Nullam auctor et tortor sit amet congue.',
    //video: 'images/902-1_902-2364-PD2_preview.mp4',
    location: {
      center: [-97.87481, 39.56868],
      zoom: 3.5,
      pitch: 0,
      bearing: 0,
    },
},

        {
            id: '2-2-1-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Encampments Removal',
            image: 'images/Chart_2.png',
            description: 'Copy these sections to add to your story.',
            location: {
              center:  [-74.01351, 40.74544],
              zoom: 12,
              pitch: 45,
              bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                     layer: 'encampments_NYC',
                     opacity: 0.08,
                     duration: 9000
                 },
                 {
                     layer: 'nycshelters-28vgv8',
                     opacity: 0,
                     duration: 3000
                 },
                 {
                     layer: 'dek',
                     opacity: 0,
                     duration: 1
                 },
                 {
                     layer: 'bro',
                     opacity: 0,
                     duration: 1
                 },
                 {
                     layer: 'pro',
                     opacity: 0,
                     duration: 1
                 },
                 {
                     layer: 'NYC_hispanic_1',
                     opacity: 0.8,
                     duration: 3000
                 }],
            onChapterExit: [{
                     layer: 'NYC_afterschool',
                     opacity: 0,
                     duration: 3000
                 },
                 {
                     layer: 'NYC_dropin',
                     opacity: 0,
                     duration: 3000
                 }]
        },
        {
            id: '2-2-2-chapter',
            alignment: 'left',
            hidden: false,
            title: 'DHS Shelters',
            image: 'images/Screenshot 2022-11-29 100112.png',
            description: '<a href ="https://pointsunknown.nyc/final-projects/GSAPP-Spring-2022/Migration-2/index.html">REFUGEE RENAISSANCE</a>',
            location: {
              center: [-74.01351, 40.74544],
              zoom: 12,
              pitch: 45,
              bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                     layer: 'encampments_NYC',
                     opacity: 0.08,
                     duration: 1}
                 ,
                 {
                     layer: 'nycshelters-28vgv8',
                     opacity: 0.5,
                     duration: 3000
                 },
                 ],
            onChapterExit: [
            ]
        },
        /*{
            id: '2-2-3-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Hotels & Shelters',
            image: 'images/Screen-Shot-2017-04-05-at-5.39.05-PM.png',
            description: 'Copy these sections to add to your story.',
            location: {
              center: [-74.01351, 40.74544],
              zoom: 12,
              pitch: 0,
              bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                     layer: 'encampments_NYC',
                     opacity: 0.08,
                     duration: 1}
                 ,
                 {
                     layer: 'NYC_afterschool',
                     opacity: 0.5,
                     duration: 3000
                 },
                 {
                     layer: 'NYC_dropin',
                     opacity: 0.5,
                     duration: 3000
                 }],
            onChapterExit: [
            ]
        },
        {
            id: '2-2-4-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Hotels & Shelters',
            image: 'images/Screen-Shot-2017-04-05-at-5.32.40-PM.png',
            description: 'Copy these sections to add to your story.',
            location: {
              center: [-74.01351, 40.74544],
              zoom: 12,
              pitch: 0,
              bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                     layer: 'encampments_NYC',
                     opacity: 0.08,
                     duration: 1}
                 ,
                 {
                     layer: 'NYC_afterschool',
                     opacity: 0.5,
                     duration: 3000
                 },
                 {
                     layer: 'NYC_dropin',
                     opacity: 0.5,
                     duration: 3000
                 }],
            onChapterExit: [
            ]
        },*/
        {
            id: '2-3-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Park Slope',
            //image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
              center:  [-73.98292, 40.66290],
              zoom: 16.5,
              pitch: 0,
              bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                     layer: 'encampments_NYC',
                     opacity: 1,
                     duration: 1
                 },
                 {
                     layer: 'dek',
                     opacity: 0.5,
                     duration: 3000
                 },
                 {
                     layer: 'bro',
                     opacity: 0.5,
                     duration: 3000
                 },
                 {
                     layer: 'pro',
                     opacity: 0.5,
                     duration: 3000
                 },
                 
                 ],
            onChapterExit: []
        },
        {
            id: '2-3-1-chapter',
            alignment: 'left',
            hidden: false,
            title: 'East Williamsburg',
            //image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
              center: [-73.92871, 40.70797],
              zoom: 16.5,
              pitch: 0,
              bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                     layer: 'encampments_NYC',
                     opacity: 0.4,
                     duration: 1
                 },
                 
                 ],
            onChapterExit: []
        },
        {
            id: '2-3-2-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Morrisania',
            //image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
              center: [-73.90574, 40.82818],
              zoom: 16.5,
              pitch: 0,
              bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                     layer: 'encampments_NYC',
                     opacity: 0.5,
                     duration: 1
                 },
                 {
                     layer: 'NYC_afterschool',
                     opacity: 0,
                     duration: 1
                 },
                 {
                     layer: 'NYC_dropin',
                     opacity: 0,
                     duration: 1
                 }
                 ],
            onChapterExit: [{
                     layer: 'dek',
                     opacity: 0,
                     duration: 3000
                 },
                 {
                     layer: 'bro',
                     opacity: 0,
                     duration: 3000
                 },
                 {
                     layer: 'pro',
                     opacity: 0,
                     duration: 3000
                 },
                 {
                     layer: 'NYC_hispanic_1',
                     opacity: 0.8,
                     duration: 3000
                 }]
        },
        {
    id: 'interlude-3',
    alignment: 'center',
    hidden: false,
    description: 'The war or conflict is not caused by a single decision, but it is the aggregation. Similarly, the innocent refugee under matriculation could present a disastrous effect on the built environment if we do not read it carefully. Can the introduction of a series of routes intervene in the outcome or hierarchy of the mapping process? The connection behind the plurality and singularity is this target that the analysis wants to approach. When a map focuses too much on the integration of data, will it ignore the uniqueness of the individuals presented in it? This is the topic that the methodology wants to discuss. Therefore, the datasets mentioned above not only focus on official information but also hope to use media such as reports, articles, biographies, and social media to find information and phenomena that data cannot elicit. Especially as a refugee, did he find himself a part of the weapon? Was the exaggerated propaganda and fear of wars making him embark on the path of migration?',
    //video: 'images/902-1_902-2364-PD2_preview.mp4',
    location: {
      center: [-74.01351, 40.74544],
      zoom: 10,
      pitch: 0,
      bearing: 0,
    },
},
    ]
};