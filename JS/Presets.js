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



list.click(function () {
    if (liststatus === 0) {
        sidemenu.css({
            "width": "calc(100vw - 3px)",
        })
        addbtn.css({
            "position": "absolute",
            "bottom": "0",
            "left": "50%",
            "transform": "translate(-50%, 0)",
        })
        $(".color-div").css({
            "width": "150px",
            "border-bottom": "none",
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
            "border-bottom": "solid var(--border) 3px",
        })
        colormaker.css("display", "none")
        sidemenu.css({
            "width": "200px",
            "transform": "translate(0)",
        })
    }
});

$("#done-btn").click(function () {
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
    }
    if (x === 2) {
        preset2.html(presetname.val())
    }
    if (x === 3) {
        preset3.html(presetname.val())
    }
    if (x === 4) {
        preset4.html(presetname.val())
    }
});

preset1.click(function () {
    $('#editing-wrapper').fadeOut(300)
    $("#edit-btn").css({"filter": "invert(34%) sepia(0%) saturate(240%) hue-rotate(137deg) brightness(90%) contrast(80%)", "cursor": "pointer"})
    $(".color-canvas-div").css("cursor", "pointer")
    edit = 0
    $("#chosep").css("display", "none")
    x = 1;
    $("#preset1-color-div").css("display", "initial")
    $("#preset2-color-div").css("display", "none")
    $("#preset3-color-div").css("display", "none")
    $("#preset4-color-div").css("display", "none")
    presetname.val("")
    presetname.attr("placeholder", preset1.html())
    preset2.removeAttr("id", "focused")
    preset3.removeAttr("id", "focused")
    preset4.removeAttr("id", "focused")
    preset1.attr("id", "focused");
    $("#background-div1").css("display", "initial")
    $("#background-div2").css("display", "none")
    $("#background-div3").css("display", "none")
    $("#background-div4").css("display", "none")
    $("#backgroundHide").css("display", "none")
});
preset2.click(function () {
    $('#editing-wrapper').fadeOut(300)
    $("#edit-btn").css({"filter": "invert(34%) sepia(0%) saturate(240%) hue-rotate(137deg) brightness(90%) contrast(80%)", "cursor": "pointer"})
    $(".color-canvas-div").css("cursor", "pointer")
    edit = 0
    $("#chosep").css("display", "none")
    x = 2;
    $("#preset2-color-div").css("display", "initial")
    $("#preset1-color-div").css("display", "none")
    $("#preset3-color-div").css("display", "none")
    $("#preset4-color-div").css("display", "none")
    presetname.val("")
    presetname.attr("placeholder", preset2.html())
    preset1.removeAttr("id", "focused")
    preset3.removeAttr("id", "focused")
    preset4.removeAttr("id", "focused")
    preset2.attr("id", "focused");
    $("#background-div1").css("display", "none")
    $("#background-div2").css("display", "initial")
    $("#background-div3").css("display", "none")
    $("#background-div4").css("display", "none")
    $("#backgroundHide").css("display", "none")
});
preset3.click(function () {
    $('#editing-wrapper').fadeOut(300)
    $("#edit-btn").css({"filter": "invert(34%) sepia(0%) saturate(240%) hue-rotate(137deg) brightness(90%) contrast(80%)", "cursor": "pointer"})
    $(".color-canvas-div").css("cursor", "pointer")
    edit = 0
    $("#chosep").css("display", "none")
    x = 3;
    $("#preset3-color-div").css("display", "initial")
    $("#preset2-color-div").css("display", "none")
    $("#preset1-color-div").css("display", "none")
    $("#preset4-color-div").css("display", "none")
    presetname.val("")
    presetname.attr("placeholder", preset3.html())
    preset1.removeAttr("id", "focused")
    preset2.removeAttr("id", "focused")
    preset4.removeAttr("id", "focused")
    preset3.attr("id", "focused");
    $("#background-div1").css("display", "none")
    $("#background-div2").css("display", "none")
    $("#background-div3").css("display", "initial")
    $("#background-div4").css("display", "none")
    $("#backgroundHide").css("display", "none")
});
preset4.click(function () {
    $('#editing-wrapper').fadeOut(300)
    $("#edit-btn").css({"filter": "invert(34%) sepia(0%) saturate(240%) hue-rotate(137deg) brightness(90%) contrast(80%)", "cursor": "pointer"})
    $(".color-canvas-div").css("cursor", "pointer")
    edit = 0
    $("#chosep").css("display", "none")
    x = 4;
    $("#preset4-color-div").css("display", "initial")
    $("#preset1-color-div").css("display", "none")
    $("#preset2-color-div").css("display", "none")
    $("#preset3-color-div").css("display", "none")
    presetname.val("")
    presetname.attr("placeholder", preset4.html())
    preset1.removeAttr("id", "focused")
    preset3.removeAttr("id", "focused")
    preset2.removeAttr("id", "focused")
    preset4.attr("id", "focused");
    $("#background-div1").css("display", "none")
    $("#background-div2").css("display", "none")
    $("#background-div3").css("display", "none")
    $("#background-div4").css("display", "initial")
    $("#backgroundHide").css("display", "none")
});


