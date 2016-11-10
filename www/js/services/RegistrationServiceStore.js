angular.module('starter').factory('UserRegistrationServiceStore', registerUserInfo);

//registerUserInfo.$inject = [];

function registerUserInfo() {
     var newUser = {
       'planId': 1,
       'fullName': '',
       'dob': '',
       'securityQuestion': '',
       'securityAnswer': '',
       'gender': '',
       'avatar': '',
       'address': '',
       'city': '',
       'state': '',
       'countryId': 55,
       'zipCode': '',
       'phone1': '',
       'phone2': '',
       'cellphone': '',
       'status': 1,
       'userType': 1,
       'acceptContract': true,
       'email': '',
       'password': '',
       'smsNotification': true,
       'emailNotification': true,
       'rememberToken': true,
       'cpf': '',
       'rg': '',
       'investorProfile': '',
     };

    //var newUser = {};

    return {
        getNewUser: function () {
            return newUser;
        },

        setNewUser: function (obj) {
            newUser = obj;
        }
    };
};
