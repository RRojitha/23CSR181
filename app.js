const notifications =
    require("./data/notifications");

const {
    getTopNotifications
} = require("./services/priorityService");

const logger =
    require("./middleware/logger");

logger("Application Started");

const topNotifications =
    getTopNotifications(notifications, 10);

console.log("\nTop Notifications:\n");

topNotifications.forEach((notification, index) => {

    console.log(
        `${index + 1}. ${notification.message}`
    );

    console.log(
        `Type: ${notification.type}`
    );

    console.log("----------------------");
});


