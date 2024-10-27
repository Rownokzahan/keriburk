const districts = [
  { id: "01B01", district: "Bagerhat" },
  { id: "02B02", district: "Bandarban" },
  { id: "03B03", district: "Barguna" },
  { id: "04B04", district: "Barisal" },
  { id: "05B05", district: "Bhola" },
  { id: "06B06", district: "Bogra" },
  { id: "07B07", district: "Brahmanbaria" },
  { id: "08C01", district: "Chandpur" },
  { id: "09C02", district: "Chittagong" },
  { id: "10C03", district: "Chuadanga" },
  { id: "11C04", district: "Comilla" },
  { id: "12C05", district: "Cox's Bazar" },
  { id: "13D01", district: "Dhaka" },
  { id: "14D02", district: "Dinajpur" },
  { id: "15F01", district: "Faridpur" },
  { id: "16F02", district: "Feni" },
  { id: "17G01", district: "Gaibandha" },
  { id: "18G02", district: "Gazipur" },
  { id: "19G03", district: "Gopalganj" },
  { id: "20H01", district: "Habiganj" },
  { id: "21J01", district: "Jamalpur" },
  { id: "22J02", district: "Jessore" },
  { id: "23J03", district: "Jhalokati" },
  { id: "24J04", district: "Jhenaidah" },
  { id: "25J05", district: "Joypurhat" },
  { id: "26K01", district: "Khagrachari" },
  { id: "27K02", district: "Khulna" },
  { id: "28K03", district: "Kishoreganj" },
  { id: "29K04", district: "Kurigram" },
  { id: "30K05", district: "Kushtia" },
  { id: "31L01", district: "Lakshmipur" },
  { id: "32L02", district: "Lalmonirhat" },
  { id: "33M01", district: "Madaripur" },
  { id: "34M02", district: "Magura" },
  { id: "35M03", district: "Manikganj" },
  { id: "36M04", district: "Maulvibazar" },
  { id: "37M05", district: "Meherpur" },
  { id: "38M06", district: "Munshiganj" },
  { id: "39M07", district: "Mymensingh" },
  { id: "40N01", district: "Naogaon" },
  { id: "41N02", district: "Narail" },
  { id: "42N03", district: "Narayanganj" },
  { id: "43N04", district: "Narsingdi" },
  { id: "44N05", district: "Natore" },
  { id: "45N06", district: "Nawabganj" },
  { id: "46N07", district: "Netrokona" },
  { id: "47N08", district: "Nilphamari" },
  { id: "48N09", district: "Noakhali" },
  { id: "49P01", district: "Pabna" },
  { id: "50P02", district: "Panchagarh" },
  { id: "51P03", district: "Patuakhali" },
  { id: "52P04", district: "Pirojpur" },
  { id: "53R01", district: "Rajbari" },
  { id: "54R02", district: "Rajshahi" },
  { id: "55R03", district: "Rangamati" },
  { id: "56R04", district: "Rangpur" },
  { id: "57S01", district: "Satkhira" },
  { id: "58S02", district: "Shariatpur" },
  { id: "59S03", district: "Sherpur" },
  { id: "60S04", district: "Sirajgonj" },
  { id: "61S05", district: "Sunamganj" },
  { id: "62S06", district: "Sylhet" },
  { id: "63T01", district: "Tangail" },
  { id: "64T02", district: "Thakurgaon" },
];

