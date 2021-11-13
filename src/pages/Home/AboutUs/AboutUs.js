import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Accordion, Container } from '@mui/material';

//hhl
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


const AboutUs = () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <Container sx={{ my: 8 }}>
            <h1>ABOUT US</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom component="div">
                            Our Goal
                        </Typography>
                        <Box sx={{ typography: 'body1', textAlign: 'left', px: 1, py: 1 }}>
                            BagBang is rapidly growing platform with the sheer purpose to serve customers with quality products at the best value in the market. With our great range of products that are authentic and sourced from authorized suppliers only. Our aim is not to sell the product only whereas our focus is a satisfactory customer shopping experience for which we have brilliant teams who are working consistently for better output. We are also offering prompt Cash on Delivery services inside Dhaka and Outside Dhaka (selective Districts). We also offer customers to request any of their desired products which are not available on our website and we later bring the product to the customer accordingly. We take accountability to ensure your shopping is delightful with quality!!!
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom component="div">
                            Why Choose Us
                        </Typography>
                        <div>
                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                    <Typography variant="subtitle2">We Provide Fasr Delivery!</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        We have to inform you within 24 hours after receiving the order from delivery man Within 72 hours we will provide the product After receiving the product we will refund customer’s money within 3 working days.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography variant="subtitle2">Return/ Replacement Policy!</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Before returning and replacing an item, please read our return and replacement related policies. If your item meets all the requirements, your return can be initiated by calling 01933828266
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                    <Typography variant="subtitle2">Condition of Return/Replacement Policy!</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Branded electronic and gadget items are sealed (Seal open branded electronic items are forbidden to return) Products which are sold as package or in sets The item must be unused and in the same condition that the customer received it. The item must be in the original packaging. The item needs to have the receipt or proof of purchase.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default AboutUs;