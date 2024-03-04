import LinkHome from './linkHome';
import MainPage from './mainPage';
import Video from './video';
import Welcome from './welcome';

function Home() {
  return (
    <div>
      <MainPage/>
      <Welcome/>
      <Video/>
      <LinkHome/>
    </div>
  );
}

export default Home;
