/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { SearchPipe } from './search.pipe';
import { Fake } from '../test/fake';

describe('SearchPipe', () => {
  let pipe: SearchPipe;

  beforeEach(() => {
    pipe = new SearchPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('#transform should return filtered result', done => {
    const res = pipe.transform(Fake.songs, '1');
    expect(res).toEqual([Fake.song]);
    done();
  });
});
