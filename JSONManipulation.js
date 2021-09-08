const data = [
  {
    inventory_id: 9382,
    name: "Brown Chair",
    type: "furniture",
    tags: ["chair", "furniture", "brown"],
    purchased_at: 1579190471,
    placement: {
      room_id: 3,
      name: "Meeting Room",
    },
  },
  {
    inventory_id: 9380,
    name: "Big Desk",
    type: "furniture",
    tags: ["desk", "furniture", "brown"],
    purchased_at: 1579190642,
    placement: {
      room_id: 3,
      name: "Meeting Room",
    },
  },
  {
    inventory_id: 2932,
    name: "LG Monitor 50 inch",
    type: "electronic",
    tags: ["monitor"],
    purchased_at: 1579017842,
    placement: {
      room_id: 3,
      name: "Lavender",
    },
  },
  {
    inventory_id: 232,
    name: "Sharp Pendingin Ruangan 2PK",
    type: "electronic",
    tags: ["ac"],
    purchased_at: 1578931442,
    placement: {
      room_id: 5,
      name: "Dhanapala",
    },
  },
  {
    inventory_id: 9382,
    name: "Alat Makan",
    type: "tableware",
    tags: ["spoon", "fork", "tableware"],
    purchased_at: 1578672242,
    placement: {
      room_id: 10,
      name: "Rajawali",
    },
  },
];

const findItemsOnMeetingRoom = (data) =>
  data.filter((data) => data.placement.name == "Meeting Room");
const findElectronicDevice = (data) =>
  data.filter((data) => data.type == "electronic");
const findFurniture = (data) => data.filter((data) => data.type == "furniture");
const orderDate = (data) =>
  data.map((data) =>
    new Date(data.purchased_at * 1000).toLocaleDateString("en-US")
  );
const findOrderbyDate = (data, time) => {
  const dateToTime = (date) => {
    let [day, month, year] = date.split(" ");
    switch (month) {
      case "Januari":
        month = 1;
        break;
      case "Februari":
        month = 2;
        break;
      case "Maret":
        month = 3;
        break;
      case "April":
        month = 4;
        break;
      case "Mei":
        month = 5;
        break;
      case "Juni":
        month = 6;
        break;
      case "Juli":
        month = 7;
        break;
      case "Agustus":
        month = 8;
        break;
      case "September":
        month = 9;
        break;
      case "Oktober":
        month = 10;
        break;
      case "November":
        month = 11;
        break;
      case "Desember":
        month = 12;
        break;
    }

    return `${month}/${day}/${year}`;
  };
  return data.filter(
    (data) =>
      new Date(data.purchased_at * 1000).toLocaleDateString("en-US") ===
      dateToTime(time)
  );
};

console.log(findItemsOnMeetingRoom(data));
console.log(findOrderbyDate(data, "16 Januari 2020"));
