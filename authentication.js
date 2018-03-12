function parseCookies() {
  var name = document.getElementById('nameValue').value
  var session = document.getElementById('session').innerHTML
  console.log("name inside parseCookies ", name)
  return name+" "+session;
  //return "some return value";
}
/*
(function(){
  return "some return value";
})
*/
