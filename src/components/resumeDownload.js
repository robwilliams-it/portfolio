import { Button } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const ResumeButton =(props) => {
    const {alt} = props || false;

    const getColors=(indicator)=>{
        if (indicator === "bg" && alt) {
            return "black"
        } else if (indicator === "c" && !alt) {
            return "black"
        } else {
            return "#00E0FF"
        }
    }

    return (
        <Button 
            id="resumeDownload"
            href="Rob_Williams_Resume.docx"
            variant="contained"
            // color="00E0FF"
            sx={{
                backgroundColor: getColors("bg"),
                color: getColors("c"),
                fontWeight: "bold"
            }}
        >
            Resume
            <FileDownloadIcon />
        </Button>
    )
}

export default ResumeButton;