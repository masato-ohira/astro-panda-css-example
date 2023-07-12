import { center } from '@@/styled-system/patterns'

export const MyFooter = () => {
  return (
    <div
      className={center({
        p: 6,
        color: 'white',
        bgColor: 'gray.700',
      })}
    >
      <p>&copy; example.com</p>
    </div>
  )
}
