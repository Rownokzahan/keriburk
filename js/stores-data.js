const storesData = [
  {
    id: "1",
    division: "Dhaka",
    districts: [
      {
        name: "Dhaka",
        stores: [
          { id: "D001", name: "Postogola", storeType: "Super Store" },
          { id: "D002", name: "Uttara-6", storeType: "Super Store" },
          { id: "D003", name: "Uttara-11", storeType: "Mega Store" },
          { id: "D004", name: "Malibagh", storeType: "Super Store" },
          { id: "D005", name: "Green Road", storeType: "Super Store" },
          { id: "D006", name: "Nazim Uddin Road", storeType: "Super Store" },
          { id: "D007", name: "West Kafrul", storeType: "Super Store" },
          { id: "D008", name: "Sutrapur", storeType: "Super Store" },
          { id: "D009", name: "Khilgaon", storeType: "Super Store" },
          { id: "D010", name: "Banani", storeType: "Super Store" },
          { id: "D011", name: "Banani-2", storeType: "Super Store" },
          { id: "D012", name: "Nikunja-2", storeType: "Super Store" },
          { id: "D013", name: "Gulshan-1", storeType: "Super Store" },
          {
            id: "D014",
            name: "Gulshan-2 (New & Old)",
            storeType: "Super Store",
          },
          { id: "D015", name: "Shahjahan Road", storeType: "Super Store" },
          { id: "D016", name: "Azimpur", storeType: "Super Store" },
          { id: "D017", name: "Khilkhet Lake City", storeType: "Super Store" },
          { id: "D018", name: "North Banasree", storeType: "Super Store" },
          { id: "D019", name: "Central Basabo-2", storeType: "Mega Store" },
          { id: "D020", name: "Sontek Kajla", storeType: "Super Store" },
          { id: "D021", name: "Mohanagar", storeType: "Super Store" },
          { id: "D022", name: "Mirpur-1", storeType: "Super Store" },
          { id: "D023", name: "Mirpur-2", storeType: "Super Store" },
          { id: "D024", name: "Mirpur-6 (New)", storeType: "Super Store" },
          { id: "D025", name: "Mirpur-10", storeType: "Super Store" },
          { id: "D026", name: "Mirpur-11", storeType: "Super Store" },
          { id: "D027", name: "Mirpur-12", storeType: "Super Store" },
          { id: "D028", name: "Mirpur Borobagh", storeType: "Super Store" },
          { id: "D029", name: "Mirpur-12 Bus Stand", storeType: "Super Store" },
          { id: "D030", name: "Taltola Agargaon", storeType: "Super Store" },
          { id: "D031", name: "Bashundhara Block-G", storeType: "Mega Store" },
          { id: "D032", name: "Kamrangir Chor", storeType: "Super Store" },
          {
            id: "D033",
            name: "Aftab Nagar (Siraj Community Center)",
            storeType: "Super Store",
          },
          {
            id: "D034",
            name: "Konapara Demra",
            storeType: "Convenience Store",
          },
          { id: "D035", name: "Golapbagh", storeType: "Convenience Store" },
          { id: "D036", name: "Saterkul", storeType: "Convenience Store" },
          {
            id: "D037",
            name: "Hasnabad Outlet",
            storeType: "Convenience Store",
          },
          {
            id: "D038",
            name: "Ashkona Outlet",
            storeType: "Convenience Store",
          },
          {
            id: "D039",
            name: "Mohammadpur (Ring Road & Bosila)",
            storeType: "Convenience Store",
          },
          { id: "D040", name: "Moddho Badda", storeType: "Convenience Store" },
          { id: "D041", name: "Dhaka Housing", storeType: "Super Store" },
          { id: "D042", name: "Kaderabad Housing", storeType: "Super Store" },
          { id: "D043", name: "Dhanmondi-27", storeType: "Mega Store" },
          { id: "D044", name: "Panthapath (New)", storeType: "Super Store" },
        ],
      },
      {
        name: "Gazipur",
        stores: [
          {
            id: "G001",
            name: "Joydebpur Outlet",
            storeType: "Convenience Store",
          },
          { id: "G002", name: "Tongi Outlet", storeType: "Super Store" },
          {
            id: "G003",
            name: "Tongi College Road",
            storeType: "Convenience Store",
          },
        ],
      },
      {
        name: "Manikganj",
        stores: [
          { id: "M001", name: "Manikganj Bus Stand", storeType: "Super Store" },
        ],
      },
      {
        name: "Narayanganj",
        stores: [
          { id: "N001", name: "Masdair Narayanganj", storeType: "Super Store" },
          { id: "N002", name: "Narayanganj Outlet", storeType: "Super Store" },
        ],
      },
      {
        name: "Savar",
        stores: [
          { id: "S001", name: "Savar Cantonment", storeType: "Super Store" },
          { id: "S002", name: "Savar Thana Road", storeType: "Super Store" },
          { id: "S003", name: "Savar New Market", storeType: "Super Store" },
        ],
      },
    ],
  },
  {
    id: "2",
    division: "Chattogram",
    districts: [
      {
        name: "Chattogram",
        stores: [
          { id: "C001", name: "Gol Pahar", storeType: "Super Store" },
          { id: "C002", name: "Hali Shohor", storeType: "Super Store" },
          { id: "C003", name: "Khulshi", storeType: "Super Store" },
          { id: "C004", name: "Jamal Khan", storeType: "Super Store" },
          {
            id: "C005",
            name: "Kolatoli (Cox's Bazar)",
            storeType: "Super Store",
          },
          {
            id: "C006",
            name: "Jhautola (Cox's Bazar)",
            storeType: "Super Store",
          },
        ],
      },
      {
        name: "Feni",
        stores: [{ id: "F001", name: "Feni Outlet", storeType: "Super Store" }],
      },
      {
        name: "Noakhali",
        stores: [
          {
            id: "N001",
            name: "Maijdee Outlet",
            storeType: "Convenience Store",
          },
        ],
      },
      {
        name: "Comilla",
        stores: [
          { id: "C001", name: "Comilla Outlet", storeType: "Super Store" },
          { id: "C002", name: "Comilla-2 Outlet", storeType: "Super Store" },
          {
            id: "C003",
            name: "Chandina Outlet",
            storeType: "Convenience Store",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    division: "Khulna",
    districts: [
      {
        name: "Khulna",
        stores: [
          { id: "K001", name: "Boyra", storeType: "Super Store" },
          { id: "K002", name: "South Central Road", storeType: "Super Store" },
          { id: "K003", name: "Sonadanga", storeType: "Super Store" },
        ],
      },
      {
        name: "Kushtia",
        stores: [
          {
            id: "K004",
            name: "Shapla Chattar Outlet",
            storeType: "Convenience Store",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    division: "Rajshahi",
    districts: [
      {
        name: "Rajshahi",
        stores: [
          { id: "R001", name: "Alupatti", storeType: "Super Store" },
          { id: "R002", name: "Nagar Bhaban Outlet", storeType: "Super Store" },
          {
            id: "R003",
            name: "Naogaon Outlet",
            storeType: "Convenience Store",
          },
        ],
      },
      {
        name: "Bagura",
        stores: [
          {
            id: "B001",
            name: "Malati Nagar Outlet",
            storeType: "Convenience Store",
          },
        ],
      },
    ],
  },
  {
    id: "5",
    division: "Barishal",
    districts: [
      {
        name: "Barishal",
        stores: [{ id: "B001", name: "Sadar Road", storeType: "Super Store" }],
      },
    ],
  },
  {
    id: "6",
    division: "Sylhet",
    districts: [
      {
        name: "Sylhet",
        stores: [
          { id: "S001", name: "Shahjalal Outlet", storeType: "Super Store" },
          { id: "S002", name: "Shibgong Outlet", storeType: "Super Store" },
          {
            id: "S003",
            name: "Pathantola Outlet",
            storeType: "Convenience Store",
          },
          { id: "S004", name: "Zinda Bazar", storeType: "Super Store" },
          { id: "S005", name: "Amberkhana Outlet", storeType: "Super Store" },
          {
            id: "S006",
            name: "Beanibazar Outlet",
            storeType: "Convenience Store",
          },
        ],
      },
      {
        name: "Moulvibazar",
        stores: [
          {
            id: "M001",
            name: "Moulvibazar Outlet",
            storeType: "Convenience Store",
          },
        ],
      },
      {
        name: "Habiganj",
        stores: [
          {
            id: "H001",
            name: "Habiganj Outlet",
            storeType: "Convenience Store",
          },
        ],
      },
    ],
  },
  {
    id: "7",
    division: "Rangpur",
    districts: [
      {
        name: "Rangpur",
        stores: [
          { id: "R001", name: "Shyamoli Outlet", storeType: "Super Store" },
        ],
      },
    ],
  },
];

export function getDivisions() {
  const divisions = storesData.map((item) => item.division);
  return divisions;
}

export function getDistrictsByDivision(division) {
  const divisionData = storesData.find((item) => item.division === division);

  if (
    divisionData?.districts === undefined ||
    divisionData.districts.length === 0
  ) {
    return [];
  }

  const districts = divisionData.districts.map((item) => item.name);
  return districts;
}

export function getStoresByDistrict(district) {
  const division = storesData.find((division) =>
    division.districts.some((item) => item.name === district)
  );

  if (division) {
    const districtData = division.districts.find(
      (item) => item.name === district
    );
    return districtData.stores;
  }

  return [];
}
