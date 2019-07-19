"use strict";
// check wather jquery import properly or not

if (!jQuery) {
  alert("jQuery cdn  problem");
}

const red_border = {
  border: "2px solid red"
};

const green_border = {
  border: "2px solid green"
};
//Request URL: https://pozzad-email-validator.p.rapidapi.com/emailvalidator/validateEmail/{email}

//event listener
$("._select").on("change", function() {
  apiCall();
});

const apiCall = () => {
  const email = $("._select")
    .val()
    .trim();
  //console.log(value);

  const request = $.ajax({
    url: `https://pozzad-email-validator.p.rapidapi.com/emailvalidator/validateEmail/${email}`,
    type: "GET",

    dataType: "json",
    headers: {
      "X-RapidAPI-Host": "pozzad-email-validator.p.rapidapi.com",
      "X-RapidAPI-Key": "a440e3a4c3msh204eb7641a0b400p1ae281jsn4560ea04dc58"
    }
  }).done(function(data) {
    console.log(data);
    if (data.isValid === false) {
      return $("._select").css(red_border);
    } else {
      return $("._select").css(green_border);
    }
  });
};
