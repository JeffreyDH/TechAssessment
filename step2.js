///Step 2 of the TechAssessment 


function reverseString(input)
{
  var output = "";
  for(var i = (input.length - 1); i >= 0; i--)
  {
    output += input.charAt(i);
  }
  return output;
}

var http = new XMLHttpRequest();
var url = "http://challenge.code2040.org/api/reverse";
var urlValidate = "http://challenge.code2040.org/api/reverse/validate"
var method = "POST";
var reverse = "";

http.open(method, url);

http.setRequestHeader("Content-type", "application/json;charset=UTF-8");

http.onreadystatechange = function(){
  if(http.readyState == 4)
    {
      var response = http.responseText;
      reverse = reverseString(response);
      
      
    }
    if(http.readyState == 4 && http.status == 200)
      {
        http.open(method, urlValidate);
        http.setRequestHeader("Content-type", "application/json;charset=UTF-8");

        http.send(JSON.stringify({token:"2311aa64136010614ee90afe722c588f", string: reverse}));
      }
}
http.send(JSON.stringify({token: "2311aa64136010614ee90afe722c588f"}));



