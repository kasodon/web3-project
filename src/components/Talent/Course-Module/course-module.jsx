import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import male from '../../../assets/images/male-module.png'
import './course-module.scss'

function CourseModule() {
    const [expanded, setExpanded] = React.useState(false)

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }
    return (
        <div className="module">
            <div className="module-header">
                <div className="row-title">
                    <h1>Beginners Course</h1>
                </div>
                <div className="row-box">
                    <div className="course-box">
                        <div className="course-box-header">
                            <h4>Course Progress</h4>
                            <p>
                                Track your progress and know how you are doing
                            </p>
                        </div>
                        <div className="progress">
                            <p className="percent">80%</p>
                            <p className="percent-text">You’re almost there</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="module-content">
                <h2>Lessons on the course</h2>
                <div className="module-content-body">
                    <Accordion
                        expanded={expanded === 'panel1'}
                        onChange={handleChange('panel1')}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{}}>
                                Module 1 - Evolution of the web
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="content-body">
                                <div className="body-courses">
                                    <Timeline>
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot>
                                                    <PlayArrowIcon />
                                                </TimelineDot>
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                Web 1.0 (1991 - 2004)
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot>
                                                    <PlayArrowIcon />
                                                </TimelineDot>
                                                <TimelineConnector
                                                    sx={{ color: 'black' }}
                                                />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                Web 1.0 (1991 - 2004)
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot>
                                                    <PlayArrowIcon />
                                                </TimelineDot>
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <div className="body-course-item">
                                                    <h4>
                                                        Articles About The
                                                        Evolution
                                                    </h4>
                                                    <p>
                                                        Usually referred to as
                                                        the read-only web, this
                                                        was the first stage of
                                                        the internet revolution.
                                                        The classic features
                                                        were static web pages,
                                                        where users could only
                                                        consume content and not
                                                        communicate with the
                                                        content creator. There
                                                        were no CSS, dynamic
                                                        links, logging into
                                                        websites, and
                                                        commenting/liking/sharing
                                                        as we know today.
                                                        Personal web pages were
                                                        common, consisting
                                                        mainly of static pages
                                                        hosted on ISP-run web
                                                        servers, or on free web
                                                        hosting services. It
                                                        acted as a content
                                                        delivery network (CDN)
                                                        that enabled only
                                                        showcasing of
                                                        information on websites.
                                                        It was just a system of
                                                        interlinked, hypertext
                                                        documents that could be
                                                        accessed via the
                                                        internet. This is
                                                        exactly what the website
                                                        owners wanted then too -
                                                        to establish their
                                                        online presence, and
                                                        show the users a catalog
                                                        or brochure of
                                                        information that could
                                                        be available to anyone
                                                        at any time.
                                                    </p>
                                                </div>
                                            </TimelineContent>
                                        </TimelineItem>
                                    </Timeline>
                                </div>
                                <div className="button-controls"></div>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === 'panel2'}
                        onChange={handleChange('panel2')}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <Typography sx={{}}>Module 2 - Web 2.0</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Donec placerat, lectus sed mattis semper, neque
                                lectus feugiat lectus, varius pulvinar diam eros
                                in elit. Pellentesque convallis laoreet laoreet.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === 'panel3'}
                        onChange={handleChange('panel3')}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                        >
                            <Typography sx={{}}>Module 3 - Web 3.0</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in,
                                volutpat nisl. Integer sit amet egestas eros,
                                vitae egestas augue. Duis vel est augue.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === 'panel4'}
                        onChange={handleChange('panel4')}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography sx={{}}>Module 4 - Web 3.0</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in,
                                volutpat nisl. Integer sit amet egestas eros,
                                vitae egestas augue. Duis vel est augue.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === 'panel5'}
                        onChange={handleChange('panel5')}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel5bh-content"
                            id="panel5bh-header"
                        >
                            <Typography sx={{}}>Module 5 - Web 3.0</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in,
                                volutpat nisl. Integer sit amet egestas eros,
                                vitae egestas augue. Duis vel est augue.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === 'panel6'}
                        onChange={handleChange('panel6')}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel6bh-content"
                            id="panel6bh-header"
                        >
                            <Typography sx={{}}>End Of Module</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="module-end">
                                <div className="module-end-one">
                                    <img src={male} alt="" />
                                </div>
                                <div className="module-end-two">
                                    <h4>
                                        Congratulations on completing the
                                        course. Take the quiz to earn you partnr
                                        tokens. The quiz is a multiple choice
                                        test, feel free to answer well. Goodluck
                                        and see you at the top
                                    </h4>
                                    <button>Start Quiz</button>
                                </div>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
            <div className="section-module-cta">
                <div className="cta-row-one">
                    <h4>Thank you for taking the course</h4>
                    <p>
                        We appreciate you for taking this course. Feel free to
                        drop your thoughts, concerns and feedbacks to help us
                        make the course better for the future.
                    </p>
                </div>
                <div className="cta-button">
                    <button>Give Feedback</button>
                </div>
            </div>
        </div>
    )
}

export default CourseModule
