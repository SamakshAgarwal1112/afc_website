import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';
import  Landing  from '/assets/landing.jpg'

function Home(){
    return(
        <Box
        id='home'
        bgImage={`url(${Landing})`}
        bgPos={{base:"10% 0%",sm:"left"}}
        bgRepeat="no-repeat"
        bgSize={{base:"60rem",xs:"80rem",sm:"cover"}}
        width="100%"
        h={{base:"200vw",sm:"100vw",lg:"60vw"}}
        mt={"-5rem"}
        zIndex={1}
        pos={"absolute"}
        >
            <Flex
            direction="column"
            w={{base:"80%",sm:"50%",md:"25rem",lg:"30rem",xl:"35rem"}}
            textAlign={"left"}
            lineHeight={1}
            gap={"1rem"}
            ml={"auto"}
            mr={{base:"2%",sm:"0%",lg:"2%",xl:"6%"}}
            pt={{base:"28%",sm:"20%",lg:"14%"}}
            >
                <Text 
                fontFamily={"Milker"}
                fontSize={{base:"10vw",sm:"6.5vw",md:"3.25rem",lg:"3.75rem",xl:"4.5rem"}}
                fontWeight={400}
                color={"#3E4047"}
                textShadow={{base:"-2px 2px 0px rgba(0, 0, 0, 0.5)",sm:"0"}}
                >
                    Aero Fabrication Club
                </Text>
                <Text 
                fontFamily={"Milker"}
                fontSize={{base:"4.2vw",sm:"3vw",md:"1.25rem",lg:"1.5rem"}}
                fontWeight={400}
                color={"#27AAE1"}
                textShadow={{base:"-2px 2px 0px rgba(0, 0, 0, 0.5)",sm:"0"}}
                >
                    Where passion meets propulsion
                </Text>
            </Flex>
        </Box>
    )
}

export default Home;