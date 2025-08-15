var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    style: 'mapbox://styles/dogatmn/cm4v9fem6000p01sf12f769y5',
    accessToken: 'pk.eyJ1IjoiZG9nYXRtbiIsImEiOiJjbHlyMTJmcXgwMjQ3MmtzbTRsdm1pejdsIn0.vcEjL7lt8OoOPMP5o1PM6g',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Petrolün Metabolik Akışları: D-100 Çevre Yolu / Metabolic Flows of Oil: The Ring Road',
    subtitle: ' ',
    byline: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    footer: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'centered',
            hidden:true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [28.885, 41.001],
                zoom:12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
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
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/nsvrSPpN/MEF-AAP-027-BAP-2025-08-03-09-36-41.png',
            description: '',
            location: {
                center: [28.910, 41.016],
                zoom: 16,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [28.924, 41.029],
                zoom: 16,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'fourth-identifier',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/Pst6JRkZ/MEF-AAP-027-BAP-2025-08-03-09-38-27.png',
            description: '',
            location: {
                center: [28.960, 41.056],
                zoom: 16,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [29.013, 41.066],
                zoom: 16,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'six-identifier',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/ynb6R7k3/MEF-AAP-027-BAP-2025-08-03-09-39-42.png',
            description: '',
            location: {
                center: [29.048, 41.023],
                zoom: 16,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
    }
       
       
    ]
};
