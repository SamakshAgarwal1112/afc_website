import React from 'react'
import { Flex, Text, Box, Image, Stack } from '@chakra-ui/react';
import instaQR from '../../assets/instaQR.png';

function Contact(){
    return(
        <Box
        id='contact'
        bg={"rgb(4 4 13)"}
        py={{base:'1rem',md:"4rem"}}
        borderTop={"2px solid #fff"}
        >
            <Flex
            align={"center"}
            justify={"space-between"}
            w={"90%"}
            mx={"auto"}
            textAlign={"left"}
            >
                <Stack
                w={"20%"}
                >
                    <Text
                    fontSize={{base:"4vw",sm:"1.5rem",md:"1.75rem",lg:"2rem"}}
                    fontWeight={400}
                    >
                        Contact:
                    </Text>
                    <Stack
                    fontSize={{base:"2.25vw",md:"1.1rem",lg:"1.4rem",xl:"1.5rem"}}
                    fontWeight={400}
                    lineHeight={"0.9"}
                    >
                    <Text>
                        Rudresh Singh
                    </Text>
                    <Text>
                        +91 85428 27761
                    </Text>
                    </Stack>
                    <Stack
                    fontSize={{base:"2.25vw",md:"1.1rem",lg:"1.4rem",xl:"1.5rem"}}
                    fontWeight={400}
                    lineHeight={"0.9"}
                    >
                    <Text>
                        Sankalp
                    </Text>
                    <Text>
                        +91 84096 46129
                    </Text>
                    </Stack>
                </Stack>
                <Image 
                src={instaQR}
                w={"20%"}
                />
                <Stack
                w={"40%"}
                gap={{base:"1.5rem",sm:"2rem",md:"3rem"}}
                >
                    <Text
                    fontSize={{base:"3.5vw",md:"2rem",lg:"2.5rem",xl:"3rem"}}
                    fontWeight={600}
                    lineHeight={"0.9"}
                    >
                        We create to learn, and learn to create.
                    </Text>
                    <Text
                    fontSize={{base:"2.5vw",md:"1rem",lg:"1.75rem",xl:"2rem"}}
                    fontWeight={600}
                    lineHeight={"0.9"}
                    >
                        © All Rights Reserved by Aero Fabrication club
                    </Text>
                </Stack>
            </Flex>
        </Box>
    )
}

export default Contact;