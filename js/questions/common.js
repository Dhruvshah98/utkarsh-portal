$('body').addClass("disabled-onepage-scroll");

// start-button-starts
$('#button-start').on('click', function () {
    startFunction();
});



function startFunction() {
    startFirst();
    setTimeout(startSecond, 400);
}

function startFirst() {
    $(".balls-wrap").addClass("balls-wrap-down");
    $(".dots").hide()
    $(".welcome-page").addClass("welcome-page-fade-up");
    // $('.section .active .form-field').focus();
    var headerScaleDown = document.getElementById("header");
    headerScaleDown.classList.add("logoHeader");
}

function startSecond() {
    setTimeout(function () {
        $(".dots").fadeIn()
    }, 1000);
    $("#section1").hide();
    $(".question").addClass("question-fadeIn");
    $("#show-skip").fadeIn();

    document.getElementById("footer").style.display = "block";
    $('body').removeClass("disabled-onepage-scroll");
    dotsAnim();
    // $('.form-field').focus();
    $(document).on('keyup', function (event) {
        if (event.keyCode === 13) {
            $(".question").addClass("question-fadeOut");
            setTimeout(function () {
                $(".main").moveDown();
            }, 200)
        }
    });
}

// $(document).on('keyup mouseup', function (e) {
//     if (e.which == 9) {
//         e.preventDefault();
//     }
// });

$("form").keypress(function (e) {
    if (e.which == 13) {
        e.preventDefault();
    }
});

function dotsAnim() {
    var dotsDown = document.getElementById("dot-animation");
    setTimeout(function () {
        dotsDown.classList.add("dot-anim")
    }, 1);
}

$('#okay-anim').hide();
// start-button-ends
$('.button-okay-anim').hide();
if (document.body.classList.contains('viewing-page-1')) {
    var HideDots = document.getElementsByClassName("dots-loader");
    HideDots[0].style.display = "none"
}

function backFunction() {
    $(".main").moveUp();
}

if (document.body.classList.contains('viewing-page-1')) {
    if ($(".main").moveUp()) {
        var HideDots = document.getElementsByClassName("dots-loader");
        HideDots[0].style.display = "none"
    }
}

$("#tagline-input-apps").hide();

$('#radio6').on('click', function () {
    $("#tagline-input-apps").fadeIn();
});

function skipFunction() {
    $(".question").addClass("question-fadeOut");
    setTimeout(function () {
        $(".main").moveDown();
    }, 500);
}

function yesFunction() {
    $('.yes').addClass('active-yes');
    $('.yes-image').addClass('active-yes');
    $("#tagline-input").fadeIn();
}
$(".control-group").hide();

function yesFunction2() {
    $('.yes').addClass('active-yes');
    $('.yes-image').addClass('active-yes');
    $(".control-group").fadeIn();
    $(".tagline .answer-input-area").css("height", "160px");
    $(".tagline .answer-input-area").css("transition", "0.5s")


}

function noFunction() {
    $(".control-group").fadeOut();
    $('.dot').hide();
    $('#okay-dot').show();
    $('#main-dot').show();
    $(this).addClass('field--not-empty');
    $(".okay-input").show();
    $(".okay-input").addClass("button-okay-input");
    $('#okay-anim').show();
    $('.button-okay').addClass('button-okay-anim');
    $('#okay-dot').addClass('okay-dot-increase')
    $('.circle-fill').show();
    $(".tagline .answer-input-area").css("height", "20px")

}

$(document).on('input', '.form-field', function () {
    if ($(this).val() !== '') {
        $('.dot').hide();
        $('#okay-dot').show();
        $('#main-dot').show();
        $(this).addClass('field--not-empty');
        $('#okay-anim').show();
        setTimeout(function () {
            $('.button-okay').addClass('button-okay-anim');
            $('#okay-dot').addClass('okay-dot-increase')
        }, 10);
        $('.circle-fill').show();
        $(".okay-input").show();
        $(".okay-input").addClass("button-okay-input");

    } else {
        $(this).removeClass('field--not-empty');
        setTimeout(function () {
            $('#okay-anim').hide();
        }, 400);
        $('.button-okay').removeClass('button-okay-anim');
        $('#okay-dot').removeClass('okay-dot-increase')
        $('.circle-fill').hide();
        $('.dot').show();
        $(".okay-input").removeClass("button-okay-input")
    }
});


$(".okay-input").on('click', function () {
    $(".okay-input").removeClass("button-okay-input")
    nextQuestion();
});

/* // Form Feild Functionality */

function nextQuestion() {
    $('#main-dot').addClass('dot-drop');
    $(".question").addClass("question-fadeOut");
    setTimeout(function () {
        $(".main").moveDown();
    }, 350);
}


$('.select .yes , .radio-buttons').click(function () {
    $('.dot').hide();
    $('#okay-dot').show();
    $('#main-dot').show();
    $(this).addClass('field--not-empty');
    $('#okay-anim').show();
    $('.button-okay').addClass('button-okay-anim');
    $('#okay-dot').addClass('okay-dot-increase')
    $('.circle-fill').show();
    $(".okay-input").show();
    $(".okay-input").addClass("button-okay-input");
})



$(function () {
    $(".main").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
        },
        messages: {
            email: "Please enter a valid email address"
        },
        submitHandler: function (section) {
            section.submit();
        }
    });
});


$(".image-box").click(function (event) {
    var previewImg = $(this).children("img");

    $(this)
        .siblings()
        .children("input")
        .trigger("click");

    $(this)
        .siblings()
        .children("input")
        .change(function () {
            var reader = new FileReader();
            reader.onload = function (e) {
                var urll = e.target.result;
                $(previewImg).attr("src", urll);
                previewImg.parent().css("background", "rgba(88,87,249,0.07)");
                previewImg.show();
                previewImg.siblings("p").hide();
                $(".okay-input").show();
                $(".okay-input").addClass("button-okay-input");
            };
            reader.readAsDataURL(this.files[0]);
        });
});