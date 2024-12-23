export const APIkey = "28289e1a9fe449a68c69a95fc4a415a1";

const currentDate = new Date();
const lastWeekDate = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);

export const formattedCurrentDate = currentDate.toISOString().slice(0, 10);
export const previousWeekDate = lastWeekDate.toISOString().slice(0, 10);

export const savedItems = [];
