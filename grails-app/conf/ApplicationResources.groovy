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
        dependsOn 'bootstrap3', 'hubCore' //
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

}