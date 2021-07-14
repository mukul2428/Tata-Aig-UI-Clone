// radio button
function active(clicked) {
    // console.log(clicked);
    if (!clicked.localeCompare("radio-1")) {
        document.getElementById("radio-3").classList.remove('form-radio-active');
        document.getElementById("radio-2").classList.remove('form-radio-active');
        document.getElementById("radio-1").classList.add('form-radio-active');
    }
    else if (!clicked.localeCompare("radio-2")) {
        document.getElementById("radio-3").classList.remove('form-radio-active');
        document.getElementById("radio-1").classList.remove('form-radio-active');
        document.getElementById("radio-2").classList.add('form-radio-active');
    }
    else if (!clicked.localeCompare("radio-3")) {
        document.getElementById("radio-2").classList.remove('form-radio-active');
        document.getElementById("radio-1").classList.remove('form-radio-active');
        document.getElementById("radio-3").classList.add('form-radio-active');
    }
}

function form_list_visible() {
    let visible = document.getElementById("form-list-visble");
    if (visible.style.display == "none") {
        visible.style.display = "block";
    }
    else if (visible.style.display == "block") {
        visible.style.display = "none";
    }

}

//jquery for hiding form-list
$(document).mouseup(function (e) {
    var div = $("#form-list-visble");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
        div.hide();
    }
});

//function to show form-list-items in the input area
function form_list_card() {

    const g = document.getElementById('form-list-visble');
    // console.log(g);
    for (var i = 0, len = g.children.length; i < len; i++) {

        (function (index) {
            g.children[i].onclick = function () {
                // console.log(index);
                let element = document.getElementById("form-list-visble").children[index];
                let childElem = element.children[0].innerHTML;
                document.getElementById("make").value = childElem;
            }
        })(i);

    }
}

//function for hiding small tag
function form_input_data(id) {

    if (document.getElementById(id).value == "") {
        document.getElementById("small-" + id).style.display = "block";
    }

    $("#" + id).on("input", (inputVar) => {

        let val = inputVar.currentTarget.value;
        console.log(val);
        document.getElementById(id).setAttribute('value', val);

        if (document.getElementById(id).value == "") {
            document.getElementById("small-" + id).style.display = "block";
        }
        else {
            document.getElementById("small-" + id).style.display = "none";
        }

    });
}

function section_6_card(){

    let card = document.getElementById("section-6-card").style.display;
    // console.log(card);
    if(card == "none"){
        document.getElementById("section-6-card").style.display = "block";
        document.getElementById("section-6-dash").style.display = "block";
    }
    else{
        document.getElementById("section-6-card").style.display = "none";
        document.getElementById("section-6-dash").style.display = "none";
    }
}

function section_6_hidden_card_1(){
    let card = document.getElementById("section_6_hidden_card_1").style.display;
    // console.log(card);
    if(card == "none"){
        document.getElementById("section_6_hidden_card_1").style.display = "block";
    }
    else{
        document.getElementById("section_6_hidden_card_1").style.display = "none";
    }
}
function section_6_hidden_card_2(){
    let card = document.getElementById("section_6_hidden_card_2").style.display;
    // console.log(card);
    if(card == "none"){
        document.getElementById("section_6_hidden_card_2").style.display = "block";
    }
    else{
        document.getElementById("section_6_hidden_card_2").style.display = "none";
    }
}
function section_6_hidden_card_3(){
    let card = document.getElementById("section_6_hidden_card_3").style.display;
    // console.log(card);
    if(card == "none"){
        document.getElementById("section_6_hidden_card_3").style.display = "block";
    }
    else{
        document.getElementById("section_6_hidden_card_3").style.display = "none";
    }
}
function section_6_hidden_card_4(){
    let card = document.getElementById("section_6_hidden_card_4").style.display;
    // console.log(card);
    if(card == "none"){
        document.getElementById("section_6_hidden_card_4").style.display = "block";
    }
    else{
        document.getElementById("section_6_hidden_card_4").style.display = "none";
    }
}







