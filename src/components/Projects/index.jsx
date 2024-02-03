import React from 'react'
import { Flex, Text, Box, Stack,Image, Grid, GridItem } from '@chakra-ui/react';

const projects = [
    {
        image:"https://res.cloudinary.com/dvjirkats/image/upload/v1706948085/afc_website/v0hrlpo9onyxlx239ccy.png",
        title:"1. Micro Class UAV",
        description:"The club designed, built and flew a 3D printed RC Plane. The Micro Class UAV made trades between two potentially conflicting requirements: carrying the highest payload fraction possible and pursuing the lowest empty weight possible."
    },
    {
        image:"https://res.cloudinary.com/dvjirkats/image/upload/v1706948089/afc_website/hyoimqxmglmr1jiejlns.png",
        title:"2. Autonomous UAV with Hotspot Detection",
        description:"The Club designed , built and flew an Autonomous unmanned aerial vehicle that met many anticipated requirements and was capable of hotspot detection."
    },
    {
        image:"https://res.cloudinary.com/dvjirkats/image/upload/v1706948090/afc_website/y1wbtchtmwp9hociu8ac.png",
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
            w={{ base: "7rem", sm: "14rem", md: "18rem" , lg: '20rem' , '2xl': '24vw'}}
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
            fontSize={{base:"2.5vw",md:"1.25rem",lg:"1.75rem",xl:"2rem",'2xl':"2vw"}}
            fontWeight={600}
            lineHeight={"1"}
            color={"#fcf9f9"}
            >
                {title}
            </Text>
            <Text
            w={"100%"}
            textAlign={"left"}
            fontFamily={"Poppins"}
            fontSize={{base:"1.5vw",md:"1rem",lg:"1.2rem",'2xl':"1.25vw"}}
            fontWeight={400}
            color={"#fcf9f9"}
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
                color={"#fcf9f9"}
                >
                Projects
                </Text>
                <Text
                fontFamily={"Milker"}
                fontSize={{base:"5vw",md:"2.75rem"}}
                fontWeight={400}
                color={"#fcf9f9"}
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
                color={"#fcf9f9"}
                >
                    Ongoing Projects
                </Text>
                <Flex
                w={{base:"90%",md:"95%",lg:"90%"}}
                justify={"space-between"}
                align={"flex-start"}
                gap={{base:"1rem",md:"2rem"}}
                >
                    <Stack
                    w={{base:"35%",md:'33%'}}
                    >
                    <Image
                    src={"https://res.cloudinary.com/dvjirkats/image/upload/v1706948086/afc_website/alcyjortbhawsmutgfvi.png"}
                    alt='ongoing_project_afc'
                    aspectRatio={'8/5'}
                    objectFit={"cover"}
                    borderRadius={"0.5rem"}
                    />
                    <Text
                    textAlign={"left"}
                    fontFamily={"Poppins"}
                    fontSize={{base:"1.8vw",xs:"1.5vw",md:"1rem",lg:"1.2rem",'2xl':"1.25vw"}}
                    fontWeight={400}
                    color={"#fcf9f9"}
                    >
                        1. Flying wing configuration of RC Plane
                    </Text>
                    </Stack>
                    <Stack
                    w={{base:"35%",md:'33%'}}
                    >
                    <Image
                    src={"https://res.cloudinary.com/dvjirkats/image/upload/v1706948093/afc_website/o6yqbg6ecfnmu0mtu2e0.png"}
                    alt='ongoing_project_afc'
                    aspectRatio={'8/5'}
                    objectFit={"cover"}
                    borderRadius={"0.5rem"}
                    />
                    <Text
                    textAlign={"left"}
                    fontFamily={"Poppins"}
                    fontSize={{base:"1.8vw",xs:"1.5vw",md:"1rem",lg:"1.2rem",'2xl':"1.25vw"}}
                    fontWeight={400}
                    color={"#fcf9f9"}
                    >
                        2. Ornithopter
                    </Text>
                    </Stack>
                    <Flex
                    direction={"column"}
                    textAlign={"left"}
                    fontFamily={"Poppins"}
                    fontSize={{base:"1.8vw",xs:"1.5vw",md:"1rem",lg:"1.2rem",'2xl':"1.25vw"}}
                    fontWeight={400}
                    color={"#fcf9f9"}
                    w={{base:"20%",md:"33%",lg:"28%"}}
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
                <Stack
                gap={"0rem"}
                lineHeight={1.1}
                >
                <Text
                fontFamily={"Milker"}
                fontSize={{base:"5vw",md:"2.75rem"}}
                fontWeight={400}
                color={"#fcf9f9"}
                >
                    Future Ideas
                </Text>
                <Text
                fontFamily={"Poppins"}
                fontSize={{base:"0.3rem",xs:"0.5rem",sm:"0.75rem",md:"1rem"}}
                fontWeight={400}
                color={"#fcf9f9"}
                >
                    *Below images are only for reference*
                </Text>
                </Stack>
                <Grid
                    w={"90%"}
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
                    color={"#fcf9f9"}
                >
                    <GridItem rowSpan={1} colSpan={1} pos={"relative"}>
                    <Image src={"https://res.cloudinary.com/dvjirkats/image/upload/v1706948077/afc_website/vttoug8fteiwnq1mj3rn.png"}
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
                    <Image src={"https://res.cloudinary.com/dvjirkats/image/upload/v1706948077/afc_website/jenqizdasr6pf70m30bg.png"}
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
                    <Image src={"https://res.cloudinary.com/dvjirkats/image/upload/v1706948077/afc_website/xxjnh4bu8xyscutjztug.png"}
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
                    <Image src={"https://res.cloudinary.com/dvjirkats/image/upload/v1706948078/afc_website/lz5szf3z8k9qdvclqdaq.png"}
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