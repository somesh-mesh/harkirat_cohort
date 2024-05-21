import axios from "axios";
import { atom, selector } from "recoil";

// Atom to store notification data from the API
export const notificationsFromApi = atom({
  key: "notificationsFromApi",
  default: selector({
    key: "networkAtomSelector",
    get: async () => {
      await new Promise(r => setTimeout(r, 500)); // Simulate delay
      const res = await axios.get("https://sum-server.100xdevs.com/notifications");
      return res.data;
    }
  }),
});

// Selector to compute the total number of notifications
export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const notifications = get(notificationsFromApi);
    const networkCount = notifications.network;
    const jobCount = notifications.jobs;
    const messagingCount = notifications.messaging;
    const notificationCount = notifications.notifications;
    return networkCount + jobCount + messagingCount + notificationCount;
  },
});
