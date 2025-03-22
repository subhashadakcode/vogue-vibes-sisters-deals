/**
 * Coupon and cashback data file
 * This separates content from presentation for easier WordPress migration
 */

export interface Coupon {
  id: number
  code: string
  discount: string
  description: string
  expiryDate: string
  store: string
  storeImage: string
  category: string
  link: string
  cashback?: string
  isExclusive?: boolean
}

export interface CashbackOffer {
  id: number
  store: string
  storeImage: string
  cashbackRate: string
  description: string
  category: string
  link: string
  isExclusive?: boolean
}

// Coupon data
export const coupons: Coupon[] = [
  {
    id: 1,
    code: "EXTRA20",
    discount: "20% OFF",
    description: "Get 20% off on all electronics",
    expiryDate: "2025-12-31",
    store: "Amazon",
    storeImage: "https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png",
    category: "Electronics",
    link: "https://amzn.to/4kOhixR",
    cashback: "Up to 5%",
    isExclusive: true,
  },
  {
    id: 2,
    code: "FASHION30",
    discount: "30% OFF",
    description: "30% off on fashion items",
    expiryDate: "2025-11-30",
    store: "Amazon",
    storeImage: "https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png",
    category: "Fashion",
    link: "https://voguevibessisters.blogspot.com/search/label/Fashion",
    cashback: "Up to 7%",
  },
  {
    id: 3,
    code: "HOME25",
    discount: "25% OFF",
    description: "25% off on home & kitchen products",
    expiryDate: "2025-10-31",
    store: "Amazon",
    storeImage: "https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png",
    category: "Home & Kitchen",
    link: "https://voguevibessisters.blogspot.com/search/label/Home%20%26%20Kitchen",
    cashback: "Up to 4.5%",
  },
  {
    id: 4,
    code: "BEAUTY15",
    discount: "15% OFF",
    description: "15% off on beauty products",
    expiryDate: "2025-09-30",
    store: "Amazon",
    storeImage: "https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png",
    category: "Beauty",
    link: "https://voguevibessisters.blogspot.com/search/label/Beauty",
    cashback: "Up to 6%",
    isExclusive: true,
  },
  {
    id: 5,
    code: "BOOKS10",
    discount: "10% OFF",
    description: "10% off on books",
    expiryDate: "2025-08-31",
    store: "Amazon",
    storeImage: "https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png",
    category: "Books",
    link: "https://voguevibessisters.blogspot.com/search/label/Books",
    cashback: "Up to 3%",
  },
  {
    id: 6,
    code: "TOYS20",
    discount: "20% OFF",
    description: "20% off on toys",
    expiryDate: "2025-07-31",
    store: "Amazon",
    storeImage: "https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png",
    category: "Toys",
    link: "https://voguevibessisters.blogspot.com/search/label/Toys",
    cashback: "Up to 5.5%",
  },
]

// Cashback offers data
export const cashbackOffers: CashbackOffer[] = [
  {
    id: 1,
    store: "Amazon Electronics",
    storeImage: "https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png",
    cashbackRate: "Up to 5%",
    description: "Earn cashback on all electronics purchases",
    category: "Electronics",
    link: "https://voguevibessisters.blogspot.com/search/label/Electronics",
    isExclusive: true,
  },
  {
    id: 2,
    store: "Amazon Fashion",
    storeImage: "https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png",
    cashbackRate: "Up to 7%",
    description: "Earn cashback on all fashion purchases",
    category: "Fashion",
    link: "https://voguevibessisters.blogspot.com/search/label/Fashion",
  },
  {
    id: 3,
    store: "Amazon Home",
    storeImage: "https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png",
    cashbackRate: "Up to 4.5%",
    description: "Earn cashback on all home & kitchen purchases",
    category: "Home & Kitchen",
    link: "https://voguevibessisters.blogspot.com/search/label/Home%20%26%20Kitchen",
  },
  {
    id: 4,
    store: "Amazon Beauty",
    storeImage: "https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png",
    cashbackRate: "Up to 6%",
    description: "Earn cashback on all beauty purchases",
    category: "Beauty",
    link: "https://voguevibessisters.blogspot.com/search/label/Beauty",
    isExclusive: true,
  },
]

// Popular stores data
export const popularStores = [
  {
    id: 1,
    name: "Amazon",
    logo: "https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png",
    cashbackRate: "Up to 7%",
    link: "https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=58355126069&hvpone=&hvptwo=&hvadid=610644601173&hvpos=&hvnetw=g&hvrand=7078320418248163028&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9062038&hvtargid=kwd-10573980&hydadcr=14453_2316415",
  },
  {
    id: 2,
    name: "Flipkart",
    logo: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png",
    cashbackRate: "Up to 6%",
    link: "https://www.flipkart.com/",
  },
  {
    id: 3,
    name: "Myntra",
    logo: "https://constant.myntassets.com/web/assets/img/icon.5d108c858a0db793700f0be5d3ad1e120a01a500_2021.png",
    cashbackRate: "Up to 8%",
    link: "https://www.myntra.com/",
  },
  {
    id: 4,
    name: "Nykaa",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGJXlU1Hfd3jzXIaDUVxOIpHJ5-4eddBKm-g&usqp=CAU",
    cashbackRate: "Up to 5%",
    link: "https://www.nykaa.com/",
  },
  {
    id: 5,
    name: "Ajio",
    logo: "https://assets.ajio.com/static/img/Ajio-Logo.svg",
    cashbackRate: "Up to 6.5%",
    link: "https://www.ajio.com/",
  },
  {
    id: 6,
    name: "Tata CLiQ",
    logo: "https://d2xamzlzrdbdbn.cloudfront.net/brands/tata-cliq-1468.jpg",
    cashbackRate: "Up to 4%",
    link: "https://www.tatacliq.com/",
  },
]

