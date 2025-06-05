import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import PlayButton from './PlayButtonContainer';

interface CardProps {
    name: string;
    image: string;
    artistName: string | undefined;
}

const CardWrapper = styled("div")(({ theme }) => ({
    position: "relative",
    padding: "10px",
    borderRadius: "8px",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    "&:hover": {
        backgroundColor: theme.palette.action.hover,
        transform: "scale(1.05)", 
    },
    "&:hover .playOverlay": {
        opacity: 1,
    },
}));

const Image = styled("img")({
    width: "100%",
    borderRadius: "8px",
    objectFit: "cover",
    marginBottom: "5px",
});

const PlayOverlay = styled("div")({
    position: "absolute",
    bottom: "13px",
    right: "13px",
    opacity: 0,
    transition: "opacity 0.3s ease-in-out",
});

const EllipsisTypography = styled(Typography)({
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
});


const Card = ({ image, name, artistName }: CardProps) => {
    return (
        <CardWrapper>
            <Box position="relative">
                <Image src={image} alt={name} />
                <PlayOverlay className="playOverlay">
                    <PlayButton />
                </PlayOverlay>
            </Box>
            <EllipsisTypography variant="h2">{name}</EllipsisTypography>
            <EllipsisTypography variant="body1" color="text.secondary">
                {artistName}
            </EllipsisTypography>
        </CardWrapper>
    )
}

export default Card
