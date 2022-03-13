export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  likes: number;
  category_id: number;
  img_url: string;
  url: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Phone 11',
    rating: 10,
    price: 1000,
    likes: 0,
    category_id: 1,
    description: 'Apple iPhone 11 [128GB, Purple] + Carrier Subscription [Cricket Wireless]',
    img_url: 'https://m.media-amazon.com/images/I/71xn9bCRfhL._FMwebp__.jpg',
    url: 'https://www.amazon.com/Apple-Carrier-Subscription-Cricket-Wireless/dp/B084GSMNRN/ref=sr_1_1?crid=1DM6XKPPQCD2S&keywords=iphone+11&qid=1647179847&sprefix=iphone+1%2Caps%2C274&sr=8-1'
  },
  {
    id: 2,
    name: 'Phone X',
    rating: 10,
    price: 1000,
    likes: 0,
    category_id: 1,
    description: 'Apple iPhone X, 64GB, Silver - GSM Unlocked (Renewed Premium)',
    img_url: 'https://m.media-amazon.com/images/I/81SSw14XZHL._AC_SX679_.jpg',
    url: 'https://www.amazon.com/Apple-iPhone-64GB-Silver-Unlocked/dp/B08BJHS8K4/ref=sr_1_1?crid=5MNJDU0FC4PN&keywords=iphone+x&qid=1647179808&sprefix=iphone+xs%2Caps%2C270&sr=8-1'
  },
  {
    id: 3,
    name: 'Phone XS',
    rating: 10,
    price: 1000,
    likes: 0,
    category_id: 1,
    description: 'A large phone with one of the best screens',
    img_url: 'https://m.media-amazon.com/images/I/61V7G4oREVL._AC_SX679_.jpg',
    url: 'https://www.amazon.com/Apple-iPhone-256GB-Space-Gray/dp/B08BF7K964/ref=sr_1_1?crid=31VS1HYIAL53U&keywords=iphone+xs&qid=1647179779&sprefix=iphone+x%2Caps%2C274&sr=8-1'
  },
  {
    id: 4,
    name: 'Phone 8',
    rating: 10,
    price: 1000,
    likes: 0,
    category_id: 1,
    description: 'Apple iPhone 8, 64GB, Gold - GSM Carriers (Renewed Premium)',
    img_url: 'https://m.media-amazon.com/images/I/51biqZP8+2L._AC_SX679_.jpg',
    url: 'https://www.amazon.com/Apple-iPhone-64GB-Gold-Unlocked/dp/B08BJJ1T9F/ref=sr_1_1?crid=20P99LIEP0Q3R&keywords=iphone+8&qid=1647179730&sprefix=iphone+%2Caps%2C278&sr=8-1'
  },
  {
    id: 5,
    name: 'Phone 7',
    rating: 10,
    price: 1000,
    likes: 0,
    category_id: 1,
    description: 'Total Wireless Apple iPhone 7 4G LTE Prepaid Smartphone - 32GB - Black - Carrier Locked',
    img_url: 'https://m.media-amazon.com/images/I/31+rHqWgOrL._AC_.jpg',
    url: 'https://www.amazon.com/Total-Wireless-iPhone-Prepaid-Smartphone/dp/B08CL482JL/ref=sr_1_3?crid=36PZ4JBO94ZHA&keywords=iphone+6s&qid=1647179680&sprefix=iphone+6%2Caps%2C421&sr=8-3'
  },
  {
    id: 6,
    name: 'Toshiba 55-inch',
    rating: 10,
    price: 1000,
    likes: 0,
    category_id: 2,
    description: 'All-New Toshiba 55-inch Class M550 Series LED 4K UHD Smart Fire TV with Hands-Free with Alexa (55M550KU, 2021 Model)',
    img_url: 'https://m.media-amazon.com/images/I/81MZvjRyWXL._AC_SX679_.jpg',
    url: 'https://www.amazon.com/All-New-Toshiba-55-inch-Hands-Free-55M550KU/dp/B09K8ZY7KF/ref=sr_1_1_sspa?crid=3IVKWNEF1CCHS&keywords=tv&qid=1647183342&sprefix=t%2Caps%2C518&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzUVFBTjY0TkxIMFo2JmVuY3J5cHRlZElkPUEwNTUxNjAzM0tDWTlJQlcxUFI2WCZlbmNyeXB0ZWRBZElkPUEwODA4NjM0RjI4RTVCVEdNR1o1JndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=='
  },
  {
    id: 7,
    name: 'Insignia 32-inch',
    rating: 10,
    price: 1000,
    likes: 0,
    category_id: 2,
    description: 'nsignia 32-inch Class F20 Series Smart HD 720p Fire TV (NS-32F201NA22, 2021 Model)',
    img_url: 'https://m.media-amazon.com/images/I/61qXHwJeGVS._AC_SX679_.jpg',
    url: 'https://www.amazon.com/All-New-Insignia-NS-32F201NA22-32-inch-Released/dp/B08X7JSCHQ/ref=sr_1_2_sspa?crid=3IVKWNEF1CCHS&keywords=tv&qid=1647183342&sprefix=t%2Caps%2C518&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzUVFBTjY0TkxIMFo2JmVuY3J5cHRlZElkPUEwNTUxNjAzM0tDWTlJQlcxUFI2WCZlbmNyeXB0ZWRBZElkPUEwMDgyMTc5M1QxQTI5QzVKVFZLRCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU='
  },
  {
    id: 8,
    name: 'TCL 32-inch 1080p',
    rating: 10,
    price: 1000,
    likes: 0,
    category_id: 2,
    description: 'TCL 32-inch 1080p Roku Smart LED TV - 32S327, 2019 Model',
    img_url: 'https://m.media-amazon.com/images/I/71wYJc19PiL._AC_SX679_.jpg',
    url: 'https://www.amazon.com/TCL-32S327-32-Inch-1080p-Smart/dp/B07F981R8M/ref=sr_1_3?crid=3IVKWNEF1CCHS&keywords=tv&qid=1647183342&sprefix=t%2Caps%2C518&sr=8-3'
  },
  {
    id: 9,
    name: 'VIZIO 50-Inch',
    rating: 10,
    description: 'VIZIO 50-Inch M6 Series Premium 4K UHD Quantum Color LED HDR Smart TV with Apple AirPlay and Chromecast Built-in, Dolby Vision, HDR10+, HDMI 2.1, Variable Refresh Rate, M50Q6-J01, 2021 Model',
    price: 1000,
    likes: 0,
    category_id: 2,
    img_url: 'https://m.media-amazon.com/images/I/81OH5Nk47iL._AC_SX679_.jpg',
    url: 'https://www.amazon.com/VIZIO-50-Inch-Chromecast-Variable-M50Q6-J01/dp/B093RXYXDW/ref=sr_1_5?crid=3IVKWNEF1CCHS&keywords=tv&qid=1647183342&sprefix=t%2Caps%2C518&sr=8-5'
  },
  {
    id: 10,
    name: 'Amazon Fire TV 43" 4-Series 4K UHD smart TV',
    rating: 10,
    description: '',
    price: 1000,
    likes: 0,
    category_id: 2,
    img_url: 'https://m.media-amazon.com/images/I/61PCucYgPCL._AC_SX679_.jpg',
    url: 'https://www.amazon.com/amazon-fire-tv-43-inch-4-series-4k-smart-tv/dp/B08SWD2SCK/ref=sr_1_7_sspa?crid=3IVKWNEF1CCHS&keywords=tv&qid=1647183342&sprefix=t%2Caps%2C518&sr=8-7-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzUVFBTjY0TkxIMFo2JmVuY3J5cHRlZElkPUEwNTUxNjAzM0tDWTlJQlcxUFI2WCZlbmNyeXB0ZWRBZElkPUEwNTExODA3RlBCVE1VRUpIQlhQJndpZGdldE5hbWU9c3BfbXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=='
  },
  {
    id: 11,
    name: 'Basketball',
    rating: 10,
    price: 1000,
    likes: 0,
    category_id: 3,
    description: 'Spalding Street Outdoor Basketball',
    img_url: 'https://m.media-amazon.com/images/I/7187crn3osS._AC_SX679_.jpg',
    url: 'https://www.amazon.com/Spalding-Street-Outdoor-Basketball-29-5/dp/B08QJC5YPX/ref=sr_1_4?crid=MWVICR2KOPAW&keywords=basketball&qid=1647183653&sprefix=%2Caps%2C2796&sr=8-4'
  },
  {
    id: 12,
    name: 'Golf Practice Net',
    rating: 10,
    price: 1000,
    likes: 0,
    category_id: 3,
    description: '10x7ft Golf Hitting Training Aids Nets with Target and Carry Bag for Backyard Driving Chipping - 1 Golf Mat -5 Golf Balls - 1 Golf Tees- Men Kids Indoor Outdoor Sports Game',
    img_url: 'https://m.media-amazon.com/images/I/71q+BhJU7UL._AC_SX679_.jpg',
    url: 'https://www.amazon.com/Practice-Hitting-Training-Backyard-Chipping/dp/B08L7JNH46/ref=sr_1_16?crid=2CDXC0T6HVIWJ&keywords=golf&qid=1647183669&sprefix=basketballolf%2Caps%2C731&sr=8-16'
  },
  {
    id: 13,
    name: 'Football',
    rating: 10,
    price: 1000,
    likes: 0,
    category_id: 3,
    description: '',
    img_url: 'https://m.media-amazon.com/images/I/81LCp7WcVHL._AC_SX679_.jpg',
    url: 'https://www.amazon.com/Wilson-All-Pro-Composite-Football/dp/B000TK99ZS/ref=sr_1_1_sspa?keywords=football&qid=1647183693&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzQ0NFRzhWNFc1VzhDJmVuY3J5cHRlZElkPUEwMzY0OTQxMzNOWDE0RTU4MTVWRyZlbmNyeXB0ZWRBZElkPUEwODczNTQxU1FXQjJRMExRNURYJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=='
  },
  {
    id: 14,
    name: ' Hockey Net',
    rating: 10,
    price: 1000,
    likes: 0,
    category_id: 3,
    description: 'Franklin Sports Youth Street Hockey Net - Indoor + Outdoor Steel Hockey Goal for Kids Roller + Street Hockey - Portable Junior Goal - 54"',
    img_url: 'https://m.media-amazon.com/images/I/81NNpzQ4H7L._AC_SX679_.jpg',
    url: 'https://www.amazon.com/Franklin-Sports-Steel-Street-Hockey/dp/B00V57L880/ref=sr_1_13?crid=3OUZMPIO331Z5&keywords=hockey&qid=1647183706&sprefix=hockey%2Caps%2C1043&sr=8-13'
  },
  {
    id: 15,
    name: 'Western Star Soccer Ball American USA',
    rating: 10,
    price: 1000,
    likes: 0,
    category_id: 3,
    description: 'Size 4 & Size 5 - Official Match Weight - 5 Colors - Youth & Adult Soccer Players - Inflate & Play with Durable, Long-Lasting Construction & Attractive Soccer Balls',
    img_url: 'https://m.media-amazon.com/images/I/91RywVIf3FL._AC_SX679_.jpg',
    url: 'https://www.amazon.com/Western-Star-Official-American-5%EF%B8%B1Official/dp/B08NLDNX9Z/ref=sr_1_4_sspa?keywords=soccer+ball&qid=1647183882&sr=8-4-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFLSzhJTVQ3QktQMEQmZW5jcnlwdGVkSWQ9QTA2Nzg0MDkxM1VKSTFaWEpaTTdIJmVuY3J5cHRlZEFkSWQ9QTA5NDQ5OTMySVBXQTRMTkJaVEtBJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=='
  },
  {
    id: 16,
    name: '2022 Flagship HP 15.6',
    rating: 10,
    price: 1000,
    likes: 0,
    category_id: 4,
    description: '2022 Flagship HP 15.6\'\' FHD IPS Micro-Edge Laptop, AMD 6-Core Ryzen 5 5500U (Upto 4.0GHz, Beat i7-10710U), 8GB RAM, 256GB PCIe SSD,Radeon Graphics,Wi-Fi, Webcam, Fast Charge, Windows 11+HubxcelCables',
    img_url: 'https://m.media-amazon.com/images/I/81GzHjQ0mEL._AC_SX679_.jpg',
    url: 'https://www.amazon.com/Flagship-HP-15-6-Laptop-HubxcelCables/dp/B09S5MR596/ref=sr_1_1_sspa?crid=3NA00CBLTV2VD&keywords=laptop&qid=1647183724&sprefix=%2Caps%2C1489&sr=8-1-spons&psc=1&smid=A39LX1CZ9BSTRA&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyNzdURkdKUTI1M0FBJmVuY3J5cHRlZElkPUEwNjg3Mzg5MklQNVNRR04xVlE1RCZlbmNyeXB0ZWRBZElkPUEwNjI3MTI5NElNTFhWVVRUMEwzJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=='
  },
  {
    id: 17,
    name: 'Acer Aspire 5 A515-46-R3UB | 15.6\"',
    rating: 10,
    price: 1000,
    likes: 0,
    category_id: 4,
    description: 'Acer Aspire 5 A515-46-R3UB | 15.6" Full HD IPS Display | AMD Ryzen 3 3350U Quad-Core Mobile Processor | 4GB DDR4 | 128GB NVMe SSD | WiFi 6 | Backlit KB | FPR | Amazon Alexa | Windows 11 Home in S mode',
    img_url: 'https://m.media-amazon.com/images/I/7189iXimfWL._AC_SX679_.jpg',
    url: 'https://www.amazon.com/Acer-A515-46-R3UB-Display-Quad-Core-Processor/dp/B09HVC79PC/ref=sr_1_2?crid=3NA00CBLTV2VD&keywords=laptop&qid=1647183724&sprefix=%2Caps%2C1489&sr=8-2'
  },
  {
    id: 18,
    name: 'Lenovo Flex 5 Laptop, 14.0"',
    rating: 10,
    price: 1000,
    likes: 0,
    category_id: 4,
    description: 'Lenovo Flex 5 Laptop, 14.0" FHD Touch Display, AMD Ryzen 5 5500U, 16GB RAM, 256GB Storage, AMD Radeon Graphics, Windows 11 Home',
    img_url: 'https://m.media-amazon.com/images/I/71zZiQGzc5L._AC_SX679_.jpg',
    url: 'https://www.amazon.com/Lenovo-Processor-Graphics-82HU00JWUS-Graphite/dp/B09BG96KFJ/ref=sr_1_3?crid=3NA00CBLTV2VD&keywords=laptop&qid=1647183724&sprefix=%2Caps%2C1489&sr=8-3'
  },
  {
    id: 19,
    name: 'HP 15-inch Laptop',
    rating: 10,
    description: 'HP 15-inch Laptop, 11th Generation Intel Core i5-1135G7, Intel Iris Xe Graphics, 8 GB RAM, 256 GB SSD, Windows 11 Home (15-dy2024nr, Natural silver)',
    price: 1000,
    likes: 0,
    category_id: 4,
    img_url: 'https://m.media-amazon.com/images/I/71RD3vsjIYL._AC_SX679_.jpg',
    url: 'https://www.amazon.com/HP-Generation-i5-1135G7-Graphics-15-dy2024nr/dp/B09FXFDGN3/ref=sr_1_5?crid=3NA00CBLTV2VD&keywords=laptop&qid=1647183724&sprefix=%2Caps%2C1489&sr=8-5'
  },
  {
    id: 20,
    name: 'Acer Nitro 5 AN515-55-53E5 Gaming Laptop',
    rating: 10,
    description: 'Acer Nitro 5 AN515-55-53E5 Gaming Laptop | Intel Core i5-10300H | NVIDIA GeForce RTX 3050 Laptop GPU | 15.6" FHD 144Hz IPS Display | 8GB DDR4 | 256GB NVMe SSD | Intel Wi-Fi 6 | Backlit Keyboard',
    price: 1000,
    likes: 0,
    category_id: 4,
    img_url: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_SX679_.jpg',
    url: 'https://www.amazon.com/Acer-AN515-55-53E5-i5-10300H-GeForce-Keyboard/dp/B092YHJGMN/ref=sr_1_4?crid=3NA00CBLTV2VD&keywords=laptop&qid=1647183724&sprefix=%2Caps%2C1489&sr=8-4'
  }
];
