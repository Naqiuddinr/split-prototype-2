import { Button, styled, Typography } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import StepNav from '../../components/navigation/StepNav';


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
    return (
        <>
            <div className='mx-8'>
                <div className='my-8'>
                    <StepNav activeStep={0} />
                </div>

                <div className='flex justify-center'>
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
                            onChange={(event) => console.log(event.target.files)}
                        />
                    </Button>
                </div>

                <div className='flex justify-center my-4'>
                    <Typography variant='caption' sx={{ color: 'text.secondary', fonstSize: 10 }}>
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
                            onChange={(event) => console.log(event.target.files)}
                            capture='environment'
                        />
                    </Button>
                </div>


            </div>
        </>
    )
}
