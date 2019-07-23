package images.client.plugin

import groovy.json.JsonBuilder
import groovy.json.JsonSlurper
import groovyx.net.http.ContentType
import groovyx.net.http.HTTPBuilder
import groovyx.net.http.Method

class SpeciesListWebService {

    def grailsApplication

    private String getServiceUrl() {
        def url = grailsApplication.config.ala.speciesList.service.url?: "http://lists.ala.org.au"
        if (!url.endsWith("/")) {
            url += "/"
        }
        return url
    }

    def saveImageToSpeciesList(def scientificName, def imageId) {
        def url = getServiceUrl() + "ws/speciesListItem/preferredSpeciesImage"
        def params = [:]
        params.scientificName = scientificName
        params.imageId = imageId
        def results = postJSON(url, params)
        return results
    }

    def getPreferredImageSpeciesList() {
        def url = getServiceUrl() + "ws/speciesListItem/getPreferredSpeciesImage"
        def results = getJSON(url)
        return results
    }

    static def postJSON(url, Map params) {
        def result = [:]
        HTTPBuilder builder = new HTTPBuilder(url)
        builder.request(Method.POST, ContentType.JSON) {request ->

            body = new JsonBuilder(params).toString()

            response.success = {resp ->
                result.status = resp.status
            }

            response.failure = {resp ->
                def message = ""
                switch (resp.status){
                    case 400:
                        message = "Missing required field: rawScientificName or imageId"
                        break
                    case 404:
                        message = "Species could not be found"
                        break
                    case 412:
                        message = "ALA Preferred Image Species List has not been setup"
                        break
                    case 500:
                        message = "Could not create SpeciesListItem"
                        break
                }
                result.status = resp.status
                result.error = message
            }

        }
        result
    }

    def getJSON(String url) {
        try {
            def u = new URL(url);
            def text = u.text
            return new JsonSlurper().parseText(text)
        } catch (Exception ex) {
            System.err.println(url)
            System.err.println(ex.message)
            return null
        }
    }

}
