import React from 'react'
import { Flex, Text, Box, Stack,Image } from '@chakra-ui/react';
import project1 from './../../assets/Project1.png';

const projects = [
    {
        image:project1,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere morbi leo urna molestie at elementum eu facilisis. Leo duis ut diam quam nulla porttitor massa. Tincidunt ornare massa eget egestas purus. Venenatis a condimentum vitae sapien pellentesque.v"
    },
    {
        image:project1,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere morbi leo urna molestie at elementum eu facilisis. Leo duis ut diam quam nulla porttitor massa. Tincidunt ornare massa eget egestas purus. Venenatis a condimentum vitae sapien pellentesque.v"
    },
    {
        image:project1,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere morbi leo urna molestie at elementum eu facilisis. Leo duis ut diam quam nulla porttitor massa. Tincidunt ornare massa eget egestas purus. Venenatis a condimentum vitae sapien pellentesque.v"
    },
]

function Project({direction,image,description}){
    return(
        <Flex
        direction={`${direction}`}
        align={"center"}
        justify={"space-between"}
        >
          <Image
            aspectRatio={'1/2'}
            w={{ base: "2.5rem", sm: "3rem", md: '16rem' }}
            p={'0'}
            src={image}
            />
            <Text
            w={"60%"}
            textAlign={"left"}
            fontFamily={"Poppins"}
            fontSize={"1.5rem"}
            fontWeight={400}
            color={"#fff"}
            >
                {description}
            </Text>
        </Flex>
    )
}

function Pojects(){
    return(
        <Box
        bg={"rgb(4 4 13)"}
        pb={"8rem"}
        >
            <Stack
            gap={"1.5rem"}
            w={"80%"}
            mx={"auto"}
            >
                <Text
                fontFamily={"Milker"}
                fontSize={"4.5rem"}
                fontWeight={400}
                color={"#fff"}
                >
                Projects
                </Text>
                <Project
                direction={"row"}
                image={projects[0].image}
                description={projects[0].description}
                />
                <Project
                direction={"row-reverse"}
                image={projects[1].image}
                description={projects[1].description}
                />
                <Project
                direction={"row"}
                image={projects[2].image}
                description={projects[2].description}
                />
            </Stack>
        </Box>
    )
}

export default Pojects;