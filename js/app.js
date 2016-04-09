// Filename: app.js
define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'leaflet'
], function ($, _, Backbone, Router, L) {
    var initialize = function () {
        // Pass in our Router module and call it's initialize function
        Router.initialize();

        var visOptions = {
            zoom: 12,
            scrollwheel: true,
            search : false,
            share: false,
            center:[48.1441,17.1462]
        };
        cartodb.createVis('map', 'https://blankearth.cartodb.com/api/v2/viz/3beee460-fe5a-11e5-b0a3-0e674067d321/viz.json',visOptions);
        window.onload = function () {
            $('#fun-but').on('click', function () {
                $('#map').empty();
                cartodb.createVis('map', 'https://blankearth.cartodb.com/api/v2/viz/3beee460-fe5a-11e5-b0a3-0e674067d321/viz.json',visOptions);
            });
            $('#family-but').on('click', function () {
                $('#map').empty();
                cartodb.createVis('map', 'https://blankearth.cartodb.com/api/v2/viz/3beee460-fe5a-11e5-b0a3-0e674067d321/viz.json',visOptions);
            });
            $('#parking-but').on('click', function () {
                $('#map').empty();
                cartodb.createVis('map', 'https://blankearth.cartodb.com/api/v2/viz/3c4307ac-fe64-11e5-a29a-0ecd1babdde5/viz.json',visOptions);
            });

        }
    }
    return {
        initialize: initialize
    };
});