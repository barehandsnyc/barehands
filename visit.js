(function () {
  var form = document.querySelector("form[name='visit']");
  if (!form) return;
  var host = location.hostname;
  if (host !== "127.0.0.1" && host !== "localhost") return;
  form.addEventListener("submit", function (event) {
    if (!form.checkValidity()) return;
    event.preventDefault();
    location.href = "/thanks.html?preview=1";
  });
})();
