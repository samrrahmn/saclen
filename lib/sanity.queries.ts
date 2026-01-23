export const allPostsQuery = `
*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  mainImage {
    asset->{url},
    alt
  }
}
`;
