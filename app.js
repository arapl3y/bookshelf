var app = {};

app.init = function() {
    $('.item').on('click', app.getInfo);
};

app.getInfo = function() {

    var searchTitle = $('#firstTitle').text();

    var url = "https://www.googleapis.com/books/v1/volumes?q=" + searchTitle;

    $.getJSON(url).then(function(data) {
        var title = data.items[0].volumeInfo.title;
        var subtitle = data.items[0].volumeInfo.subtitle;
        var description = data.items[0].volumeInfo.description;


        if (subtitle === undefined) {
            subtitle = "";
            $('#addTitle').text(title);
        } else {
            $('#addTitle').text(title + ": " + subtitle);
        }

        $('#addDescription').text(description);

    });
};

app.init();
