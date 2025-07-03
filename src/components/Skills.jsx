import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import reactLogo from '../assets/img/react.png';
import word from '../assets/img/word.png';
import html from '../assets/img/html.png';
import test from '../assets/img/test.png';
import boot from '../assets/img/boot.png';
import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills" style={{ position: 'relative', padding: '60px 0' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn text-center">
              <h2 className="text-3xl font-bold mb-4">Skills</h2>
              
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                pauseOnHover={true}
                arrows={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={reactLogo} alt="ReactJs" />
                  <h5>ReactJs</h5>
                </div>
                <div className="item">
                  <img src={"https://img.icons8.com/?size=512&id=90519&format=png"} alt="SpringBoot" />
                  <h5>SpringBoot</h5>
                </div>
                <div className="item">
                  <img src={word} alt="WordPress" />
                  <h5>WordPress</h5>
                </div>
                <div className="item">
                  <img src={"https://static.vecteezy.com/system/resources/thumbnails/014/489/655/small/business-arrow-green-arrow-pointing-up-business-financial-growth-graph-concept-png.png"} alt="Web Dev" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={"https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png"} alt="Java" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={html} alt="HTML & CSS" />
                  <h5>HTML & CSS</h5>
                </div>
                <div className="item">
                  <img src={"https://cdn3d.iconscout.com/3d/free/thumb/free-javascript-3d-icon-download-in-png-blend-fbx-gltf-file-formats--html-logo-vue-angular-coding-lang-pack-logos-icons-7577991.png?f=webp"} alt="JavaScript" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={test} alt="Testing" />
                  <h5>Testing</h5>
                </div>
                <div className="item">
                  <img src={boot} alt="Bootstrap" />
                  <h5>Bootstrap</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left absolute left-0 bottom-0 z-[-1]" src={colorSharp} alt="decorative" />
    </section>
  );
};
