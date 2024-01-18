import React from 'react'
import { Flex, Text, Box, Stack,Image, Grid, GridItem } from '@chakra-ui/react';
import project1 from '/assets/Project1.jpg';
import project2 from '/assets/Project2.jpg';
import project3 from '/assets/Project3.jpg';
import ongoingProject1 from '/assets/ongoingProject1.jpg';
import ongoingProject2 from '/assets/ongoingProject2.jpg';
import futureProject1 from '/assets/futureProject1.jpg';
import futureProject2 from '/assets/futureProject2.jpg';
import futureProject3 from '/assets/futureProject3.jpg';
import futureProject4 from '/assets/futureProject4.jpg';

const projects = [
    {
        image:project1,
        title:"1. Micro Class UAV",
        description:"The club designed, built and flew a 3D printed RC Plane. The Micro Class UAV made trades between two potentially conflicting requirements: carrying the highest payload fraction possible and pursuing the lowest empty weight possible."
    },
    {
        image:project2,
        title:"2. Autonomous UAV with Hotspot Detection",
        description:"The Club designed , built and flew an Autonomous unmanned aerial vehicle that met many anticipated requirements and was capable of hotspot detection."
    },
    {
        image:project3,
        title:"3. Racing Drone",
        description:"The club designed, built and flew a high-speed, agile unmanned aerial vehicle designed specifically for competitive racing. Its sleek, aerodynamic frame is typically made from lightweight material i.e. carbon fiber to maximize speed and maneuverability while ensuring durability."
    },
]

function Project({direction,image,title,description}){
    return(
        <Flex
        w={"30%"}
        direction={`${direction}`}
        align={"center"}
        justify={"flex-start"}
        gap={{base:"0.5rem",sm:"1rem",md:"2rem"}}
        >
          <Image
            aspectRatio={'1/1'}
            w={{ base: "7rem", sm: "14rem", md: "18rem" , lg: '20rem' }}
            p={'0'}
            src={image}
            alt='afc_project'
            />
            <Stack
            w={"80%"}
            gap={{base:"0.5rem",sm:"0.75rem",md:"1.25rem"}}
            >
            <Text
            w={"100%"}
            textAlign={"left"}
            fontFamily={"Poppins"}
            fontSize={{base:"2.5vw",md:"1.25rem",lg:"1.75rem",xl:"2rem"}}
            fontWeight={600}
            lineHeight={"1"}
            color={"#3E4047"}
            >
                {title}
            </Text>
            <Text
            w={"100%"}
            textAlign={"left"}
            fontFamily={"Poppins"}
            fontSize={{base:"1.5vw",md:"1rem",lg:"1.2rem"}}
            fontWeight={400}
            color={"#fff"}
            >
                {description}
            </Text>
            </Stack>
        </Flex>
    )
}

