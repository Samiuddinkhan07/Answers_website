   
    function getPublicationPage(){
        $("#home-page-content").hide();
        $("#publication-page").show();
        $.ajax({
            url:"templates/publications.htm",
            success:function(response){
                $("#publication-page").html(response);
                addImagesPub();
            }
        });
        
    }

    $("#publicationget").click(function(){
        getPublicationPage();
    });


    function addImagesPub(){
        let _imagesArr = new Array(24).fill("publication_img");
        for(let i = 0;i < _imagesArr.length;i++){
            $("#pub-img").append(`
            <li>
            <img src="/Assets/Images/${_imagesArr[i]}-${i}.jpg" alt="${_imagesArr[i]}">
            </li>
            `);
        }
    }


    //function to toggle text in about us section

    $("#toggle-text").click(function(){
        $("#hidden-text").toggle(function(){
            if($("#hidden-text").is(':visible')){
               $("#toggle-text").text("Read Less")
            }else{
                $("#toggle-text").text("Read More")
            }
        });
    })
