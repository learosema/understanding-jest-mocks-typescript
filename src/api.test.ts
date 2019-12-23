import fetch from 'node-fetch';
import { mocked } from 'ts-jest/utils';
import { getPeople } from './api';

jest.mock('node-fetch', () => {
  return jest.fn();
});

beforeEach(() => {
  mocked(fetch).mockClear();
});

test('should fetch a person', async () => {
  mocked(fetch).mockImplementation((): Promise<any> => {
    return new Promise((resolve, reject) => {
      const resp = {
        async json() {
          return {name: 'Luke Vader'};
        }
      };
      resolve(resp);
    });
  });  
  const person = await getPeople(1);
  expect(mocked(fetch).mock.calls.length).toBe(1);
  expect(person).toBeDefined();
  expect(person.name).toBe('Luke Vader');
});