addbtn.click(function () {

    if (x === 0) {
    } else {
        y = 1
        colormaker.css("display", "initial")
    }

});

colorhexmaker.change(function () {
    $("#color-block-maker").css("background-color", colorhexmaker.val())
});

$("body").keyup(function (event) {
    if (y === 1) {
        if (event.key === "Enter") {
            doneclick()
            y = 0
        }
        if (event.key === "Escape") {
            colormaker.css("display", "none")
        }
    }

});

function doneclick() {
    let re = /[0-9A-Fa-f]{6}/g;
    let inputString = colorhexmaker.val();

    if(re.test(inputString)) {
        y = 0
        colormaker.css("display", "none")
        if (x === 1) {

            let color = {
                number: 0,
                id: Date.now(),
                id2: Date.now() - 3000,
                id3: Math.random(),
                deleteId: Date.now() - 1000,
                hex: colorhexmaker.val(),
                name: Date.now() - 5000,
                nameval: "",
            }
            colorp1.push(color)
            oldInfo1.push(color);
            oldInfo1.forEach((item, i) => {
                item.number = i + 1;
                colorp1N = i + 1;
            })
            localStorage.setItem("colorp1N", colorp1N)

            $("#color-wrap1").append(" <div class=\'color-div " + colorp1[colorp1.length - 1].deleteId + "\'>\n" +
                " <button onclick='remove(this);' class=\'remove-btn\'  id=\'" + colorp1[colorp1.length - 1].deleteId + "\'><img src=\"icons/delete.svg\" alt=\"remove-btn\"></button>\n" +
                "            <label>\n" +
                "                <input maxlength=\"10\" onchange='updateName(this)' id='" + colorp1[colorp1.length - 1].name + "\' placeholder=\"Name\" class=\'color-side-input " + colorp1[colorp1.length - 1].number + "\'>\n" +
                "            </label>\n" +
                "            <br>\n" +
                "            <div class=\'color-block " + colorp1[colorp1.length - 1].id2 + "\'></div>\n" +
                "            <p class=\'hex " + colorp1[colorp1.length - 1].id + "\'>hex</p>\n" +
                "        </div>")

            $("#background1").append(" " +
                "         <div class=\'color-canvas-div " + colorp1[colorp1.length - 1].deleteId + "\' id=\'" + colorp1[colorp1.length - 1].id3 + "\'  onmouseup=\'mup(this); copy(this);\' onmouseleave=\'mup(this)\' onmousedown=\'clicking(this); findID(this)\'>\n" +
                "            <label>\n" +
                "                <input maxlength=\"10\" readonly placeholder=\"Name\" style='cursor: initial' class=\'color-side-input " + colorp1[colorp1.length - 1].name + "\'>\n" +
                "            </label>\n" +
                "            <br>\n" +
                "            <div class=\'color-block-canvas " + colorp1[colorp1.length - 1].id2 + "\'></div>\n" +
                "            <p class=\'hex-canvas " + colorp1[colorp1.length - 1].id + "\' id=\'" + colorp1[colorp1.length - 1].id + "\'>hex</p>\n" +
                "        </div>")

            $("." + colorp1[colorp1.length - 1].id2).css("background-color", colorp1[colorp1.length - 1].hex)
            $("." + colorp1[colorp1.length - 1].id).html(colorp1[colorp1.length - 1].hex)


            localStorage.setItem('ColorPreset1', JSON.stringify(oldInfo1));

        }
        if (x === 2) {
            let color = {
                number: 0,
                id: Date.now(),
                id2: Date.now() - 3000,
                id3: Math.random(),
                deleteId: Date.now() - 1000,
                hex: colorhexmaker.val(),
                name: Date.now() - 5000,
                nameval: "",
            }
            colorp2.push(color)
            oldInfo2.push(color);
            colorp2.forEach((item, i) => {
                item.number = i + 1;
                colorp2N = i + 1;
            });

            localStorage.setItem("colorp2N", colorp2N)

            $("#color-wrap2").append(" <div class=\'color-div " + colorp2[colorp2.length - 1].deleteId + "\'>\n" +
                " <button onclick='remove(this);' class=\'remove-btn\'  id=\'" + colorp2[colorp2.length - 1].deleteId + "\'><img src=\"icons/delete.svg\" alt=\"remove-btn\"></button>\n" +
                "            <label>\n" +
                "                <input maxlength=\"10\" onchange='updateName(this)' id='" + colorp2[colorp2.length - 1].name + "\' placeholder=\"Name\" class=\'color-side-input " + colorp2[colorp2.length - 1].number + "\'>\n" +
                "            </label>\n" +
                "            <br>\n" +
                "            <div class=\'color-block " + colorp2[colorp2.length - 1].id2 + "\'></div>\n" +
                "            <p class=\'hex " + colorp2[colorp2.length - 1].id + "\'>hex</p>\n" +
                "        </div>")

            $("#background2").append(" " +
                "         <div class=\'color-canvas-div " + colorp2[colorp2.length - 1].deleteId + "\' id=\'" + colorp2[colorp2.length - 1].id3 + "\'  onmouseup=\'mup(this); copy(this);\' onmouseleave=\'mup(this)\' onmousedown=\'clicking(this); findID(this)\'>\n" +
                "            <label>\n" +
                "                <input maxlength=\"10\" readonly placeholder=\"Name\" style='cursor: initial' class=\'color-side-input " + colorp2[colorp2.length - 1].name + "\'>\n" +
                "            </label>\n" +
                "            <br>\n" +
                "            <div class=\'color-block-canvas " + colorp2[colorp2.length - 1].id2 + "\'></div>\n" +
                "            <p class=\'hex-canvas " + colorp2[colorp2.length - 1].id + "\' id=\'" + colorp2[colorp2.length - 1].id + "\'>hex</p>\n" +
                "        </div>")

            $("." + colorp2[colorp2.length - 1].id2).css("background-color", colorp2[colorp2.length - 1].hex)
            $("." + colorp2[colorp2.length - 1].id).html(colorp2[colorp2.length - 1].hex)
            localStorage.setItem('ColorPreset2', JSON.stringify(oldInfo2));
        }
        if (x === 3) {

            let color = {
                number: 0,
                id: Date.now(),
                id2: Date.now() - 3000,
                id3: Math.random(),
                deleteId: Date.now() - 1000,
                hex: colorhexmaker.val(),
                name: Date.now() - 5000,
                nameval: "",
            }
            colorp3.push(color)
            oldInfo3.push(color);
            colorp3.forEach((item, i) => {
                item.number = i + 1;
                colorp3N = i + 1;
            });

            localStorage.setItem("colorp3N", colorp3N)

            $("#color-wrap3").append(" <div class=\'color-div " + colorp3[colorp3.length - 1].deleteId + "\'>\n" +
                " <button onclick='remove(this);' class=\'remove-btn\'  id=\'" + colorp3[colorp3.length - 1].deleteId + "\'><img src=\"icons/delete.svg\" alt=\"remove-btn\"></button>\n" +
                "            <label>\n" +
                "                <input maxlength=\"10\" onchange='updateName(this)' id='" + colorp3[colorp3.length - 1].name + "\' placeholder=\"Name\" class=\'color-side-input " + colorp3[colorp3.length - 1].number + "\'>\n" +
                "            </label>\n" +
                "            <br>\n" +
                "            <div class=\'color-block " + colorp3[colorp3.length - 1].id2 + "\'></div>\n" +
                "            <p class=\'hex " + colorp3[colorp3.length - 1].id + "\'>hex</p>\n" +
                "        </div>")

            $("#background3").append(" " +
                "         <div class=\'color-canvas-div " + colorp3[colorp3.length - 1].deleteId + "\' id=\'" + colorp3[colorp3.length - 1].id3 + "\'  onmouseup=\'mup(this); copy(this);\' onmouseleave=\'mup(this)\' onmousedown=\'clicking(this); findID(this)\'>\n" +
                "            <label>\n" +
                "                <input maxlength=\"10\" readonly placeholder=\"Name\" style='cursor: initial' class=\'color-side-input " + colorp3[colorp3.length - 1].name + "\'>\n" +
                "            </label>\n" +
                "            <br>\n" +
                "            <div class=\'color-block-canvas " + colorp3[colorp3.length - 1].id2 + "\'></div>\n" +
                "            <p class=\'hex-canvas " + colorp3[colorp3.length - 1].id + "\' id=\'" + colorp3[colorp3.length - 1].id + "\'>hex</p>\n" +
                "        </div>")

            $("." + colorp3[colorp3.length - 1].id).html(colorp3[colorp3.length - 1].hex)
            $("." + colorp3[colorp3.length - 1].id2).css("background-color", colorp3[colorp3.length - 1].hex)
            localStorage.setItem('ColorPreset3', JSON.stringify(oldInfo3));

        }
        if (x === 4) {

            let color = {
                number: 0,
                id: Date.now(),
                id2: Date.now() - 3000,
                id3: Math.random(),
                deleteId: Date.now() - 1000,
                hex: colorhexmaker.val(),
                name: Date.now() - 5000,
                nameval: "",
            }
            colorp4.push(color)
            oldInfo4.push(color);
            colorp4.forEach((item, i) => {
                item.number = i + 1;
                colorp4N = i + 1;
            });

            localStorage.setItem("colorp4N", colorp4N)

            $("#color-wrap4").append(" <div class=\'color-div " + colorp4[colorp4.length - 1].deleteId + "\'>\n" +
                " <button onclick='remove(this);' class=\'remove-btn\'  id=\'" + colorp4[colorp4.length - 1].deleteId + "\'><img src=\"icons/delete.svg\" alt=\"remove-btn\"></button>\n" +
                "            <label>\n" +
                "                <input maxlength=\"10\" onchange='updateName(this)' id='" + colorp4[colorp4.length - 1].name + "\' placeholder=\"Name\" class=\'color-side-input " + colorp4[colorp4.length - 1].number + "\'>\n" +
                "            </label>\n" +
                "            <br>\n" +
                "            <div class=\'color-block " + colorp4[colorp4.length - 1].id2 + "\'></div>\n" +
                "            <p class=\'hex " + colorp4[colorp4.length - 1].id + "\'>hex</p>\n" +
                "        </div>")

            $("#background4").append("" +
                "         <div class=\'color-canvas-div " + colorp4[colorp4.length - 1].deleteId + "\' id=\'" + colorp4[colorp4.length - 1].id3 + "\' onmouseup=\'mup(this); copy(this);\' onmouseleave=\'mup(this)\' onmousedown=\'clicking(this); findID(this)\'>\n" +
                "            <label>\n" +
                "                <input maxlength=\"10\" readonly placeholder=\"Name\" style='cursor: initial' class=\'color-side-input " + colorp4[colorp4.length - 1].name + "\'>\n" +
                "                <br>\n" +
                "            </label>\n" +
                "            <div class=\'color-block-canvas " + colorp4[colorp4.length - 1].id2 + "\'></div>\n" +
                "            <p class=\'hex-canvas " + colorp4[colorp4.length - 1].id + "\' id=\'" + colorp4[colorp4.length - 1].id + "\'>hex</p>\n" +
                "        </div>")

            $("." + colorp4[colorp4.length - 1].id).html(colorp4[colorp4.length - 1].hex)
            $("." + colorp4[colorp4.length - 1].id2).css("background-color", colorp4[colorp4.length - 1].hex)
            localStorage.setItem('ColorPreset4', JSON.stringify(oldInfo4));

        }
    } else {
        $("#color-maker").effect( "shake", "smooth" );
    }
}

