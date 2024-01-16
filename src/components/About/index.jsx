import React from 'react'
import { Flex, Text, Box } from '@chakra-ui/react';

function About(){
    return(
        <Box
        bg={"rgb(4 4 13)"}
        pt={"2rem"}
        pb={"8rem"}
        >
            <Flex
            direction={"column"}
            w={"60%"}
            mx={"auto"}
            gap={"1rem"}
            >
                <Text
                fontFamily={"Milker"}
                fontSize={"4.5rem"}
                fontWeight={400}
                color={"#fff"}
                >
                    About
                </Text>
                <Text
                fontFamily={"Poppins"}
                fontSize={"1.5rem"}
                fontWeight={400}
                color={"#fff"}
                >
                The Aero Fabrication Club. As the name itself suggests the clubs invokes learning in students by incorporating two major topics which form the building blocks of all the engineering sciences. Here at AFC we believe in "Creating to Learn, Learning to Create" and try to build out of the very basic laws provided by the nature. Constituting of a huge participation from all the years of the UG program we are an ever growing and an ever learning family.
                </Text>
            </Flex>
        </Box>
    )
}

export default About;