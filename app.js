$(document).ready(function () {
dataObj = {
    q: "mutemath",
    type: "album"
  };
$.ajax({
      data: dataObj,
      dataType: 'json',
      type: 'GET',
      url: 'https://api.spotify.com/v1/search',
      success: function (response) {
        console.log(response);
        if (response['status'] == '0' || response['status'] == '2') {
          printError('1', response);
        } else if (response['status'] == '1') {
          printSong(response);
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
        printError('2', dataObj);
      }
  });
}); //end doc ready
