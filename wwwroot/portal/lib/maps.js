var map;

window.GetMap = (subscriptionKey, lon, lat) => {
    //Initialize a map instance.
    map = new atlas.Map('myMap', {
        center: [lon, lat ],
        zoom: 12,
        view: 'Auto',

        //Add your Azure Maps subscription key to the map SDK. Get an Azure Maps key at https://azure.com/maps
        authOptions: {
            authType: 'subscriptionKey',
            subscriptionKey: subscriptionKey
        }
    });
    //Wait until the map resources are ready.
    map.events.add('ready', function () {
        //Show traffic on the map using the traffic options
        map.setTraffic({
            incidents: false,
            flow: 'absolute'
        });
    });
};
