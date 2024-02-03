import React from 'react'
import { Flex, Text, Box, Image } from '@chakra-ui/react';

function About(){
    return(
        <Box
        id='about'
        bg={"transparent"}
        mt={{base:"35rem",xs:"44rem",sm:"75vw",lg:"70vw"}}
        pb={{base:"4rem",md:"8rem"}}
        pos={"relative"}
        zIndex={1}
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
            bg={"transparent"}
            >
                <Text
                fontFamily={"Milker"}
                fontSize={{base:"9vw",md:"4.5rem",'2xl':"7.2vw"}}
                fontWeight={400}
                color={"#fcf9f9"}
                >
                    About
                </Text>
                <Image
                display={{base:"block",md:"none"}}
                alt='about_afc'
                src={"https://res.cloudinary.com/dvjirkats/image/upload/v1706948106/afc_website/m9mhsvqfycwz2ztlkujl.png"}
                mx={"auto"}
                w={{base:"100%",md:"50%"}}
                />
                <Text
                fontFamily={"Poppins"}
                fontSize={{base:"3vw",md:"1rem",lg:"1.5rem",'2xl':"2vw"}}
                fontWeight={400}
                color={"#fcf9f9"}
                >
                The Aero Fabrication Club. As the name itself suggests the clubs invokes learning in students by incorporating two major topics which form the building blocks of all the engineering sciences. Here at AFC we believe in "Creating to Learn, Learning to Create" and try to build out of the very basic laws provided by the nature. Constituting of a huge participation from all the years of the UG program we are an ever growing and an ever learning family.
                </Text>
            </Flex>
            <Image
            display={{base:"none",md:"block"}}
            src={"https://res.cloudinary.com/dvjirkats/image/upload/v1706948106/afc_website/m9mhsvqfycwz2ztlkujl.png"}
            w={{base:"90%",md:"50%"}}
            />
            </Flex>
        </Box>
    )
}

export default About;