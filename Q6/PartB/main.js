
//  assuming the existence of the functions 
//  SetButtonColor,
//  GetButtonText, and
//  SetButtonText
function OnButtonClick() {
    fetch('/endpoint1').then(response => {
        if (response) {
            color = response.color;
            SetButtonColor(color, function() {
                GetButtonText(function(text) {
                    SetButtonText(text, function() {
                        
                    });
                });
            });
        } else {
            throw new Error('Network response was not ok.');
        }

    }).catch(error => {
        console.log(error);
    });
}