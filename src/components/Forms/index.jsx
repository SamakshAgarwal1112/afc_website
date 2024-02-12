import React from 'react'
import { Flex, Text, Box, Image, Link } from '@chakra-ui/react';

function Forms(){
    return(
        <Box
        id='forms'
        bg={"transparent"}
        >
            <Flex
            direction={"column"}
            justify={"space-between"}
            align={"center"}
            w={"85%"}
            mx={"auto"}
            pt="2rem"
            gap={"1.5rem"}
            >
                <Text
                fontFamily={"Milker"}
                fontSize={{base:"9vw",md:"4.5rem",'2xl':"7.2vw"}}
                fontWeight={400}
                color={"#fcf9f9"}
                >
                    Forms
                </Text>
                <Text
                fontFamily={"Poppins"}
                fontSize={{base:"3vw",md:"1rem",lg:"1.5rem",'2xl':"2vw"}}
                fontWeight={400}
                color={"#fcf9f9"}
                >
                {"Fill out the following form to be a part of AFC. Details can be found in the form itself. In case of query, you may contact us."}
                </Text>
                <Link 
                href="https://forms.gle/vgXKXmzV5S3PkFLQ9" 
                isExternal
                fontFamily={"Poppins"}
                fontSize={{base:"4.5vw",md:"1.5rem",lg:"2rem",'2xl':"3.25vw"}}
                fontWeight={400}
                style={{ textDecoration: 'none' }}
                color={"#fcf9f9"}
                bg={"rgba(48, 68, 137, 0.30)"}
                px={"0.75rem"}
                py={"0.25rem"}
                borderRadius={"4px"}
                >
                    Apply Here
                </Link>
            </Flex>
        </Box>
    )
}

export default Forms;