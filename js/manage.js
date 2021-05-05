const HOST = "http://localhost:8080";

$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: HOST + "/testUser/user/getAll",
    dataType: "JSON",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    xhrFields: {
      withCredentials: true,
    },
    success: function (result) {
      for (var key in result) {
        var obj = result[key];
        console.log("object= " + JSON.stringify(obj) + "\nid = " + obj.id);
        readUser(obj.id, obj.fullname, obj.image, obj.phone);
      }
    },
    error: function () {
      console.log("da co loi");
    },
  });
  $.ajax({
    type: "GET",
    url: HOST + "/testUser/userByUsername",
    dataType: "JSON",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    xhrFields: {
      withCredentials: true,
    },
    success: function (result) {
      var obj = result;
      readUser22(obj.fullname, obj.image, obj.id);
    },
    error: function () {
      console.log("da co loi");
    },
  });
});

function readUser(id, fullname, image, phone) {
  document.getElementById("listUser").innerHTML +=
    "<tr>" +
    "    <th>" +
    id +
    "</th>" +
    "    <th>" +
    fullname +
    "</th>" +
    '    <th><img  height="120" src="' +
    image +
    '"></th>' +
    "    <th>" +
    phone +
    "</th>" +
    "</tr>";
}
function readUser22(fullname, image) {
  console.log("jdjsjidooooooooooooooo");
  document.getElementById("liUser").innerHTML +=
    '<button class="dropbtn"><img src="' +
    image +
    '" class="avatar img-fluid rounded-circle">' +
    fullname +
    "</button>" +
    '                                <div class="dropdown-content">' +
    '                                    <a href="thongtincanhan.html"><i class="fa fa-user"></i>Profile</a>' +
    '                                    <a href="dsuser.html"><i class="fa fa-history"></i>Danh Sách User</a>' +
    '                                    <button id = "logout" style="text-align:left ;border-radius: 0px; width: 190px;"><i class="fa fa-sign-out"></i>Logout →</button>' +
    "                                </div>";
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
}
