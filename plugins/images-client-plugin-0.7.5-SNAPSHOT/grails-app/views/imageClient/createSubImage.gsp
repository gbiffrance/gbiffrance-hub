<div class="form-horizontal">
    <form>
        <label for="description">
            Description
        </label>
        <input id="description" type="text" class="input-xlarge" name="description" value=""/>
    </form>

    <div class="control-group">
        <div class="controls">
            <btn class="btn" id="btnCancelSubimage">Cancel</btn>
            <btn class="btn btn-primary" id="btnCreateSubimage2">Create subimage</btn>
        </div>
    </div>
</div>

<script>

    $("#btnCancelSubimage").click(function(e) {
        e.preventDefault();
        imgvwr.hideModal();
    });

    $("#btnCreateSubimage2").click(function(e) {
        e.preventDefault();
        var url = imgvwr.getImageServiceBaseUrl() + "/ws/createSubimage?id=${params.id}&x=${params.x}&y=${params.y}&width=${params.width}&height=${params.height}&userId=${userId}&description=" + encodeURIComponent($('#description').val());
        $.ajax(url).done(function(results) {
            if (results.success) {
                imgvwr.hideModal();
                imgvwr.showSubimages();
            } else {
                alert("Failed to create subimage: " + results.message);
            }
        });
    });

</script>