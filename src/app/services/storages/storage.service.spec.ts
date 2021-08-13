/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;
  const fixtureData = {
    key: 'test',
    value: 'someValue'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
  });

  beforeEach(() => {
    // Clear storage
    service.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#get should check existed value', done => {
    service.get(fixtureData.key).then(val => {
      expect(val.value).toBeNull();
      done();
    });
  });

  it('#set should check saving value', done => {
    service.set(fixtureData.key, fixtureData.value).then(_ => {
      service.get(fixtureData.key).then(res => {
        expect(res.value).toEqual(fixtureData.value);
        done();
      });
    });
  });

  it('#remove should check removing key with values', done => {
    // Check for null
    service.get(fixtureData.key).then(val => {
      expect(val.value).toBeNull();
      done();
    });

    // Set data
    service.set(fixtureData.key, fixtureData.value).then(_ => {
      done();
    });

    // Check for saving
    service.get(fixtureData.key).then(res => {
      expect(res.value).toEqual(fixtureData.value);
      done();
    });

    // Remove data
    service.remove(fixtureData.key).then(_ => {
      done();
    });

    // Check for null
    service.get(fixtureData.key).then(val => {
      expect(val.value).toBeNull();
      done();
    });
  });

  it('#clear should check clearing storage', done => {
    // Check for null
    service.get(fixtureData.key).then(val => {
      expect(val.value).toBeNull();
      done();
    });

    // Set data
    service.set(fixtureData.key, fixtureData.value).then(_ => {
      done();
    });

    // Check for saving
    service.get(fixtureData.key).then(res => {
      expect(res.value).toEqual(fixtureData.value);
      done();
    });

    // Clear data
    service.clear().then(_ => {
      done();
    });

    // Check for null
    service.get(fixtureData.key).then(val => {
      expect(val.value).toBeNull();
      done();
    });
  });

});
