function doneclick() {
    let re = /[0-9A-Fa-f]{6}/g;
    let inputString = colorhexmaker.val();
    if (ty === false) {
        if(re.test(inputString)) {
            y = 0
            colormaker.css("display", "none")
            if (x === 1) {

                let color = {
                    number: 0,
                    id: Date.now(),
                    id2: Date.now() - 3000,
                    id3: Date.now() - 4000,
                    id4: Date.now() - 6000,
                    deleteId: Date.now() - 9000,
                    hexval: colorhexmaker.val(),
                    name: Date.now() - 5000,
                    nameval: "",
                    left: "",
                    top: "",
                }
                colorp1.push(color)
                oldInfo1.push(color);
                oldInfo1.forEach((item, i) => {
                    item.number = i + 1;
                    colorp1N = i + 1;
                })

                localStorage.setItem("colorp1N", colorp1N)

                $("#color-wrap1").append(" <div class=\'color-div " + colorp1[colorp1.length - 1].deleteId + "\'>\n" +
                    " <button onclick='remove(this);' class=\'remove-btn " + colorp1[colorp1.length - 1].number + "\'  id=\'" + colorp1[colorp1.length - 1].deleteId + "\'><img src=\"icons/delete.svg\" alt=\"remove-btn\"></button>\n" +
                    "            <label>\n" +
                    "                <input maxlength=\"10\" onchange='updateName(this)' id='" + colorp1[colorp1.length - 1].name + "\' placeholder=\"Name\" class=\'color-side-input " + colorp1[colorp1.length - 1].number + "\'>\n" +
                    "            </label>\n" +
                    "            <br>\n" +
                    "            <div class=\'color-block " + colorp1[colorp1.length - 1].id2 + "\' id=\'" + colorp1[colorp1.length - 1].id4 + "\' ondblclick=\' editC(this) \'></div>\n" +
                    "            <p class=\'hex " + colorp1[colorp1.length - 1].id + "\'>hex</p>\n" +
                    "        </div>")

                $("#background1").append(" " +
                    "         <div class=\'color-canvas-div " + colorp1[colorp1.length - 1].deleteId + "\' id=\'" + colorp1[colorp1.length - 1].id3 + "\' onmouseup=\'mup(this); copy(this);\' onmouseleave=\'mup(this)\'  onmouseenter=\'if (edit === 1) {findID(this)}else {stopDrag(this)}\' onmousedown=\'clicking(this);\'>\n" +
                    "            <label>\n" +
                    "                <input maxlength=\"10\" readonly placeholder=\"Name\" style='cursor: initial' class=\'color-side-input " + colorp1[colorp1.length - 1].name + "\'>\n" +
                    "            </label>\n" +
                    "            <br>\n" +
                    "            <div class=\'color-block-canvas " + colorp1[colorp1.length - 1].id2 + "\'></div>\n" +
                    "            <p class=\'hex-canvas " + colorp1[colorp1.length - 1].id + "\' id=\'" + colorp1[colorp1.length - 1].id + "\'>hex</p>\n" +
                    "           </div>" )

                $("." + colorp1[colorp1.length - 1].id2).css("background-color", colorp1[colorp1.length - 1].hexval)
                $("." + colorp1[colorp1.length - 1].id).html(colorp1[colorp1.length - 1].hexval)
                localStorage.setItem('ColorPreset1', JSON.stringify(oldInfo1));
            }
            if (x === 2) {
                let color = {
                    number: 0,
                    id: Date.now(),
                    id2: Date.now() - 3000,
                    id3: Date.now() - 4000,
                    deleteId: Date.now() - 9000,
                    hexval: colorhexmaker.val(),
                    name: Date.now() - 5000,
                    nameval: "",
                    left: "",
                    top: "",
                }
                colorp2.push(color)
                oldInfo2.push(color);
                oldInfo2.forEach((item, i) => {
                    item.number = i + 1;
                    colorp2N = i + 1;
                });

                localStorage.setItem("colorp2N", colorp2N)

                $("#color-wrap2").append(" <div class=\'color-div " + colorp2[colorp2.length - 1].deleteId + "\'>\n" +
                    " <button onclick='remove(this);' class=\'remove-btn " + colorp2[colorp2.length - 1].number + "\' id=\'" + colorp2[colorp2.length - 1].deleteId + "\'><img src=\"icons/delete.svg\" alt=\"remove-btn\"></button>\n" +
                    "            <label>\n" +
                    "                <input maxlength=\"10\" onchange='updateName(this)' id='" + colorp2[colorp2.length - 1].name + "\' placeholder=\"Name\" class=\'color-side-input " + colorp2[colorp2.length - 1].number + "\'>\n" +
                    "            </label>\n" +
                    "            <br>\n" +
                    "            <div class=\'color-block " + colorp2[colorp2.length - 1].id2 + "\' id=\'" + colorp2[colorp2.length - 1].id4 + "\' ondblclick=\' editC(this) \'></div>\n" +
                    "            <p class=\'hex " + colorp2[colorp2.length - 1].id + "\'>hex</p>\n" +
                    "        </div>")

                $("#background2").append(" " +
                    "         <div class=\'color-canvas-div " + colorp2[colorp2.length - 1].deleteId + "\' id=\'" + colorp2[colorp2.length - 1].id3 + "\'  onmouseup=\'mup(this); copy(this);\' onmouseleave=\'mup(this)\'  onmouseenter=\'if (edit === 1) {findID(this)}else {stopDrag(this)}\' onmousedown=\'clicking(this);\'>\n" +
                    "            <label>\n" +
                    "                <input maxlength=\"10\" readonly placeholder=\"Name\" style='cursor: initial' class=\'color-side-input " + colorp2[colorp2.length - 1].name + "\'>\n" +
                    "            </label>\n" +
                    "            <br>\n" +
                    "            <div class=\'color-block-canvas " + colorp2[colorp2.length - 1].id2 + "\'></div>\n" +
                    "            <p class=\'hex-canvas " + colorp2[colorp2.length - 1].id + "\' id=\'" + colorp2[colorp2.length - 1].id + "\'>hex</p>\n" +
                    "        </div>")

                $("." + colorp2[colorp2.length - 1].id2).css("background-color", colorp2[colorp2.length - 1].hexval)
                $("." + colorp2[colorp2.length - 1].id).html(colorp2[colorp2.length - 1].hexval)
                localStorage.setItem('ColorPreset2', JSON.stringify(oldInfo2));
            }
            if (x === 3) {

                let color = {
                    number: 0,
                    id: Date.now(),
                    id2: Date.now() - 3000,
                    id3: Date.now() - 4000,
                    deleteId: Date.now() - 9000,
                    hexval: colorhexmaker.val(),
                    name: Date.now() - 5000,
                    nameval: "",
                    left: "",
                    top: "",
                }
                colorp3.push(color)
                oldInfo3.push(color);
                oldInfo3.forEach((item, i) => {
                    item.number = i + 1;
                    colorp3N = i + 1;
                });

                localStorage.setItem("colorp3N", colorp3N)

                $("#color-wrap3").append(" <div class=\'color-div " + colorp3[colorp3.length - 1].deleteId + "\'>\n" +
                    " <button onclick='remove(this);' class=\'remove-btn " + colorp3[colorp3.length - 1].number + "\'  id=\'" + colorp3[colorp3.length - 1].deleteId + "\'><img src=\"icons/delete.svg\" alt=\"remove-btn\"></button>\n" +
                    "            <label>\n" +
                    "                <input maxlength=\"10\" onchange='updateName(this)' id='" + colorp3[colorp3.length - 1].name + "\' placeholder=\"Name\" class=\'color-side-input " + colorp3[colorp3.length - 1].number + "\'>\n" +
                    "            </label>\n" +
                    "            <br>\n" +
                    "            <div class=\'color-block " + colorp3[colorp3.length - 1].id2 + "\' id=\'" + colorp3[colorp3.length - 1].id4 + "\' ondblclick=\' editC(this) \'></div>\n" +
                    "            <p class=\'hex " + colorp3[colorp3.length - 1].id + "\'>hex</p>\n" +
                    "        </div>")

                $("#background3").append(" " +
                    "         <div class=\'color-canvas-div " + colorp3[colorp3.length - 1].deleteId + "\' id=\'" + colorp3[colorp3.length - 1].id3 + "\'  onmouseup=\'mup(this); copy(this);\' onmouseleave=\'mup(this)\'  onmouseenter=\'if (edit === 1) {findID(this)}else {stopDrag(this)}\' onmousedown=\'clicking(this);\'>\n" +
                    "            <label>\n" +
                    "                <input maxlength=\"10\" readonly placeholder=\"Name\" style='cursor: initial' class=\'color-side-input " + colorp3[colorp3.length - 1].name + "\'>\n" +
                    "            </label>\n" +
                    "            <br>\n" +
                    "            <div class=\'color-block-canvas " + colorp3[colorp3.length - 1].id2 + "\'></div>\n" +
                    "            <p class=\'hex-canvas " + colorp3[colorp3.length - 1].id + "\' id=\'" + colorp3[colorp3.length - 1].id + "\'>hex</p>\n" +
                    "        </div>")

                $("." + colorp3[colorp3.length - 1].id).html(colorp3[colorp3.length - 1].hexval)
                $("." + colorp3[colorp3.length - 1].id2).css("background-color", colorp3[colorp3.length - 1].hexval)
                localStorage.setItem('ColorPreset3', JSON.stringify(oldInfo3));

            }
            if (x === 4) {

                let color = {
                    number: 0,
                    id: Date.now(),
                    id2: Date.now() - 3000,
                    id3: Date.now() - 4000,
                    deleteId: Date.now() - 9000,
                    hexval: colorhexmaker.val(),
                    name: Date.now() - 5000,
                    nameval: "",
                    left: "",
                    top: "",
                }
                colorp4.push(color)
                oldInfo4.push(color);
                oldInfo4.forEach((item, i) => {
                    item.number = i + 1;
                    colorp4N = i + 1;
                });

                localStorage.setItem("colorp4N", colorp4N)

                $("#color-wrap4").append(" <div class=\'color-div " + colorp4[colorp4.length - 1].deleteId + "\'>\n" +
                    " <button onclick='remove(this);' class=\'remove-btn " + colorp4[colorp4.length - 1].number + "\'  id=\'" + colorp4[colorp4.length - 1].deleteId + "\'><img src=\"icons/delete.svg\" alt=\"remove-btn\"></button>\n" +
                    "            <label>\n" +
                    "                <input maxlength=\"10\" onchange='updateName(this)' id='" + colorp4[colorp4.length - 1].name + "\' placeholder=\"Name\" class=\'color-side-input " + colorp4[colorp4.length - 1].number + "\'>\n" +
                    "            </label>\n" +
                    "            <br>\n" +
                    "            <div class=\'color-block " + colorp4[colorp4.length - 1].id2 + "\' id=\'" + colorp4[colorp4.length - 1].id4 + "\' ondblclick=\' editC(this) \'></div>\n" +
                    "            <p class=\'hex " + colorp4[colorp4.length - 1].id + "\'>hex</p>\n" +
                    "        </div>")

                $("#background4").append("" +
                    "         <div class=\'color-canvas-div " + colorp4[colorp4.length - 1].deleteId + "\' id=\'" + colorp4[colorp4.length - 1].id3 + "\' onmouseup=\'mup(this); copy(this);\' onmouseleave=\'mup(this)\'  onmouseenter=\'if (edit === 1) {findID(this)}else {stopDrag(this)}\' onmousedown=\'clicking(this);\'>\n" +
                    "            <label>\n" +
                    "                <input maxlength=\"10\" readonly placeholder=\"Name\" style='cursor: initial' class=\'color-side-input " + colorp4[colorp4.length - 1].name + "\'>\n" +
                    "                <br>\n" +
                    "            </label>\n" +
                    "            <div class=\'color-block-canvas " + colorp4[colorp4.length - 1].id2 + "\'></div>\n" +
                    "            <p class=\'hex-canvas " + colorp4[colorp4.length - 1].id + "\' id=\'" + colorp4[colorp4.length - 1].id + "\'>hex</p>\n" +
                    "        </div>")

                $("." + colorp4[colorp4.length - 1].id).html(colorp4[colorp4.length - 1].hexval)
                $("." + colorp4[colorp4.length - 1].id2).css("background-color", colorp4[colorp4.length - 1].hexval)
                localStorage.setItem('ColorPreset4', JSON.stringify(oldInfo4));

            }
        } else {
            $("#color-maker").effect( "shake", "smooth" );
        }
    }
    border_check()
    background_color()
    inner_shadow()
}




