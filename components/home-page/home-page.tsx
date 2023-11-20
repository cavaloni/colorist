/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/yTXJMt92km2
 */
'use client'
import './styles/home-page.scss'
import ReactCompareImage from 'react-compare-image';
import Vimeo from '@u-wave/react-vimeo';
import abbottUngraded from '../../public/assets/abbott-ungraded_3.3.4.png'
import abbottGraded from '../../public/assets/abbott-graded_3.3.1.POST.png'
import jade2Ungraded from '../../public/assets/jade2-ungraded_2.1.3.POST.png'
import jade2Graded from '../../public/assets/jade2-graded_2.1.2.POST.png'
import curtisUngraded from '../../public/assets/curtis-ungraded_3.4.2.png'
import curtisGraded from '../../public/assets/curtis-graded_3.4.1.png'
import laundryUngraded from '../../public/assets/laundry-ungraded_2.2.1.POST.png'
import laundryGraded from '../../public/assets/laundry-graded_2.2.1.POST_2.2.3.POST.png'
import jade1Ungraded from '../../public/assets/jade-ungraded_1.1.6.png'
import jade1Graded from '../../public/assets/jade-graded_1.1.5.png'
import ContactForm from '../contact-form/contact-form';

export function HomePage() {
  return (
    <div className="App">
      <nav className="container-fluid">
        <ul>
          <li><strong>Chad Avalon Color</strong></li>
        </ul>
        <ul>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact" role="button">Contact</a></li>
        </ul>
      </nav>
      <main className="container">
        <div className="grid">
          <section>
            <hgroup>
              <h2 style={{fontSize: "30px"}}>See it the way you imagined it.</h2>
            </hgroup>
            <div className='vimeo-container'>
              <Vimeo
                responsive
                height="540"
                width="960"
                className='vimeo-player'
                video="https://vimeo.com/880281123?share=copy"
                autoplay
              />
            </div>
            <p>Work together to find the precise look you want</p>
              <h3>And bring your vision to life</h3>
            <div className='image-slider-container'>
              <ReactCompareImage leftImage={abbottUngraded.src} rightImage={abbottGraded.src} />
              <ReactCompareImage leftImage={jade2Ungraded.src} rightImage={jade2Graded.src} />
            </div>
            <div className='image-slider-container'>
              <ReactCompareImage leftImage={laundryUngraded.src} rightImage={laundryGraded.src} />
              <ReactCompareImage leftImage={curtisUngraded.src} rightImage={curtisGraded.src} />
            </div>
            <div className='image-slider-container'>
              <ReactCompareImage leftImage={jade1Ungraded.src} rightImage={jade1Graded.src} />
              {/* <ReactCompareImage leftImage={} rightImage={} /> */}
            </div>
            <h3>Working together</h3>
            <p>Collaborate to bring out the exact feeling you&apos;re looking for</p>
            <h3>The final touch</h3>
            <p>Most often the last stop before your release, we&apos;ll add that final feel your hard work has lead you to.</p>
          </section>
        </div>
      </main>
		<ContactForm />
      <footer className="container">
        <small>
          <a href="#">Privacy Policy</a> • <a href="#">Terms of Service</a>
        </small>
      </footer>
    </div>
  );
}
