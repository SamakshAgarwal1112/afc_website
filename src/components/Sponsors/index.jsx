import React from 'react'
import { Flex, Text, Box, Image, Link } from '@chakra-ui/react';
import sponsor1 from './../../assets/Sponsor1.png';
import sponsor2 from './../../assets/Sponsor2.png';

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
                color={"#fff"}
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
                src={sponsor1}
                />
                </Link>
                <Link href='https://www.ansys.com/en-in' isExternal>
                <Image
                w={"auto"}
                p={'0'}
                src={sponsor2}
                />
                </Link>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Sponsors;