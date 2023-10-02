   
    function getPublicationPage(){
        $("#home-page-content").hide();
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

