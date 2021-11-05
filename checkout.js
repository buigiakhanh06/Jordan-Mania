const data_user = document.querySelector(".container");

data_user.addEventListener('submit', function(event){
    event.preventDefault();
    const user = {
        firstname: data_user.firstName.value,
        lastname: data_user.lastName.value,
        username: data_user.userName.value,
        email: data_user.email.value,
        address: data_user.address.value,
        country: data_user.country.value,
        region: data_user.region.value,
        zip: data_user.zip.value
    }
   console.log(user);

});







