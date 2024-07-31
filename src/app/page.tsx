'use client'
import { ChangeEvent, useState } from 'react'
import { Input } from '@/components'
import s from './page.module.scss'
import Link from 'next/link'
import { useFetchJokes } from '@/services/joke/hook'
import { JokeType } from '@/services/joke/type'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const { data, isSuccess } = useFetchJokes(searchTerm)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const jokesListRender = () => {
    if (isSuccess && data) {
      if (data.result.length === 0 || searchTerm.length <= 3) {
        return <p className={s.jokesList_defaultText}>No jokes here</p>
      }
      return (
        <ul>
          {data.result.map((joke: JokeType) => (
            <Link
              href={`https://api.chucknorris.io/jokes/${joke.id}`}
              target='_blank'
              className={s.jokesList_block}
              key={joke.id}
            >
              <p className={s.block_title}>{joke.value}</p>
              <div className={s.block_dateAndIdBlock}>
                <p>{joke.id}</p>
                <p>{joke.updated_at}</p>
              </div>
            </Link>
          ))}
        </ul>
      )
    }
  }

  return (
    <div className={s.root}>
      <div className={s.searchJokesBlock}>
        <Input
          type='search'
          value={searchTerm}
          onChange={handleChange}
          placeholder='Search jokes...'
          counter={data ? `Total count: ${data.total}` : ''}
        />
      </div>
      <div className={s.jokesList}>{jokesListRender()}</div>
    </div>
  )
}
