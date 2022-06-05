
function inner_shadow() {
    if ($('input#inner-shadow-check').is(':checked')) {
        $(".color-canvas-div").css("box-shadow", "inset 0 0 0.5em rgba(0, 0, 0, 0.5)")
    } else {
        $(".color-canvas-div").css("box-shadow", "none")
    }
}


function border_check() {
    if ($('input#border-check').is(':checked')) {
        localStorage.setItem("border", "true")
        $(".color-canvas-div").css("border", "3px solid rgba(0, 0, 0, 1)")
        $(".color-side-input").css("width", "144px")
        $("#border-detail").prop("open", true)
        $(".color-canvas-div").css("border-color", $("#color-border").val())

    } else {
        localStorage.setItem("border", "false")
        $(".color-canvas-div").css("border", "none")
        $(".color-side-input").css("width", "150px")
        $("#border-detail").prop("open",  false)
    }
}

function border_color () {
    $(".color-canvas-div").css("border-color", $("#color-border").val())
    localStorage.setItem("border-color", $("#color-border").val())
}

function background_color () {
    localStorage.setItem("canvas-div-background-color", $("#background-color-settings").val())
    $(".color-canvas-div").css("background-color", $("#background-color-settings").val())
}

$("#background-color-reset").click( function () {
    localStorage.setItem("canvas-div-background-color", "#232323")
    $(".color-canvas-div").css("background-color", "#232323")
    $("#background-color-settings").val("#232323")
})

function closeSettings() {
    $("#content").css("transform", "")
    $("#settings").toggle("puff", 70)
}

$("#settings-button").click( function () {
    $("#settings").toggle("puff", 70)
    $("#content").css("transform", "scale(0.97)")
})




$("#list-item1").click(function () {
    $("#header-settings").html($("#list-item1").html())
    $(".settings-groups").css("display", "none")
    $(".appearance").css("display", "inline-block")
    if ($("#list-item1").hasClass("active")) {
        $('.settings-menu-item').removeClass('active')
    } else {
        $('.settings-menu-item').removeClass('active')
        $('#list-item1').toggleClass("active")
    }
})
$("#list-item2").click(function () {
    $("#header-settings").html($("#list-item2").html())
    $(".settings-groups").css("display", "none")
    $(".appearance").css("display", "inline-block")
    if ($("#list-item2").hasClass("active")) {
        $('.settings-menu-item').removeClass('active')
    } else {
        $('.settings-menu-item').removeClass('active')
        $('#list-item2').toggleClass("active")
    }
})
$("#list-item3").click(function () {
    $("#header-settings").html($("#list-item3").html())
    $(".settings-groups").css("display", "none")
    $(".appearance").css("display", "inline-block")
    if ($("#list-item3").hasClass("active")) {
        $('.settings-menu-item').removeClass('active')
    } else {
        $('.settings-menu-item').removeClass('active')
        $('#list-item3').toggleClass("active")
    }
})
$("#list-item4").click(function () {
    $("#header-settings").html($("#list-item4").html())
    $(".settings-groups").css("display", "none")
    $("#").css("display", "inline-block")
    if ($("#list-item4").hasClass("active")) {
        $('.settings-menu-item').removeClass('active')
    } else {
        $('.settings-menu-item').removeClass('active')
        $('#list-item4').toggleClass("active")
    }
})
$("#list-item5").click(function () {
    $("#header-settings").html($("#list-item5").html())
    $(".settings-groups").css("display", "none")
    $(".appearance").css("display", "inline-block")
    if ($("#list-item5").hasClass("active")) {
        $('.settings-menu-item').removeClass('active')
    } else {
        $('.settings-menu-item').removeClass('active')
        $('#list-item5').toggleClass("active")
    }
})