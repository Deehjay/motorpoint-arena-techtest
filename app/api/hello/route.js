const axios = require("axios");

const eventsApi = axios.create({
  baseURL: "https://staging.national-ice-centre.com/api",
});

async function getEvents() {
  const res = await eventsApi.get(
    "/events/read?token=80d08db1-ed65-4bf0-a7ca-406febd5d917"
  );
  return res.data.events;
}

getEvents();

module.exports = getEvents;
