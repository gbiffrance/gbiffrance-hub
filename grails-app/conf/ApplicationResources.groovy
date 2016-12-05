modules = {
//    application {
//        resource url:'js/application.js'
//    }

    // Define your skin module here - it must 'dependsOn' either bootstrap (ALA version) or bootstrap2 (unmodified) and core

    // generic {
    //     dependsOn 'bootstrap2', 'hubCore' //
    //     resource url: [dir:'css', file:'generic.css']
    // }

    alf {
        dependsOn 'bootstrap', 'hubCore' //
        resource url: [dir:'css', file:'generic.css']
        resource url: [dir:'images', file:'header_gbif_site.png']
        resource url: [dir:'images', file:'rss.png']
        resource url: [dir:'images', file:'facebook.png']
        resource url: [dir:'images', file:'twitter.png']
        resource url: [dir:'css/images', file:'arrow_state_grey_right.png']
        resource url: [dir:'images', file:'ala-white.png']
        resource url: [dir:'images', file:'crowdin-white.png']
        resource url: [dir:'images', file:'gbif-fr.png']
        resource url: [dir:'images', file:'logo-gbif.jpg']
    }

    bootstrap {
        resource url: [dir: 'bootstrap3/js', file: 'bootstrap.js', disposition: 'head']
        resource url: [dir: 'bootstrap3/css', file: 'bootstrap.css', attrs: [media: 'screen, projection, print']]
        resource url: [dir: 'bootstrap3/css', file: 'bootstrap-theme.css', attrs: [media: 'screen, projection, print']]
    }

    search {
        dependsOn 'searchCore'
        defaultBundle 'search-core'
        resource url:[dir:'css', file:'print-search.css', plugin:'biocache-hubs'], attrs: [ media: 'print' ]
        resource url:[dir:'js', file:'search.js'], disposition: 'head'
    }

    show {
        dependsOn 'jquery'
        resource url:[dir:'css', file:'record.css', plugin:'biocache-hubs'], attrs: [ media: 'all' ]
        resource url:[dir:'css', file:'print-record.css', plugin:'biocache-hubs'], attrs: [ media: 'print' ]
        resource url:[dir:'js', file:'audiojs/audio.min.js', plugin:'biocache-hubs'], disposition: 'head', exclude: '*'
        resource url:[dir:'js', file:'show.js']
        resource url:[dir:'js', file:'charts2.js'], disposition: 'head'
        resource url:[dir:'js', file:'wms2.js', plugin:'biocache-hubs'], disposition: 'head'
    }

    exploreYourArea {
        dependsOn 'jquery, purl'
        resource url:[dir:'css', file:'exploreYourArea.css', plugin:'biocache-hubs'], attrs: [ media: 'all' ]
        resource url:[dir:'css', file:'print-area.css', plugin:'biocache-hubs'], attrs: [ media: 'print' ]
        resource url:[dir:'js', file:'magellan.js', plugin:'biocache-hubs']
        resource url:[dir:'js', file:'yourAreaMap.js']
    }

    searchCore {
        dependsOn 'jquery, purl'
        defaultBundle 'search-core'
        resource url:[dir:'css', file:'search.css', plugin:'biocache-hubs'], attrs: [ media: 'all' ]
        resource url:[dir:'css', file:'pagination.css', plugin:'biocache-hubs'], attrs: [ media: 'all' ]
        resource url:[dir:'js', file:'jquery.cookie.js', plugin:'biocache-hubs']
        resource url:[dir:'js', file:'jquery.inview.min.js', plugin:'biocache-hubs']
        resource url:[dir:'js', file:'jquery.jsonp-2.4.0.min.js', plugin:'biocache-hubs']
        resource url:[dir:'js', file:'charts2.js'], disposition: 'head'
        resource url:[dir:'css', file:'font-awesome.css', plugin:'biocache-hubs'], attrs: [ media: 'all' ]
    }

    gbifAutocomplete {
        dependsOn 'jquery'
        //defaultBundle 'main-core'
        resource url: [dir:'js', file:'gbifAutocomplete.js'], disposition: 'head'
    }



}