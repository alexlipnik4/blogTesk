export type IPost = {
  body: string;
  date: Date;
  id: number;
  title: string;
  username: string;
  likes?: number;
};

export interface InitialState {
  posts: IPost[];
  time: Date | null;
}
