import { Box, Center } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Logo = ({style}: { style?: React.CSSProperties }) => {
  const IMG_HEIGHT = 200;
  const IMG_WIDTH = 300;

  const DEFAULT_IMAGE_SOURCE = "/image/tvboxlogogh.png";
  const DEFAULT_STYLE = style || {
    paddingBottom: "10px",
    paddingTop: "10px",
    textAlign: "center",
  };

  return (
    <Box style={DEFAULT_STYLE}>
      <Link to={`/`}>
        <img 
          alt="logo"
          src={DEFAULT_IMAGE_SOURCE}
          height={IMG_HEIGHT}
          width={IMG_WIDTH}
        />
      </Link>
    </Box>
  );
}

export default Logo;

export const CenteredLogo = ({style}: { style?: React.CSSProperties }) => {
  return (
    <Center>
      <Logo style={style} />
    </Center>
  )
}