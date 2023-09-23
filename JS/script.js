   
    function getPublicationPage(){
        $("#home-page-content").hide();
        $.ajax({
            url:"templates/publications.htm",
            success:function(response){
                $("#publication-page").html(response);
            }
        });
    }

    $("#publicationget").click(function(){
        getPublicationPage();
    });
