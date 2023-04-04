const BASE_URI = "http://www.advancewebsites.com/crm_api";
const hash = "c0e4ac08899b02ca1a92b4e2f26fb0b6";
const key = "7632d69f1f8ddac65151c56dea11d76a";

export const LOGIN = (data) => {

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
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

  return fetch(`${BASE_URI}/forgotpassword`, requestOptions);
};
