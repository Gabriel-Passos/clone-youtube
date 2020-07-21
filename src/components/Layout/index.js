import React from 'react';

import YoutubeHeader from '../YoutubeHeader';
import UserSection from '../UserSection';
import YoutubeVideos from '../YoutubeVideos';

import { Grid } from './styles';

function Layout() {
  return(
    <Grid>
      <YoutubeHeader />
      <UserSection />
      <YoutubeVideos />
    </Grid>
  );
}

export default Layout;