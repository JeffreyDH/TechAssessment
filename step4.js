/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */



var http = new XMLHttpRequest();
var url = "http://challenge.code2040.org/api/prefix";
var urlValidate = "http://challenge.code2040.org/api/prefix/validate"
var method = "POST";

http.open(method, url);

http.setRequestHeader("Content-type", "application/json;charset=UTF-8");

http.onreadystatechange = function(){
  if(http.readyState == 4)
    {
      var response = JSON.parse(http.responseText);
      
      var returnArray = [];

      for(var i = 0; i < 20; i++)
        { 
          if(((response.array[i]).includes(response.prefix)) === false)
            {
              returnArray.push(response.array[i]);
            }
        }
    }
    if(http.readyState == 4 && http.status == 200)
      {
        http.open(method, urlValidate);
        http.setRequestHeader("Content-type", "application/json;charset=UTF-8");

        http.send(JSON.stringify({token:"2311aa64136010614ee90afe722c588f", array: returnArray}));
      }
}
http.send(JSON.stringify({token: "2311aa64136010614ee90afe722c588f"}));



