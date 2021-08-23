/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

export interface Song {
  userId: number;
  id: number;
  title: string;
  lyrics: string;
  initialPause: number;
  duration: number;
  comments: string;
  isFavourite: boolean;
  isCustom: boolean;
}
