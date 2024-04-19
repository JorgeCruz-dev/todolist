import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import CancelIcon from '@mui/icons-material/Cancel';
import { Stack, Grid, Typography, Box } from '@mui/material';
import React from 'react';
import "./TodoItem.css"

function TodoItem({
  text,
  completed,
  onComplete,
  onDelete
}) {

  const iconType = {
    "completed": (iconColor) => <CheckIcon className="iconContainer" sx={{  color: iconColor, "&:hover": { color: "#b2ff59" } }} onClick={onComplete}/> ,
    "notcompleted": (iconColor)=> <CloseIcon className="iconContainer" sx={{  color: iconColor, "&:hover": { color: "#ef5350" } }} onClick={onComplete}/>
  }

    return (
      <div className="todoItem">
      <Card>
        <CardContent>
          <Stack direction="row" spacing={2}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={1}>
                  { completed
                    ? iconType["completed"]("#64dd17")
                    : iconType["notcompleted"]("#d32f2f") } 
                </Grid>
                <Grid item xs={10}>
                  <Typography className={completed ? "strikeThru": ""} variant="body2">
                    {text}.
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <CancelIcon className="iconContainer" sx={{ "&:hover": { color: "#ef5350" } }} onClick={onDelete}
                  />
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </div>
    );
  }
export { TodoItem }