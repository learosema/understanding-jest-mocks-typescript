import fetch from 'node-fetch';

const BASE_URL = 'http://swapi.co/api/'

export async function getPeople(id: number) {
  const response = await fetch(BASE_URL + `people/${id}/`);
  const data = await response.json();
  return data;
}