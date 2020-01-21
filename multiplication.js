 // Set the date we're counting down to
 var time = 20;
 //generate random numbers
 var a = Math.random() * 12;
 var b = Math.random() * 10;
 var answer = (Math.round(a)) * (Math.round(b));
 var userInput;

 //hide secondButton and h5 text
document.getElementById('secondButton').style.visibility = "hidden";
document.getElementById('h5').style.visibility = "hidden";

 // show the numbers to the player
 document.getElementById("question").innerHTML = Math.round(a);
 document.getElementById("question2").innerHTML = Math.round(b);

 //alert User that the time has started
 Swal.fire({
    position: 'top-end',
    type: 'success',
    toast: true, 
    title: 'Time Has Started @ ' + time+'secs',
    showConfirmButton: false,
    timer: 3000
});

 // Update the count down every 1 second
 var x = setInterval(function() {
     time--;
         
     // Output the result in an element with id="demo"
     document.getElementById("time").innerHTML = time;
     
     // If the count down is over, write some text 
     if ( time == 0) {
         clearInterval(x);
         document.getElementById("time").innerHTML = "TIME UP";
         Swal.fire({
             position: 'center',
             type: 'info',
             title: 'Your Time Is Up',
             showConfirmButton: false,
             timer: 1500
         })
         setTimeout(()=>{
             location.reload();
         },2000);
     }
 }, 1000);
 
 function checkForm(form){
    //get the user's input
    userInput = form.number.value;

    //check if user entered a number
    if(userInput == ""){
        Swal.fire({
            position: 'center',
            type: 'error',
            title: 'Please Enter Your Answer',
            footer: 'You Did Not Type Anything',
            showConfirmButton: false,
            timer: 2500
        })
            return false;
    };

   if(userInput != answer){
    document.getElementById('submit').innerHTML = "Submit Again";
    document.getElementById('h5').style.visibility = "initial";
    document.getElementById('secondButton').style.visibility = "initial";

    Swal.fire({
        position: 'center',
        type: 'error',
        title: 'Your Answer Is Wrong',
        footer: 'Try Again',
        confirmButtonColor: '#0A79DF',
    })
        return false;
    }else{

        document.getElementById('submit').style.visibility = "hidden";
        document.getElementById('h5').style.visibility = "hidden";
        document.getElementById('secondButton').style.visibility = "initial";
        clearInterval(x);
        Swal.fire({
            position: 'center',
            type: 'success',
            title: 'Correct Answer',
            showConfirmButton: false,
            timer: 1500
        })
        return false;
    }
   }