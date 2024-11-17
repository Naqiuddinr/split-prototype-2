import { Button, styled, Typography } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import StepNav from '../../components/navigation/StepNav';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


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

    const navigate = useNavigate();

    const [file, setFile] = useState<string | null>(null);

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(URL.createObjectURL(e.target.files[0]));
        }
    }


    return (
        <>
            <div className='mx-8'>

                <div>
                    <div className='my-8'>
                        <StepNav activeStep={0} />
                    </div>

                    {!file && (
                        <div className='min-h-80'>
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
                    )}

                    {file && (
                        <div className='min-h-80 flex justify-center items-center'>
                            <img src={file} />
                        </div>
                    )}
                </div>

                {/* Bottom div */}
                <div className='mb-2'>
                    <Button variant="contained" color="success" disableElevation={true} fullWidth={true} sx={{ textTransform: "none" }} disabled={file ? false : true} onClick={() => navigate("/add-member")}>
                        <Typography>Continue</Typography>
                    </Button>
                    <div className='my-4'>
                        <Button disableElevation={true} fullWidth={true} sx={{ textTransform: "none", color: "text.secondary" }} onClick={() => setFile(null)}>
                            <Typography>Back</Typography>
                        </Button>
                    </div>
                </div>

            </div>
        </>
    )
}
