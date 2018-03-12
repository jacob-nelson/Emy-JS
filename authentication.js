function parseCookies() {
  var body = document.getElementsByTagName('body')[0].innerHTML;
  var name = document.getElementById('nameValue').value
  var auth = document.getElementById('session').innerHTML;
  console.log("name inside parseCookies ", name)
  //return auth+" "+name;
  if (window.DOMParser)
{
    //parser = new DOMParser();
    //xmlDoc = parser.parseFromString(txt, "text/xml");
  parser = 'yes';
}
  else
    parser = 'no'
  return parser;
  //return "some return value";
}
/*
(function(){
  return "some return value";
})
*/
