$(document).ready(function() {
  $("#btn-login").bind("click", function() {
    $.ajax({
      url: 'users/' + encodeURI($("#login-username").val()) + '/' + encodeURI($("#login-password").val()),
      type: 'GET',
      success: function(data, status) {
        if (data.success) {
          location.reload();
        } else {
          alert("Login failed!");
        }
      },
      error: function(res, status, error) {
        alert(error);
      }

    });
  });

  $("#logout").bind("click", function() {
    $.ajax({
      url: 'logout',
      type: 'GET',
      success: function(data, status) {
        if (data.status)
          window.location.replace("/");
        else
          alert("Logout failed!");
      },
      error: function(res, status, error) {
        alert(error);
      }
    });
  });
});