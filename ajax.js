/**
 * Created by eriks on 7/7/14.
 */
$(document).ready(function(){
//Spotify api
    $('form').submit(function(evt){
        evt.preventDefault();
        var $searchField = $('#search');
        //AJAX
        var spotifyURL = 'https://api.spotify.com/v1/search';
        var search = {
            q: $searchField.val()
        }; //search object
        function displaySpotify(array){
            console.log(array);
            $('#album').html(results.artists.items[0].name);
        }
        $.getJSON(spotifyURL, search, displaySpotify);
    }); //end button.click
//Rdio api
//    $('form').submit(function(evt){
//        evt.preventDefault();
//        var $searchField = $('#search');
//        //AJAX
//        var spotifyURL = 'https://api.spotify.com/v1/artists/{id}/albums';
//        var search = {
//            id: $searchField.val()
//        }; //search object
//        function displaySpotify(album){
//            var albumsHTML = '<ul class="panel">';
//            $.each(album.albumImage, function (i, albumImage) {
//                albumsHTML += '<li>';
//                albumsHTML += '<img class="thumbnail" src="'+ albumImage.images.height.width + '"></li>';
//            });
//            albumsHTML += '</ul>';
//            $('#album').html(albumsHTML);
//        }
//        $.getJSON(spotifyURL, search, displaySpotify);
//    }); //end button.click
}); //end doc ready