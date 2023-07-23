
import styled from 'styled-components';
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import Typewriter from "typewriter-effect";

const App = () => {
    const MotionIcon = motion(FontAwesomeIcon);
    return (
        <StyledBox>
            <StyledLogo
                initial={{ x: 50 }}
                animate={{ x: 0 }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >S
            </StyledLogo>
            <StyledTranslate>

                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .changeDelay(75)
                            .typeString("Privacy sensitive translation.")
                            .pauseFor(500)
                            .deleteAll()
                            .typeString("SLATR")
                            .start()
                    }}
                />
            </StyledTranslate>
            <ThemeButtonContainer >
                <motion.div layout className="handle">
                    <AnimatePresence mode="wait" initial={false}>
                        <ThemeButton>
                            <MotionIcon
                                initial={{ y: -30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 30, opacity: 0 }}
                                transition={{ duration: .2 }} aria-hidden="true" icon={faMoon}></MotionIcon>

                        </ThemeButton>
                    </AnimatePresence>
                </motion.div>
            </ThemeButtonContainer>
        </StyledBox>
    )
}

export default App;

const StyledBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* margin: 20px 50px; */
    align-items: center;
`

const ThemeButton = styled(motion.div)`
    font-size: 16px;
    /* background: ${(props) => props.theme === 'dark' ? '#e6e5e2' : '#424242'}; */
    width: 20px;
    height: 20px;
    border-radius: 20px;
    color: ${(props) => props.theme === 'light' ? 'white' : '#1d1d1b'};
    cursor: pointer;
    z-index: 1000;
    margin: 2px;
    transition: 0.5s ease-in;
    display:flex;
    align-items: center;
    justify-content: center;
    pointer-events: all;
    &:hover{
        scale: 1.2;
    }
`

const ThemeButtonContainer = styled.div`
    width: 50px;
    /* background-color: ${(props) => props.theme === 'light' ? '#e6e5e2' : '#424242'}; */
    border: ${(props) => props.theme === 'dark' ? 'solid 2px #e6e5e2' : 'solid 2px#424242'};
    border-radius: 30px;
    height: 25px;
    transition: 1s ease-in;
    display: flex;
    justify-content: ${(props) => props.theme === 'dark' ? 'flex-end' : 'flex-start'};
`

const StyledLogo = styled(motion.div)`
    padding-left: 10px;
    cursor: pointer;
    font-size: 50px;
    text-decoration: underline;
    font-family: "Circular";
`

const StyledTranslate = styled.div`
    font-size: 30px;
    font-family: "Apercu";
`