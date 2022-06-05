let y = 0;
let x = 0;
let edit = 0;
let preset1 = $("#preset1");
let preset2 = $("#preset2");
let preset3 = $("#preset3");
let preset4 = $("#preset4");
let presetname = $(".presetname");
let list = $("#list-button");
let homebtn = $("#home-btn");
let liststatus = 0;
let sidemenu = $("#sidemenu");
let addbtn = $("#add-btn");
let colorhexmaker = $("#color-hex-maker");
let colormaker = $("#color-maker");
let colorp1 = [];
let colorp2 = [];
let colorp3 = [];
let colorp4 = [];
let colorp1N = 0;
let colorp2N = 0;
let colorp3N = 0;
let colorp4N = 0;
let oldInfo1 = JSON.parse(localStorage.getItem('ColorPreset1') || '[]');
let oldInfo2 = JSON.parse(localStorage.getItem('ColorPreset2') || '[]');
let oldInfo3 = JSON.parse(localStorage.getItem('ColorPreset3') || '[]');
let oldInfo4 = JSON.parse(localStorage.getItem('ColorPreset4') || '[]');
let currentfocused = null
let ty = false
let idas = null
const rgb2hex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`



list.click(function () {
    if (liststatus === 0) {
        sidemenu.css({
            "width": "100vw",
        })
        addbtn.css({
            "position": "absolute",
            "bottom": "0",
            "left": "50%",
            "transform": "translate(-50%, 0)",
        })
        $(".color-div").css({
            "width": "150px",
        })
        colormaker.css("display", "none")
        liststatus = 1
    } else {
        liststatus = 0
        addbtn.css({
            "position": "initial",
            "left": "0",
            "transform": "translate(0)",
        })
        $(".color-div").css({
            "width": "100%",
        })
        colormaker.css("display", "none")
        sidemenu.css({
            "width": "200px",
            "transform": "translate(0)",
        })
    }
});

$("body").keyup(function (event) {
    if (sidemenu.width === $("window").width) {
        if (event.key === "Escape") {
            liststatus = 0
            addbtn.css({
                "position": "initial",
                "left": "0",
                "transform": "translate(0)",
            })
            $(".color-div").css({
                "width": "100%",
            })
            colormaker.css("display", "none")
            sidemenu.css({
                "width": "200px",
                "transform": "translate(0)",
            })
        }
    }
    if ($('#settings').css('display') === 'block') {
        if (event.key === "Escape") {
            $("#content").css("transform", "")
            $("#settings").toggle("puff", 70)
        }
    }
    if (y === 1) {
        if (event.key === "Enter") {
            if (ty === true) {
                changeC()
            } else {
                doneclick()
            }
        }
        if (event.key === "Escape") {
            colormaker.css("display", "none")
        }
        y = 0
    }
    if (edit === 1) {
        if (event.key === "Escape") {
            removeEdit()
        }
    }
    if ($('#reset-error').css('display') === 'block') {
        if (event.key === "Enter") {
            resetPreset()
        }
        if (event.key === "Escape") {
            $('#reset-error').css("display", "none")
            $('.overlay').css({'display': 'none', 'opacity': '0'})
        }
    }
})

$("#done-btn").click(function () {
    if (ty === true) {
        changeC()
    } else {
        doneclick()
    }
    if (liststatus === 1) {
        $(".color-div").css({
            "width": "150px",
            "border-bottom": "none",
        })
    }
})


$("#color-block-maker").change(function () {
    colorhexmaker.val($("#color-block-maker").val())
})


$("#color-hex-maker").change(function () {
    $("#color-block-maker").val(colorhexmaker.val())
})


$("#reset-btn").click( function () {
    if (x > 0) {
        if (y === 0) {
        $('#reset-error').css('display', 'block')
        $(".overlay").css({"display": "inline", "opacity": "0.7"})
        }
    }
})


$(document).ready(function () {
        $('#sidebar').toggleClass('active');
});


homebtn.click(function () {
    colormaker.css("display", "none")
    if (liststatus === 1) {
        sidemenu.css({"width": "200px"})
        liststatus = 0
    }
});


presetname.change(function () {
    if (x === 1) {
        preset1.html(presetname.val())
        localStorage.setItem("preset1", presetname.val())
    }
    if (x === 2) {
        preset2.html(presetname.val())
        localStorage.setItem("preset2", presetname.val())
    }
    if (x === 3) {
        preset3.html(presetname.val())
        localStorage.setItem("preset3", presetname.val())
    }
    if (x === 4) {
        preset4.html(presetname.val())
        localStorage.setItem("preset4", presetname.val())
    }
});



$(".presets").click(function () {
    editBtnP()
    let css = '#reset-btn:hover {transform: rotate(180deg); filter: invert(42%) sepia(59%) saturate(935%) hue-rotate(216deg) brightness(97%) contrast(84%)'
    let style = document.createElement('style');
    $("#reset-btn").css({"cursor": "pointer"})
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    document.getElementsByTagName('head')[0].appendChild(style);
    removeEdit()
    $(".color-canvas-div").css("cursor", "pointer")
    edit = 0
    $("#chosep").css("display", "none")
    presetname.val("")
    $("#backgroundHide").css("display", "none")
    colormaker.css("display", "none")
})

preset1.click(function () {
    x = 1;
    $("#preset1-color-div").css("display", "initial")
    $("#preset2-color-div").css("display", "none")
    $("#preset3-color-div").css("display", "none")
    $("#preset4-color-div").css("display", "none")
    presetname.attr("placeholder", preset1.html())
    preset2.removeAttr("id", "focused")
    preset3.removeAttr("id", "focused")
    preset4.removeAttr("id", "focused")
    preset1.attr("id", "focused");
    $("#background-div1").css("display", "initial")
    $("#background-div2").css("display", "none")
    $("#background-div3").css("display", "none")
    $("#background-div4").css("display", "none")
});
preset2.click(function () {
    x = 2;
    $("#preset2-color-div").css("display", "initial")
    $("#preset1-color-div").css("display", "none")
    $("#preset3-color-div").css("display", "none")
    $("#preset4-color-div").css("display", "none")
    presetname.attr("placeholder", preset2.html())
    preset1.removeAttr("id", "focused")
    preset3.removeAttr("id", "focused")
    preset4.removeAttr("id", "focused")
    preset2.attr("id", "focused");
    $("#background-div1").css("display", "none")
    $("#background-div2").css("display", "initial")
    $("#background-div3").css("display", "none")
    $("#background-div4").css("display", "none")
});
preset3.click(function () {
    x = 3;
    $("#preset3-color-div").css("display", "initial")
    $("#preset2-color-div").css("display", "none")
    $("#preset1-color-div").css("display", "none")
    $("#preset4-color-div").css("display", "none")
    presetname.attr("placeholder", preset3.html())
    preset1.removeAttr("id", "focused")
    preset2.removeAttr("id", "focused")
    preset4.removeAttr("id", "focused")
    preset3.attr("id", "focused");
    $("#background-div1").css("display", "none")
    $("#background-div2").css("display", "none")
    $("#background-div3").css("display", "initial")
    $("#background-div4").css("display", "none")
});
preset4.click(function () {
    x = 4;
    $("#preset4-color-div").css("display", "initial")
    $("#preset1-color-div").css("display", "none")
    $("#preset2-color-div").css("display", "none")
    $("#preset3-color-div").css("display", "none")
    presetname.attr("placeholder", preset4.html())
    preset1.removeAttr("id", "focused")
    preset3.removeAttr("id", "focused")
    preset2.removeAttr("id", "focused")
    preset4.attr("id", "focused");
    $("#background-div1").css("display", "none")
    $("#background-div2").css("display", "none")
    $("#background-div3").css("display", "none")
    $("#background-div4").css("display", "initial")
});

addbtn.click(function () {
    if (edit === 0) {
        if (x > 0) {
            y = 1
            colormaker.css("display", "initial")
        }
    }
});

colorhexmaker.change(function () {
    $("#color-block-maker").css("background-color", colorhexmaker.val())
});


function removeEdit() {
    $('#editing-wrapper').css("opacity", "0")
    $("#edit-btn").css("filter", "invert(87%) sepia(0%) saturate(217%) hue-rotate(145deg) brightness(86%) contrast(95%)")
    $(".color-canvas-div").css("cursor", "pointer")
    edit = 0
}


$("#edit-btn").click(function editingF() {
    if (x > 0) {
        if (edit === 0) {
            editBtnG()
            $("#edit-btn").css("filter", "invert(54%) sepia(38%) saturate(612%) hue-rotate(96deg) brightness(103%) contrast(91%)")
            $(".color-canvas-div").css("cursor", "move")
            $('#editing-wrapper').css("opacity", "1")
            edit = 1
        } else {
            if (edit === 1) {
                editBtnP()
                $('#editing-wrapper').css("opacity", "0")
                $("#edit-btn").css("filter", "invert(87%) sepia(0%) saturate(217%) hue-rotate(145deg) brightness(86%) contrast(95%)")
                $(".color-canvas-div").css("cursor", "pointer")
                edit = 0
                stopDrag(document.getElementById("2314321343"));
            }
        }
    }
})

function editBtnP() {
    let css = '#edit-btn:hover {filter: invert(42%) sepia(59%) saturate(935%) hue-rotate(216deg) brightness(97%) contrast(84%) !important'
    let style = document.createElement('style');
    $("#edit-btn").css({"cursor": "pointer"})
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    document.getElementsByTagName('head')[0].appendChild(style);
}

function editBtnG() {
    let css = '#edit-btn:hover {filter: invert(54%) sepia(38%) saturate(612%) hue-rotate(96deg) brightness(103%) contrast(91%) !important'
    let style = document.createElement('style');
    $("#edit-btn").css({"cursor": "pointer"})
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    document.getElementsByTagName('head')[0].appendChild(style);
}


function resetPreset() {
    $('#reset-error').css('display', 'none')
    $('.overlay').css({'display': 'none', 'opacity': '0'})
    presetname.val(null)
    if (x === 1) {
        preset1.html("preset 1")
        colorp1 = []
        oldInfo1 = []
        localStorage.removeItem("colorp1N")
        localStorage.removeItem("preset1")
        localStorage.removeItem("ColorPreset1")

        let containerwrap = document.getElementById("color-wrap1");
        let elementswrap = containerwrap.getElementsByClassName("color-div");
        while (elementswrap[0]) {
            elementswrap[0].parentNode.removeChild(elementswrap[0]);
        }

        let container = document.getElementById("background1");
        let elements = container.getElementsByClassName("color-canvas-div");
        while (elements[0]) {
            elements[0].parentNode.removeChild(elements[0]);
        }
    }
    if (x === 2) {
        preset2.html("preset 2")
        colorp2 = []
        oldInfo2 = []
        localStorage.removeItem("colorp2N")
        localStorage.removeItem("preset2")
        localStorage.removeItem("ColorPreset2")

        let containerwrap = document.getElementById("color-wrap2");
        let elementswrap = containerwrap.getElementsByClassName("color-div");
        while (elementswrap[0]) {
            elementswrap[0].parentNode.removeChild(elementswrap[0]);
        }

        let container = document.getElementById("background2");
        let elements = container.getElementsByClassName("color-canvas-div");
        while (elements[0]) {
            elements[0].parentNode.removeChild(elements[0]);
        }
    }
    if (x === 3) {
        preset3.html("preset 3")
        colorp3 = []
        oldInfo3 = []
        localStorage.removeItem("colorp3N")
        localStorage.removeItem("preset3")
        localStorage.removeItem("ColorPreset3")

        let containerwrap = document.getElementById("color-wrap3");
        let elementswrap = containerwrap.getElementsByClassName("color-div");
        while (elementswrap[0]) {
            elementswrap[0].parentNode.removeChild(elementswrap[0]);
        }

        let container = document.getElementById("background3");
        let elements = container.getElementsByClassName("color-canvas-div");
        while (elements[0]) {
            elements[0].parentNode.removeChild(elements[0]);
        }
    }
    if (x === 4) {
        preset4.html("preset 4")
        colorp4 = []
        oldInfo4 = []
        localStorage.removeItem("colorp4N")
        localStorage.removeItem("preset4")
        localStorage.removeItem("ColorPreset4")

        let containerwrap = document.getElementById("color-wrap4");
        let elementswrap = containerwrap.getElementsByClassName("color-div");
        while (elementswrap[0]) {
            elementswrap[0].parentNode.removeChild(elementswrap[0]);
        }

        let container = document.getElementById("background4");
        let elements = container.getElementsByClassName("color-canvas-div");
        while (elements[0]) {
            elements[0].parentNode.removeChild(elements[0]);
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

$('#copied-div').hide()


function copy(e) {
    if (edit === 0) {
        navigator.clipboard.writeText(document.getElementById(e.id).lastElementChild.innerText).then(() => {
            $('#copied-div').fadeIn(500)
            sleep(1500).then(() => {
                $('#copied-div').fadeOut(500)
            })
        });
    }
}

document.getElementsByTagName('head')[0].innerHTML += '<meta http-equiv="Content-Security-Policy" content="default-src gap://ready file://* *; style-src \'self\' http://* https://* \'unsafe-inline\'; script-src \'self\' http://* https://* \'unsafe-inline\' \'unsafe-eval\'">';