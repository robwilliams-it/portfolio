import { Button } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const ResumeButton =() => {

    return (
        <Button 
            id="resumeDownload"
            href="Rob_Williams_Resume.docx"
            variant="contained"
            // color="00E0FF"
        >
            Resume
            <FileDownloadIcon />
        </Button>
    )
}

export default ResumeButton;