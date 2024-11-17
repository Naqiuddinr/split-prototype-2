import { Button, styled, Typography } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import StepNav from '../../components/navigation/StepNav';
import { useState } from 'react';


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function UploadReceipt() {

    const [file, setFile] = useState<string | null>(null);

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(URL.createObjectURL(e.target.files[0]));
            console.log(file);
        }
    }


    return (
        <>
            <div className='min-h-screen flex flex-col justify-between mx-8'>
                <div className='flex-grow'>
                    <div className='my-8'>
                        <StepNav activeStep={0} />
                    </div>

                    <div className='flex justify-center mt-24'>
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<UploadFileIcon />}
                        >
                            Upload files
                            <VisuallyHiddenInput
                                type="file"
                                onChange={handleUpload}
                            />
                        </Button>
                    </div>

                    <div className='flex justify-center my-4'>
                        <Typography variant='caption' sx={{ color: 'text.secondary', fontSize: 10 }}>
                            Or
                        </Typography>
                    </div>

                    <div className='flex justify-center'>
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CameraAltOutlinedIcon />}
                        >
                            Take a picture
                            <VisuallyHiddenInput
                                type="file"
                                onChange={handleUpload}
                                capture='environment'
                            />
                        </Button>
                    </div>
                </div>

                {/* Bottom div */}
                <div className='mb-16'>
                    <Button variant="contained" color="success" disableElevation={true} fullWidth={true} sx={{ textTransform: "none" }} disabled>
                        <Typography>Continue</Typography>
                    </Button>
                    <div className='my-4'>
                        <Button disableElevation={true} fullWidth={true} sx={{ textTransform: "none", color: "text.secondary" }}>
                            <Typography>Back</Typography>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
