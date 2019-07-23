package images.client.plugin

import au.org.ala.web.AlaSecured
import au.org.ala.web.CASRoles
import grails.converters.JSON
import grails.converters.XML
import org.apache.commons.httpclient.HttpStatus
import org.apache.http.entity.ContentType
import org.springframework.web.multipart.MultipartFile
import org.springframework.web.multipart.MultipartRequest

class ImageClientController {

    def imagesWebService
    def speciesListWebService
    def authService

    def createSubImage(){
        [userId: authService.getUserId()]
    }

    def calibrateImage(){
        [userId: authService.getUserId()]
    }

    def uploadFromCSVFragment() {
    }

    def uploadImagesFromCSVFile() {
        // it should contain a file parameter
        MultipartRequest req = request as MultipartRequest
        if (req) {
            MultipartFile file = req.getFile('csvfile')
            if (!file || file.size == 0) {
                renderResults([success: false, message: 'File not supplied or is empty. Please supply a filename.'])
                return
            }

            // need to convert the csv file into a list of maps...
            int lineCount = 0
            def headers = []
            def batch = []

            file.inputStream.eachCsvLine { tokens ->
                if (lineCount == 0) {
                    headers = tokens
                } else {
                    def m = [:]
                    for (int i = 0; i < headers.size(); ++i) {
                        m[headers[i]] = tokens[i]
                    }
                    batch << m
                }
                lineCount++
            }

            def results = imagesWebService.scheduleImagesUpload(batch)
            renderResults(results)
        } else {
            renderResults([success: false, message: "Expected multipart request containing 'csvfile' file parameter"])
        }

    }

    def getBatchProgress() {
        renderResults(imagesWebService.getBatchStatus(params.batchId))
    }

    private renderResults(Object results, int responseCode = 200) {

        withFormat {
            json {
                def jsonStr = results as JSON
                if (params.callback) {
                    render("${params.callback}(${jsonStr})")
                } else {
                    render(jsonStr)
                }
            }
            xml {
                render(results as XML)
            }
        }
        response.addHeader("Access-Control-Allow-Origin", "")
        response.status = responseCode
    }

    def userRating(){
        String userId = authService.getUserId()
        if(params.id && userId){
            Map result = imagesWebService.userRating(params.id, userId)
            if(!result.error){
                render text: result as grails.converters.JSON, contentType: ContentType.APPLICATION_JSON
            } else {
                render text: "An error occurred while looking up information", status: HttpStatus.SC_INTERNAL_SERVER_ERROR
            }
        } else {
            render text: "You must be logged in and image id must be provided.", status: HttpStatus.SC_BAD_REQUEST
        }
    }

    def getPreferredSpeciesImageList() {
        def list = speciesListWebService.getPreferredImageSpeciesList ()
        if (!list) {
            list = new ArrayList<String> ()
        }
        render text: list as grails.converters.JSON, contentType: ContentType.APPLICATION_JSON
    }

    @AlaSecured(value = "ROLE_ADMIN")
    def saveImageToSpeciesList() {
        String userId = authService.getUserId()
        if (!userId) {
            render text: "You must be logged in and image id must be provided.", status: HttpStatus.SC_BAD_REQUEST
        } else {
            if (params.id && params.scientificName) {
                Map result = speciesListWebService.saveImageToSpeciesList(params.scientificName, params.id)
                if (!result.error) {
                    render text: result as grails.converters.JSON, contentType: ContentType.APPLICATION_JSON
                } else {
                    render text: result.error, status: HttpStatus.SC_INTERNAL_SERVER_ERROR
                }
            } else {
                render text: "Something went wrong. Please refresh and try again.", status: HttpStatus.SC_BAD_REQUEST
            }
        }
    }

    def likeImage() {
        String userId = authService.getUserId()
        if(params.id && userId){
            Map result = imagesWebService.likeOrDislikeImage('LIKE', params.id, userId)
            if(!result.error){
                render text: result as grails.converters.JSON, contentType: ContentType.APPLICATION_JSON
            } else {
                render text: "An error occurred while saving metadata to image", status: HttpStatus.SC_INTERNAL_SERVER_ERROR
            }
        } else {
            render text: "You must be logged in and image id must be provided.", status: HttpStatus.SC_BAD_REQUEST
        }
    }

    def dislikeImage() {
        String userId = authService.getUserId()
        if(params.id && userId){
            Map result = imagesWebService.likeOrDislikeImage('DISLIKE', params.id, userId)
            if(!result.error){
                render text: result as grails.converters.JSON, contentType: ContentType.APPLICATION_JSON
            } else {
                render text: "An error occurred while saving metadata to image", status: HttpStatus.SC_INTERNAL_SERVER_ERROR
            }
        } else {
            render text: "You must be logged in and image id must be provided.", status: HttpStatus.SC_BAD_REQUEST
        }
    }

}
