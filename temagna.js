var xhr = new XMLHttpRequest();
xhr.onerror = function () {
  alert("A network error occurred while sending the request.");
};
xhr.open("GET", "https://www.example.com