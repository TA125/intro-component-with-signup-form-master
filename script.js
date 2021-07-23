
function btn1_clicked(){

    // info, filled
    var check = [   ['firstName',false],
                    ['lastName',false],
                    ['email',false],
                    ['password',false],
                ]; 

    // gathers the user's info 
    var info = [];
    info = getInfo(info);
    
    // check if everything is filled
    check = checkInfo(check);
}

function checkInfo(arr){

    for(let i = 0; i<4; i++){
        let a = document.getElementById(arr[i][0] + '_input'); // input 
        let b = document.getElementById(arr[i][0]); // input subtext

        // changes the properties of the inputs back to what they were before
        a.style.border = '1px var(--grayBlue) solid'; 
        b.style.display = 'none';
        a.style.backgroundImage = 'none';

        // checks if there is an input 

        if(a.value != "") arr[i][1] = true; 

        else {
            b.style.display = 'contents'; // shows the subtext (required)

            a.style.border = '2px var(--red) solid'; // changes the border color to red
            a.placeholder = ''; // empties the placeholders

            // adds an error icon to all empty inputs except the email 
            if (i !=2 ) {
                a.style.background = 'url(images/icon-error.svg) no-repeat scroll 7px 7px';
                a.style.backgroundPosition = '98% center';
            }
        }
    }

    // changes the placedholder for email to add an example 
    if (arr[2][1] == false ) {
        var input = document.getElementById ('email_input');
        input.placeholder = 'email@example/com';
        input.style.setProperty("--c", "var(--red)"); //changes the color of the placeholder
    }

    return(arr);
}




// an extra function to gather the info
function getInfo(arr){
    arr[0] = document.getElementById('firstName_input').value;
    arr[1] = document.getElementById('lastName_input').value;
    arr[2] = document.getElementById('email_input').value;
    arr[3] = document.getElementById('password_input').value;
    return(arr);
}