window.onload = function () {
    if (localStorage["colorp1N"]) {
        for (let i = 0; i < JSON.parse(localStorage["colorp1N"]); i++) {
            let item = JSON.parse(localStorage["ColorPreset1"])[i]
            $("#color-wrap1").append(" <div class=\'color-div " + item.deleteId + "\'>\n" +
                " <button onclick='remove(this);' class=\'remove-btn\'  id=\'" + item.deleteId + "\'><img src=\"icons/delete.svg\" alt=\"remove-btn\"></button>\n" +
                "            <label>\n" +
                "                <input value=\'" + item.nameval + "\' maxlength=\"10\" onchange='updateName(this)' id='" + item.name + "\' placeholder=\"Name\" class=\'color-side-input " + item.number + "\'>\n" +
                "            </label>\n" +
                "            <br>\n" +
                "            <div class=\'color-block " + item.id2 + "\'></div>\n" +
                "            <p class=\'hex " + item.id + "\'>hex</p>\n" +
                "        </div>")

            $("#background1").append(" " +
                "         <div class=\'color-canvas-div " + item.deleteId + "\' id=\'" + item.id3 + "\'  onmouseup=\'mup(this); copy(this);\' onmouseleave=\'mup(this)\' onmousedown=\'clicking(this); findID(this)\'>\n" +
                "            <label>\n" +
                "                <input value=\'" + item.nameval + "\' maxlength=\"10\" readonly placeholder=\"Name\" style='cursor: initial' class=\'color-side-input " + item.name + "\'>\n" +
                "            </label>\n" +
                "            <br>\n" +
                "            <div class=\'color-block-canvas " + item.id2 + "\'></div>\n" +
                "            <p class=\'hex-canvas " + item.id + "\' id=\'" + item.id + "\'>hex</p>\n" +
                "        </div>")
            
            $("." + item.id).html(item.hex)
            $("." + item.id2).css("background-color", item.hex)
        }
    }
    if (localStorage["colorp2N"]) {
        for (let i = 0; i < JSON.parse(localStorage["colorp2N"]); i++) {
            let item = JSON.parse(localStorage["ColorPreset2"])[i]
            $("#color-wrap2").append(" <div class=\'color-div " + item.deleteId + "\'>\n" +
                " <button onclick='remove(this);' class=\'remove-btn\'  id=\'" + item.deleteId + "\'><img src=\"icons/delete.svg\" alt=\"remove-btn\"></button>\n" +
                "            <label>\n" +
                "                <input value=\'" + item.nameval + "\' maxlength=\"10\" onchange='updateName(this)' id='" + item.name + "\' placeholder=\"Name\" class=\'color-side-input " + item.number + "\'>\n" +
                "            </label>\n" +
                "            <br>\n" +
                "            <div class=\'color-block " + item.id2 + "\'></div>\n" +
                "            <p class=\'hex " + item.id + "\'>hex</p>\n" +
                "        </div>")

            $("#background2").append(" " +
                "         <div class=\'color-canvas-div " + item.deleteId + "\' id=\'" + item.id3 + "\'  onmouseup=\'mup(this); copy(this);\' onmouseleave=\'mup(this)\' onmousedown=\'clicking(this); findID(this)\'>\n" +
                "            <label>\n" +
                "                <input value=\'" + item.nameval + "\' maxlength=\"10\" readonly placeholder=\"Name\" style='cursor: initial' class=\'color-side-input " + item.name + "\'>\n" +
                "            </label>\n" +
                "            <br>\n" +
                "            <div class=\'color-block-canvas " + item.id2 + "\'></div>\n" +
                "            <p class=\'hex-canvas " + item.id + "\' id=\'" + item.id + "\'>hex</p>\n" +
                "        </div>")

            $("." + item.id).html(item.hex)
            $("." + item.id2).css("background-color", item.hex)
        }
    }
    if (localStorage["colorp3N"]) {
        for (let i = 0; i < JSON.parse(localStorage["colorp3N"]); i++) {
            let item = JSON.parse(localStorage["ColorPreset3"])[i]
            $("#color-wrap3").append(" <div class=\'color-div " + item.deleteId + "\'>\n" +
                " <button onclick='remove(this);' class=\'remove-btn\'  id=\'" + item.deleteId + "\'><img src=\"icons/delete.svg\" alt=\"remove-btn\"></button>\n" +
                "            <label>\n" +
                "                <input value=\'" + item.nameval + "\' maxlength=\"10\" onchange='updateName(this)' id='" + item.name + "\' placeholder=\"Name\" class=\'color-side-input " + item.number + "\'>\n" +
                "            </label>\n" +
                "            <br>\n" +
                "            <div class=\'color-block " + item.id2 + "\'></div>\n" +
                "            <p class=\'hex " + item.id + "\'>hex</p>\n" +
                "        </div>")

            $("#background3").append(" " +
                "         <div class=\'color-canvas-div " + item.deleteId + "\' id=\'" + item.id3 + "\'  onmouseup=\'mup(this); copy(this);\' onmouseleave=\'mup(this)\' onmousedown=\'clicking(this); findID(this)\'>\n" +
                "            <label>\n" +
                "                <input value=\'" + item.nameval + "\' maxlength=\"10\" readonly placeholder=\"Name\" style='cursor: initial' class=\'color-side-input " + item.name + "\'>\n" +
                "            </label>\n" +
                "            <br>\n" +
                "            <div class=\'color-block-canvas " + item.id2 + "\'></div>\n" +
                "            <p class=\'hex-canvas " + item.id + "\' id=\'" + item.id + "\'>hex</p>\n" +
                "        </div>")

            $("." + item.id).html(item.hex)
            $("." + item.id2).css("background-color", item.hex)
        }
    }
    if (localStorage["colorp4N"]) {
        for (let i = 0; i < JSON.parse(localStorage["colorp4N"]); i++) {
            let item = JSON.parse(localStorage["ColorPreset4"])[i]
            $("#color-wrap4").append(" <div class=\'color-div " + item.deleteId + "\'>\n" +
                " <button onclick='remove(this);' class=\'remove-btn\'  id=\'" + item.deleteId + "\'><img src=\"icons/delete.svg\" alt=\"remove-btn\"></button>\n" +
                "            <label>\n" +
                "                <input value=\'" + item.nameval + "\' maxlength=\"10\" onchange='updateName(this)' id='" + item.name + "\' placeholder=\"Name\" class=\'color-side-input " + item.number + "\'>\n" +
                "            </label>\n" +
                "            <br>\n" +
                "            <div class=\'color-block " + item.id2 + "\'></div>\n" +
                "            <p class=\'hex " + item.id + "\'>hex</p>\n" +
                "        </div>")

            $("#background4").append(" " +
                "         <div class=\'color-canvas-div " + item.deleteId + "\' id=\'" + item.id3 + "\'  onmouseup=\'mup(this); copy(this);\' onmouseleave=\'mup(this)\' onmousedown=\'clicking(this); findID(this)\'>\n" +
                "            <label>\n" +
                "                <input value=\'" + item.nameval + "\' maxlength=\"10\" readonly placeholder=\"Name\" style='cursor: initial' class=\'color-side-input " + item.name + "\'>\n" +
                "            </label>\n" +
                "            <br>\n" +
                "            <div class=\'color-block-canvas " + item.id2 + "\'></div>\n" +
                "            <p class=\'hex-canvas " + item.id + "\' id=\'" + item.id + "\'>hex</p>\n" +
                "        </div>")

            $("." + item.id).html(item.hex)
            $("." + item.id2).css("background-color", item.hex)
        }
    }
}

