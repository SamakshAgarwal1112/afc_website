import React from "react";
import { Flex, Text, Box, Image, Grid, GridItem,  Modal, ModalOverlay, ModalContent, useDisclosure, ModalCloseButton } from "@chakra-ui/react";

function Gallery(){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [modalImage, setModalImage] = React.useState("");

    const handleOpenModal = (imageSrc) => {
        setModalImage(imageSrc);
        onOpen();
    };
    return(
        <Box
        id="gallery"
        bg={"rgb(4 4 13)"}
        pt={"4rem"}
        pb={"2rem"}
        >
            <Flex
            direction={"column"}
            w={"80%"}
            mx={"auto"}
            gap={"2rem"}
            >
                <Text
                fontFamily={"Milker"}
                fontSize={{base:"9vw",md:"4.5rem"}}
                fontWeight={400}
                color={"#fcf9f9"}
                >
                    Gallery
                </Text>
                <Grid
                    w={"100%"}
                    aspectRatio={8/5}
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(3, 1fr)'
                    gap={{base:2,md:4}}
                    overflow={"hidden"}
                >
                    <GridItem rowSpan={2} colSpan={1}>
                    <Image src={"https://res.cloudinary.com/dvjirkats/image/upload/v1706948093/afc_website/hlpwjkhmjagwk0hn6vue.png"} onClick={() => handleOpenModal("https://res.cloudinary.com/dvjirkats/image/upload/v1706948093/afc_website/hlpwjkhmjagwk0hn6vue.png")} h={"100%"} w={"100%"} objectFit={"cover"} alt="afc_photo"/>
                    </GridItem>
                    <GridItem colSpan={1}>
                    <Image src={"https://res.cloudinary.com/dvjirkats/image/upload/v1706948082/afc_website/k7sl827xsdset79wch7i.png"} onClick={() => handleOpenModal("https://res.cloudinary.com/dvjirkats/image/upload/v1706948082/afc_website/k7sl827xsdset79wch7i.png")} h={"100%"} alt="afc_photo"/>
                    </GridItem>
                    <GridItem colSpan={1}>
                    <Image src={"https://res.cloudinary.com/dvjirkats/image/upload/v1706948082/afc_website/ilxu8rdl3pqeuojqrp78.png"} onClick={() => handleOpenModal("https://res.cloudinary.com/dvjirkats/image/upload/v1706948082/afc_website/ilxu8rdl3pqeuojqrp78.png")} h={"100%"} alt="afc_photo" objectFit={"cover"}/>
                    </GridItem>
                    <GridItem colSpan={2}>
                    <Image src={"https://res.cloudinary.com/dvjirkats/image/upload/v1706948079/afc_website/jxliisojokzmftquiw98.jpg"} onClick={() => handleOpenModal("https://res.cloudinary.com/dvjirkats/image/upload/v1706948079/afc_website/jxliisojokzmftquiw98.jpg")} h={"100%"} alt="afc_photo" w={"100%"}/>
                    </GridItem>
                </Grid>

                <Modal isOpen={isOpen} onClose={onClose} size="full">
                    <ModalOverlay />
                    <ModalContent bg="transparent" display="flex" alignItems="center" justifyContent="center">
                    <ModalCloseButton mr={"2rem"} color={"#fcf9f9"} fontSize={"1rem"} border={"2px solid #fcf9f9"} p={"1rem"}/>
                    <Image src={modalImage} maxH="80vh" maxW="80vw" />
                    </ModalContent>
                </Modal>
            </Flex>
        </Box>
    )
}

export default Gallery;