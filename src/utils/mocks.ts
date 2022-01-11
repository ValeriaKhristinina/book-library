import { Book } from '../types/book'
import { getRandomNumber } from './utils'

const titles = ['Lord Of the Ring', 'Dorian Gray', 'Collector']
const authors = ['John Ronald Reuel Tolkien', 'Sarah Maas', 'Oscar Wilde']

export const makeFakeBook = (): Book => ({
  id: getRandomNumber(0,5).toString(),
  title: titles[getRandomNumber(0, titles.length)],
  author: authors[getRandomNumber(0, authors.length)],
  description: 'string',
  cover: `https://picsum.photos/${getRandomNumber(100, 500)}`
})

export const fakeBooks = new Array(6).fill(null).map(book => makeFakeBook())