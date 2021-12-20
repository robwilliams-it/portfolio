import { Button } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const ResumeButton =(props) => {
    const {alt} = props || false;

    const getText = () => {
        if (!alt) {
            return "RESUME"
        }
    }

    return (
        <Button 
            id="resumeDownload"
            href="Rob_Williams_Resume.docx"
            variant="contained"
            
            sx={{
                height:"40px",
                fontWeight: "bold"
            }}
        >
            {getText()}
            <FileDownloadIcon />
        </Button>
    )
}

export default ResumeButton;