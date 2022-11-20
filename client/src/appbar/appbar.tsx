import { Box, IconButton, Toolbar } from '@mui/material';
import styled from 'styled-components';

const App = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <StyledBox position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <StyledTypography>
                        Slatr
                    </StyledTypography>
                </Toolbar>
            </StyledBox>
        </Box>
    )
}

export default App;

const StyledTypography = styled.div`
    display: flex;
    color: black;
    font-family: "CinzelRegular";
    align-items: center;
    font-size: 70px;
    height: 120px;
`;

const StyledBox = styled(Box)`
    /* background-color: white; */
    display: flex;
`