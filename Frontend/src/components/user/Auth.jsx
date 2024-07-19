import React from 'react'
import { Container,Box,Tab,Tabs,TabList,TabPanels,TabPanel } from '@chakra-ui/react'
import Signup from './Signup.jsx'
import Login from './Login.jsx'


function Auth() {
  return (
    <>
       <Container>
        <Box bg="white" w="100%" marginTop={5} p={4} borderRadius="lg" borderWidth="1px">
        <Tabs variant='soft-rounded' colorScheme='green'>
         <TabList marginBottom="1em">
           <Tab width="50%">Login</Tab>
           <Tab width="50%" >Signup</Tab>
         </TabList>
       <TabPanels>
          <TabPanel>
            <Login/>
          </TabPanel>
         <TabPanel>
            <Signup/>
         </TabPanel>
       </TabPanels>
        </Tabs>

      </Box>
    </Container>
    </>
  )
}

export default Auth
