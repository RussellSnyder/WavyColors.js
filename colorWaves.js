///////////////////////////////////////////////////////////////////////////////
// Welcome to Russell's dream world of color waves! ///////////////////////////
// Stole the template from somebody and mixed it to my dream //////////////////
// Only problem is that it wraps every element in a span, so be careful! //////
///////////////////////////////////////////////////////////////////////////////
// classes that you have at your disposal:                /////////////////////
///////////////////////////////////////////////////////////////////////////////
////
////
////
////
////
////
///////////////////////////////////////////////////////////////////////////////
///////////////// Enjoy! //////////////////////////////////////////////////////
/////////////////////////////////// RussellSnyder.io //////////////////////////
///////////////////////////////////////////////////////////////////////////////


$('.color').each(function(){
  $(this).html($(this).text().replace(/(\w)/g, "<span>$&</span>"));
});

///////////////////////////////////////////////////////////////////////////////
///////    Reds    ////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
$('.red-wave-DLD').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',

    color = '';
///////////////////////////////////////
/////// Loop 1 - Dark to light ////////
///////////////////////////////////////
  for(var i=0; i<Math.floor(len/2); i++){
  var hex= '#';
  var red = (Math.round((i / len ) * 5) + 10).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (0).toString(16) + (0).toString(16);
  var blue = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
///////////////////////////////////////
/////// Loop 2 - Light to Dark ////////
///////////////////////////////////////
for(var i=Math.floor(len/2); i<len; i++){
var hex= '#';
var red = (15 - Math.round((i / len ) * 5)).toString(16) +
          (Math.round(Math.random() * 15)).toString(16);
var green = (0).toString(16) + (0).toString(16);
var blue = (0).toString(16) + (0).toString(16);

var color = hex + red + green + blue;

  newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
}
  $el.html(newCont);
});

$('.red-wave-LDL').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',

    color = '';
///////////////////////////////////////
/////// Loop 1 - Light to Dark ////////
///////////////////////////////////////
for(var i=0; i<Math.floor(len/2); i++){
var hex= '#';
var red = (15 - Math.round((i / len ) * 5)).toString(16) +
          (Math.round(Math.random() * 15)).toString(16);
var green = (0).toString(16) + (0).toString(16);
var blue = (0).toString(16) + (0).toString(16);

var color = hex + red + green + blue;

  newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
}
///////////////////////////////////////
/////// Loop 2 - Dark to light ////////
///////////////////////////////////////
for(var i=Math.floor(len/2); i<len; i++){
  var hex= '#';
  var red = (Math.round((i / len ) * 5) + 10).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (0).toString(16) + (0).toString(16);
  var blue = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);
});


$('.red-wave-DL-1').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',
    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';
  var red = (Math.round((i / len ) * 5) + 10).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (0).toString(16) + (0).toString(16);
  var blue = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});

$('.red-wave-DL-2').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',

    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';

var red = ((Math.round((i / len) * 10) % 5) + 11).toString(16) +
(Math.round(Math.random() * 15)).toString(16);
var green = (0).toString(16) + (0).toString(16);
var blue = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});

$('.red-wave-DL-3').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',

    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';

var red = ((Math.round((i / len) * 21) % 7) + 8).toString(16) +
(Math.round(Math.random() * 15)).toString(16);
var green = (0).toString(16) + (0).toString(16);
var blue = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});


$('.red-wave-LD-1').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',
    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';
  var red = (15 - Math.round((i / len ) * 5)).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (0).toString(16) + (0).toString(16);
  var blue = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});

$('.red-wave-LD-2').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',
    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';
  var red = (15 - (Math.round((i / len) * 10) % 5)).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (0).toString(16) + (0).toString(16);
  var blue = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});

$('.red-wave-LD-3').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',
    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';
  var red = (15 - (Math.round((i / len) * 15) % 5)).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (0).toString(16) + (0).toString(16);
  var blue = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});

///////////////////////////////////////////////////////////////////////////////
///////    Blues    ///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
$('.blue-wave-DLD').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',

    color = '';
