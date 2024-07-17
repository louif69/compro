import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT!,
});

export const getEntries = async () => {
  try {
    const response = await client.getEntries({
      limit: 3
    });

    const blogs = response.items.map((blog: any) => {
      return {
        title: blog.fields.title,
        slug: blog.fields.slug,
        description: blog.fields.description,
        thumbnail: blog.fields.thumbnail,
        author: blog.fields.author,
        category: blog.fields.category,
        content: blog.fields.content,
        createdAt: blog.fields.createdAt,
      };
    });
    return blogs; 
  } catch (error) {
    console.log(error);
  }
};
