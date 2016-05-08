/**
 * Created by hablat on 5/4/2016.
 */
var nextStep = 1;

function next(e) {
    var value = e.value;
    var stacksSelected = [];

    if(value == 'drupal') {
        nextStep = 2;
    } else if(value == 'moodle') {
        nextStep = 2;
    } else if(value == 'stack') {
        var stacksChecked = document.getElementsByName('stack-checkbox');

        for(var i = 0; i < stacksChecked.length; i++) {
            if(stacksChecked[i].checked) { //checked
                if(stacksSelected.indexOf(stacksChecked[i].value) < 0) { // If it's not already added
                    stacksSelected.push(stacksChecked[i].value); // add
                }
            } else { // unchecked
                var index = stacksSelected.indexOf(stacksChecked[i].value);

                if(index >= 0) { // in list of checked stacks
                    stacksSelected.splice(index, 1); // Remove stack from list of checked
                }
            }
        }

        if(stacksSelected.length > 0) { // if stacks are selected continue
            alert('changing page')
            nextStep = 3;
        } else { // else alert
            alert('Please Select a stack before continuing');
        }
    }

    if(nextStep > 1) {
        document.getElementById('prev-button').style.display = "block";
    }

    document.getElementById('step' + (nextStep - 1)).style.display = "none";
    document.getElementById('step' + nextStep).style.display = "block";
}

function prev() {
    nextStep--;

    if(nextStep >= 1) {
        document.getElementById('step' + (nextStep + 1)).style.display = "none";
        document.getElementById('step' + nextStep).style.display = "block";

        if(nextStep == 1) {
            document.getElementById('prev-button').style.display = "none";
        }
    }
}