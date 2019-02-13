var moment = require('moment');
var db = require("../models");

var nodemailer = require('nodemailer');
//TODO:
// email address should be from database (store manager)
// email credentials should be from database (hidden)
//
//*************************
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'cmart.stores.usdivision@gmail.com',
        pass: 'Cmart100'
    }
});
// send emails once per day
function checkEmailAlerts() {
    console.log("SEND EMAIL ALERTS");
    setTimeout(checkEmailAlerts, 1000 * 60 * 60 * 24);
    db.Alerts.findAll({}).then(function(alerts) {
        var pstring = "";
        for (var i = 0; i < alerts.length; i++) {
            var status = determineStatus(alerts[i].dataValues.date);
            if (status !== -0) {
                pstring += alerts[i].event;
                pstring += " is: ";
                pstring += status;
                pstring += '\n';
            }
        }
        if (pstring) {
            var emailBody = "***Status of reminders from store East Austin\n" + pstring;
            console.log(emailBody);
            var mailOptions = {
                from: 'cmart.stores.usdivision@gmail.com',
                to: 'jwgirardeau@gmail.com',
                subject: '***Store Report',
                text: emailBody
            };
            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        }
    });
}

module.exports = {
    updateAlertStatus: function(alerts) {
        for (var i = 0; i < alerts.length; i++) {
            alerts[i].dataValues.status = determineStatus(alerts[i].dataValues.date);
        }
        return alerts;
    },
    checkEmailAlerts() {
        checkEmailAlerts();

    }
};

// return pending or due for task
function determineStatus(date) {
    // console.log("****DATE", date);
    var endDate = moment(date, "YYYY-MM-DD");
    var startDate = moment();

    var result = endDate.diff(startDate, 'days');
    // console.log(result);
    if (result < 0) return "PAST DUE";
    if (result === 0) return "DUE NOW";
    return 0;
}