export const stores = [
  {
    id: "01B01",
    district: "Bagerhat",
    stores: [
      {
        name: "Bagerhat Flavors",
        address: "123 Bagerhat Rd, Bagerhat",
        phone: "01711-123456",
      },
      {
        name: "Herbal Market",
        address: "45 Main St, Bagerhat",
        phone: "01811-654321",
      },
    ],
  },
  {
    id: "02B02",
    district: "Bandarban",
    stores: [
      {
        name: "Bandarban Essence",
        address: "12 Hill Top, Bandarban",
        phone: "01611-987654",
      },
      {
        name: "Nature's Bounty",
        address: "7 Green Valley, Bandarban",
        phone: "01722-345678",
      },
    ],
  },
  {
    id: "03B03",
    district: "Barguna",
    stores: [
      {
        name: "Barguna Delights",
        address: "99 Riverbank St, Barguna",
        phone: "01911-234567",
      },
      {
        name: "Local Treasures",
        address: "88 Sea View Rd, Barguna",
        phone: "01511-765432",
      },
    ],
  },
  {
    id: "04B04",
    district: "Barisal",
    stores: [
      {
        name: "Barisal Bazaar",
        address: "456 Market St, Barisal",
        phone: "01811-987123",
      },
      {
        name: "Taste of Barisal",
        address: "22 Riverside Ave, Barisal",
        phone: "01733-890123",
      },
    ],
  },
  {
    id: "05B05",
    district: "Bhola",
    stores: [
      {
        name: "Bhola Harvest",
        address: "32 Bhola St, Bhola",
        phone: "01922-123456",
      },
      {
        name: "Island Flavors",
        address: "78 Coastal Rd, Bhola",
        phone: "01522-654321",
      },
    ],
  },
  {
    id: "06B06",
    district: "Bogra",
    stores: [
      {
        name: "Bogra Gourmet",
        address: "34 Bogura Rd, Bogra",
        phone: "01744-567890",
      },
      {
        name: "Spice Route",
        address: "9 Main Plaza, Bogra",
        phone: "01833-789012",
      },
    ],
  },
  {
    id: "07B07",
    district: "Brahmanbaria",
    stores: [
      {
        name: "Brahmanbaria Kitchen",
        address: "21 Brahmanbaria St, Brahmanbaria",
        phone: "01911-345678",
      },
      {
        name: "Culinary Heritage",
        address: "54 Heritage Rd, Brahmanbaria",
        phone: "01711-876543",
      },
    ],
  },

  {
    id: "08C01",
    district: "Chandpur",
    stores: [
      {
        name: "Chandpur Harvest",
        address: "10 Riverbank Rd, Chandpur",
        phone: "01944-123456",
      },
      {
        name: "Spice Haven",
        address: "5 Main Market, Chandpur",
        phone: "01711-654321",
      },
    ],
  },
  {
    id: "09C02",
    district: "Chittagong",
    stores: [
      {
        name: "Chittagong Flavors",
        address: "25 Port Rd, Chittagong",
        phone: "01611-987654",
      },
      {
        name: "Taste of Chittagong",
        address: "88 Ocean Ave, Chittagong",
        phone: "01722-345678",
      },
      {
        name: "Spice Market",
        address: "30 Bazaar St, Chittagong",
        phone: "01911-234567",
      },
    ],
  },
  {
    id: "10C03",
    district: "Chuadanga",
    stores: [
      {
        name: "Chuadanga Essentials",
        address: "14 Main Rd, Chuadanga",
        phone: "01922-765432",
      },
      {
        name: "Local Delights",
        address: "33 River Rd, Chuadanga",
        phone: "01733-890123",
      },
    ],
  },
  {
    id: "11C04",
    district: "Comilla",
    stores: [
      {
        name: "Comilla Marketplace",
        address: "19 Comilla St, Comilla",
        phone: "01911-987654",
      },
      {
        name: "Comilla Flavors",
        address: "22 Market Plaza, Comilla",
        phone: "01711-123456",
      },
    ],
  },
  {
    id: "12C05",
    district: "Cox's Bazar",
    stores: [
      {
        name: "Cox's Bazar Delight",
        address: "44 Beach Rd, Cox's Bazar",
        phone: "01622-345678",
      },
      {
        name: "Coastal Treasures",
        address: "27 Sunset Ave, Cox's Bazar",
        phone: "01811-678901",
      },
    ],
  },
  {
    id: "13D01",
    district: "Dhaka",
    stores: [
      {
        name: "Dhaka Flavors",
        address: "101 Dhaka St, Dhaka",
        phone: "01911-123456",
      },
      {
        name: "Bengal Taste",
        address: "45 City Center, Dhaka",
        phone: "01711-654321",
      },
      {
        name: "Urban Spices",
        address: "78 New Market Rd, Dhaka",
        phone: "01622-987654",
      },
    ],
  },
  {
    id: "14D02",
    district: "Dinajpur",
    stores: [
      {
        name: "Dinajpur Harvest",
        address: "12 Dinajpur Rd, Dinajpur",
        phone: "01933-765432",
      },
      {
        name: "Taste of Dinajpur",
        address: "34 Main St, Dinajpur",
        phone: "01744-890123",
      },
    ],
  },
  {
    id: "15F01",
    district: "Faridpur",
    stores: [
      {
        name: "Faridpur Flavors",
        address: "24 Main Rd, Faridpur",
        phone: "01911-345678",
      },
      {
        name: "Herbal Delights",
        address: "36 Riverside Ave, Faridpur",
        phone: "01722-456789",
      },
    ],
  },
  {
    id: "16F02",
    district: "Feni",
    stores: [
      {
        name: "Feni Essence",
        address: "15 Feni St, Feni",
        phone: "01811-234567",
      },
      {
        name: "Feni Treasures",
        address: "77 Market Rd, Feni",
        phone: "01733-890123",
      },
    ],
  },
  {
    id: "17G01",
    district: "Gaibandha",
    stores: [
      {
        name: "Gaibandha Essentials",
        address: "30 Main Rd, Gaibandha",
        phone: "01911-567890",
      },
      {
        name: "Rural Flavors",
        address: "10 Riverbank St, Gaibandha",
        phone: "01722-678901",
      },
    ],
  },
  {
    id: "18G02",
    district: "Gazipur",
    stores: [
      {
        name: "Gazipur Gourmet",
        address: "25 Gazipur Rd, Gazipur",
        phone: "01611-234567",
      },
      {
        name: "Taste of Gazipur",
        address: "78 Market St, Gazipur",
        phone: "01811-890123",
      },
      {
        name: "Herbal Hub",
        address: "43 New Market, Gazipur",
        phone: "01922-456789",
      },
    ],
  },
  {
    id: "19G03",
    district: "Gopalganj",
    stores: [
      {
        name: "Gopalganj Harvest",
        address: "22 Gopalganj Rd, Gopalganj",
        phone: "01733-123456",
      },
      {
        name: "Local Flavors",
        address: "36 Riverside Ave, Gopalganj",
        phone: "01911-987654",
      },
    ],
  },
  {
    id: "20H01",
    district: "Habiganj",
    stores: [
      {
        name: "Habiganj Essence",
        address: "15 Habiganj St, Habiganj",
        phone: "01911-345678",
      },
      {
        name: "Herbal Treats",
        address: "29 Market Rd, Habiganj",
        phone: "01711-654321",
      },
    ],
  },
  {
    id: "21J01",
    district: "Jamalpur",
    stores: [
      {
        name: "Jamalpur Flavors",
        address: "50 Jamalpur Rd, Jamalpur",
        phone: "01922-765432",
      },
      {
        name: "Taste of Jamalpur",
        address: "28 Main St, Jamalpur",
        phone: "01733-890123",
      },
    ],
  },
  {
    id: "22J02",
    district: "Jessore",
    stores: [
      {
        name: "Jessore Essence",
        address: "11 Jessore St, Jessore",
        phone: "01933-987654",
      },
      {
        name: "Local Delights",
        address: "70 Main Market, Jessore",
        phone: "01822-456789",
      },
    ],
  },
  {
    id: "23J03",
    district: "Jhalokati",
    stores: [
      {
        name: "Jhalokati Harvest",
        address: "33 Jhalokati Rd, Jhalokati",
        phone: "01622-123456",
      },
      {
        name: "Riverside Flavors",
        address: "47 Market St, Jhalokati",
        phone: "01911-345678",
      },
    ],
  },
  {
    id: "24J04",
    district: "Jhenaidah",
    stores: [
      {
        name: "Jhenaidah Treasures",
        address: "14 Jhenaidah Rd, Jhenaidah",
        phone: "01711-654321",
      },
      {
        name: "Jhenaidah Delights",
        address: "30 Main St, Jhenaidah",
        phone: "01922-678901",
      },
    ],
  },
  {
    id: "25J05",
    district: "Joypurhat",
    stores: [
      {
        name: "Joypurhat Essence",
        address: "18 Joypurhat Rd, Joypurhat",
        phone: "01911-987654",
      },
      {
        name: "Local Treats",
        address: "22 Market St, Joypurhat",
        phone: "01722-345678",
      },
    ],
  },
  {
    id: "26K01",
    district: "Khagrachari",
    stores: [
      {
        name: "Khagrachari Flavors",
        address: "20 Khagrachari Rd, Khagrachari",
        phone: "01911-234567",
      },
      {
        name: "Herbal Corner",
        address: "42 Market St, Khagrachari",
        phone: "01833-876543",
      },
    ],
  },
  {
    id: "27K02",
    district: "Khulna",
    stores: [
      {
        name: "Khulna Gourmet",
        address: "55 Khulna Rd, Khulna",
        phone: "01922-345678",
      },
      {
        name: "Taste of Khulna",
        address: "90 Main St, Khulna",
        phone: "01711-654321",
      },
      {
        name: "Coastal Flavors",
        address: "12 Riverside Rd, Khulna",
        phone: "01811-234567",
      },
    ],
  },
  {
    id: "28K03",
    district: "Kishoreganj",
    stores: [
      {
        name: "Kishoreganj Delights",
        address: "22 Kishoreganj Rd, Kishoreganj",
        phone: "01922-456789",
      },
      {
        name: "Herbal Haven",
        address: "40 Market St, Kishoreganj",
        phone: "01733-567890",
      },
    ],
  },
  {
    id: "29K04",
    district: "Kurigram",
    stores: [
      {
        name: "Kurigram Treasures",
        address: "10 Kurigram Rd, Kurigram",
        phone: "01911-765432",
      },
      {
        name: "Kurigram Harvest",
        address: "25 Main St, Kurigram",
        phone: "01711-890123",
      },
    ],
  },
  {
    id: "30K05",
    district: "Kushtia",
    stores: [
      {
        name: "Kushtia Essence",
        address: "33 Kushtia Rd, Kushtia",
        phone: "01922-345678",
      },
      {
        name: "Kushtia Flavors",
        address: "29 Market St, Kushtia",
        phone: "01711-654321",
      },
    ],
  },
  {
    id: "31L01",
    district: "Lakshmipur",
    stores: [
      {
        name: "Lakshmipur Delights",
        address: "12 Lakshmipur Rd, Lakshmipur",
        phone: "01911-234567",
      },
      {
        name: "Local Essence",
        address: "45 Main St, Lakshmipur",
        phone: "01811-678901",
      },
    ],
  },
  {
    id: "32L02",
    district: "Lalmonirhat",
    stores: [
      {
        name: "Lalmonirhat Harvest",
        address: "22 Lalmonirhat Rd, Lalmonirhat",
        phone: "01922-765432",
      },
      {
        name: "Lalmonirhat Flavors",
        address: "10 Main St, Lalmonirhat",
        phone: "01733-890123",
      },
    ],
  },
  {
    id: "33M01",
    district: "Madaripur",
    stores: [
      {
        name: "Madaripur Essence",
        address: "30 Madaripur Rd, Madaripur",
        phone: "01911-345678",
      },
      {
        name: "Herbal Treasures",
        address: "25 Market St, Madaripur",
        phone: "01722-456789",
      },
    ],
  },
  {
    id: "34M02",
    district: "Magura",
    stores: [
      {
        name: "Magura Flavors",
        address: "22 Magura Rd, Magura",
        phone: "01911-987654",
      },
      {
        name: "Local Delights",
        address: "18 Market St, Magura",
        phone: "01733-890123",
      },
    ],
  },
  {
    id: "35M03",
    district: "Manikganj",
    stores: [
      {
        name: "Manikganj Harvest",
        address: "15 Manikganj Rd, Manikganj",
        phone: "01911-234567",
      },
      {
        name: "Herbal Haven",
        address: "35 Market St, Manikganj",
        phone: "01722-678901",
      },
    ],
  },
  {
    id: "36M04",
    district: "Maulvibazar",
    stores: [
      {
        name: "Maulvibazar Essence",
        address: "10 Maulvibazar Rd, Maulvibazar",
        phone: "01911-123456",
      },
      {
        name: "Maulvibazar Treasures",
        address: "20 Market St, Maulvibazar",
        phone: "01811-345678",
      },
    ],
  },
  {
    id: "37M05",
    district: "Meherpur",
    stores: [
      {
        name: "Meherpur Delights",
        address: "12 Meherpur Rd, Meherpur",
        phone: "01922-456789",
      },
      {
        name: "Herbal Essence",
        address: "25 Main St, Meherpur",
        phone: "01711-678901",
      },
    ],
  },
  {
    id: "38M06",
    district: "Munshiganj",
    stores: [
      {
        name: "Munshiganj Flavors",
        address: "30 Munshiganj Rd, Munshiganj",
        phone: "01911-345678",
      },
      {
        name: "Herbal Market",
        address: "22 Market St, Munshiganj",
        phone: "01722-890123",
      },
    ],
  },
  {
    id: "39M07",
    district: "Mymensingh",
    stores: [
      {
        name: "Mymensingh Essence",
        address: "10 Mymensingh Rd, Mymensingh",
        phone: "01922-234567",
      },
      {
        name: "Mymensingh Treasures",
        address: "33 Market St, Mymensingh",
        phone: "01733-678901",
      },
    ],
  },
  {
    id: "40N01",
    district: "Naogaon",
    stores: [
      {
        name: "Naogaon Flavors",
        address: "40 Naogaon Rd, Naogaon",
        phone: "01922-345678",
      },
      {
        name: "Naogaon Delights",
        address: "25 Main St, Naogaon",
        phone: "01711-567890",
      },
    ],
  },
  {
    id: "41N02",
    district: "Narail",
    stores: [
      {
        name: "Narail Essence",
        address: "15 Narail Rd, Narail",
        phone: "01911-678901",
      },
      {
        name: "Local Treasures",
        address: "20 Market St, Narail",
        phone: "01722-456789",
      },
    ],
  },
  {
    id: "42N03",
    district: "Narayanganj",
    stores: [
      {
        name: "Narayanganj Gourmet",
        address: "60 Narayanganj Rd, Narayanganj",
        phone: "01933-987654",
      },
      {
        name: "Taste of Narayanganj",
        address: "10 River St, Narayanganj",
        phone: "01711-123456",
      },
      {
        name: "Narayanganj Delights",
        address: "25 Main Market, Narayanganj",
        phone: "01811-678901",
      },
    ],
  },
  {
    id: "43N04",
    district: "Narsingdi",
    stores: [
      {
        name: "Narsingdi Harvest",
        address: "45 Narsingdi Rd, Narsingdi",
        phone: "01911-234567",
      },
      {
        name: "Herbal Haven",
        address: "10 Main St, Narsingdi",
        phone: "01722-890123",
      },
    ],
  },
  {
    id: "44N05",
    district: "Natore",
    stores: [
      {
        name: "Natore Essence",
        address: "30 Natore Rd, Natore",
        phone: "01922-567890",
      },
      {
        name: "Natore Flavors",
        address: "12 Market St, Natore",
        phone: "01711-678901",
      },
    ],
  },
  {
    id: "45N06",
    district: "Nawabganj",
    stores: [
      {
        name: "Nawabganj Treasures",
        address: "25 Nawabganj Rd, Nawabganj",
        phone: "01911-765432",
      },
      {
        name: "Local Essence",
        address: "40 Market St, Nawabganj",
        phone: "01722-890123",
      },
    ],
  },
  {
    id: "46N07",
    district: "Netrokona",
    stores: [
      {
        name: "Netrokona Flavors",
        address: "15 Netrokona Rd, Netrokona",
        phone: "01922-345678",
      },
      {
        name: "Netrokona Essentials",
        address: "50 Market St, Netrokona",
        phone: "01711-234567",
      },
    ],
  },
  {
    id: "47N08",
    district: "Nilphamari",
    stores: [
      {
        name: "Nilphamari Harvest",
        address: "30 Nilphamari Rd, Nilphamari",
        phone: "01922-567890",
      },
      {
        name: "Nilphamari Essence",
        address: "22 Market St, Nilphamari",
        phone: "01711-678901",
      },
    ],
  },
  {
    id: "48N09",
    district: "Noakhali",
    stores: [
      {
        name: "Noakhali Flavors",
        address: "20 Noakhali Rd, Noakhali",
        phone: "01911-123456",
      },
      {
        name: "Coastal Treasures",
        address: "11 River St, Noakhali",
        phone: "01722-345678",
      },
    ],
  },
  {
    id: "49P01",
    district: "Pabna",
    stores: [
      {
        name: "Pabna Essence",
        address: "18 Pabna Rd, Pabna",
        phone: "01922-765432",
      },
      {
        name: "Pabna Flavors",
        address: "12 Market St, Pabna",
        phone: "01733-890123",
      },
    ],
  },
  {
    id: "50P02",
    district: "Panchagarh",
    stores: [
      {
        name: "Panchagarh Harvest",
        address: "14 Panchagarh Rd, Panchagarh",
        phone: "01911-234567",
      },
      {
        name: "Local Delights",
        address: "40 Market St, Panchagarh",
        phone: "01711-678901",
      },
    ],
  },
  {
    id: "51P03",
    district: "Patuakhali",
    stores: [
      {
        name: "Patuakhali Flavors",
        address: "22 Patuakhali Rd, Patuakhali",
        phone: "01922-345678",
      },
      {
        name: "Patuakhali Treasures",
        address: "15 Market St, Patuakhali",
        phone: "01733-678901",
      },
    ],
  },
  {
    id: "52P04",
    district: "Pirojpur",
    stores: [
      {
        name: "Pirojpur Essence",
        address: "10 Pirojpur Rd, Pirojpur",
        phone: "01911-234567",
      },
      {
        name: "Pirojpur Delights",
        address: "35 Market St, Pirojpur",
        phone: "01711-890123",
      },
    ],
  },
  {
    id: "53R01",
    district: "Rajbari",
    stores: [
      {
        name: "Rajbari Harvest",
        address: "25 Rajbari Rd, Rajbari",
        phone: "01911-123456",
      },
      {
        name: "Rajbari Treasures",
        address: "12 Market St, Rajbari",
        phone: "01722-345678",
      },
    ],
  },
  {
    id: "54R02",
    district: "Rajshahi",
    stores: [
      {
        name: "Rajshahi Essence",
        address: "55 Rajshahi Rd, Rajshahi",
        phone: "01922-345678",
      },
      {
        name: "Local Flavors",
        address: "30 Main St, Rajshahi",
        phone: "01711-678901",
      },
    ],
  },
  {
    id: "55R03",
    district: "Rangamati",
    stores: [
      {
        name: "Rangamati Flavors",
        address: "40 Rangamati Rd, Rangamati",
        phone: "01922-123456",
      },
      {
        name: "Rangamati Treasures",
        address: "15 Market St, Rangamati",
        phone: "01722-678901",
      },
    ],
  },
  {
    id: "56R04",
    district: "Rangpur",
    stores: [
      {
        name: "Rangpur Essence",
        address: "30 Rangpur Rd, Rangpur",
        phone: "01911-765432",
      },
      {
        name: "Rangpur Flavors",
        address: "22 Main St, Rangpur",
        phone: "01733-890123",
      },
    ],
  },

  {
    id: "57S01",
    district: "Satkhira",
    stores: [
      {
        name: "Satkhira Delights",
        address: "10 Satkhira Rd, Satkhira",
        phone: "01922-678901",
      },
      {
        name: "Satkhira Essence",
        address: "25 Main St, Satkhira",
        phone: "01711-890123",
      },
    ],
  },
  {
    id: "58S02",
    district: "Shariatpur",
    stores: [
      {
        name: "Shariatpur Flavors",
        address: "30 Shariatpur Rd, Shariatpur",
        phone: "01911-234567",
      },
      {
        name: "Shariatpur Harvest",
        address: "15 Market St, Shariatpur",
        phone: "01733-678901",
      },
    ],
  },
  {
    id: "59S03",
    district: "Sherpur",
    stores: [
      {
        name: "Sherpur Essence",
        address: "20 Sherpur Rd, Sherpur",
        phone: "01922-456789",
      },
      {
        name: "Sherpur Delights",
        address: "35 Market St, Sherpur",
        phone: "01711-678901",
      },
    ],
  },
  {
    id: "60S04",
    district: "Sirajgonj",
    stores: [
      {
        name: "Sirajgonj Harvest",
        address: "40 Sirajgonj Rd, Sirajgonj",
        phone: "01911-345678",
      },
      {
        name: "Sirajgonj Treasures",
        address: "22 Main St, Sirajgonj",
        phone: "01722-890123",
      },
    ],
  },
  {
    id: "61S05",
    district: "Sunamganj",
    stores: [
      {
        name: "Sunamganj Flavors",
        address: "12 Sunamganj Rd, Sunamganj",
        phone: "01922-567890",
      },
      {
        name: "Sunamganj Essence",
        address: "25 Market St, Sunamganj",
        phone: "01711-234567",
      },
    ],
  },
  {
    id: "62S06",
    district: "Sylhet",
    stores: [
      {
        name: "Sylhet Treasures",
        address: "55 Sylhet Rd, Sylhet",
        phone: "01911-987654",
      },
      {
        name: "Sylhet Essence",
        address: "30 Market St, Sylhet",
        phone: "01722-345678",
      },
      {
        name: "Sylhet Delights",
        address: "10 Main St, Sylhet",
        phone: "01811-678901",
      },
    ],
  },
  {
    id: "63T01",
    district: "Tangail",
    stores: [
      {
        name: "Tangail Flavors",
        address: "22 Tangail Rd, Tangail",
        phone: "01911-456789",
      },
      {
        name: "Tangail Harvest",
        address: "15 Market St, Tangail",
        phone: "01711-890123",
      },
    ],
  },
  {
    id: "64T02",
    district: "Thakurgaon",
    stores: [
      {
        name: "Thakurgaon Essence",
        address: "40 Thakurgaon Rd, Thakurgaon",
        phone: "01922-234567",
      },
      {
        name: "Thakurgaon Delights",
        address: "12 Market St, Thakurgaon",
        phone: "01722-678901",
      },
    ],
  },
];
