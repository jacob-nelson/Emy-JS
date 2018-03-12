function parseCookies() {
  var body = document.getElementsByTagName('body');
  var name = document.getElementById('nameValue').value
  var session = document.getElementById('session').innerHTML
  console.log("name inside parseCookies ", name)
  return body[0];
  //return "some return value";
}
/*
(function(){
  return "some return value";
})
*/
