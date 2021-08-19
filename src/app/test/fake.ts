/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { Artist } from '../interfaces/Artist';
import { Song } from '../interfaces/Song';

export class Fake {
  /**
   * Artists
   */
  static artists: Artist[] = [
    {
      id: 1,
      name: 'test',
    },
    {
      id: 2,
      name: 'test2',
    },
    {
      id: 3,
      name: 'test3',
    }
  ];
  /**
   * Songs
   */
  static songs: Song[] = [
    {
      id: 1,
      title: 'title 1',
      body: '',
      comments: 'Comments 1',
      isCustom: false,
      initialPause: 111,
      duration: 111,
      userId: 111,
      isFavourite: false,
    },
    {
      id: 2,
      title: 'title 2',
      body: '',
      comments: 'Comments 2',
      isCustom: false,
      initialPause: 222,
      duration: 222,
      userId: 222,
      isFavourite: false,
    },
    {
      id: 3,
      title: 'title 3',
      body: '',
      comments: 'Comments 3',
      isCustom: false,
      initialPause: 333,
      duration: 333,
      userId: 333,
      isFavourite: false,
    }
  ];
}

export class Fake2 {
  /**
   * Artists
   */
  static artists: Artist[] = [
    {
      id: 4,
      name: 'test4',
    },
    {
      id: 5,
      name: 'test5',
    },
    {
      id: 6,
      name: 'test6',
    }
  ];
  /**
   * Songs
   */
  static songs: Song[] = [
    {
      id: 4,
      title: 'title 4',
      body: '',
      comments: 'Comments 4',
      isCustom: false,
      initialPause: 444,
      duration: 444,
      userId: 444,
      isFavourite: false,
    },
    {
      id: 5,
      title: 'title 5',
      body: '',
      comments: 'Comments 5',
      isCustom: false,
      initialPause: 555,
      duration: 555,
      userId: 555,
      isFavourite: false,
    },
    {
      id: 6,
      title: 'title 6',
      body: '',
      comments: 'Comments 6',
      isCustom: false,
      initialPause: 666,
      duration: 666,
      userId: 666,
      isFavourite: false,
    }
  ];
}