function clicking(e) {
    if (edit === 0) {
        let elementid = e.id
        let element = document.getElementById(elementid)
        element.style.transform = "scale(0.97)";
    }
}

function mup(e) {
    if (edit === 0) {
        let elementid = e.id
        let element = document.getElementById(elementid)
        element.style.transform = "scale(1)";
    }
}

function updateName(e) {
    let name = Array.from(document.getElementsByClassName(e.id));
    name.forEach(i => {
        i.value = $("#" + e.id).val()
    })
    if (x === 1) {
        oldInfo1[$("#" + e.id).attr('class').split(' ')[1] - 1].nameval =  $("#" + e.id).val()
        localStorage.setItem("ColorPreset1", JSON.stringify(oldInfo1))
    }
    if (x === 2) {
        oldInfo2[$("#" + e.id).attr('class').split(' ')[1] - 1].nameval =  $("#" + e.id).val()
        localStorage.setItem("ColorPreset2", JSON.stringify(oldInfo2))
    }
    if (x === 3) {
        oldInfo3[$("#" + e.id).attr('class').split(' ')[1] - 1].nameval =  $("#" + e.id).val()
        localStorage.setItem("ColorPreset3", JSON.stringify(oldInfo3))
    }
    if (x === 4) {
        oldInfo4[$("#" + e.id).attr('class').split(' ')[1] - 1].nameval =  $("#" + e.id).val()
        localStorage.setItem("ColorPreset4", JSON.stringify(oldInfo4))
    }

}

