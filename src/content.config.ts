import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

// 1. 新闻/博客数据集 (对齐 src/content/news 文件夹)
const blogsCollection = defineCollection({
    loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/news" }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            author: z.string(),
            date: z.date(),
            image: image(),
            imageAlt: z.string(),
            isFeatured: z.boolean().optional().default(false),
        }),
});

// 2. 产品数据集 (对齐 src/content/product 文件夹，包含刚加的 Schema 字段)
const productsCollection = defineCollection({
    loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/product" }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            author: z.string().optional(),
            date: z.date().optional(),
            image: image().optional().or(z.string()),
            imageAlt: z.string().optional(),
            tags: z.array(z.string()).optional(),
            isFeatured: z.boolean().optional().default(false),
            
            // 🌟 SEO Product Schema 专属字段
            sku: z.string().optional(),
            price: z.union([z.number(), z.string()]).optional(),
            currency: z.string().optional().default("USD"),
            availability: z.string().optional().default("InStock"),
            brand: z.string().optional().default("XC Bath"),
            
            // 🌟 补充：星级评分字段
            ratingValue: z.union([z.number(), z.string()]).optional(),
            reviewCount: z.union([z.number(), z.string()]).optional(),
        }),
});

// 3. 统一导出
export const collections = {
    blog: blogsCollection,
    products: productsCollection,
};