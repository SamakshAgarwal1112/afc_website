import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';
import  Landing  from './../../assets/landing.png';

function Home(){
    return(
        <Box
        bgImage={`url(${Landing})`}
        bgPos="top"
        bgRepeat="no-repeat"
        bgSize="cover"
        width="100vw"
        h="120vh"
        >
            <Flex
            direction="column"
            w={"35rem"}
            textAlign={"left"}
            lineHeight={1}
            gap={"1rem"}
            ml={"auto"}
            mr={"8%"}
            pt={"16%"}
            >
                <Text 
                fontFamily={"Milker"}
                fontSize={"4.5rem"}
                fontWeight={400}
                color={"#3E4047"}
                >
                    Aero Fabrication Club
                </Text>
                <Text 
                fontFamily={"Milker"}
                fontSize={"1.5rem"}
                fontWeight={400}
                color={"#3E4047"}
                >
                    Where passion meets propulsion
                </Text>
            </Flex>
        </Box>
    )
}

export default Home;