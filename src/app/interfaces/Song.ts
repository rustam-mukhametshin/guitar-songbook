export interface Song {
  userId: number;
  id: number;
  title: string;
  body: string;
  initialPause: number;
  duration: number;
  comments: string;
  isFavourite: boolean;
  isCustom: boolean;
}
