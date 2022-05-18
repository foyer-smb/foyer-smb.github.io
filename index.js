var value_or_null = (document.cookie.match(
    /^(?:.*;)?\s*name\s*=\s*([^;]+)(?:.*)?$/
  ) || [, null])[1];
  if (value_or_null != null) {
    window.location.href = "pass.html";
  }
  document.getElementById("confirm").addEventListener("click", function () {
    var name = document.getElementById("name").value;
    var carte = document.getElementById("code bar").value;
    document.cookie =
      "name=" + name + "; expires=Thu, 18 Jul 2100 12:00:00 UTC";
    document.cookie =
      "carte=" + carte + "; expires=Thu, 18 Jul 2100 12:00:00 UTC";
    window.location.href = "pass.html";
  });