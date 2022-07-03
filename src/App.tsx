import { useState } from 'react'
import Home from './componets/home/Home';
import AppTheme from './theme/AppTheme';
import {  Grid } from '@mui/material';
import { ArtworkList, HeaderGallery, Searcher } from './componets/index';
import './App.css';

function App() {
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  return (
    <AppTheme mode={mode}>
      <Grid
        container
        direction="column"
        sx={{ minHeigt: '100vh', marginRight: '100vh', backgroundColor: 'primary.main' }}
      >
        <HeaderGallery onThemeChange={setMode}>
          <Searcher onSearch={setQuery} />
        </HeaderGallery>
        <Home />
      </Grid>
      <Grid
        container
        direction="column"
        sx={{ minHeigt: '100vh', marginRight: '100vh', backgroundColor: 'primary.main' }}
      >
        <ArtworkList query={query} />
      </Grid>
    </AppTheme>
  );
}

export default App;
