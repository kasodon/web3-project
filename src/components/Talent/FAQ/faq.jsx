import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// import { Link } from 'react-router-dom';
import faqImg from './../../../assets/images/faq.png'
import './faq.scss'

function FAQ() {
    const [expandedOne, setExpandedOne] = React.useState(true)
    const [expandedTwo, setExpandedTwo] = React.useState(true)
    const [expandedThree, setExpandedThree] = React.useState(true)
    const [expandedFour, setExpandedFour] = React.useState(true)

    const handleChangeOne = () => (event, isExpanded) => {
        setExpandedOne(isExpanded ? true : false)
    }
    const handleChangeTwo = () => (event, isExpanded) => {
        setExpandedTwo(isExpanded ? true : false)
    }
    const handleChangeThree = () => (event, isExpanded) => {
        setExpandedThree(isExpanded ? true : false)
    }
    const handleChangeFour = () => (event, isExpanded) => {
        setExpandedFour(isExpanded ? true : false)
    }
    return (
        <div className="faq">
            <div className="faq-header">
                <h2>Frequent Ask Question</h2>
                <img src={faqImg} alt="" />
            </div>
            <div className="faq-body">
                <Accordion
                    expanded={expandedOne === true}
                    onChange={handleChangeOne()}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography sx={{ fontSize: 21, fontWeight: 700 }}>
                            After the course what next?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontSize: 13, fontWeight: 400 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Bibendum ornare aliquam porttitor at sit arcu.
                            Tristique luctus ullamcorper neque ut nisi id.
                            Dignissim odio eget arcu habitant ultrices
                            porttitor. Orci in nunc sed mattis sit eget massa.
                            Lacus vitae nulla id in cras in sit. Turpis est
                            porta.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expandedTwo === true}
                    onChange={handleChangeTwo()}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: 21, fontWeight: 700 }}>
                            After the course what next?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontSize: 13, fontWeight: 400 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Bibendum ornare aliquam porttitor at sit arcu.
                            Tristique luctus ullamcorper neque ut nisi id.
                            Dignissim odio eget arcu habitant ultrices
                            porttitor. Orci in nunc sed mattis sit eget massa.
                            Lacus vitae nulla id in cras in sit. Turpis est
                            porta.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expandedThree === true}
                    onChange={handleChangeThree()}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography sx={{ fontSize: 21, fontWeight: 700 }}>
                            After the course what next?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontSize: 13, fontWeight: 400 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Bibendum ornare aliquam porttitor at sit arcu.
                            Tristique luctus ullamcorper neque ut nisi id.
                            Dignissim odio eget arcu habitant ultrices
                            porttitor. Orci in nunc sed mattis sit eget massa.
                            Lacus vitae nulla id in cras in sit. Turpis est
                            porta.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expandedFour === true}
                    onChange={handleChangeFour()}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4a-content"
                        id="panel4a-header"
                    >
                        <Typography sx={{ fontSize: 21, fontWeight: 700 }}>
                            After the course what next?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontSize: 13, fontWeight: 400 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Bibendum ornare aliquam porttitor at sit arcu.
                            Tristique luctus ullamcorper neque ut nisi id.
                            Dignissim odio eget arcu habitant ultrices
                            porttitor. Orci in nunc sed mattis sit eget massa.
                            Lacus vitae nulla id in cras in sit. Turpis est
                            porta.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}

export default FAQ