///////////////////////////////////////
/////// Loop 1 - Dark to light ////////
///////////////////////////////////////
  for(var i=0; i<Math.floor(len/2); i++){
  var hex= '#';
  var blue = (Math.round((i / len ) * 5) + 10).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (0).toString(16) + (0).toString(16);
  var red = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
///////////////////////////////////////
/////// Loop 2 - Light to Dark ////////
///////////////////////////////////////
for(var i=Math.floor(len/2); i<len; i++){
var hex= '#';
var blue = (15 - Math.round((i / len ) * 5)).toString(16) +
          (Math.round(Math.random() * 15)).toString(16);
var green = (0).toString(16) + (0).toString(16);
var red = (0).toString(16) + (0).toString(16);

var color = hex + red + green + blue;

  newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
}
  $el.html(newCont);
});

$('.blue-wave-LDL').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',

    color = '';
///////////////////////////////////////
/////// Loop 1 - Light to Dark ////////
///////////////////////////////////////
for(var i=0; i<Math.floor(len/2); i++){
var hex= '#';
var blue = (15 - Math.round((i / len ) * 5)).toString(16) +
          (Math.round(Math.random() * 15)).toString(16);
var green = (0).toString(16) + (0).toString(16);
var red = (0).toString(16) + (0).toString(16);

var color = hex + red + green + blue;

  newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
}
///////////////////////////////////////
/////// Loop 2 - Dark to light ////////
///////////////////////////////////////
for(var i=Math.floor(len/2); i<len; i++){
  var hex= '#';
  var blue = (Math.round((i / len ) * 5) + 10).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (0).toString(16) + (0).toString(16);
  var red = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);
});


$('.blue-wave-DL-1').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',
    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';
  var blue = (Math.round((i / len ) * 5) + 10).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (0).toString(16) + (0).toString(16);
  var red = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});

$('.blue-wave-DL-2').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',

    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';

var blue = ((Math.round((i / len) * 10) % 5) + 11).toString(16) +
(Math.round(Math.random() * 15)).toString(16);
var green = (0).toString(16) + (0).toString(16);
var red = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});

$('.blue-wave-DL-3').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',

    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';

var blue = ((Math.round((i / len) * 21) % 7) + 8).toString(16) +
(Math.round(Math.random() * 15)).toString(16);
var green = (0).toString(16) + (0).toString(16);
var red = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});


$('.blue-wave-LD-1').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',
    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';
  var blue = (15 - Math.round((i / len ) * 5)).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (0).toString(16) + (0).toString(16);
  var red = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});

$('.blue-wave-LD-2').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',
    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';
  var blue = (15 - (Math.round((i / len) * 10) % 5)).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (0).toString(16) + (0).toString(16);
  var red = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});

$('.blue-wave-LD-3').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',
    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';
  var blue = (15 - (Math.round((i / len) * 15) % 5)).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (0).toString(16) + (0).toString(16);
  var red = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});



///////////////////////////////////////////////////////////////////////////////
///////    Greens    //////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
$('.green-wave-DLD').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',

    color = '';
///////////////////////////////////////
/////// Loop 1 - Dark to light ////////
///////////////////////////////////////
  for(var i=0; i<Math.floor(len/2); i++){
  var hex= '#';
  var green = (Math.round((i / len ) * 5) + 10).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var red = (0).toString(16) + (0).toString(16);
  var blue = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
///////////////////////////////////////
/////// Loop 2 - Light to Dark ////////
///////////////////////////////////////
for(var i=Math.floor(len/2); i<len; i++){
var hex= '#';
var green = (15 - Math.round((i / len ) * 5)).toString(16) +
          (Math.round(Math.random() * 15)).toString(16);
var red = (0).toString(16) + (0).toString(16);
var blue = (0).toString(16) + (0).toString(16);

var color = hex + red + green + blue;

  newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
}
  $el.html(newCont);
});

$('.green-wave-LDL').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',

    color = '';
