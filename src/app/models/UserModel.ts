import {PostModel} from './PostModel';

export class UserModel {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  posts: PostModel[] = [];
}
