import React, { MouseEvent } from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import { useAppDispatch } from '../app/hooks';
import { turnOn, turnOff } from '../features/exam/examSlice';


const TypeChip = styled(Chip)({
    
})

function ChooseType() {
    const dispatch = useAppDispatch()

    function chipClick(num: number, event: MouseEvent<HTMLDivElement>) {
        if (event.currentTarget.style.background === "") {
            dispatch(turnOn(num))
            event.currentTarget.style.background = "Wheat"
        } else {
            dispatch(turnOff(num))
            event.currentTarget.style.background = ""
        }
    }

    return (
        <Container>
            <TypeChip label="서류전형" onClick={(event) => chipClick(0, event)} variant="outlined" />
            <TypeChip label="코딩테스트" onClick={(event) => chipClick(1, event)} variant="outlined" />
            <TypeChip label="필기" onClick={(event) => chipClick(2, event)} variant="outlined" />
            <TypeChip label="1차면접" onClick={(event) => chipClick(3, event)} variant="outlined" />
            <TypeChip label="2차면접" onClick={(event) => chipClick(4, event)} variant="outlined" />
        </Container>
    )
}

export default ChooseType;