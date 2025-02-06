import groq from "groq";

export const categoriesQuery = groq`
  *[_type == "category"] {
    _id,
    title,
    slug
  }
`;



export const aboutQuery = groq`
  *[_type == "about"][0]
`;

export const postsQueryWithId = groq`*[_type == "post" && slug.current == $blogId][0]`;

export const postsQuery = groq`*[_type == "post"]`;