function changeC () {
    let re = /[0-9A-Fa-f]{6}/g;
    let inputString = colorhexmaker.val();
    if (ty === true) {
        idas = $("#" + currentfocused.id).attr('class').split(' ')[1]
        let classes = Array.from(document.getElementsByClassName(idas))
        let hexText = Number(currentfocused.id) + 6000
        if (x === 1) {
            classes.forEach(i => {
                i.style.backgroundColor = inputString;
                i.value = inputString
            });
            $("." + hexText).html(inputString)
            pos = oldInfo1.findIndex(i => i.id2 == idas)
            oldInfo1[pos].hexval = inputString
            localStorage.setItem("ColorPreset1", JSON.stringify(oldInfo1))
            colormaker.css("display", "none")
        }
        if (x === 2) {
            classes.forEach(i => {
                i.style.backgroundColor = inputString;
                i.value = inputString
            });
            $("." + hexText).html(inputString)
            pos = oldInfo2.findIndex(i => i.id2 == idas)
            oldInfo2[pos].hexval = inputString
            localStorage.setItem("ColorPreset2", JSON.stringify(oldInfo2))
            colormaker.css("display", "none")
        }
        if (x === 3) {
            classes.forEach(i => {
                i.style.backgroundColor = inputString;
                i.value = inputString
            });
            $("." + hexText).html(inputString)
            pos = oldInfo3.findIndex(i => i.id2 == idas)
            oldInfo3[pos].hexval = inputString
            localStorage.setItem("ColorPreset3", JSON.stringify(oldInfo3))
            colormaker.css("display", "none")
        }
        if (x === 4) {
            classes.forEach(i => {
                i.style.backgroundColor = inputString;
                i.value = inputString
            });
            $("." + hexText).html(inputString)
            pos = oldInfo4.findIndex(i => i.id2 == idas)
            oldInfo4[pos].hexval = inputString
            localStorage.setItem("ColorPreset4", JSON.stringify(oldInfo4))
            colormaker.css("display", "none")
        }
        y = 0
        ty = false
    }
}




