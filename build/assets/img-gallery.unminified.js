/**
 * GalleryWidget class
 * @param containerId
 * @param options
 * @returns public methods
 * @constructor
 */
var GalleryWidget = function(containerId, options) {

    var defaultOptions = {
        width: '100%',
        height: '100%',
        fade: true,
        arrows: false,
        buttons: false,
        fullScreen: false,
        shuffle: false,
        thumbnailArrows: true,
        autoplay: false
    };

    var init = function() {
        $('#' + containerId).sliderPro($.extend(defaultOptions, options));
    };

    init();
    return {
        destroy: function() {
            imgvwr.removeCurrentImage();
            $('#' + containerId).empty();
            $('#' + containerId).sliderPro('update');
            $('#' + containerId).sliderPro('destroy');
        }
    }

};
