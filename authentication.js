function parseCookies() {
  var body = document.getElementsByTagName('body')[0].innerHTML;
  var name = document.getElementById('nameValue').value
  var session = document.getElementById('session').innerHTML
  console.log("name inside parseCookies ", name)
  return session;
  //return "some return value";
}
/*
(function(){
  return "some return value";
})
*/