///////////////////////////////////////
/////// Loop 1 - Light to Dark ////////
///////////////////////////////////////
for(var i=0; i<Math.floor(len/2); i++){
var hex= '#';
var green = (15 - Math.round((i / len ) * 5)).toString(16) +
          (Math.round(Math.random() * 15)).toString(16);
var red = (0).toString(16) + (0).toString(16);
var blue = (0).toString(16) + (0).toString(16);

var color = hex + red + green + blue;

  newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
}
///////////////////////////////////////
/////// Loop 2 - Dark to light ////////
///////////////////////////////////////
for(var i=Math.floor(len/2); i<len; i++){
  var hex= '#';
  var green = (Math.round((i / len ) * 5) + 10).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var red = (0).toString(16) + (0).toString(16);
  var blue = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);
});


$('.green-wave-DL-1').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',
    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';
  var green = (Math.round((i / len ) * 5) + 10).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var red = (0).toString(16) + (0).toString(16);
  var blue = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});

$('.green-wave-DL-2').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',

    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';

var green = ((Math.round((i / len) * 10) % 5) + 11).toString(16) +
(Math.round(Math.random() * 15)).toString(16);
var red = (0).toString(16) + (0).toString(16);
var blue = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});

$('.green-wave-DL-3').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',

    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';

var green = ((Math.round((i / len) * 21) % 7) + 8).toString(16) +
(Math.round(Math.random() * 15)).toString(16);
var red = (0).toString(16) + (0).toString(16);
var blue = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});


$('.green-wave-LD-1').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',
    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';
  var green = (15 - Math.round((i / len ) * 5)).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var red = (0).toString(16) + (0).toString(16);
  var blue = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});

$('.green-wave-LD-2').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',
    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';
  var green = (15 - (Math.round((i / len) * 10) % 5)).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var red = (0).toString(16) + (0).toString(16);
  var blue = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});

$('.green-wave-LD-3').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',
    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';
  var green = (15 - (Math.round((i / len) * 15) % 5)).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var red = (0).toString(16) + (0).toString(16);
  var blue = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});

///////////////////////////////////////////////////////////////////////////////
///////    Oranges    /////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
$('.orange-wave-DLD').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',

    color = '';
///////////////////////////////////////
/////// Loop 1 - Dark to light ////////
///////////////////////////////////////


// var red = (Math.floor(Math.random() * 3) + 12).toString(16) +
//             (Math.floor(Math.random() * 15) + 0).toString(16);
// var green = (Math.floor(Math.random() * 3) + 4).toString(16)  +
//               (0).toString(16);

  for(var i=0; i<Math.floor(len/2); i++){
  var hex= '#';
  var red = (Math.round((i / len ) * 3) + 12).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (Math.round((i / len ) * 3) + 4).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var blue = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
///////////////////////////////////////
/////// Loop 2 - Light to Dark ////////
///////////////////////////////////////
for(var i=Math.floor(len/2); i<len; i++){
var hex= '#';
var red = (15 - Math.round((i / len ) * 3)).toString(16) +
          (Math.round(Math.random() * 15)).toString(16);
var green = (7 - Math.round((i / len ) * 3)).toString(16) +
          (Math.round(Math.random() * 15)).toString(16);
var blue = (0).toString(16) + (0).toString(16);

var color = hex + red + green + blue;

  newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
}
  $el.html(newCont);
});

$('.orange-wave-LDL').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',

    color = '';
///////////////////////////////////////
/////// Loop 1 - Light to Dark ////////
///////////////////////////////////////
for(var i=0; i<Math.floor(len/2); i++){
var hex= '#';
var red = (15 - Math.round((i / len ) * 3)).toString(16) +
          (Math.round(Math.random() * 15)).toString(16);
var green = (7 - Math.round((i / len ) * 3)).toString(16) +
          (Math.round(Math.random() * 15)).toString(16);
var blue = (0).toString(16) + (0).toString(16);

var color = hex + red + green + blue;

  newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
}
///////////////////////////////////////
/////// Loop 2 - Dark to light ////////
///////////////////////////////////////
for(var i=Math.floor(len/2); i<len; i++){
  var hex= '#';
  var red = (Math.round((i / len ) * 3) + 12).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (Math.round((i / len ) * 3) + 4).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var blue = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);
});


