angular.module('starter').factory('UserRegistrationServiceStore', registerUserInfo);

//registerUserInfo.$inject = [];

function registerUserInfo() {
     var newUser = {
       'fullName': '',
       'dob': '',
       'ssn': '',
       'gender': '',
       'avatar': '',
       'address': '',
       'city': '',
       'state': '',
       'countryId': '',
       'zipcode': '',
       'phone1': '',
       'phone2': '',
       'cellphone': '',
       'jawboneToken': '',
       'fitbitToken': '',
       'secretToken': '',
       'status': '',
       'userType': '',
       'acceptContract': true,
       'ethnicity': '',
       'language': '',
       'email': '',
       'password': '',
       'smsNotification': true,
       'emailNotification': true,
       'kitId': ''
     };

    var newUser = {};

    return {
        getNewUser: function () {
            return newUser;
        },

        setNewUser: function (obj) {
            newUser = obj;
        }
    };
};
