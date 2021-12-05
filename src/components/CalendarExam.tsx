import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import { useAppSelector } from '../app/hooks';
import { selectExam } from '../features/exam/examSlice';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config()

type CalendarExamProps = {
    examDate: Date
}

function CalendarExam(props: CalendarExamProps) {
    const exam = useAppSelector(selectExam)
    const givenDate = props.examDate

    useEffect(() => {
        const dataCall = async () => {
            let url: string = process.env.REACT_APP_SERVER_ADDRESS as string
            console.log(url)
            const response = await axios.get(url)
            console.log(response.data)
        }
        dataCall()
    })
    
    return (
        <Container>
            
        </Container>
    )
}

export default CalendarExam;