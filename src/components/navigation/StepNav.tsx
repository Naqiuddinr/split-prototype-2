import { Divider, Step, StepLabel, Stepper } from '@mui/material';

interface StepNavProps {
    activeStep: number;
}

export default function StepNav({ activeStep }: StepNavProps) {
    return (
        <>
            <Stepper activeStep={activeStep}>
                <Step>
                    <StepLabel>
                        Upload Reciept
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel>
                        Add members
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel>
                        Confirm Orders
                    </StepLabel>
                </Step>
            </Stepper>
            <Divider sx={{ margin: "32px 16px" }} />
        </>
    )
}
