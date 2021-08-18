/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { Artist } from '../interfaces/Artist';

export class Fake {
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
}

export class Fake2 {
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
}