function remove(e) {
    let deletes = Array.from(document.getElementsByClassName(e.id))
    deletes.forEach(i => {
        i.remove();
    });
    if (x === 1) {
        colorp1.splice(colorp1.indexOf(e.id) - 1, 1)
        oldInfo1.splice(oldInfo1.indexOf(e.id) - 1, 1)
        localStorage.setItem("ColorPreset1", JSON.stringify(oldInfo1))
        colorp1N = oldInfo1.length;
        localStorage.setItem("colorp1N", colorp1N)
    }
    if (x === 2) {
        colorp2.splice(colorp2.indexOf(e.id) - 1, 1)
        oldInfo2.splice(oldInfo2.indexOf(e.id) - 1, 1)
        localStorage.setItem("ColorPreset2", JSON.stringify(oldInfo2))
        colorp2N = oldInfo2.length;
        localStorage.setItem("colorp2N", colorp2N)
    }
    if (x === 3) {
        colorp3.splice(colorp3.indexOf(e.id) - 1, 1)
        oldInfo3.splice(oldInfo3.indexOf(e.id) - 1, 1)
        localStorage.setItem("ColorPreset3", JSON.stringify(oldInfo2))
        colorp3N = oldInfo3.length;
        localStorage.setItem("colorp3N", colorp3N)
    }
    if (x === 4) {
        colorp4.splice(colorp4.indexOf(e.id) - 1, 1)
        oldInfo4.splice(oldInfo4.indexOf(e.id) - 1, 1)
        localStorage.setItem("ColorPreset4", JSON.stringify(oldInfo2))
        colorp4N = oldInfo4.length;
        localStorage.setItem("colorp4N", colorp4N)
    }
}