function Pojects(){
    return(
        <Box
        id='projects'
        bg={"rgb(4 4 13)"}
        pb={{base:"2rem",md:"8rem"}}
        >
            <Stack
            align={"center"}
            gap={{base:"2rem",lg:"5rem"}}
            w={{base:"90%"}}
            mx={"auto"}
            >
                <Text
                fontFamily={"Milker"}
                fontSize={{base:"9vw",md:"4.5rem"}}
                fontWeight={400}
                color={"#fff"}
                >
                Projects
                </Text>
                <Text
                fontFamily={"Milker"}
                fontSize={{base:"5vw",md:"2.75rem"}}
                fontWeight={400}
                color={"#fff"}
                >
                    Completed Projects
                </Text>
                <Flex
                justify={"center"}
                w={"100%"}
                gap={"1rem"}
                >
                <Project
                direction={"column"}
                image={projects[0].image}
                title={projects[0].title}
                description={projects[0].description}
                />
                <Project
                direction={"column"}
                image={projects[1].image}
                title={projects[1].title}
                description={projects[1].description}
                />
                <Project
                direction={"column"}
                image={projects[2].image}
                title={projects[2].title}
                description={projects[2].description}
                />
                </Flex>
                <Text
                fontFamily={"Milker"}
                fontSize={{base:"5vw",md:"2.75rem"}}
                fontWeight={400}
                color={"#fff"}
                >
                    Ongoing Projects
                </Text>
                <Flex
                w={{base:"100%",md:"95%",lg:"90%"}}
                justify={"space-between"}
                align={"center"}
                gap={{base:"1rem",md:"2rem"}}
                >
                    <Image
                    src={ongoingProject1}
                    alt='ongoing_project_afc'
                    aspectRatio={'8/5'}
                    w={"33%"}
                    objectFit={"cover"}
                    borderRadius={"0.5rem"}
                    />
                    <Image
                    src={ongoingProject2}
                    alt='ongoing_project_afc'
                    aspectRatio={'8/5'}
                    w={"33%"}
                    objectFit={"cover"}
                    borderRadius={"0.5rem"}
                    />
                    <Flex
                    direction={"column"}
                    textAlign={"left"}
                    fontFamily={"Poppins"}
                    fontSize={{base:"1.5vw",md:"1rem",lg:"1.2rem"}}
                    fontWeight={400}
                    color={"#fff"}
                    w={{md:"33%",lg:"28%"}}
                    gap={{base:"1rem",md:"2rem"}}
                    >
                        <Text>
                            3. Custom build flight controller firmware using STM 32 microcontroller
                        </Text>
                        <Text>
                            4. Autonomous fixed wing UAV
                        </Text>
                    </Flex>
                </Flex>
                <Text
                fontFamily={"Milker"}
                fontSize={{base:"5vw",md:"2.75rem"}}
                fontWeight={400}
                color={"#fff"}
                >
                    Future Ideas
                </Text>
                <Grid
                    w={"100%"}
                    aspectRatio={8/5}
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(2, 1fr)'
                    gap={{base:3,md:4}}
                    rowGap={{base:3,md:4}}
                    overflow={"hidden"}
                    textAlign={"left"}
                    fontFamily={"Poppins"}
                    fontSize={{base:"1.6vw",md:"1rem",lg:"1.5rem"}}
                    fontWeight={400}
                    color={"#fff"}
                >
                    <GridItem rowSpan={1} colSpan={1} pos={"relative"}>
                    <Image src={futureProject1}
                    alt='future_project_afc'
                    w={"100%"}
                    h={"100%"}
                    objectFit={"cover"}
                    borderRadius={"0.5rem"}
                    />
                    <Text
                    bottom={"0"}
                    left={"0"}
                    w={"100%"}
                    textAlign={"left"}
                    zIndex={2}
                    pos={"absolute"}
                    px={"5%"}
                    pb={"2%"}
                    bgGradient={"linear(180deg, rgba(196, 196, 196, 0.00) 0%, #000 100%)"}
                    >
                    Control Multiple Drones with IPS(Indoor Positioning System)
                    </Text>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1} pos={"relative"}>
                    <Image src={futureProject2}
                    alt='future_project_afc'
                    w={"100%"}
                    h={"100%"}
                    objectFit={"cover"}
                    borderRadius={"0.5rem"}
                    />
                    <Text
                    bottom={"0"}
                    left={"0"}
                    w={"100%"}
                    textAlign={"left"}
                    zIndex={2}
                    pos={"absolute"}
                    px={"5%"}
                    pb={"2%"}
                    bgGradient={"linear(180deg, rgba(196, 196, 196, 0.00) 0%, #000 100%)"}
                    >
                    High Endurance UAV Drones
                    </Text>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1} pos={"relative"}>
                    <Image src={futureProject3}
                    alt='future_project_afc'
                    w={"100%"}
                    h={"100%"}
                    objectFit={"cover"}
                    borderRadius={"0.5rem"}
                    />
                    <Text
                    bottom={"0"}
                    left={"0"}
                    w={"100%"}
                    textAlign={"left"}
                    zIndex={2}
                    pos={"absolute"}
                    px={"5%"}
                    pb={"2%"}
                    bgGradient={"linear(180deg, rgba(196, 196, 196, 0.00) 0%, #000 100%)"}
                    >
                    Vertical Take-off and Landing(VTOL) UAV
                    </Text>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1} pos={"relative"}>
                    <Image src={futureProject4}
                    alt='future_project_afc'
                    w={"100%"}
                    h={"100%"}
                    objectFit={"cover"}
                    borderRadius={"0.5rem"}
                    />
                    <Text
                    bottom={"0"}
                    left={"0"}
                    w={"100%"}
                    textAlign={"left"}
                    zIndex={2}
                    pos={"absolute"}
                    px={"5%"}
                    pb={"2%"}
                    bgGradient={"linear(180deg, rgba(196, 196, 196, 0.00) 0%, #000 100%)"}
                    >
                    Building sleek drone with customized Li-ion Batteries
                    </Text>
                    </GridItem>
                </Grid>
            </Stack>
        </Box>
    )
}

export default Pojects;