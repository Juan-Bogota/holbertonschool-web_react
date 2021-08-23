export const filterTypeSelected = (state) => {
    return state.filter;
};
export const getNotifications = (state) => {
    return state.notifications;
};

const getNotificationsSelector = (state) => state.notifications;

export const getUnreadNotifications = (state) => createSelector(
    getNotificationsSelector,
    (notifications) => {
        const filter = notifications.get("filter");
        const messages = notifications.get("messages");
        if (messages) {
            let filtered;

            if (filter === "URGENT") {
                filtered = messages
                    .valueSeq()
                    .filter(
                        (value) =>
                            value.get("isRead") === false && value.get("type") === "urgent"
                    );
            } else {
                filtered = messages
                    .valueSeq()
                    .filter((value) => value.get("isRead") === false);
            }
            return filtered;
        }
        return messages;
    }
);