function removeEdit() {
    $('#editing-wrapper').fadeOut(300)
}

$('#editing-wrapper').hide()

$("#edit-btn").click(function editingF() {
    if (x > 0) {
        if (edit === 0) {
            $("#edit-btn").css("filter", "invert(54%) sepia(38%) saturate(612%) hue-rotate(96deg) brightness(103%) contrast(91%)")
            $(".color-canvas-div").css("cursor", "move")
            $('#editing-wrapper').fadeIn(300)
            $(".color-canvas-div").dblclick(function () {
                $(".color-canvas-div").type("color")
            })
            edit = 1
        } else {
            if (edit === 1) {
                $('#editing-wrapper').fadeOut(300)
                $("#edit-btn").css("filter", "invert(34%) sepia(0%) saturate(240%) hue-rotate(137deg) brightness(90%) contrast(80%)")
                $(".color-canvas-div").css("cursor", "pointer")
                edit = 0
            }
        }
    }
})

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


function findID(e) {
    let IdOfElement = e.id
    let element = document.getElementById(IdOfElement)
    if (edit === 1) {
        if (x === 1) {
            element.drag = new DragElement(element, "background1")
        }
        if (x === 2) {
            element.drag = new DragElement(element, "background2")
        }
        if (x === 3) {
            element.drag = new DragElement(element, "background3")
        }
        if (x === 4) {
            element.drag = new DragElement(element, "background4")
        }
    } else if (edit === 0) {
        let new_element = element.cloneNode(true);
        element.parentNode.replaceChild(new_element, element)
    }
}


