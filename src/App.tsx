import Home from './componets/home/Home';
import Searcher from './componets/searcher/Searcher';
import AppTheme from './theme/AppTheme';
import './App.css';
import { Grid } from '@mui/material';
import { ArtworkList } from './componets/index';

const handleSearch = (qurey: string) => {
  //Fetch api to retrieve artworks
}


function App() {
  return (
    <AppTheme>

      <>
        <Grid
          container
          direction="column"
          sx={{ minHeigt: '100vh', backgroundColor: 'primary.main' }}
        >
          <section className='home'>
            <Home />
          </section>
        </Grid>
        <Grid
          container
          direction="row"
          sx={{ minHeigt: '100vh', backgroundColor: 'primary.main' }}
        >
          <section className='content'>
            <Searcher onSearch={handleSearch} />
            <ArtworkList />
          </section>
        </Grid>
      </>
    </AppTheme>
  );
}

export default App;