window.onload = function () {
    if (localStorage["preset1"]) {
        preset1.html(localStorage.getItem("preset1"))
    }
    if (localStorage["preset2"]) {
        preset2.html(localStorage.getItem("preset2"))
    }
    if (localStorage["preset3"]) {
        preset3.html(localStorage.getItem("preset3"))
    }
    if (localStorage["preset4"]) {
        preset4.html(localStorage.getItem("preset4"))
    }
    if (localStorage["colorp1N"]) {
        for (let i = 0; i < JSON.parse(localStorage["colorp1N"]); i++) {
            let item = JSON.parse(localStorage["ColorPreset1"])[i]
            $("#color-wrap1").append(" <div class=\'color-div " + item.deleteId + "\'>\n" +
                " <button onclick='remove(this)' class=\'remove-btn " + item.number + "\' id=\'" + item.deleteId + "\'><img src=\"icons/delete.svg\" alt=\"remove-btn\"></button>\n" +
                "            <label>\n" +
                "                <input value=\'" + item.nameval + "\' maxlength=\"10\" onchange='updateName(this)' id='" + item.name + "\' placeholder=\"Name\" class=\'color-side-input " + item.number + "\'>\n" +
                "            </label>\n" +
                "            <br>\n" +
                "            <div class=\'color-block " + item.id2 + "\' id=\'" + item.id4 + "\' ondblclick=\' editC(this) \'></div>\n" +
                "            <p class=\'hex " + item.id + "\'>hex</p>\n" +
                "        </div>")

            $("#background1").append(" " +
                "         <div class=\'color-canvas-div " + item.deleteId + "\' id=\'" + item.id3 + "\'  onmouseup=\'mup(this); copy(this);\' onmouseleave=\'mup(this)\' onmouseenter=\'if (edit === 1) {findID(this)}else {stopDrag(this)}\' onmousedown=\'clicking(this);\'>\n" +
                "            <label>\n" +
                "                <input value=\'" + item.nameval + "\' maxlength=\"10\" readonly placeholder=\"Name\" style='cursor: initial' class=\'color-side-input " + item.name + "\'>\n" +
                "            </label>\n" +
                "            <br>\n" +
                "            <div class=\'color-block-canvas " + item.id2 + "\'></div>\n" +
                "            <p class=\'hex-canvas " + item.id + "\' id=\'" + item.id + "\'>hex</p>\n" +
                "           </div>" )

            $("." + item.id).html(item.hexval)
            $("#" + item.id3).css({"left": item.left, "top": item.top})
            $("." + item.id2).css("background-color", item.hexval)
        }
    }
    if (localStorage["colorp2N"]) {
        for (let i = 0; i < JSON.parse(localStorage["colorp2N"]); i++) {
            let item = JSON.parse(localStorage["ColorPreset2"])[i]
            $("#color-wrap2").append(" <div class=\'color-div " + item.deleteId + "\'>\n" +
                " <button onclick='remove(this)' class=\'remove-btn " + item.number + "\'  id=\'" + item.deleteId + "\'><img src=\"icons/delete.svg\" alt=\"remove-btn\"></button>\n" +
                "            <label>\n" +
                "                <input value=\'" + item.nameval + "\' maxlength=\"10\" onchange='updateName(this)' id='" + item.name + "\' placeholder=\"Name\" class=\'color-side-input " + item.number + "\'>\n" +
                "            </label>\n" +
                "            <br>\n" +
                "            <div class=\'color-block " + item.id2 + "\' id=\'" + item.id4 + "\' ondblclick=\' editC(this) \'></div>\n" +
                "            <p class=\'hex " + item.id + "\'>hex</p>\n" +
                "        </div>")

            $("#background2").append(" " +
                "         <div class=\'color-canvas-div " + item.deleteId + "\' id=\'" + item.id3 + "\'  onmouseup=\'mup(this); copy(this);\' onmouseleave=\'mup(this)\' onmouseenter=\'if (edit === 1) {findID(this)}else {stopDrag(this)}\' onmousedown=\'clicking(this);\'>\n" +
                "            <label>\n" +
                "                <input value=\'" + item.nameval + "\' maxlength=\"10\" readonly placeholder=\"Name\" style='cursor: initial' class=\'color-side-input " + item.name + "\'>\n" +
                "            </label>\n" +
                "            <br>\n" +
                "            <div class=\'color-block-canvas " + item.id2 + "\'></div>\n" +
                "            <p class=\'hex-canvas " + item.id + "\' id=\'" + item.id + "\'>hex</p>\n" +
                "            <div class=\"shadow-canvas\">\n" +
                "               <div></div>\n" +
                "           </div>" +
                "        </div>")

            $("." + item.id).html(item.hexval)
            $("#" + item.id3).css({"left": item.left, "top": item.top})
            $("." + item.id2).css("background-color", item.hexval)
        }
    }
    if (localStorage["colorp3N"]) {
        for (let i = 0; i < JSON.parse(localStorage["colorp3N"]); i++) {
            let item = JSON.parse(localStorage["ColorPreset3"])[i]
            $("#color-wrap3").append(" <div class=\'color-div " + item.deleteId + "\'>\n" +
                " <button onclick='remove(this)' class=\'remove-btn " + item.number + "\' id=\'" + item.deleteId + "\'><img src=\"icons/delete.svg\" alt=\"remove-btn\"></button>\n" +
                "            <label>\n" +
                "                <input value=\'" + item.nameval + "\' maxlength=\"10\" onchange='updateName(this)' id='" + item.name + "\' placeholder=\"Name\" class=\'color-side-input " + item.number + "\'>\n" +
                "            </label>\n" +
                "            <br>\n" +
                "            <div class=\'color-block " + item.id2 + "\' id=\'" + item.id4 + "\' ondblclick=\' editC(this) \'></div>\n" +
                "            <p class=\'hex " + item.id + "\'>hex</p>\n" +
                "        </div>")

            $("#background3").append(" " +
                "         <div class=\'color-canvas-div " + item.deleteId + "\' id=\'" + item.id3 + "\'  onmouseup=\'mup(this); copy(this);\' onmouseleave=\'mup(this);\'  onmouseenter=\'if (edit === 1) {findID(this)}else {stopDrag(this)}\' onmousedown=\'clicking(this);\'>\n" +
                "            <label>\n" +
                "                <input value=\'" + item.nameval + "\' maxlength=\"10\" readonly placeholder=\"Name\" style='cursor: initial' class=\'color-side-input " + item.name + "\'>\n" +
                "            </label>\n" +
                "            <br>\n" +
                "            <div class=\'color-block-canvas " + item.id2 + "\'></div>\n" +
                "            <p class=\'hex-canvas " + item.id + "\' id=\'" + item.id + "\'>hex</p>\n" +
                "        </div>")

            $("." + item.id).html(item.hexval)
            $("#" + item.id3).css({"left": item.left, "top": item.top})
            $("." + item.id2).css("background-color", item.hexval)
        }
    }
    if (localStorage["colorp4N"]) {
        for (let i = 0; i < JSON.parse(localStorage["colorp4N"]); i++) {
            let item = JSON.parse(localStorage["ColorPreset4"])[i]
            $("#color-wrap4").append(" <div class=\'color-div " + item.deleteId + "\'>\n" +
                " <button onclick='remove(this);' class=\'remove-btn " + item.number + "\' id=\'" + item.deleteId + "\'><img src=\"icons/delete.svg\" alt=\"remove-btn\"></button>\n" +
                "            <label>\n" +
                "                <input value=\'" + item.nameval + "\' maxlength=\"10\" onchange='updateName(this)' id='" + item.name + "\' placeholder=\"Name\" class=\'color-side-input " + item.number + "\'>\n" +
                "            </label>\n" +
                "            <br>\n" +
                "            <div class=\'color-block " + item.id2 + "\' id=\'" + item.id4 + "\' ondblclick=\' editC(this) \'></div>\n" +
                "            <p class=\'hex " + item.id + "\'>hex</p>\n" +
                "        </div>")

            $("#background4").append(" " +
                "         <div class=\'color-canvas-div " + item.deleteId + "\' id=\'" + item.id3 + "\'  onmouseup=\'mup(this); copy(this);\' onmouseleave=\'mup(this);\'  onmouseenter=\'if (edit === 1) {findID(this)}else {stopDrag(this)}\' onmousedown=\'clicking(this);\'>\n" +
                "            <label>\n" +
                "                <input value=\'" + item.nameval + "\' maxlength=\"10\" readonly placeholder=\"Name\" style='cursor: initial' class=\'color-side-input " + item.name + "\'>\n" +
                "            </label>\n" +
                "            <br>\n" +
                "            <div class=\'color-block-canvas " + item.id2 + "\'></div>\n" +
                "            <p class=\'hex-canvas " + item.id + "\' id=\'" + item.id + "\'>hex</p>\n" +
                "        </div>")

            $("." + item.id).html(item.hexval)
            $("#" + item.id3).css({"left": item.left, "top": item.top})
            $("." + item.id2).css("background-color", item.hexval)
        }
    }
    ty = false
    if (localStorage.getItem("border") === "true") {
        $(".color-canvas-div").css("border", "3px solid rgba(0, 0, 0, 1)")
        $(".color-side-input").css("width", "144px")
        $("#border-detail").prop("open", localStorage.getItem("border"))
        $(".toggle-switch:before").css("left", "30px")
        $(".color-canvas-div").css("border-color", $("#color-border").val())
        $("#border-check").prop("checked", true);
        $("#border-detail").prop("open",  true)
    } else {
        $(".color-canvas-div").css("border", "none")
        $(".color-side-input").css("width", "150px")
        $(".toggle-switch:before").css("left", "0")
        $("#border-detail").prop("open",  false)
        $("#border-check").prop("checked", false);
    }
    $(".color-canvas-div").css({
        "background-color": localStorage.getItem("canvas-div-background-color"),
        "border-color": localStorage.getItem("border-color"),
    })
    $("#color-border").val(localStorage.getItem("border-color"))
    $("#background-color-settings").val(localStorage.getItem("canvas-div-background-color"))
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
        pos = oldInfo1.findIndex(i => i.name == e.id)
        oldInfo1[pos].nameval = $("#" + e.id).val()
        localStorage.setItem("ColorPreset1", JSON.stringify(oldInfo1))
    }
    if (x === 2) {
        pos = oldInfo2.findIndex(i => i.name == e.id)
        oldInfo2[pos].nameval = $("#" + e.id).val()
        localStorage.setItem("ColorPreset2", JSON.stringify(oldInfo2))
    }
    if (x === 3) {
        pos = oldInfo3.findIndex(i => i.name == e.id)
        oldInfo3[pos].nameval = $("#" + e.id).val()
        localStorage.setItem("ColorPreset3", JSON.stringify(oldInfo3))
    }
    if (x === 4) {
        pos = oldInfo4.findIndex(i => i.name == e.id)
        oldInfo4[pos].nameval = $("#" + e.id).val()
        localStorage.setItem("ColorPreset4", JSON.stringify(oldInfo4))
    }
}




