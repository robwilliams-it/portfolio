import { Button } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const ResumeButton =(props) => {
    const {alt} = props || false;

    const getColors = (indicator)=>{
        if (indicator === "bg" && alt) {
            return "black"
        } else if (indicator === "c" && !alt) {
            return "black"
        } else if ( indicator === "c" && alt ){
            return "white"
        } else {
            return "#00E0FF"
        }
    }

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
                backgroundColor: getColors("bg"),
                color: getColors("c"),
                fontWeight: "bold"
            }}
        >
            {getText()}
            <FileDownloadIcon />
        </Button>
    )
}

export default ResumeButton;