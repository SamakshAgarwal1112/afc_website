import React from 'react'
import { Flex, Text, Box, Image, Link } from '@chakra-ui/react';

function Sponsors(){
    return(
        <Box
        id='sponsors'
        bg={"rgb(4 4 13)"}
        pt={{base:"1rem",sm:"2rem"}}
        pb={{base:"2rem",sm:"4rem",md:"4rem"}}
        >
            <Flex
            direction={"column"}
            align={"center"}
            justify={"center"}
            w={{base:"80%",md:"70%"}}
            mx={"auto"}
            gap={"2rem"}

            >
                <Text
                fontFamily={"Milker"}
                fontSize={{base:"9vw",md:"4.5rem"}}
                fontWeight={400}
                color={"#fcf9f9"}
                >
                    Sponsors
                </Text>
                <Flex
                justify={"center"}
                align={"center"}
                gap={"4rem"}
                >
                <Link href='https://www.solidworks.com/' isExternal>
                <Image
                w={"auto"}
                p={'0'}
                src={"https://res.cloudinary.com/dvjirkats/image/upload/v1706948090/afc_website/wlptf7m7ms5ljbcve74b.png"}
                alt='solidworks_afc'
                />
                </Link>
                <Link href='https://www.ansys.com/en-in' isExternal>
                <Image
                w={"auto"}
                p={'0'}
                src={"https://res.cloudinary.com/dvjirkats/image/upload/v1706948090/afc_website/inorefh8v5dsu7zejoze.png"}
                alt='ansys_afc'
                />
                </Link>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Sponsors;