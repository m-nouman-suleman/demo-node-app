function submitForm() {
  $.ajax({
    url: '/data',
    type: 'POST',
    data: {
      "dataField": $("#data").val()
    },
    success: function(result) {
      var html = '<span>Response: ' + result.data + '</span>';
      $("#response").html(html);
    },
    error: function (error) {
      alert('error', error);
    }
  });
}
