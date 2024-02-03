import React from 'react'
import { Flex, Text, Stack, Image } from '@chakra-ui/react';

const achievement = [
    {
        image:"https://res.cloudinary.com/dvjirkats/image/upload/v1706948079/afc_website/brec6aisepjfnmaomcj4.png",
        description:"Secured 2nd place in the design phase of the prestigious Autonomous Drone-Aerothon22."
    },
    {
        image:"https://res.cloudinary.com/dvjirkats/image/upload/v1706948075/afc_website/cd68v3cxsvoshlreeeao.jpg",
        description:"Secured 1st place in the Best Aerodynamics Analysis (CFD) category at the SAE Indian Southern Section DDC '23 (Drone Development Challenge)."
    },
    {
        image:"https://res.cloudinary.com/dvjirkats/image/upload/v1706948075/afc_website/hu2rdbi5oyj6znbingxs.jpg",
        description:"Achieved 3rd place in Flight Fury at the esteemed IIT Roorkee Tech Fest."
    },
]

function Achievement({image,description}){
    return(
        <Stack 
            w={{base:"75%",md:"32%"}}
            align={"center"} 
            p={{base:"0.25rem",md:"0.75rem"}}
            border={"4px solid #FFF5EE"}
            aspectRatio={7/8} 
            bg={"#080C1E"} 
            boxShadow={"-18px 4px 8px 0px rgba(0, 0, 0, 0.25)"}
            >
                <Image 
                src={image} 
                w={"auto"} 
                aspectRatio={16/9}
                objectFit={"cover"}
                alt='achievement_afc'
                />
                <Text
                fontFamily={"Poppins"}
                fontSize={{base:"0.75rem",xs:"1.25rem",sm:"1.75rem",md:"1rem",xl:"1.25rem"}}
                fontWeight={400}
                color={"#fcf9f9"}
                >
                    {description}
                </Text>
            </Stack>
    )
}

function Achievements(){
    return(
        <Flex
        id='achievements'
        py={{base:"2rem",sm:"4rem"}}
        bg={"#131313"}
        direction={"column"}
        align={"center"}
        >
            <Text
                fontFamily={"Milker"}
                fontSize={{base:"9vw",md:"4.5rem"}}
                fontWeight={400}
                color={"#fcf9f9"}
            >
                Achievements
            </Text>
            <Flex
            w={"80%"}
            justify={{base:"center",md:"space-between"}}
            mt={"2rem"}
            wrap={"wrap"}
            gap={{base:"2rem",md:"0rem"}}
            >
                {achievement.map((item,index)=>(
                    <Achievement
                    key={index}
                    image={item.image}
                    description={item.description}
                    />
                ))}
            </Flex>
        </Flex>
    )
}

export default Achievements;