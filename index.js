"use strict";

const red_border = {
  border: "3px solid #e73c3d "
};

const green_border = {
  border: "3px solid #29eb07"
};

$("#_select").on("change", function() {
  apiCall();
});

const apiCall = () => {
  const email = $("#_select")
    .val()
    .trim();

  const request = $.ajax({
    url: `https://pozzad-email-validator.p.rapidapi.com/emailvalidator/validateEmail/${email}`,
    type: "GET",

    dataType: "json",
    headers: {
      "X-RapidAPI-Host": "pozzad-email-validator.p.rapidapi.com",
      "X-RapidAPI-Key": "a440e3a4c3msh204eb7641a0b400p1ae281jsn4560ea04dc58"
    }
  }).done(function(data) {
    if (data.isValid === false) {
      return $("#_select").css(red_border);
    } else {
      return $("#_select").css(green_border);
    }
  });
};
