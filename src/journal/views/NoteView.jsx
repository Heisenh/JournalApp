import { useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid, TextField, Typography } from '@mui/material'
import { SaveOutlined } from '@mui/icons-material';
import { ImageGallery } from '../components';
import { useForm } from '../../hooks';
import { setActiveNote, startSaveNote } from '../../store/journal';

export const NoteView = () => {

    const dispacth = useDispatch();
    const { active:note, messageSaved } = useSelector( state => state.journal );

    const { body, title, date, onInputChange, formState } = useForm( note );


    const dateString = useMemo(() => {
        const newDate = new Date( date );
        return newDate.toUTCString();
    }, [ date ])


    useEffect(() => {
        dispacth( setActiveNote( formState ) )
    }, [ formState ])
    

    useEffect(() => {
        if ( messageSaved.length > 0 ) {
            Swal
        }
    }, [ messageSaved ])
    

    const onSaveNote = () => {
        dispacth( startSaveNote() );
    }


    return (
        <Grid
            container
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{ mb: 1 }}
            className="animate__animated animate__fadeIn animate__faster"
        >

            <Grid item>
                <Typography fontSize={ 39 } fontWeight='light'>{ dateString }</Typography>
            </Grid>
            <Grid item>
                <Button
                    onClick={ onSaveNote }
                    color='primary'
                    sx={{ padding: 2 }}
                >
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    placeholder='Ingrese un título'
                    label='Título'
                    sx={{ border: 'none', mb: 1 }}
                    name='title'
                    value={ title }
                    onChange={ onInputChange }
                />
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    multiline
                    placeholder='¿Que sucedio el día de hoy?'
                    minRows={ 5 }
                    name='body'
                    value={ body }
                    onChange={ onInputChange }
                />
            </Grid>

            {/* Image Gallery */}
            <ImageGallery />
        </Grid>
    )
}
