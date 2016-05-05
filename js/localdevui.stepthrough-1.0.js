/**
 * Created by hablat on 5/4/2016.
 */
var step = 1;

function next(e) {
    var value = e.value;

    if(value == 'drupal') {
        //alert("DRUPAL");
        step = 2;
    } else if(value = 'moodle') {
        //alert("MOODLE");
        step = 2;
    }

    if(step > 1) {
        document.getElementById('prev-button').style.display = "block";
    }

    document.getElementById('step' + (step - 1)).style.display = "none";
    document.getElementById('step' + step).style.display = "block";
}

function prev() {
    step--;

    if(step >= 1) {
        document.getElementById('step' + (step + 1)).style.display = "none";
        document.getElementById('step' + step).style.display = "block";

        if(step == 1) {
            document.getElementById('prev-button').style.display = "none";
        }
    }
}