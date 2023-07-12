import dayjs from 'dayjs'
import { Center, Box } from '@@/styled-system/jsx'
import { css } from '@@/styled-system/css'

import type { SpotType } from './types'
import { MyMarkdown } from '../ui/MyMarkdown'
import { MyButton } from '../ui/MyButton'

export const SpotDetail = ({ spot }: { spot: SpotType }) => {
  return (
    <div>
      <h1
        className={css({
          fontSize: '4xl',
          borderBottom: '1px solid #ddd',
          pb: 3,
          mb: 3,
        })}
      >
        {spot.title}
      </h1>

      <Box mb={6} textAlign={'right'}>
        {dayjs(spot.date).format('YYYY/MM/DD')}
      </Box>

      <figure
        className={css({
          bgColor: 'gray.50',
          aspectRatio: '16/9',
          mb: 12,
        })}
      >
        <img
          className={css({
            aspectRatio: '16/9',
            objectFit: 'cover',
            display: 'block',
            w: 'full',
            h: 'auto',
          })}
          src={`/static/img/spots/mv-${spot.id}.jpg`}
          alt=''
        />
      </figure>
      <MyMarkdown className={'markdown-body'}>{spot.body}</MyMarkdown>

      <Center mt={10}>
        <a href={'/'}>
          <MyButton visual={'outline'} size={'lg'} rounded={'full'} px={'16'}>
            <span>一覧に戻る</span>
          </MyButton>
        </a>
      </Center>
    </div>
  )
}
