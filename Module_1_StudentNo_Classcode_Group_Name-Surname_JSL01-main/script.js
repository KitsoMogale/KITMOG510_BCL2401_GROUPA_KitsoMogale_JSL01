function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here

    let result = ''; // Placeholder for validation result

    let first = input.substring(0,4);
    let mid = Number(input.substring(4,8));
    let l = Number(input.substring(8,input.length));

    if(first == 'pet_'){

        if( mid ){

            if(!l ){

                result = "Valid syntax";
            }
            else{
                result = "Invalid syntax";
            }


        }
        else{
            result = "Invalid syntax";
        }

        

    }
    else{
        result = "Invalid syntax";
    }

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters

            document.getElementById('result').innerText = result;
}


