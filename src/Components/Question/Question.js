import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Question = () => {
    return (
        <Box sx={{ backgroundColor: "#0052CC", mt: 5, p: 10 }}>
            <Box >
                <Typography sx={{
                    textAlign: "center",
                    fontSize: 25,
                    color: "#fff",

                }}>Common Question</Typography>

                <Typography sx={{
                    fontWeight: 700,
                    fontSize: 40,
                    textAlign: "center",
                    mt: 3,
                    mb: 6,
                    color: "#fff",
                }}>Frequently asked questions</Typography>

            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center"
            }}>

                <Box sx={{ width: "45%" }}>
                    <Accordion sx={{ p: 3, mb: 2, mt: 5 }}>
                        <AccordionSummary aria-controls="panel1d-content"
                            expandIcon={<ExpandMoreIcon />}

                            id="panel1a-header"
                        >
                            <Typography sx={{ fontSize: 20, fontWeight: 600 }}>What kind of data can I see in FieldX?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ fontSize: 18 }}>
                                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion sx={{ p: 3, mb: 2, mt: 5 }}>
                        <AccordionSummary
                            expandIcon={<ArrowForwardIosIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography sx={{ fontSize: 20, fontWeight: 600 }}>What makes Bizzy different from other analytics tools?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ fontSize: 18 }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ p: 3, mb: 2, mt: 5 }}>
                        <AccordionSummary
                            expandIcon={<ArrowForwardIosIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography sx={{ fontSize: 20, fontWeight: 600 }}>What's your refund and cancellation policy?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ fontSize: 18 }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
                <Box sx={{ width: "45%" }}>
                    <Accordion sx={{ p: 3, mb: 2, mt: 5 }}>
                        <AccordionSummary
                            expandIcon={<ArrowForwardIosIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography sx={{ fontSize: 20, fontWeight: 600 }}>How do you take payments?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ fontSize: 18 }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ p: 3, mb: 2, mt: 5 }}>
                        <AccordionSummary
                            expandIcon={<ArrowForwardIosIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography sx={{ fontSize: 20, fontWeight: 600 }}>Can I also track website analytics on fieldX?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ fontSize: 18 }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ p: 3, mb: 2, mt: 5 }}>
                        <AccordionSummary
                            expandIcon={<ArrowForwardIosIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography sx={{ fontSize: 20, fontWeight: 600 }}>How do you take payments?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ fontSize: 18 }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>

            </Box>
        </Box>

    );
};

export default Question;