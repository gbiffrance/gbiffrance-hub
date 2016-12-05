modules = {

    leaflet {
        dependsOn 'jquery'
        resource url: [plugin: "images-client-plugin", dir: 'js/leaflet', file: 'leaflet.css']
        resource url: [plugin: "images-client-plugin", dir: 'js/leaflet', file: 'leaflet.js']
    }

    'leaflet-fullscreen' {
        dependsOn 'leaflet'
        resource url: [plugin: "images-client-plugin", dir: 'js/leaflet', file: 'Control.FullScreen.css']
        resource url: [plugin: "images-client-plugin", dir: 'js/leaflet', file: 'Control.FullScreen.js']
    }

    'leaflet-measure' {
        dependsOn 'leaflet'
        resource url: [plugin: "images-client-plugin", dir: 'js/leaflet', file: 'leaflet.measure.js']
        resource url: [plugin: "images-client-plugin", dir: 'js/leaflet', file: 'leaflet.measure.css']
    }

    'leaflet-draw' {
        dependsOn 'leaflet'
        resource url: [plugin: "images-client-plugin", dir: 'js/leaflet.draw', file: 'leaflet.draw.css']
        resource url: [plugin: "images-client-plugin", dir: 'js/leaflet.draw', file: 'leaflet.draw.js']
    }

    'leaflet-loading' {
        dependsOn 'leaflet'
        resource url: [plugin: "images-client-plugin", dir: 'js/leaflet.loading', file: 'Control.Loading.css']
        resource url: [plugin: "images-client-plugin", dir: 'js/leaflet.loading', file: 'Control.Loading.js']
    }

    audiojs {
        dependsOn "jquery"
        resource url: [plugin: "images-client-plugin", dir: 'js/audiojs', file: 'audio.min.js']
    }

    'image-viewer' {
        dependsOn 'jquery', 'bootstrap', 'leaflet', 'leaflet-fullscreen', 'leaflet-measure', 'leaflet-draw', 'leaflet-loading', 'font-awesome'
        resource url: [plugin: "images-client-plugin", dir: 'js', file: 'ala-image-viewer.js']
        resource url: [plugin: "images-client-plugin", dir: 'js', file: 'bootbox.min.js']
    }

    'img-gallery' {
        dependsOn 'image-viewer'
        resource url: [plugin: "images-client-plugin", dir: 'js/img-gallery/lib/slider-pro/css', file: 'slider-pro.css']
        resource url: [plugin: "images-client-plugin", dir: 'js/img-gallery/css', file: 'img-gallery.css']

        resource url: [plugin: "images-client-plugin", dir: 'js/img-gallery/lib/slider-pro/js', file: 'jquery.sliderPro.custom.js']
        resource url: [plugin: "images-client-plugin", dir: 'js/img-gallery/js', file: 'img-gallery.js']
    }
}