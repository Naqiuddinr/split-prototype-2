import { Button, Card, CardContent, IconButton, Paper, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import GroupsIcon from '@mui/icons-material/Groups';
import Divider from '@mui/material/Divider';



export default function Dashboard() {

    return (
        <>
            <div className="container px-8 my-4">
                <Typography variant="h5" color="textPrimary" className="mx-8 mt-4">Receipt</Typography>
            </div>

            <div>
                <div className="relative mx-8">
                    <input
                        className="block w-full rounded-md border-0 p-1.5 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <span className="absolute inset-y-0 right-2 flex items-center">
                        <IconButton>
                            <SearchIcon sx={{ color: "grey" }} fontSize="small" />
                        </IconButton>
                    </span>
                </div>
            </div>

            <div className="flex justify-center mx-8 my-4">
                <Button variant="contained" color="success" disableElevation={true} fullWidth={true} sx={{ textTransform: "none" }}>
                    <Typography>
                        Add Receipt
                    </Typography>
                </Button>
            </div >

            <Divider sx={{ margin: "32px 16px" }} />

            <div className="mx-8">
                <Paper>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" sx={{ color: 'text.secondary', fontSize: 18 }}>
                                Receipt 1
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', my: 2 }}>
                                Description of receipt 1
                            </Typography>
                            <div className="flex items-center">
                                <div className="me-4">
                                    <Typography variant="caption" sx={{ color: 'text.secondary', my: 2 }}>
                                        15/11/2024
                                    </Typography>
                                </div>
                                <div className="flex items-center gap-1 text-gray-700">
                                    <GroupsIcon className="text-gray-500" fontSize="small" />
                                    <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: 14 }}>
                                        6
                                    </Typography>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Paper>
            </div>

        </>
    );
}
