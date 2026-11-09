export function getProductSchema(product, siteUrl) {
    // 处理图片绝对路径
    let imageUrl = product.image?.src || product.image || "";
    if (imageUrl && !imageUrl.startsWith("http")) {
        imageUrl = `${siteUrl}${imageUrl.startsWith("/") ? "" : "/"}${imageUrl}`;
    }

    // 构建 Product Schema
    const schema = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.title,
        image: [imageUrl],
        description: product.description,
        sku: product.sku || product.title,
        brand: {
            "@type": "Brand",
            name: product.brand || "XC Bath"
        },
        offers: {
            "@type": "Offer",
            url: siteUrl + "/product/" + product.id, 
            priceCurrency: product.currency || "USD",
            price: product.price || "0.00",
            availability: `https://schema.org/${product.availability || "InStock"}`,
            itemCondition: `https://schema.org/${product.condition || "NewCondition"}`
        }
    };

    // 🌟 新增：如果有评分数据，自动加上 aggregateRating
    if (product.ratingValue && product.reviewCount) {
        schema.aggregateRating = {
            "@type": "AggregateRating",
            ratingValue: product.ratingValue,
            reviewCount: product.reviewCount
        };
    }

    return schema;
}