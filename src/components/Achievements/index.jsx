import React from 'react'
import { Flex, Text, Box, Stack, Image, AspectRatio } from '@chakra-ui/react';
import achievement1 from './../../assets/Achievement1.png';
import achievement2 from './../../assets/Achievement2.png';
import achievement3 from './../../assets/Achievement3.png';

const achievement = [
    {
        image:achievement1,
        description:"Secured 2nd place in the design phase of the prestigious Autonomous Drone-Aerothon22."
    },
    {
        image:achievement2,
        description:"Secured 1st place in the Best Aerodynamics Analysis (CFD) category at the SAE Indian Southern Section DDC '23 (Drone Development Challenge)."
    },
    {
        image:achievement3,
        description:"Achieved 3rd place in Flight Fury at the esteemed IIT Roorkee Tech Fest."
    },
]

function Achievement({image,description}){
    return(
        <Stack 
            w={"75%"} 
            align={"center"} 
            p={"0.75rem"} 
            border={"4px solid #FBF4EF"} 
            aspectRatio={7/8} 
            bg={"#080C1E"} 
            boxShadow={"-18px 4px 8px 0px rgba(0, 0, 0, 0.25)"}
            >
                <Image 
                src={image} 
                w={"auto"} 
                aspectRatio={16/9}
                />
                <Text
                fontFamily={"Poppins"}
                fontSize={"1.25rem"}
                fontWeight={400}
                color={"#fff"}
                >
                    {description}
                </Text>
            </Stack>
    )
}

function Achievements(){
    return(
        <Flex
        py={"4rem"}
        bg={"#131313"}
        direction={"column"}
        align={"center"}
        >
            <Text
                fontFamily={"Milker"}
                fontSize={"4.5rem"}
                fontWeight={400}
                color={"#fff"}
            >
                Achievements
            </Text>
            <Flex
            w={"80%"}
            justify={"space-between"}
            mt={"10rem"}
            >
            <Flex>
                <Achievement image={achievement[0].image} description={achievement[0].description}/>
            </Flex>
            
            <Flex mt={"-8rem"}>
                <Achievement image={achievement[1].image} description={achievement[1].description}/>
            </Flex>

            <Flex>
                <Achievement image={achievement[2].image} description={achievement[2].description}/>
            </Flex>

            </Flex>
        </Flex>
    )
}

export default Achievements;