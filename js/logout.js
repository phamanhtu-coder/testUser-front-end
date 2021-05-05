const HOST = "http://localhost:8080";

$("#logout").click(function () {
  console.log("logout button is pressed");
  $.ajax({
    type: "POST",
    url: HOST + "/testUser/logout",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    xhrFields: {
      withCredentials: true,
    },
    success: function (result) {
      console.log("thanh cong");
      window.location.replace("http://localhost:5502/index.html");
    },
    error: function () {
      console.log("da co loi");
    },
  });
});
