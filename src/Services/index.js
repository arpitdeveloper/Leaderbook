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
  formdata.append("email",data.email);
  formdata.append("password", data.password);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
  };

return fetch(`${BASE_URI}/edit_profile_data_set`, requestOptions);
};

export const user_update = (
  data
) => {
  var myHeaders = new Headers();
  myHeaders.append("Cookie", "PHPSESSID=6ff92dd70ed17687f0ee2c3a77d5a865");

  var formdata = new FormData();
  formdata.append("hash", hash);
  formdata.append("key", key);
  formdata.append("email", data.email);
  formdata.append("password", data.password);

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      'first_name': data.first_name,
      'last_name': data.last_name,
      'phone': data.phone,
      'address': data.address,
      'city': data.city,
      'state': data.state,
      'title': title,
      'company': data.company,
      'text_sign': data.text_sign,
      'email': data.email,
    }),
  };

  return fetch(`${BASE_URI}/update_profile`, requestOptions);
};
