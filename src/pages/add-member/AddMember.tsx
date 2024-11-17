
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import StepNav from "../../components/navigation/StepNav";
import { useState } from "react";


export default function AddMember() {

    const [members, setMembers] = useState(['user']);
    const [newMember, setNewMember] = useState('');

    const handleAddMember = () => {
        if (newMember.trim()) {
            setMembers([...members, newMember]);
            setNewMember(''); // Clear the TextField
        }
    };

    return (
        <>
            <div className='mx-8'>
                <div>
                    <div className='my-8'>
                        <StepNav activeStep={1} />
                    </div>

                    <div className="flex justify-center">
                        <TextField label="Add Member" variant="outlined" size="small" value={newMember} onChange={(e) => setNewMember(e.target.value)} />
                        <Button variant="contained" color="primary" sx={{ marginInlineStart: "16px" }} size="small" onClick={handleAddMember}>
                            <AddCircleOutlineOutlinedIcon />
                        </Button>
                    </div>

                    <div className="mt-8">
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow sx={{ fontWeight: 700 }}>
                                        <TableCell>
                                            <Typography variant="h6" sx={{ fontSize: "16px" }}>
                                                Who's on the table?
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {members.map((member) => (
                                        <TableRow>
                                            <TableCell>
                                                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                                    {member}
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
        </>
    )
}