$('.orange-wave-DL-1').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',
    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';
  var red = (Math.round((i / len ) * 3) + 12).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (Math.round((i / len ) * 3) + 4).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var blue = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});

$('.orange-wave-DL-2').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',

    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';

var red = ((Math.round((i / len) * 6) % 3) + 12).toString(16) +
          (Math.round(Math.random() * 15)).toString(16);
var green = ((Math.round((i / len) * 6) % 3) + 4).toString(16) +
          (Math.round(Math.random() * 15)).toString(16);
var blue = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});

$('.orange-wave-DL-3').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',

    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';

  var red = ((Math.round((i / len) * 9) % 3) + 12).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = ((Math.round((i / len) * 9) % 3) + 4).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var blue = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});


$('.orange-wave-LD-1').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',
    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';
  var red = (15 - Math.round((i / len ) * 3)).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (7 - Math.round((i / len ) * 3)).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var blue = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});

$('.orange-wave-LD-2').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',
    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';
  var red = (15 - (Math.round((i / len) * 6) % 3)).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (7 - (Math.round((i / len) * 6) % 3)).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var blue = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});

$('.orange-wave-LD-3').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',
    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';
  var red = (15 - (Math.round((i / len) * 9) % 3)).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (7 - (Math.round((i / len) * 9) % 3)).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var blue = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});

///////////////////////////////////////////////////////////////////////////////
///////    Yellow     /////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
$('.yellow-wave-DLD').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',

    color = '';
///////////////////////////////////////
/////// Loop 1 - Dark to light ////////
///////////////////////////////////////

  for(var i=0; i<Math.floor(len/2); i++){
  var hex= '#';
  var red = (Math.round((i / len ) * 5) + 10).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (Math.round((i / len ) * 7) + 8).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var blue = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
///////////////////////////////////////
/////// Loop 2 - Light to Dark ////////
///////////////////////////////////////
for(var i=Math.floor(len/2); i<len; i++){
var hex= '#';
var red = (16 - Math.round((i / len ) * 5)).toString(16) +
          (Math.round(Math.random() * 15)).toString(16);
var green = (16 - Math.round((i / len ) * 7)).toString(16) +
          (Math.round(Math.random() * 15)).toString(16);
var blue = (0).toString(16) + (0).toString(16);

var color = hex + red + green + blue;

  newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
}
  $el.html(newCont);
});

$('.yellow-wave-LDL').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',

    color = '';
///////////////////////////////////////
/////// Loop 1 - Light to Dark ////////
///////////////////////////////////////
for(var i=0; i<Math.floor(len/2); i++){
var hex= '#';
var red = (15 - Math.round((i / len ) * 5)).toString(16) +
          (Math.round(Math.random() * 15)).toString(16);
var green = (15 - Math.round((i / len ) * 7)).toString(16) +
          (Math.round(Math.random() * 15)).toString(16);
var blue = (0).toString(16) + (0).toString(16);

var color = hex + red + green + blue;

  newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
}
///////////////////////////////////////
/////// Loop 2 - Dark to light ////////
///////////////////////////////////////
for(var i=Math.floor(len/2); i<len; i++){
  var hex= '#';
  var red = (Math.round((i / len ) * 4) + 11).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (Math.round((i / len ) * 7) + 8).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var blue = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);
});


$('.yellow-wave-DL-1').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',
    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';
  var red = (Math.round((i / len ) * 4) + 11).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (Math.round((i / len ) * 7) + 8).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var blue = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});

$('.yellow-wave-DL-2').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',

    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';

var red = (((Math.round((i / len) * 8)) % 4) + 11).toString(16) +
          (Math.round(Math.random() * 15)).toString(16);
var green = ((((Math.round((i / len) * 8)) % 4) * 2) + 8).toString(16) +
          (Math.round(Math.random() * 15)).toString(16);
