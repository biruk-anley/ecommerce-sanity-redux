import  SanityClient  from "@sanity/client";
import  ImageUrlBuilder  from "@sanity/image-url";

export const client = SanityClient({
    projectId:'t9x7n65s',
    dataset:'production',
    apiVersion:'2023-03-14',
    useCdn:true,
    token: process.env.Sanity_Token
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source)=> builder.image(source)