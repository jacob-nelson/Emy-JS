function parseCookies() {
  var body = document.getElementsByTagName('body')[0].innerHTML;
  var name = document.getElementById('nameValue').value
  var auth = document.getElementById('session').innerHTML;
  console.log("name inside parseCookies ", name)
  return auth+" "+name;
  //return "some return value";
}
/*
(function(){
  return "some return value";
})
*/
