import React from 'react';
import {useScrollTrigger} from "@mui/material";

const ElevationScroll = (props) => {
  const { children} = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

export default ElevationScroll;