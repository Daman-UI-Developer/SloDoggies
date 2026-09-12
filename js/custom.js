// DATE-&-TIME-PICKER

$(function () {
    $('input[name="datetimes"]').daterangepicker({
        parentEl: "#create-post-event-popup .modal-body",
        autoUpdateInput: false,
        timePicker: true,
        singleDatePicker: true,
        drops: "auto",
        startDate: moment().startOf('hour'),
        locale: {
            cancelLabel: 'Clear',
            format: 'MM/DD/YYYY hh:mm A'
        }
    });

    // WHEN USER APPLIES DATE
    $('input[name="datetimes"]').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY hh:mm A'));
    });

    // WHEN USER CLEARS SELECTION
    $('input[name="datetimes"]').on('cancel.daterangepicker', function (ev, picker) {
        $(this).val('');
    });
});

// DATE-&-TIME-PICKER

// WELCOME-POPUP

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        var myModal = new bootstrap.Modal(document.getElementById('welcome-slodoggies-popup'));
        myModal.show();
    }, 1000);
});

// WELCOME-POPUP


// VERIFICATION-CODE

$(".inputs").on('keyup.verify', function () {
    if (this.value.length === this.maxLength) {
        $(this).next('.inputs').focus();
    } else if (this.value.length === 0) {
        $(this).prev('.inputs').focus();
    }
});

// VERIFICATION-CODE

// PASSWORD-TOGGLE

$(function () {

    $('.eye').click(function () {
        if ($(this).hasClass('eye-close')) {
            $(this).removeClass('eye-close');
            $(this).addClass('eye-open');
            $(this).parent().parent().find('.password').attr('type', 'text');
        } else {
            $(this).removeClass('eye-open');
            $(this).addClass('eye-close');
            $(this).parent().parent().find('.password').attr('type', 'password');
        }
    });
});

// PASSWORD-TOGGLE


// REDIRECT-DELAY

const delay = 2000; // SECONDS

document.querySelectorAll(".delayed-form").forEach(form => {
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // STOP IMMEDIATE SUBMIT
        setTimeout(() => {
            this.submit(); // SUBMIT AFTER DELAY
        }, delay);
    });
});

// REDIRECT-DELAY

// READ-MORE-LESS

$(document).ready(function () {
    $(".read-more-less").click(function () {
        let parent = $(this).closest(".post-desp");
        parent.toggleClass("expanded");

        if (parent.hasClass("expanded")) {
            $(this).text("Read Less");
        } else {
            $(this).text("Read More");
        }
    });
});

// READ-MORE-LESS


// VIDEO-PLAYER

const containers = document.querySelectorAll('.video-container');

containers.forEach(container => {
    const video = container.querySelector('video');
    const playBtn = container.querySelector('.custom-play-button');

    function togglePlay() {
        if (video.paused || video.ended) {
            video.play();
        } else {
            video.pause();
        }
    }

    video.addEventListener('click', togglePlay);
    playBtn.addEventListener('click', togglePlay);

    video.addEventListener('play', () => {
        container.classList.remove('paused');
    });

    video.addEventListener('pause', () => {
        container.classList.add('paused');
    });

    // SET INITIAL STATE
    container.classList.add('paused');
});

// VIDEO-PLAYER

// EVENT-CHAT

$(document).ready(function () {
    // When clicking the "View Profile" button inside .event-pro-btn,
    // find the nearest .messages-inbox-in ancestor, then the preceding .event-pro-wrp
    $(".event-pro-btn button").on("click", function (e) {
        e.preventDefault();

        // find the wrapper that is before this .messages-inbox-in
        const $wrapper = $(this)
            .closest(".messages-inbox-in")
            .prevAll(".event-pro-wrp")
            .first();

        // Toggle only that wrapper
        if ($wrapper.length) {
            $wrapper.slideToggle("fast");
        }
    });

    // Back button closes only its own .event-pro-wrp
    $(document).on("click", ".event-pro-wrp .back", function (e) {
        e.preventDefault();
        $(this).closest(".event-pro-wrp").slideUp("fast");
    });
});

// EVENT-CHAT