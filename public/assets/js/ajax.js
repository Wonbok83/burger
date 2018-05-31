$(function () {

    // $.get("/",{
    //     type: "GET"
    // }).then(function(){
     
    // });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var name = $("#ca").val().trim();

        var newBurger = {
            name: name
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("New Burger")
         
        })


    });

    $(".change-form").on("submit", function(event){
        
        var id = $("#num").val();
        var newDevoured = $(this).data("devoured");

        var newStatus = {
            devoured: newDevoured
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newStatus
        }).then(
            function(){
            console.log("change the devoured")
            
            }
        )
    })

});