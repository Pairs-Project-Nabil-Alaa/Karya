$(document).ready(function () {



    $(function () {
        $(".search-btn").click(function (event) {

            event.preventDefault()


            function gobizerte() {
                window.location = 'bizerte-index.html'
            }

            var selectedText = $(".search-selector").find("option:selected").text();
            if (selectedText === "Bizerte") {

                $('.search-btn').click(gobizerte())
            }

        });
    });

    $(function () {
        $(".search-btn").click(function () {
            var selectedText = $(".search-selector").find("option:selected").text();
            if (selectedText === "Tunis") {
                alert('Website currently under construction, Tunis will be uploaded soon!')
            }

        });
    });

    $(function () {
        $(".search-btn").click(function () {
            var selectedText = $(".search-selector").find("option:selected").text();
            if (selectedText === "Nabeul") {
                alert('Website currently under construction, Nabeul will be uploaded soon!')
            }

        });
    });



})