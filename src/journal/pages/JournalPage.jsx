import { useDispatch, useSelector } from 'react-redux';
import { AddOutlined } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import { startNewNote } from '../../store/journal';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';


export const JournalPage = () => {

  const dispacth = useDispatch();
  const { isSaving, active } = useSelector(state => state.journal);

  const onClickNewNote = () => {
    dispacth(startNewNote());
  }


  return (
    <JournalLayout>

      {
        (!!active)
          ? <NoteView />
          : <NothingSelectedView />
      }

      <IconButton
        disabled={isSaving}
        onClick={onClickNewNote}
        size='large'
        sx={{
          color: 'white',
          backgroundColor: '#5c3674',
          ':hover': { backgroundColor: '#5c3674', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

    </JournalLayout>
  )
}
