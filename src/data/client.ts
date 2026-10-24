// ===== SITE CONSTANTS =====
export const SITE = {
	title: "Shower Room & Enclosure | XC Bath",
	tagline: "bathtub factory since 2006",
	description: "XC Bath is a premier factory of bath products in China, specializing in manufacturing high-quality, shower room, one-piece bathtub for global markets.",
	url: "https://www.chinabathtub.com",
	author: "XC Bath",
	locale: "en",
};

// ===== BUSINESS INFO =====
export const BUSINESS = {
    name: SITE.title,
    email: "info@chinabathtub.com",
    phoneForTel: "563-303-2211",
    phoneFormatted: "(563) 303-2211",
    whatsAppForLink: "008613905633017", // 纯数字，方便后续拼接 api.whatsapp.com 链接
    whatsAppFormatted: "+86 139 0563 3017", // 格式化显示，国际买家看起来更专业清晰
    logo: "/assets/images/blog/logo2026.png",
    address: {
        lineOne: "Sanitary Ware Zone",
        lineTwo: "Hanting",
        city: "Xuancheng", 
        state: "China", 
        zip: "242000",
        mapLink: "#",
    },
    socials: {
        facebook: "#",
        instagram: "#",
        whatsapp: "#", 
    },
};

// ===== SEO DEFAULTS =====
export const SEO = {
	title: SITE.title,
	description: SITE.description,
};

// ===== OPEN GRAPH DEFAULTS =====
export const OG = {
	locale: "en_US",
	image: "/assets/social.jpg", // Default fallback social image located in public/
};
