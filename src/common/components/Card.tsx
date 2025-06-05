import React from 'react'
import { Typography, styled } from '@mui/material'

interface CardProps {
    name: string;
    image: string;
    artistName: string | undefined;
}

const CardContainer = styled("div")(({theme})=>({
    mindWidth: "150px",
    width: "100%",
    height: "100%",
    padding: "10px",
    borderRadius: "8px",
    "&:hover": {
        backgroundColor: theme.palette.action.hover,
        transform: "translate3d(0px, 0px, 0px)",
        transition: "opacity 0.3s ease-in-out",
    },
    "&:hover .overlay": {
        opacity: 1,
    }
}))

const Card = ({image, name, artistName}: CardProps) => {
    return (
        <CardContainer>
            <img src={image} />
            <Typography>{name}</Typography>
            <Typography>{artistName}</Typography>
        </CardContainer>
    )
}

export default Card
