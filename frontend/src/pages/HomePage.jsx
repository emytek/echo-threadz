import React from 'react'
import { Button, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <Link to={'/enzo'}>
      <Flex w={'full'} justifyContent={'center'}>
        <Button mx={'auto'}>Visit Enzo's Profile Page</Button>
      </Flex>
    </Link>
  )
}

export default HomePage