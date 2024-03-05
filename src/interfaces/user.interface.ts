export interface User {
  userId: string;
  userName: string;
  customAttributes: object;
  application?: Array<string> | any;
  profileImageUrl?: string;
}
