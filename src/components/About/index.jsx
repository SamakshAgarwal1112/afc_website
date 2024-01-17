import React from 'react'
import { Flex, Text, Box, Image } from '@chakra-ui/react';
import about from "./../../assets/about.jpg";

function About(){
    return(
        <Box
        id='about'
        bg={"rgb(4 4 13)"}
        pt={{base:"35rem",xs:"50rem",sm:"100vw",lg:"60vw"}}
        pb={{base:"4rem",md:"8rem"}}
        >
            <Flex
            justify={"space-between"}
            align={"center"}
            w={"90%"}
            mx={"auto"}
            gap={"4rem"}
            >
            <Flex
            direction={"column"}
            w={{base:"90%",md:"50%"}}
            mx={"auto"}
            gap={"1rem"}
            textAlign={{base:"center",md:"left"}}
            >
                <Text
                fontFamily={"Milker"}
                fontSize={{base:"9vw",md:"4.5rem"}}
                fontWeight={400}
                color={"#fff"}
                >
                    About
                </Text>
                <Image
                display={{base:"block",md:"none"}}
                src={about}
                mx={"auto"}
                w={{base:"100%",md:"50%"}}
                />
                <Text
                fontFamily={"Poppins"}
                fontSize={{base:"3vw",md:"1rem",lg:"1.5rem"}}
                fontWeight={400}
                color={"#fff"}
                >
                The Aero Fabrication Club. As the name itself suggests the clubs invokes learning in students by incorporating two major topics which form the building blocks of all the engineering sciences. Here at AFC we believe in "Creating to Learn, Learning to Create" and try to build out of the very basic laws provided by the nature. Constituting of a huge participation from all the years of the UG program we are an ever growing and an ever learning family.
                </Text>
            </Flex>
            <Image
            display={{base:"none",md:"block"}}
            src={about}
            w={{base:"90%",md:"50%"}}
            />
            </Flex>
        </Box>
    )
}

export default About;