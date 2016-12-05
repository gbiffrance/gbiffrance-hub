<div>
    How long is the line you just drew on the image?
</div>
<br/>
<div>
    <div class="control-group">
        <div class="controls">
            <g:textField class="input-small" name="pixelLength" value="${params.pixelLength}"/> pixels =
            <g:textField class="input-small" name="mmLength" value="" />
            <g:select name="units" class="input-small" from="${['mm','inches', 'metres','feet']}" value="mm"/>
        </div>
    </div>
</div>
<br/>
<div>
    <div class="control-group">
        <div class="controls">
            <button class="btn btn-primary" id="btnCalibrateImageScale">Save</button>
            <button class="btn" id="btnCancelCalibrateImageScale">Cancel</button>
        </div>
    </div>
</div>
<script>
    $("#btnCancelCalibrateImageScale").click(function(e) {
        e.preventDefault();
        imgvwr.hideModal();
    });

    $("#btnCalibrateImageScale").click(function(e) {
        e.preventDefault();
        var units = $("#units").val();
        var pixelLength = $("#pixelLength").val();
        var actualLength = $("#mmLength").val();
        $.ajax(imgvwr.getImageServiceBaseUrl() + "/ws/calibrateImageScale?imageId=${params.id}&units=${params.units}&pixelLength=" + pixelLength + "&userId=${userId}&actualLength=" + actualLength).done(function(data) {
            imgvwr.setPixelLength(data.pixelsPerMM);
            imgvwr.hideModal();
        });
    });
</script>