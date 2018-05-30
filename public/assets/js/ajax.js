$(function () {

    $.ajax("/",{
        type: "GET"
    }).then(function(){
        location.reload();
    });

    $("create-form").on("click", function (event) {

        var name = $(this).data("name");

        var newBurger = {
            name: name
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            location.reload();
        })


    });

    $("change-form").on("click", function(event){
        var id = $(this).data("id");
        var devoured = $(this).data("devoured");
        var newBurger = {
            devoured: devoured
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devoured
        }).then(
            function(){
            location.reload();
            }
        )
    })

});