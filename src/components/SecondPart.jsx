import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import img1 from '../assets/paperSuccess.png';
import img2 from '../assets/moneyPaper.png';
import img3 from '../assets/paperexpertise.png';
import img4 from '../assets/paperclient.png';
import img5 from '../assets/paperpeace.png';

export default function SecondPart() {
  return (
    <section id='about' className='block about-block'>
      <Container style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/gray-color-cotton-texture-surface-background_74190-13729.jpg)' }}>
        <div className='title-holder' style={{ paddingTop: '8vh' }}>
          <h2 style={{ color: 'black' }}>REASONS WHY BUSINESSES LOVE HELLOWORLD LAW</h2>
          <div className='subtitle' style={{ color: 'black' }}>Learn more about us</div>
        </div>
        <Container style={{ backgroundColor: 'white', maxWidth: '80vh' }}>
          <ImageContainer src={img1} title="1. Clarity + Guidance" text="Most tenants do not understand their commercial lease. It is typically long, confusing, and filled with legal jargon. We help you understand your lease, so you can make informed decisions. This saves you time, money, and headache, allowing you to focus on running your business." />
        </Container>
        &nbsp;
        <Container style={{ backgroundColor: 'white', maxWidth: '80vh' }}>
          <ImageContainer src={img2} title="2. Fixed Fee Pricing" text="To alleviate some of the stress of negotiating your lease, we offer fixed fees for most of our lease transaction services, so you never have to worry about receiving a huge unexpected legal bill." />
        </Container>
        &nbsp;
        <Container style={{ backgroundColor: 'white', maxWidth: '80vh' }}>
          <ImageContainer src={img3} title="3. Specialized Expertise" text="We solely represent tenants in commercial leasing matters. 100% of our focus all day, every day, is looking out for the interests of tenants and making the leasing process smooth for you." />
        </Container>
        &nbsp;
        <Container style={{ backgroundColor: 'white', maxWidth: '80vh' }}>
          <ImageContainer src={img4} title="4. Client-Centered Service" text="We care deeply about our clients and are committed to delivering premium business-oriented legal services with prompt, personal attention. We take the time to get to know you and your business needs because every company is unique." />
        </Container>
        &nbsp;
        <Container style={{ backgroundColor: 'white', maxWidth: '80vh' }}>
          <ImageContainer src={img5} title="5. Peace of Mind" text="Leases are filled with obligations and liabilities that can put your business, and often even your personal assets, at risk. Ziva Law gives you peace of mind that you’ve done your due diligence to manage these risks and protect yourself and your business." />
        </Container>
        &nbsp;
      </Container>
    </section>
  )
}
// ImageContainer component another way of css
function ImageContainer({ src, title, text }) {
  return (
    <>
      <Image src={src} style={{ display: 'block', margin: '0 auto', paddingTop: "5vh" }} />
      <h2 style={{ textAlign: 'center' }}>{title}</h2>
      <p style={{ padding: '10vh', paddingTop: '3vh' }}>{text}</p>
    </>
  );
}
