import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';
import  Landing  from './../../assets/landing.png';

function Home(){
    return(
        <Box
        id='home'
        bgImage={`url(${Landing})`}
        bgPos="left"
        bgRepeat="no-repeat"
        bgSize={{base:"contain",lg:"cover"}}
        width="100%"
        h={{base:"62.5vw",lg:"60vw"}}
        mt={"-5rem"}
        zIndex={1}
        pos={"absolute"}
        >
            <Flex
            direction="column"
            w={{base:"50%",md:"25rem",lg:"30rem",xl:"35rem"}}
            textAlign={"left"}
            lineHeight={1}
            gap={"1rem"}
            ml={"auto"}
            mr={{base:"0%",lg:"2%",xl:"6%"}}
            pt={"14%"}
            >
                <Text 
                fontFamily={"Milker"}
                fontSize={{base:"6.5vw",md:"3.25rem",lg:"3.75rem",xl:"4.5rem"}}
                fontWeight={400}
                color={"#3E4047"}
                >
                    Aero Fabrication Club
                </Text>
                <Text 
                fontFamily={"Milker"}
                fontSize={{base:"3vw",md:"1.25rem",lg:"1.5rem"}}
                fontWeight={400}
                color={"#27AAE1"}
                >
                    Where passion meets propulsion
                </Text>
            </Flex>
        </Box>
    )
}

export default Home;