var blue = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});

$('.yellow-wave-DL-3').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',

    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';

  var red = (((Math.round((i / len) * 12)) % 4) + 11).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = ((((Math.round((i / len) * 12)) % 4) * 2) + 8).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var blue = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});


$('.yellow-wave-LD-1').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',
    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';
  var red = (15 - Math.round((i / len ) * 4)).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (15 - Math.round((i / len ) * 7)).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var blue = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});

$('.yellow-wave-LD-2').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',
    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';
  var red = (15 - (Math.round((i / len ) * 8) % 4)).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (15 - (Math.round((i / len ) * 8) % 4) * 2).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var blue = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});

$('.yellow-wave-LD-3').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',
    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';
  var red = (15 - (Math.round((i / len ) * 12) % 4)).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (15 - (Math.round((i / len ) * 12) % 4) * 2).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var blue = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});

///////////////////////////////////////////////////////////////////////////////
///////    Purple     /////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
$('.purple-wave-DLD').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',

    color = '';
///////////////////////////////////////
/////// Loop 1 - Dark to light ////////
///////////////////////////////////////



// var red = (Math.floor(Math.random() * 6) + 6).toString(16) +
//             (Math.floor(Math.random() * 15) + 0).toString(16);
// var green = (0).toString(16) + (0).toString(16);
// var blue = (Math.floor(Math.random() * 6) + 9).toString(16) +
//             (Math.floor(Math.random() * 15) + 0).toString(16);

  for(var i=0; i<Math.floor(len/2); i++){
  var hex= '#';
  var red = (Math.round((i / len ) * 6) + 6).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var blue = (Math.round((i / len ) * 6) + 9).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
///////////////////////////////////////
/////// Loop 2 - Light to Dark ////////
///////////////////////////////////////
for(var i=Math.floor(len/2); i<len; i++){
var hex= '#';
var red = (12 - Math.round((i / len ) * 6)).toString(16) +
          (Math.round(Math.random() * 15)).toString(16);
var blue = (15 - Math.round((i / len ) * 6)).toString(16) +
          (Math.round(Math.random() * 15)).toString(16);
var green = (0).toString(16) + (0).toString(16);

var color = hex + red + green + blue;

  newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
}
  $el.html(newCont);
});

$('.purple-wave-LDL').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',

    color = '';
///////////////////////////////////////
/////// Loop 1 - Light to Dark ////////
///////////////////////////////////////
for(var i=0; i<Math.floor(len/2); i++){
var hex= '#';
var red = (12 - Math.round((i / len ) * 6)).toString(16) +
          (Math.round(Math.random() * 15)).toString(16);
var blue = (15 - Math.round((i / len ) * 6)).toString(16) +
          (Math.round(Math.random() * 15)).toString(16);
var green = (0).toString(16) + (0).toString(16);

var color = hex + red + green + blue;

  newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
}
///////////////////////////////////////
/////// Loop 2 - Dark to light ////////
///////////////////////////////////////
for(var i=Math.floor(len/2); i<len; i++){
  var hex= '#';
  var red = (Math.round((i / len ) * 6) + 6).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var blue = (Math.round((i / len ) * 6) + 9).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);
});


$('.purple-wave-DL-1').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',
    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';
  var red = (Math.round((i / len ) * 6) + 6).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var blue = (Math.round((i / len ) * 6) + 9).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});

$('.purple-wave-DL-2').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',

    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';

var red = (((Math.round((i / len) * 12)) % 6) + 6).toString(16) +
          (Math.round(Math.random() * 15)).toString(16);
var blue = ((((Math.round((i / len) * 12)) % 6)) + 9).toString(16) +
          (Math.round(Math.random() * 15)).toString(16);
var green = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});

$('.purple-wave-DL-3').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',

    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';

  var red = (((Math.round((i / len) * 18)) % 6) + 6).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var blue = (((Math.round((i / len) * 18)) % 6) + 9).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});


