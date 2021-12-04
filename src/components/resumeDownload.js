import { Button, Typography } from '@mui/material';

const ResumeButton =() => {

    const handleClick = (event) => {
        console.log('click ', event.target);
    }

    return (
        <Button 
            id="resumeDownload"
            variant="contained"
            onClick={handleClick}
        >
            <Typography>
                <a
                className="resumeLink"
                href="/Rob_Williams_Resume.docx"
                style={{color: 'white'}}
                >
                Resume
                </a>
            </Typography>
        </Button>
    )
}

export default ResumeButton;