import dayjs from 'dayjs'
import type { SpotType } from './types'
import { css } from '@@/styled-system/css'
import { stack } from '@@/styled-system/patterns'
import { Center, Box, Stack } from '@@/styled-system/jsx'
import { MyButton } from '../ui/MyButton'

export const SpotBox = ({ spot }: { spot: SpotType }) => {
  const detailLink = `/spots/${spot.id}/`

  return (
    <Box shadow='md' p={6} rounded='lg'>
      <a
        href={detailLink}
        className={stack({
          transition: 'opacity 0.2s linear',
          gap: 4,
          _hover: {
            opacity: 0.7,
          },
        })}
      >
        <figure
          className={css({
            bgColor: 'gray.50',
            aspectRatio: '16/9',
          })}
        >
          <img
            className={css({
              aspectRatio: '16/9',
              objectFit: 'cover',
            })}
            src={`/static/img/spots/thum-${spot.id}.jpg`}
            alt=''
          />
        </figure>
        <Stack gap={0} lineHeight={1.7}>
          <dl>
            <dt
              className={css({
                fontSize: 'sm',
                color: 'teal.600',
                fontWeight: 500,
              })}
            >
              {dayjs(spot.date).format('YYYY/MM/DD')}
            </dt>
            <dd>{spot.title}</dd>
          </dl>
          <Center>
            <MyButton visual={'outline'} mt={4} px={16} rounded={'full'}>
              詳細はこちら
            </MyButton>
          </Center>
        </Stack>
      </a>
    </Box>
  )
}
