 
 function validate(){//using javscript
      var name=document.forms["myForm"]["name"].value;
      var email=document.forms["myForm"]["email"].value;
      var message=document.forms["myForm"]["message"].value;
      var gender=document.forms["myForm"]["gender"].value;
      if(name=="" || email==""|| message=="" ||gender==""){
        alert("Please fill the form to submit");
      }
      else{
        alert("Thank you, "+name);
      }