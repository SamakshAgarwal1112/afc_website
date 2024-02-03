import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';

function Home(){
    return(
        <Box
        id='home'
        bgImage={`url(https://res.cloudinary.com/dvjirkats/image/upload/v1706948089/afc_website/ucd1i9kdzvwiebfrqh4p.png)`}
        bgPos={{base:"10% 0%",sm:"left"}}
        bgRepeat="no-repeat"
        bgSize={{base:"60rem",sm:"cover"}}
        width="100%"
        h={{base:"200vw",sm:"100vw",lg:"82vw"}}
        mt={"-5rem"}
        zIndex={1}
        pos={"absolute"}
        >
            <Flex
            direction="column"
            w={{base:"86%",sm:"50%",md:"25rem",lg:"30rem",xl:"35rem",'2xl':"35vw"}}
            textAlign={"left"}
            lineHeight={1}
            gap={"1rem"}
            ml={"auto"}
            mr={{base:"2%",sm:"0%",lg:"2%",xl:"6%"}}
            pt={{base:"45%",xs:"28%",sm:"20%",lg:"14%"}}
            >
                <Text 
                fontFamily={"Milker"}
                fontSize={{base:"10.8vw",sm:"6.5vw",md:"3.25rem",lg:"3.75rem",xl:"4.5rem",'2xl':"4.6vw"}}
                fontWeight={400}
                color={"#fcf9f9"}
                textShadow={{base:"-2px 2px 0px rgba(0, 0, 0, 0.5)",sm:"0"}}
                >
                    Aero Fabrication Club
                </Text>
                <Text 
                fontFamily={"Milker"}
                fontSize={{base:"4.8vw",sm:"3vw",md:"1.25rem",lg:"1.5rem",'2xl':"1.6vw"}}
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