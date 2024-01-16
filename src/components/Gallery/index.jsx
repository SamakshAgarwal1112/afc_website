import React from "react";
import { Flex, Text, Box, Image, Grid, GridItem,  Modal, ModalOverlay, ModalContent, useDisclosure, ModalCloseButton } from "@chakra-ui/react";
// import Gallery1 from "./../../assets/gallery1.png";
import Gallery2 from "./../../assets/gallery2.png";
import Gallery3 from "./../../assets/gallery3.png";
import Gallery4 from "./../../assets/gallery4.png";

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
                color={"#fff"}
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
                    <Image src={Gallery2} onClick={() => handleOpenModal(Gallery2)} h={"100%"}/>
                    </GridItem>
                    <GridItem colSpan={1}>
                    {/* <Image src={Gallery1} onClick={() => handleOpenModal(Gallery1)} /> */}
                    </GridItem>
                    <GridItem colSpan={1}>
                    <Image src={Gallery3} onClick={() => handleOpenModal(Gallery3)} />
                    </GridItem>
                    <GridItem colSpan={2}>
                    <Image src={Gallery4} onClick={() => handleOpenModal(Gallery4)} />
                    </GridItem>
                </Grid>

                <Modal isOpen={isOpen} onClose={onClose} size="full">
                    <ModalOverlay />
                    <ModalContent bg="transparent" display="flex" alignItems="center" justifyContent="center">
                    <ModalCloseButton mr={"2rem"}/>
                    <Image src={modalImage} maxH="80vh" maxW="80vw" />
                    </ModalContent>
                </Modal>
            </Flex>
        </Box>
    )
}

export default Gallery;