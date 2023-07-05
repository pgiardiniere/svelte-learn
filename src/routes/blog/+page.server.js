import { posts } from './data.js';

export function load() {
  return {
    summaries: posts.map((post) => ({
      slug: posts.slug,
      title: posts.title
    }))
  };
}
