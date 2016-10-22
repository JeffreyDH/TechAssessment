/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */



var http = new XMLHttpRequest();
var url = "http://challenge.code2040.org/api/dating";
var urlValidate = "http://challenge.code2040.org/api/dating/validate"
var method = "POST";

http.open(method, url);

http.setRequestHeader("Content-type", "application/json;charset=UTF-8");

http.onreadystatechange = function(){
  if(http.readyState == 4)
    {
      var response = JSON.parse(http.responseText);
      
      const MILLISECONDS_IN_SECOND = 1000;
      var date = new Date(response.datestamp);
      
      var interval_milliseconds = (response.interval * MILLISECONDS_IN_SECOND);
      var totalMilliseconds = date.getTime() + interval_milliseconds;
            
      date.setTime(totalMilliseconds);
      
      var newDate = (date.toISOString()).split(".")[0]+"Z";
      
    }
    if(http.readyState == 4 && http.status == 200)
      {
        http.open(method, urlValidate);
        http.setRequestHeader("Content-type", "application/json;charset=UTF-8");

        http.send(JSON.stringify({token:"2311aa64136010614ee90afe722c588f", datestamp: newDate}));
      }
}
http.send(JSON.stringify({token: "2311aa64136010614ee90afe722c588f"}));



