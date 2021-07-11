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


