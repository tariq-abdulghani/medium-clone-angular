export interface CurrentUserInterface {
  user: {
    email: string;
    token: string;
    username: string;
    bio: string;
    image:string |  null;
  };
}