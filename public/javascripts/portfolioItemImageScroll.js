
        
// Runtime variables
var currentImage = 0;
var deviceView = "PC";
var hashString = window.location.hash.replace('#','');
if(hashString != "") { currentImage = Number(hashString); }

// Setup page with currentImage var
reloadImage();
//$(".item-image").css('background-image',"url('/images/portfolio/"+imageURL+currentImage+".jpg')");
$("#d"+currentImage).addClass('selected');
//changeText();

// Click a dot to jump to an image
$('.item-image-nav-dot').click(function() {
    jumpToImage($(this).attr('id').replace('d', ''));
});
// Hover a dot to show info text
$('.item-image-nav-dot').hover(function() {
    $('.item-image-nav-info').html(titleArray[$(this).attr('id').replace('d', '')]);
}, function() {
    $('.item-image-nav-info').html("&nbsp;");
});

// Click Phone view
$('.glyphicon-phone, .glyphicon-menu-down').click(function() {
    $('.item-monitor-icon').removeClass('selected');
    $('.glyphicon-phone').addClass('selected');
    deviceView = "Phone";
    reloadImage();
});
// Hover phone view to show info text
$('.glyphicon-phone').hover(function() {
    $('.item-image-nav-info').html("Phone version");
}, function() {
    $('.item-image-nav-info').html("&nbsp;");
});

// Click PC view
$('.item-monitor-icon, .glyphicon-menu-up').click(function() {
    $('.glyphicon-phone').removeClass('selected');
    $('.item-monitor-icon').addClass('selected');
    deviceView = "PC";
    reloadImage();
});
// Hover desktop view to show info text
$('.item-monitor-icon').hover(function() {
    $('.item-image-nav-info').html("Desktop version");
}, function() {
    $('.item-image-nav-info').html("&nbsp;");
});

// Hover previous image
$('.glyphicon-menu-left').hover(function() {
    $('.item-image-nav-info').html("Previos Image [left key]");
}, function() {
    $('.item-image-nav-info').html("&nbsp;");
});
// Hover next image
$('.glyphicon-menu-right').hover(function() {
    $('.item-image-nav-info').html("Next Image [right key]");
}, function() {
    $('.item-image-nav-info').html("&nbsp;");
});

// Hover previous device
$('.glyphicon-menu-up').hover(function() {
    $('.item-image-nav-info').html("Previous device [up key]");
}, function() {
    $('.item-image-nav-info').html("&nbsp;");
});
// Hover next device
$('.glyphicon-menu-down').hover(function() {
    $('.item-image-nav-info').html("Next device [down key]");
}, function() {
    $('.item-image-nav-info').html("&nbsp;");
});
        
// Shows the next image
function nextImage() {
    if(currentImage==maxImages) { /*jumpToImage(0);*/ return; }
    $("#d"+currentImage).removeClass('selected');
    currentImage++;
    $("#d"+currentImage).addClass('selected');
    window.location.hash = currentImage;
    reloadImage();
}

// Shows the previous image
function prevImage() {
    if(currentImage==0) { /*jumpToImage(maxImages);*/ return; }
    $("#d"+currentImage).removeClass('selected');
    currentImage--;
    $("#d"+currentImage).addClass('selected');
    window.location.hash = currentImage;
    reloadImage();
}

// Shows a specified image
function jumpToImage(imageNum) {
    $("#d"+currentImage).removeClass('selected');
    currentImage = imageNum;
    $("#d"+currentImage).addClass('selected');
    window.location.hash = currentImage;
    reloadImage();
}

// Reloads the image with new settings
function reloadImage() {
    $('.item-image').removeClass('phone-single');
    $('.item-image').removeClass('phone-double');
    if(deviceView == "PC") {
        if(currentImage == 0) { $('.item-iframe').css('display', 'none'); $(".item-image").css('background-image',"url('/images/portfolio/"+imageURL+currentImage+".jpg')"); }
        if(typeof urls !== 'undefined' && urls[currentImage]) { $(".item-image").css('background-image', '' ); $('.item-iframe').css('display', 'block'); $('.item-iframe').attr('src', urls[currentImage]); }
        else $(".item-image").css('background-image',"url('/images/portfolio/"+imageURL+currentImage+".jpg')");
    } else if(deviceView == "Phone") {
        $(".item-image").css('background-image',"url('/images/portfolio/"+imageURL+currentImage+"phone.jpg')");
        
        if(phoneImageAmounts[currentImage] == 1) $('.item-image').addClass('phone-single');
        else if(phoneImageAmounts[currentImage] == 2) $('.item-image').addClass('phone-double');
    }
    changeText();
}
        
// Updates the text to match the picture
function changeText() {
    $('.item-description-title').html(titleArray[currentImage]);
    $('.item-description').html(textArray[currentImage]);
}


// Scroll images with mouse

window.addEventListener('wheel', function(event) {
    event.preventDefault();
    if(event.deltaY < 0 && currentImage != 0) {
        scrollLeft();
    } else if(event.deltaY > 0 && currentImage != maxImages) {
        scrollRight();
    }
});
function scrollLeft() {
    prevImage();
}
function scrollRight() {
    nextImage();
}
        
        
// Key Listener for scrolling images with the left and right keys

window.onkeydown = function (e) {
    var code = e.keyCode ? e.keyCode : e.which;
    //console.log(code);
    
    if(code == 37) { // Left
        prevImage();
    } else if(code == 39) { // Right
        nextImage();
    } else if(code == 38) { // Up
        $('.glyphicon-phone').removeClass('selected');
        $('.item-monitor-icon').addClass('selected');
        deviceView = "PC";
        reloadImage();
    } else if(code == 40) { // Down
        $('.item-monitor-icon').removeClass('selected');
        $('.glyphicon-phone').addClass('selected');
        deviceView = "Phone";
        reloadImage();
    }
};