function editC(e) {
    currentfocused = e
    ty = true
    colormaker.css("display", "inline")
    $("#color-block-maker").val(rgb2hex(e.style.backgroundColor))
}


function remove(e) {
    let deletes = Array.from(document.getElementsByClassName(e.id))
    deletes.forEach(i => {
        i.remove();
    });
    if (x === 1) {
        pos = oldInfo1.findIndex(i => i.deleteId == e.id)
        oldInfo1.forEach((item, i) => {
            let id = $("#" + JSON.parse(localStorage["ColorPreset1"])[i].id3)
            let left_value = id.css("left")
            if (i > pos) {
                if (left_value !== "0px") {
                    id.css("left", parseInt(left_value) + 150 + "px")
                }
            }
            oldInfo1[i].left = left_value
        })
        oldInfo1.splice(pos, 1)
        oldInfo1.forEach((item, i) => {
            item.number = i + 1;
            colorp1N = i + 1;
        })
        localStorage.setItem("ColorPreset1", JSON.stringify(oldInfo1))
        colorp1N = oldInfo1.length;
        localStorage.setItem("colorp1N", colorp1N)
    }
    if (x === 2) {
        pos = oldInfo2.findIndex(i => i.deleteId == e.id)
        oldInfo2.forEach((item, i) => {
            let id = $("#" + JSON.parse(localStorage["ColorPreset2"])[i].id3)
            let left_value = id.css("left")
            if (i > pos) {
                if (left_value !== "0px") {
                    id.css("left", parseInt(left_value) + 150 + "px")
                }
            }
            oldInfo2[i].left = left_value
        })
        oldInfo2.splice(pos, 1)
        oldInfo2.forEach((item, i) => {
            item.number = i + 1;
            colorp2N = i + 1;
        })
        localStorage.setItem("ColorPreset2", JSON.stringify(oldInfo2))
        colorp2N = oldInfo2.length;
        localStorage.setItem("colorp2N", colorp2N)
    }
    if (x === 3) {
        pos = oldInfo3.findIndex(i => i.deleteId == e.id)
        oldInfo3.forEach((item, i) => {
            let id = $("#" + JSON.parse(localStorage["ColorPreset3"])[i].id3)
            let left_value = id.css("left")
            if (i > pos) {
                if (left_value !== "0px") {
                    id.css("left", parseInt(left_value) + 150 + "px")
                }
            }
            oldInfo3[i].left = left_value
        })
        oldInfo3.splice(pos, 1)
        oldInfo3.forEach((item, i) => {
            item.number = i + 1;
            colorp2N = i + 1;
        })
        localStorage.setItem("ColorPreset3", JSON.stringify(oldInfo3))
        colorp3N = oldInfo3.length;
        localStorage.setItem("colorp3N", colorp3N)
    }
    if (x === 4) {
        pos = oldInfo4.findIndex(i => i.deleteId == e.id)
        oldInfo4.forEach((item, i) => {
            let id = $("#" + JSON.parse(localStorage["ColorPreset2"])[i].id4)
            let left_value = id.css("left")
            if (i > pos) {
                if (left_value !== "0px") {
                    id.css("left", parseInt(left_value) + 150 + "px")
                }
            }
            oldInfo4[i].left = left_value
        })
        oldInfo4.splice(pos, 1)
        oldInfo4.forEach((item, i) => {
            item.number = i + 1;
            colorp2N = i + 1;
        })
        localStorage.setItem("ColorPreset4", JSON.stringify(oldInfo4))
        colorp4N = oldInfo4.length;
        localStorage.setItem("colorp4N", colorp4N)
    }
}