/*
    DragElement by Jim Andrews, 2/18/2021

    You are free to use this code as you please. However, if you find
    any bugs in it, please fix them, let me know, and make the fix
    available.
*/
function DragElement(aElement, aCage) {
    /*  * Co
        * aEnstructs an object that makes aElement draggable (mouse or touch). lement is the element (or its id) that becomes draggable.
        * aCage is is an optional element (or its id) that aElement stays within.
        * aCage does not have to be the parent of aElement.
        * The CSS position property of aElement cannot be static (the default value).
    */
    //********************************************************************
    // PROPERTIES
    //********************************************************************

    var pPointerDown;
    var pConstraint;
    var pElement;
    var pOffsetX, pOffsetY;

    //********************************************************************
    // METHODS
    //********************************************************************

    this.setCage = function (cage) {
        // cage can be an element or its id. It is the (optional)
        // element that pElement stays within when pElement is dragged.
        if (typeof cage == 'string') {
            pConstraint = document.getElementById(cage);
        } else {
            pConstraint = cage;
        }
    }


    this.deactivate = function () {
        // Deactivates the ability of pElement to be dragged.
        pPointerDown = false;
        window.removeEventListener('mousedown', mDown, false);
        window.removeEventListener('mousemove', mMove);
        window.removeEventListener('mouseup', mUp);
        window.removeEventListener('touchstart', tStart, false);
        window.removeEventListener('touchmove', tMove, false);
        window.removeEventListener('touchend', tEnd, false);
    }

    this.reactivate = function () {
        // Reactivates ability to drag pElement.
        this.deactivate();
        pElement.addEventListener('mousedown', mDown, false);
        pElement.addEventListener('touchstart', tStart, false);

    }

    //********************************************************************
    // MOUSE
    //********************************************************************

    function mDown(e) {
        // Runs on mousedown.
        pPointerDown = true;
        var e = e || window.event;
        if (pElement.tagName == "IMG") e.preventDefault();
        var elementClientRect = pElement.getBoundingClientRect();
        pOffsetX = e.clientX - elementClientRect.left;
        pOffsetY = e.clientY - elementClientRect.top;
        window.addEventListener('mousemove', mMove, false);
        window.addEventListener('mouseup', mUp, false);
        // These event listeners are removed when the mouse goes up.
        return true;
    }

    function mMove(e) {
        var e = e || window.event;
        if (pElement.tagName == "IMG") e.preventDefault();
        moveElement(e.clientX, e.clientY);
    }

    function mUp(e) {
        // Called when the mouse goes up.
        pPointerDown = false;
        window.removeEventListener('mousemove', mMove);
        window.removeEventListener('mouseup', mUp);
    }

    //********************************************************************
    // TOUCH
    //********************************************************************

    function tStart(e) {
        // Runs on touchstart
        pPointerDown = true;
        var e = e || window.event;
        e.preventDefault();
        var elementClientRect = pElement.getBoundingClientRect();
        pOffsetX = e.touches[0].clientX - elementClientRect.left;
        pOffsetY = e.touches[0].clientY - elementClientRect.top;
        window.addEventListener('touchend', tEnd, false);
        window.addEventListener('touchmove', tMove, false);
        // These event listeners are removed when the finger goes up.
    }

    function tMove(e) {
        // Runs on touchmove
        var e = e || window.event;
        e.preventDefault();
        moveElement(e.touches[0].clientX, e.touches[0].clientY);
    }

    function tEnd(e) {
        // Runs on touchend
        pPointerDown = false;
        window.removeEventListener('touchend', tEnd, false);
        window.removeEventListener('touchmove', tMove, false);
    }

    //********************************************************************
    // SHARED MOUSE AND TOUCH
    //********************************************************************

    function moveElement(clientX, clientY) {
        // Called when the mouse is dragging pElement.
        if (pPointerDown) {
            var elementClientRect = pElement.getBoundingClientRect();
            var elementStyle = window.getComputedStyle(pElement);
            var tX = parseInt(elementStyle.left) - elementClientRect.left;
            var tY = parseInt(elementStyle.top) - elementClientRect.top;
            // tX and tY translate from client coordinates to pElement CSS.
            // For instance, constraintClientRect.left is the left edge
            // of the constraining rectangle in client coordinates, ie,
            // relative to the top left corner of the viewport. So
            // constraintClientRect.left + tX is the left edge of the
            // constraining rectangle in pElement CSS coordinates.
            //---------------------
            if (pConstraint) {
                var constraintClientRect = pConstraint.getBoundingClientRect();
                if (clientX - pOffsetX < constraintClientRect.left) {
                    // If we're about to cross the left border, position
                    // pElement on left edge of constraining rect.
                    pElement.style.left = constraintClientRect.left + tX + 'px';
                } else {
                    if (clientX + elementClientRect.width - pOffsetX > constraintClientRect.right) {
                        // If we're about to cross the right border, position on right edge of constraining rect.
                        pElement.style.left = constraintClientRect.right - elementClientRect.width + tX + 'px';
                    } else {
                        if (clientX >= constraintClientRect.left + pOffsetX && clientX <= constraintClientRect.right - (elementClientRect.width - pOffsetX)) {
                            // If we're not crossing either of the two horizontal borders, proceed normally.
                            pElement.style.left = clientX - pOffsetX + tX + 'px';
                        } else {
                            // do nothing
                        }
                    }
                }
                //---------------------
                if (clientY - pOffsetY < constraintClientRect.top) {
                    pElement.style.top = constraintClientRect.top + tY + 'px';
                } else {
                    if (clientY + elementClientRect.height - pOffsetY > constraintClientRect.bottom) {
                        pElement.style.top = constraintClientRect.bottom + tY - elementClientRect.height + 'px';
                    } else {
                        if (clientY >= constraintClientRect.top + pOffsetY && clientY <= constraintClientRect.bottom - (elementClientRect.height - pOffsetY)) {
                            pElement.style.top = clientY - pOffsetY + tY + 'px';
                        } else {
                            // do nothing
                        }
                    }
                }

            }   // end if (pConstraint)
            else {
                // No constraining element, in this case.
                pElement.style.left = clientX + tX - pOffsetX + 'px';
                pElement.style.top = clientY + tY - pOffsetY + 'px';
            }

        }
    }

    //***********************************************************************
    // INITIALIZATION
    //***********************************************************************

    pPointerDown = false;
    pConstraint = null;
    if (typeof aElement == "string") {
        pElement = document.getElementById(aElement);
    } else {
        pElement = aElement;
    }
    pElement.addEventListener('mousedown', mDown, false);
    pElement.addEventListener('touchstart', tStart, false);
    if (aCage) {
        this.setCage(aCage);
    } else {
        pConstraint = null;
    }
}   // end of DragElement

document.getElementsByTagName('head')[0].innerHTML += '<meta http-equiv="Content-Security-Policy" content="default-src gap://ready file://* *; style-src \'self\' http://* https://* \'unsafe-inline\'; script-src \'self\' http://* https://* \'unsafe-inline\' \'unsafe-eval\'">';