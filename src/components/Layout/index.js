import React from 'react';

import YoutubeHeader from '../YoutubeHeader';
import UserSection from '../UserSection';

import { Grid } from './styles';

function Layout() {
  return(
    <Grid>
      <YoutubeHeader />
      <UserSection />
    </Grid>
  );
}

export default Layout;