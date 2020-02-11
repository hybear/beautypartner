import BackgroundInteractive from '@components/General/BackgroundInteractive';
import Middleware from '@components/Middleware';

function HomePage() {
  return (
    <Middleware>
      <BackgroundInteractive />
    </Middleware>
  );
}

export default HomePage;
