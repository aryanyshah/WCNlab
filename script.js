function validate(){

        email=document.getElementById("email").value;
        name1=document.getElementById("name").value;
        phone=document.getElementById("phone").value;
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var phoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if( re.test(email) == false || email==""){
            alert("Enter valid email");
        }

        else if (name1=="") {
            alert( 'Name cannot be blank.');
        }

        else if(phoneno.test(phone)==false || phone==""){
            alert("Enter valid Phone Number");
        }
        else{
            alert("Your appointment is booked");
        }
}