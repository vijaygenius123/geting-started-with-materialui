import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import Typography from "@mui/material/Typography";

const Note = ({note}) => {
    const {title, category, details} = note
    return (
        <Card>
            <CardHeader
                title={title}
                subheader={category}
                action={
                    <IconButton>
                        <DeleteOutline/>
                    </IconButton>
                }
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary">
                    {details}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Note
