const BASE_URI = "http://www.advancewebsites.com/crm_api";
const hash = "c0e4ac08899b02ca1a92b4e2f26fb0b6";
const key = "7632d69f1f8ddac65151c56dea11d76a";

export const LOGIN = (data) => {
  var myHeaders = new Headers();
  myHeaders.append("Cookie", "PHPSESSID=6ff92dd70ed17687f0ee2c3a77d5a865");

  var formdata = new FormData();
  formdata.append("hash", hash);
  formdata.append("key", key);
  formdata.append("email", data.email);
  formdata.append("password", data.password);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  return fetch(`${BASE_URI}/authentication`, requestOptions);
};

export const Forgot_password = (email) => {
  var myHeaders = new Headers();
  myHeaders.append("Cookie", "PHPSESSID=6ff92dd70ed17687f0ee2c3a77d5a865");

  var formdata = new FormData();
  formdata.append("hash", hash);
  formdata.append("key", key);
  formdata.append("email", email);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  return fetch(`${BASE_URI}/forgotpassword`, requestOptions);
};

export const edit_profile = (data) => {
  var myHeaders = new Headers();
  myHeaders.append("Cookie", "PHPSESSID=6ff92dd70ed17687f0ee2c3a77d5a865");

  var formdata = new FormData();
  formdata.append("hash", hash);
  formdata.append("key", key);
  formdata.append("email", data.email);
  formdata.append("password", data.password);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  return fetch(`${BASE_URI}/edit_profile_data_set`, requestOptions);
};

export const user_update = (data) => {
  var myHeaders = new Headers();
  myHeaders.append("Cookie", "PHPSESSID=441a746e08939731ebfa767ef7a4765f");

  var formdata = new FormData();
  formdata.append("hash", hash);
  formdata.append("key", key);
  // formdata.append("email", data.email);
  formdata.append("password", data.password);
  formdata.append("first_name", data.first_name);
  formdata.append("last_name", data.last_name);
  formdata.append("email", data.email);
  formdata.append("phone", data.phone);
  formdata.append("address", data.address);
  formdata.append("city", data.city);
  formdata.append("state", data.state);
  formdata.append("title", data.title);
  formdata.append("company", data.company);
  formdata.append("text_sign", data.text_sign);
  formdata.append("country_id", data.country_id);
  console.log(data);
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
  };
  

  return fetch(`${BASE_URI}/update_profile`, requestOptions);
};
