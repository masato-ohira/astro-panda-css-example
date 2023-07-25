import { Box, HStack, styled } from '@@/styled-system/jsx'
import { hstack, center } from '@@/styled-system/patterns'
import { MdMenu } from 'react-icons/md'
import { FaReact } from 'react-icons/fa'

export const MyHeader = () => {
  return (
    <HStack
      bgColor={'teal.600'}
      color={'white'}
      p={6}
      py={4}
      justifyContent={'space-between'}
    >
      <styled.a href={'/'} className={hstack()} gap={3} cursor={'pointer'}>
        <Box fontSize={'4xl'}>
          <FaReact />
        </Box>
        <Box fontSize={'3xl'} fontWeight={500}>
          DemoSite
        </Box>
      </styled.a>

      <HStack>
        {['svelte', 'vue'].map((i) => {
          return (
            <styled.a
              key={i}
              href={`/${i}/`}
              className={center()}
              bgColor={'white'}
              color={'teal.600'}
              rounded={'md'}
              px={8}
              w={9}
              h={9}
              _hover={{
                opacity: 0.9,
              }}
            >
              {i}
            </styled.a>
          )
        })}
      </HStack>
    </HStack>
  )
}
