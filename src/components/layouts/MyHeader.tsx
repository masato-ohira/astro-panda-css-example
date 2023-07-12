import { MyIcon } from '../icons/MyIcon'
import { css } from '@@/styled-system/css'
import { hstack, center } from '@@/styled-system/patterns'

export const MyHeader = () => {
  return (
    <div
      className={hstack({
        bgColor: 'teal.600',
        color: 'white',
        p: 6,
        py: 4,
        justifyContent: 'space-between',
      })}
    >
      <a
        href='/'
        className={hstack({
          cursor: 'pointer',
          gap: 3,
        })}
      >
        <MyIcon
          name={'react'}
          className={css({
            fontSize: '4xl',
          })}
        />
        <div
          className={css({
            fontSize: '3xl',
            fontWeight: 500,
          })}
        >
          DemoSite
        </div>
      </a>
      <div>
        <a
          href='/'
          className={center({
            bgColor: 'white',
            rounded: 'md',
            w: 9,
            h: 9,
            _hover: {
              opacity: 0.8,
            },
          })}
        >
          <MyIcon
            name={'menu'}
            className={css({
              fontSize: 'xl',
              color: 'teal.600',
            })}
          />
        </a>
      </div>
    </div>
  )
}
