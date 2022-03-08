export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    link: 'https://www.amazon.com/Apple-iPhone-XR-64GB-White/dp/B08BGD4G36/ref=sr_1_1?crid=1LN33MABLSS46&keywords=iphone+xr&qid=1646629745&sprefix=iphone+xl%2Caps%2C258&sr=8-1',
    photo: 'https://m.media-amazon.com/images/I/41ZjUOH6nRL._AC_.jpg',
    rating: '4/5',
    likes: 7,
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    link: 'https://www.amazon.com/Smartphone-Android-Phones-Camera-Google/dp/B08KTHNWX3/ref=sr_1_3?crid=2NN1CL6RB73FE&keywords=Phone+Mini&qid=1646630398&sprefix=phone+mini+%2Caps%2C664&sr=8-3',
    photo: 'https://m.media-amazon.com/images/I/61lFK0IvCML._AC_SX679_.jpg',
    rating: '2/5',
    likes: 6,
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    link: 'https://www.amazon.com/total-wireless-Alcatel-32GB-Black/dp/B09CLQBB6X/ref=sr_1_1?crid=YLI5YCVH3ZX1&keywords=phonr&qid=1646630465&sprefix=phon%2Caps%2C264&sr=8-1',
    photo: 'https://m.media-amazon.com/images/I/61-fB+GkifL._AC_SX679_.jpg',
    rating: '1/5',
    likes: 4,
  },
  {
    id: 4,
    name: 'SMTAV PTZ Camera, 20X-SDI, 1080P60 Full HD, HDMI + 3G-SDI + IP Streaming simultaneously Output, high-Speed PTZ, Professional Video conferencing Camera (SDI, 20X)',
    price: 199,
    description: 'A great camera',
    link: 'https://www.amazon.com/SMTAV-simultaneously-high-Speed-Professional-conferencing/dp/B0933353Q6/ref=sr_1_2_sspa?crid=2UHLWBMY0OSAY&keywords=camera&qid=1646643138&sprefix=camera%2Caps%2C423&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyQVJCU1ZXMFQ4T0sxJmVuY3J5cHRlZElkPUEwMzA1MTgwMzBNTFJFMFpNNk5aSSZlbmNyeXB0ZWRBZElkPUEwNjY3MTcyWEZaM1c4RUw3MFFBJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==',
    photo: 'https://m.media-amazon.com/images/I/61DYVPy4dES._AC_UY218_.jpg',
    rating: '4/5',
    likes: 3,
  },
  {
    id: 5,
    name: 'VIZIO 58-Inch V-Series 4K UHD LED HDR Smart TV with Apple AirPlay and Chromecast Built-in, Dolby Vision, HDR10+, HDMI 2.1, Auto Game Mode and Low Latency Gaming, V585-J01, 2021 Model',
    price: 1099,
    description: '',
    link: 'https://www.amazon.com/VIZIO-58-Inch-AirPlay-Chromecast-V585-J01/dp/B092Q2B9N3/ref=sr_1_3?keywords=television&qid=1646643258&sprefix=tele%2Caps%2C504&sr=8-3',
    photo: 'https://m.media-amazon.com/images/I/813UjyhFSnL._AC_UY218_.jpg',
    rating: '4,1/5',
    likes: 0,
  },
  {
    id: 6,
    name: "Amazon Essentials Men's Performance Tech Loose-Fit Shorts, Pack of 2",
    price: 799,
    description:
      'Roomy fit through hip, thigh, and legLightweight, moisture-wicking, breathable active stretch fabric Internal drawcord at waist Side panel pockets',
    link: 'https://www.amazon.com/Amazon-Essentials-Loose-Fit-Performance-X-Large/dp/B08JLF6FQN/ref=sr_1_73?crid=5MTN2XP7SLTM&keywords=sport&qid=1646747464&sprefix=spor%2Caps%2C247&sr=8-73',
    photo: 'https://m.media-amazon.com/images/I/91NyBQYUMzL._AC_UX679_.jpg',
    rating: '4/5',
    likes: 7,
  },
  {
    id: 7,
    name: '4 Pack Reusable Sport Face Masks for Men Women and Youth Outdoor Work Out',
    price: 699,
    description: 'A great phone with one of the best cameras',
    link: 'https://www.amazon.com/Reusable-Washable-Athletic-Adjustable-Comfortable/dp/B09QT3QSV1/ref=sr_1_94?crid=5MTN2XP7SLTM&keywords=sport&qid=1646747464&sprefix=spor%2Caps%2C247&sr=8-94',
    photo: 'https://m.media-amazon.com/images/I/51j96LhPnCL._AC_SX679_.jpg',
    rating: '2/5',
    likes: 6,
  },
  {
    id: 8,
    name: 'Phone Standard',
    price: 299,
    description: "Champion Men's Lightweight Open Bottom Jersey Pant",
    link: 'https://www.amazon.com/Champion-Authentic-Bottom-Jersey-Medium/dp/B00FSB5YR0/ref=sr_1_97?crid=5MTN2XP7SLTM&keywords=sport&qid=1646747464&sprefix=spor%2Caps%2C247&sr=8-97',
    photo: 'https://m.media-amazon.com/images/I/71hHHmamJNL._AC_UY550_.jpg',
    rating: '1/5',
    likes: 4,
  },
  {
    id: 9,
    name: 'Adventure/Touring Motorcycle Jacket For Men Textile Motorbike CE Armored Waterproof Jackets ADV 4-Season (Light Grey, XL)',
    price: 199,
    description: 'A great camera',
    link: 'https://www.amazon.com/Adventure-Motorcycle-Motorbike-Waterproof-ADV/dp/B07QGK1QCY/ref=sr_1_98_sspa?crid=5MTN2XP7SLTM&keywords=sport&qid=1646747491&sprefix=spor%2Caps%2C247&sr=8-98-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFJMEVCV1EzWDVXSTMmZW5jcnlwdGVkSWQ9QTA4NTA1MTQxRFVDUUVDNFpNSjVTJmVuY3J5cHRlZEFkSWQ9QTAxMjEwMTAyMTZCSzhNTlVHMFdCJndpZGdldE5hbWU9c3BfYXRmX25leHQmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&th=1',
    photo: 'https://m.media-amazon.com/images/I/91KPepMsrxL._AC_SX466_.jpg',
    rating: '4/5',
    likes: 3,
  },
  {
    id: 10,
    name: 'Spalding Zi/O Indoor-Outdoor Basketball',
    price: 1099,
    description: '',
    link: 'https://www.amazon.com/Spalding-Zi-Indoor-Outdoor-Basketball-29-5/dp/B08QJH7TSW/ref=sr_1_6?keywords=basketball&qid=1646747514&sprefix=baskt%2Caps%2C249&sr=8-6&th=1&psc=1',
    photo: 'https://m.media-amazon.com/images/I/91sjL7skP2S._AC_SX679_.jpg',
    rating: '4,1/5',
    likes: 0,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
