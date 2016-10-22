var http = new XMLHttpRequest();
var url = "http://challenge.code2040.org/api/register";
var gitUrl = "https://github.com/JeffreyDH/TechAssessment.git";

http.open("POST", url);

http.setRequestHeader("Content-type", "application/json;charset=UTF-8");

http.send(JSON.stringify({token: "2311aa64136010614ee90afe722c588f", github: gitUrl}));