const getEvents = async () => {
  const res = await fetch(
    "https://staging.national-ice-centre.com/api/events/read?token=80d08db1-ed65-4bf0-a7ca-406febd5d917"
  );
  const data = await res.json();
  return data.events;
};

module.exports = getEvents;
