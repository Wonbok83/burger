$(function () {

    $.ajax("/",{
        type: "GET"
    }).then(function(){
        location.reload();
    });

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
            location.reload();
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
            location.reload();
            }
        )
    })

});