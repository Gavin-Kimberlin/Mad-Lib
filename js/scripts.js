$(document).ready(function () {
  $('#formOne').submit(function (event) {
    var blanks = ['noun1', 'noun2', 'fantastic-animal', 'lewd-exclamation', 'verbEnding', 'adjective', 'nounPlural', 'verb', 'noun'];

    blanks.forEach(function(blank) {
      var userInput = $('input#' + blank).val();
      $('.' + blank).text(userInput);
    });
    $('#story').show();
    event.preventDefault();
  });
});