$('.purple-wave-LD-1').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',
    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';
  var red = (12 - Math.round((i / len ) * 6)).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var blue = (15 - Math.round((i / len ) * 6)).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});

$('.purple-wave-LD-2').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',
    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';
  var red = (12 - (Math.round((i / len ) * 12) % 6)).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var blue = (15 - (Math.round((i / len ) * 12) % 6)).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});

$('.purple-wave-LD-3').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',
    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';
  var red = (12 - (Math.round((i / len ) * 18) % 6)).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var blue = (15 - (Math.round((i / len ) * 18) % 6)).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});


///////////////////////////////////////////////////////////////////////////////
///////    cyan       /////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
$('.cyan-wave-DLD').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',

    color = '';
///////////////////////////////////////
/////// Loop 1 - Dark to light ////////
///////////////////////////////////////


  for(var i=0; i<Math.floor(len/2); i++){
  var hex= '#';
  var blue = (Math.round((i / len ) * 6) + 9).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (Math.round((i / len ) * 15) + 0).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var red = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
///////////////////////////////////////
/////// Loop 2 - Light to Dark ////////
///////////////////////////////////////
for(var i=Math.floor(len/2); i<len; i++){
var hex= '#';
var blue = (15 - Math.round((i / len ) * 6)).toString(16) +
          (Math.round(Math.random() * 15)).toString(16);
var green = (15 - Math.round((i / len ) * 15)).toString(16) +
          (Math.round(Math.random() * 15)).toString(16);
var red = (0).toString(16) + (0).toString(16);

var color = hex + red + green + blue;

  newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
}
  $el.html(newCont);
});



$('.cyan-wave-LDL').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',

    color = '';
///////////////////////////////////////
/////// Loop 1 - Light to Dark ////////
///////////////////////////////////////
for(var i=0; i<Math.floor(len/2); i++){
var hex= '#';
var blue = (15 - Math.round((i / len ) * 6)).toString(16) +
          (Math.round(Math.random() * 15)).toString(16);
var green = (15 - Math.round((i / len ) * 15)).toString(16) +
          (Math.round(Math.random() * 15)).toString(16);
var red = (0).toString(16) + (0).toString(16);

var color = hex + red + green + blue;

  newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
}
///////////////////////////////////////
/////// Loop 2 - Dark to light ////////
///////////////////////////////////////
for(var i=Math.floor(len/2); i<len; i++){
  var hex= '#';
  var blue = (Math.round((i / len ) * 6) + 9).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (Math.round((i / len ) * 15) + 0).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var red = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);
});


$('.cyan-wave-DL-1').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',
    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';
  var blue = (Math.round((i / len ) * 6) + 9).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (Math.round((i / len ) * 15) + 0).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var red = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});

$('.cyan-wave-DL-2').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',

    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';

var blue = (((Math.round((i / len) * 12)) % 6) + 9).toString(16) +
          (Math.round(Math.random() * 15)).toString(16);
var green = (((Math.round((i / len) * 12)) % 6) * 2).toString(16) +
          (Math.round(Math.random() * 15)).toString(16);
var red = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});

$('.cyan-wave-DL-3').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',

    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';

  var blue = (((Math.round((i / len) * 18)) % 6) + 9).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (((Math.round((i / len) * 18)) % 6) * 2).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var red = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});


$('.cyan-wave-LD-1').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',
    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';
  var blue = (15 - Math.round((i / len ) * 6)).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (15 - Math.round((i / len ) * 15)).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var red = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});

$('.cyan-wave-LD-2').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',
    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';
  var blue = (15 - (Math.round((i / len ) * 12) % 6)).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (15 - (Math.round((i / len ) * 12) % 6) * 2).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var red = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});

$('.cyan-wave-LD-3').each(function(){
  ///////////////////////////////////////
  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '',
    color = '';
///////////////////////////////////////
  for(var i=0; i<len; i++){
  var hex= '#';
  var blue = (15 - (Math.round((i / len ) * 18) % 6)).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (15 - (Math.round((i / len ) * 18) % 6) * 2).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var red = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }
  $el.html(newCont);
});
