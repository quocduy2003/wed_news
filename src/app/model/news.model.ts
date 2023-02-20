// import { User } from "./user.model";

// export interface News{
//   user: User[];
// }

export interface News {
  type_of: string;
  id: number;
  title: string;
  description: string;
  url: string;
  cover_image: string;
  published_at: string;
}