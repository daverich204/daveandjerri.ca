export enum PostsAPI {
  baseURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@daverich204",
}

interface PostLocation {
  md: string;
  json: string;
}

export interface Post {
  id: string;
  layout: string;
  title: string;
  published: string;
  author: string;
  tags: string;
  timestamp: number;
  location: PostLocation;
  content: string;
}

type PostWithoutContent = Omit<Post, "content">;

export interface Posts {
  [id: string]: PostWithoutContent;
}
