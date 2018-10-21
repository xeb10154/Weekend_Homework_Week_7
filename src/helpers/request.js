const Request = function (url) {
  this.url = url;
}

Request.prototype.get = function () {
  // fetch(this.url) returns a promise.
  //.then(response => response.json()) also returns a promise
  return fetch(this.url)
  .then(response => response.json()) // fetch is built into Javascript
  .catch(err => alert(err));
}
module.exports = Request;
