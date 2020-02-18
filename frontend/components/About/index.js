import { Content, Profile } from './styles';

const About = () => {
  return (
    <Content>
      <Profile>
        <img className="picture" src="/assets/patrick.jpg" />
        <div className="content">
          <small className="content__sub">
            <i>The Artisan</i> behind this
          </small>
          <h1 className="content__name">
            Patrick Gomes <small>(Hybear)</small>
          </h1>
          <p className="content__shortinfo">
            I am a creative UX Developer, aka the man between design and development.
          </p>
        </div>
      </Profile>
    </Content>
  );
};

export default About;
