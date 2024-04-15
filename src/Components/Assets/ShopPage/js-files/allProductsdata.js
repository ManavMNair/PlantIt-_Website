const product_data = [
  // Seller 1
  {
    sellerId: 1,
    productId: 101,
    productName: "Monstera Deliciosa",
    category: "Indoor Plant",
    subcategory: "Best in air purifying",
    price: 25.99,
    description: "A popular indoor plant with large, glossy leaves.",
    quantity: 50,
    imageUrl: "https://www.plantvine.com/plants/Monstera-deliciosa-7G-Main-1-768x960.jpg"
  },
  {
    sellerId: 1,
    productId: 102,
    productName: "Fiddle Leaf Fig",
    category: "Indoor Plant",
    subcategory: "Best in low maintenance",
    price: 39.99,
    description: "Trendy indoor plant with violin-shaped leaves.",
    quantity: 30,
    imageUrl: "https://cdn10.bigcommerce.com/s-3q3m3ghk/products/77/images/275/fiddle-leaf-fig-tree-1__35772.1452893496.386.513.jpg?c=2"
  },
  {
    sellerId: 1,
    productId: 103,
    productName: "Snake Plant",
    category: "Indoor Plant",
    subcategory: "Best in air purifying",
    price: 18.49,
    description: "Low-maintenance indoor plant with upright leaves.",
    quantity: 40,
    imageUrl: "https://cdn-5efe0574c1ac181b540d93e4.closte.com/wp-content/uploads/2020/11/Snkae-plant-in-pot.jpeg"
  },
  {
    sellerId: 1,
    productId: 104,
    productName: "Peace Lily",
    category: "Indoor Plant",
    subcategory: "Best in low maintenance",
    price: 29.99,
    description: "Indoor plant with elegant white flowers.",
    quantity: 25,
    imageUrl: "https://www.interflora.co.za/wp-content/uploads/2022/04/Potted-Spath%E2%80%93604PP.jpg"
  },
  // Seller 2
  {
    sellerId: 2,
    productId: 105,
    productName: "Lavender",
    category: "Outdoor Plants",
    subcategory: "Best in fragrant",
    price: 12.49,
    description: "Fragrant outdoor plant known for its purple flowers.",
    quantity: 100,
    imageUrl: "https://m.media-amazon.com/images/I/81d9Nq6BnLL._SX679_.jpg"
  },
  {
    sellerId: 2,
    productId: 106,
    productName: "Rosemary",
    category: "Outdoor Plants",
    subcategory: "Best in fragrant",
    price: 8.99,
    description: "Herb with aromatic needle-like leaves.",
    quantity: 80,
    imageUrl: "https://kellogggarden.com/wp-content/uploads/2021/03/Tips-on-How-to-Grow-Rosemary.jpg"
  },
  {
    sellerId: 2,
    productId: 107,
    productName: "Succulent Mix",
    category: "Outdoor Plants",
    subcategory: "Best in low maintenance",
    price: 15.99,
    description: "Assorted succulent plants in decorative pots.",
    quantity: 60,
    imageUrl: "https://plantly.io/wp-content/uploads/2020/10/potted-succulents-2-large.jpg"
  },
  {
    sellerId: 2,
    productId: 108,
    productName: "Hanging Fern",
    category: "Outdoor Plants",
    subcategory: "Best in trailing/hanging",
    price: 19.99,
    description: "Fern plant suitable for hanging baskets.",
    quantity: 50,
    imageUrl: "https://www.plantsguru.com/image/cache/hanging-basket-plants/boston-fern-hanging-800x800.jpg"
  },
  // Seller 3
  {
    sellerId: 3,
    productId: 109,
    productName: "Neem",
    category: "Ayurvedic Plants",
    subcategory: "Ayurvedic Plants", // Ayurvedic plants might not fit into the specified subcategories
    price: 19.99,
    description: "Medicinal plant used in traditional Ayurvedic medicine.",
    quantity: 20,
    imageUrl: "https://naturerabbit.in/wp-content/uploads/2021/08/Nature-Rabbit-Neem-Azadirachta-Indica-Plant-1.jpg"
  },
  {
    sellerId: 3,
    productId: 110,
    productName: "Tulsi (Holy Basil)",
    category: "Ayurvedic Plants",
    subcategory: "Ayurvedic Plants", // Ayurvedic plants might not fit into the specified subcategories
    price: 15.99,
    description: "Sacred plant in Hinduism with medicinal properties.",
    quantity: 25,
    imageUrl: "https://m.media-amazon.com/images/I/41v7izYiYJL._SX300_SY300_QL70_FMwebp_.jpg"
  },

  {
    sellerId: 4,
    productId: 111,
    productName: "Spider Plant",
    category: "Indoor Plant",
    subcategory: "Best in air purifying",
    price: 14.99,
    description: "Easy-to-grow indoor plant with long, arching leaves.",
    quantity: 35,
    imageUrl: "https://m.media-amazon.com/images/I/51EA8nUMrpL._SL1000_.jpg"
  },
  {
    sellerId: 4,
    productId: 112,
    productName: "Aloe Vera",
    category: "Indoor Plant",
    subcategory: "Best in low maintenance",
    price: 18.99,
    description: "Succulent plant known for its healing properties.",
    quantity: 28,
    imageUrl: "https://nurserylive.com/cdn/shop/products/nurserylive-plants-aloe-vera-succulent-plant-16968585871500_902x902.jpg?v=1634213151"
  },
  {
    sellerId: 4,
    productId: 113,
    productName: "Money Tree",
    category: "Indoor Plant",
    subcategory: "Best in air purifying",
    price: 34.99,
    description: "Feng shui plant believed to bring prosperity and good luck.",
    quantity: 20,
    imageUrl: "https://hips.hearstapps.com/hmg-prod/images/money-tree-64a82aa5f38ea.png?crop=0.505xw:1.00xh;0.248xw,0&resize=640:*"
  },
  {
    sellerId: 4,
    productId: 114,
    productName: "Cactus Assortment",
    category: "Indoor Plant",
    subcategory: "Best in low maintenance",
    price: 21.99,
    description: "Assorted cacti in decorative pots.",
    quantity: 45,
    imageUrl: "https://m.media-amazon.com/images/I/514eredTpgL._SY300_SX300_QL70_FMwebp_.jpg"
  },
  // Seller 5
  {
    sellerId: 5,
    productId: 115,
    productName: "Tomato Plant",
    category: "Outdoor Plants",
    subcategory: "Great deals in vegetables",
    price: 8.99,
    description: "Plant producing ripe tomatoes suitable for home gardens.",
    quantity: 70,
    imageUrl: "https://rukminim2.flixcart.com/image/832/832/knknc7k0/plant-seed/4/j/y/50-tomato-seeds-golina-original-imag28chmjy7zsg5.jpeg?q=70&crop=false"
  },
  {
    sellerId: 5,
    productId: 116,
    productName: "Bell Pepper Plant",
    category: "Outdoor Plants",
    subcategory: "Great deals in vegetables",
    price: 9.49,
    description: "Plant producing bell peppers in various colors.",
    quantity: 60,
    imageUrl: "https://peppergeek.com/wp-content/uploads/2023/04/Bell-pepper-growth-stage-960x640.jpg.webp"
  },
  {
    sellerId: 5,
    productId: 117,
    productName: "Cucumber Plant",
    category: "Outdoor Plants",
    subcategory: "Great deals in vegetables",
    price: 7.99,
    description: "Vining plant producing fresh cucumbers.",
    quantity: 80,
    imageUrl: "https://growfully.com/wp-content/uploads/2022/04/Container-Garden-Cucumbers.jpg"
  },
  {
    sellerId: 5,
    productId: 118,
    productName: "Herb Garden Kit",
    category: "Outdoor Plants",
    subcategory: "Best in herbs",
    price: 29.99,
    description: "Kit containing various herb seeds for outdoor cultivation.",
    quantity: 25,
    imageUrl: "https://m.media-amazon.com/images/I/81Gq0C0dVhL._SX679_.jpg"
  },
  // Seller 6
  {
    sellerId: 6,
    productId: 119,
    productName: "Ashwagandha",
    category: "Ayurvedic Plants",
    subcategory: "Agricultural Accessories", // Ayurvedic plants might not fit into the specified subcategories
    price: 12.99,
    description: "Adaptogenic herb used in traditional Ayurvedic medicine.",
    quantity: 40,
    imageUrl: "https://rukminim2.flixcart.com/image/832/832/kq18n0w0/plant-seed/0/u/2/50-ashwagandha-herbal-plant-seeds-green-50-seeds-gardentek-original-imag45yrz9jb2gvr.jpeg?q=70&crop=false"
  },
  {
    sellerId: 6,
    productId: 120,
    productName: "Brahmi",
    category: "Ayurvedic Plants",
    subcategory: "Agricultural Accessories", // Ayurvedic plants might not fit into the specified subcategories
    price: 14.99,
    description: "Herb known for its memory-enhancing properties.",
    quantity: 30,
    imageUrl: "https://urbano.in/wp-content/uploads/2019/12/WhatsApp-Image-2022-09-07-at-21.57.30.jpeg"
  },
  {
    sellerId: 6,
    productId: 121,
    productName: "Turmeric",
    category: "Ayurvedic Plants",
    subcategory: "Agricultural Accessories", // Ayurvedic plants might not fit into the specified subcategories
    price: 9.99,
    description: "Spice with anti-inflammatory and antioxidant properties.",
    quantity: 50,
    imageUrl: "https://m.media-amazon.com/images/I/61DZnfn1ebL._SY300_SX300_QL70_FMwebp_.jpg"
  },
  {
    sellerId: 6,
    productId: 122,
    productName: "Ginger",
    category: "Ayurvedic Plants",
    subcategory: "Agricultural Accessories", // Ayurvedic plants might not fit into the specified subcategories
    price: 8.49,
    description: "Root with medicinal and culinary uses.",
    quantity: 60,
    imageUrl: "https://cdn.britannica.com/19/231119-050-35483892/Indian-ginger-Zingiber-officinale.jpg"
  },
  // Seller 7
  {
    sellerId: 7,
    productId: 123,
    productName: "Tomato Cage",
    category: "Agricultural Accessories",
    subcategory: "Agricultural Accessories", // Agricultural accessories might not fit into the specified subcategories
    price: 7.99,
    description: "Support structure for tomato plants.",
    quantity: 100,
    imageUrl: "https://m.media-amazon.com/images/I/51O78LkifsL._SX300_SY300_QL70_FMwebp_.jpg"
  },
  {
    sellerId: 7,
    productId: 124,
    productName: "Plant Labels",
    category: "Agricultural Accessories",
    subcategory: "Agricultural Accessories", // Agricultural accessories might not fit into the specified subcategories
    price: 4.49,
    description: "Markers for labeling plants in the garden.",
    quantity: 150,
    imageUrl: "https://m.media-amazon.com/images/I/41MLzAwx7XL._SX300_SY300_QL70_FMwebp_.jpg"
  },
  {
    sellerId: 7,
    productId: 125,
    productName: "Watering Wand",
    category: "Agricultural Accessories",
    subcategory: "Agricultural Accessories", // Agricultural accessories might not fit into the specified subcategories
    price: 16.99,
    description: "Tool for precise watering of plants.",
    quantity: 80,
    imageUrl: "https://m.media-amazon.com/images/I/71vIehUnxvL._SX679_.jpg"
  },
  {
    sellerId: 7,
    productId: 126,
    productName: "Seed Starting Kit",
    category: "Agricultural Accessories",
    subcategory: "Agricultural Accessories", // Agricultural accessories might not fit into the specified subcategories
    price: 19.99,
    description: "Kit for starting seeds indoors before transplanting.",
    quantity: 60,
    imageUrl: "https://m.media-amazon.com/images/I/51VTdCr3uLL._SY300_SX300_QL70_FMwebp_.jpg"
  },
  // Seller 8
  {
    sellerId: 8,
    productId: 127,
    productName: "Rose Plant",
    category: "Outdoor Plants",
    subcategory: "Best in flowering",
    price: 16.99,
    description: "Classic flowering plant available in various colors.",
    quantity: 35,
    imageUrl: "https://nurserylive.com/cdn/shop/products/nurserylive-g-plants-rose-dark-pink-plant-in-grower-round-black-pot-922015_600x600.jpg?v=1679751054"
  },
  {
    sellerId: 8,
    productId: 128,
    productName: "Orchid",
    category: "Indoor Plant",
    subcategory: "Best in flowering",
    price: 22.99,
    description: "Exotic flowering plant with delicate blooms.",
    quantity: 20,
    imageUrl: "https://hips.hearstapps.com/hmg-prod/images/still-life-image-of-beautiful-pink-orchid-flowers-royalty-free-image-1702918746.jpg?crop=0.668xw:1.00xh;0.127xw,0&resize=640:*"
  },
  {
    sellerId: 8,
    productId: 129,
    productName: "Bamboo Plant",
    category: "Indoor Plant",
    subcategory: "Best in air purifying",
    price: 18.49,
    description: "Lucky plant symbolizing prosperity and good fortune.",
    quantity: 25,
    imageUrl: "https://www.ugaoo.com/cdn/shop/files/Aimage_3.jpg?v=1682523121&width=750"
  },
  {
    sellerId: 8,
    productId: 130,
    productName: "Cactus Trio",
    category: "Indoor Plant",
    subcategory: "Great deals in cacti & succulents",
    price: 27.99,
    description: "Assortment of three small cacti in a decorative pot.",
    quantity: 15,
    imageUrl: "https://greenladybug.com/271-large_default/trio-de-cactus-.jpg"
  },
  // Seller 9
  {
    sellerId: 9,
    productId: 131,
    productName: "Aloe Vera Gel",
    category: "Ayurvedic Products",
    subcategory: "Ayurvedic Products", // Ayurvedic products might not fit into the specified subcategories
    price: 10.99,
    description: "Natural skincare gel made from aloe vera extract.",
    quantity: 50,
    imageUrl: "https://assets.vogue.in/photos/5ce429e3b40d26848bd6c7db/1:1/w_960,c_limit/What-to-keep-in-mind-when-shopping-for-pure-aloe-vera-gel.jpg"
  },
  {
    sellerId: 9,
    productId: 132,
    productName: "Turmeric Capsules",
    category: "Ayurvedic Products",
    subcategory: "Ayurvedic Products", // Ayurvedic products might not fit into the specified subcategories
    price: 15.49,
    description: "Dietary supplement containing turmeric extract.",
    quantity: 40,
    imageUrl: "https://5.imimg.com/data5/SELLER/Default/2023/6/313210015/EM/DD/LQ/6980480/turmeric-curcumin-capsules-500x500.jpeg"
  },
  {
    sellerId: 9,
    productId: 133,
    productName: "Neem Oil",
    category: "Ayurvedic Products",
    subcategory: "Ayurvedic Products", // Ayurvedic products might not fit into the specified subcategories
    price: 12.99,
    description: "Natural oil with various medicinal and cosmetic uses.",
    quantity: 60,
    imageUrl: "https://5.imimg.com/data5/JP/UM/QC/SELLER-4195389/100-pure-neem-oil-1000x1000.jpg"
  },
  {
    sellerId: 9,
    productId: 134,
    productName: "Ashwagandha Powder",
    category: "Ayurvedic Products",
    subcategory: "Ayurvedic Products", // Ayurvedic products might not fit into the specified subcategories
    price: 8.99,
    description: "Powdered form of the ashwagandha herb.",
    quantity: 70,
    imageUrl: "https://5.imimg.com/data5/SELLER/Default/2021/8/GO/KA/PZ/134706891/organic-ashwagandha-powder-500x500.jpg"
  },
  // Seller 10
  {
    sellerId: 10,
    productId: 135,
    productName: "Garden Hoe",
    category: "Agricultural Tools",
    subcategory: "Agricultural Accessories", // Agricultural tools might not fit into the specified subcategories
    price: 18.99,
    description: "Tool for loosening soil and removing weeds.",
    quantity: 30,
    imageUrl: "https://m.media-amazon.com/images/I/61RwwZ+JwzL._SX679_.jpg"
  },
  {
    sellerId: 10,
    productId: 136,
    productName: "Compost Bin",
    category: "Gardening Supplies",
    subcategory: "Agricultural Accessories", // Gardening supplies might not fit into the specified subcategories
    price: 29.99,
    description: "Container for composting organic waste.",
    quantity: 25,
    imageUrl: "https://5.imimg.com/data5/SELLER/Default/2022/9/GB/MA/DH/12760387/compost-bins-1000x1000.jpg"
  },
  {
    sellerId: 10,
    productId: 137,
    productName: "Pruning Saw",
    category: "Agricultural Tools",
    subcategory: "Agricultural Accessories", // Agricultural tools might not fit into the specified subcategories
    price: 22.49,
    description: "Saw for cutting thick branches and shrubs.",
    quantity: 40,
    imageUrl: "https://rukminim2.flixcart.com/image/832/832/xif0q/shopsy-power-hand-tool-kit/h/g/b/orange-hand-saw-1-zwhites-original-imagjxszvwbp727v.jpeg?q=70&crop=false"
  },
  {
    sellerId: 10,
    productId: 138,
    productName: "Garden Trowel",
    category: "Gardening Supplies",
    subcategory: "Agricultural Accessories", // Gardening supplies might not fit into the specified subcategories
    price: 7.99,
    description: "Hand tool for digging small holes and transplanting.",
    quantity: 60,
    imageUrl: "https://m.media-amazon.com/images/I/41xd-csEwAL.jpg"
  }
  ];

  export default product_data;



