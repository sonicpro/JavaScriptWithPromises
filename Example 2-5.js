var user = {
    profilePromise: null,

    getProfile: function () {
        if (!this.profilePromise) {
            this.profilePromise = $.getJSON("userData.json");
        }
        return this.profilePromise;
    }
};
// The first consumer - imaginary navigation bar.
var navbar = {
    show: function (user) {
        // user.getProfile().then(function (profile) {
        user.getProfile().fail(function (profile) {        
            console.log('*** Navbar ***');
            console.log('Name: ' + profile.name);
        });
    }
};
// The second consumer - imaginary account details page.
var account = {
    show: function (user) {
        // user.getProfile().then(function (profile) {
        user.getProfile().fail(function (profile) {        
            console.log('*** Account Info ***');
            console.log('Name: ' + profile.name);
            console.log('Send lots of email? ' + profile.subscribedToSpam);
        });
    }
};

navbar.show(user);
account.show(user);

// Console output: - !!! do not wrk as expected - "then" callbacks do not fire; the jQuery deferred does not pass the JSON object to the callbacks.
// *** Navbar ***
// Name: Samantha
// *** Account Info ***
// Name: Samantha
// Send lots of email? true

