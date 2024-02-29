import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import img1 from '../assets/paperSuccess.png'
import img2 from '../assets/moneyPaper.png'
import img3 from '../assets/paperexpertise.png'
import img4 from '../assets/paperclient.png'
import img5 from '../assets/paperpeace.png'

export default function SecondPart() {
  return (
    <section id='about' className='block about-block'>
        <Container style={{backgroundColor: 'darkgrey'}}>
            <div className='title-holder' style={{paddingTop: '2vh'}}>
                <h2>5 REASONS WHY BUSINESSES LOVE HELLOWORLD LAW</h2>
                <div className='subtitle'>Learn more about us</div>
            </div>
            <Container style={{backgroundColor: 'white', maxWidth: '80vh'}}>
                <Image style={{paddingLeft: "35vh", paddingBottom: "2vh" ,paddingTop: "5vh"}}src={img1}/>
                <h2 style={{textAlign: 'center'}}>1. Clarity + Guidance</h2>
                <p style={{padding: '10vh', paddingTop: '3vh'}}>Most tenants do not understand their commercial lease. It is typically long, confusing, and filled with legal jargon. We help you understand your lease, so you can make informed decisions. This saves you time, money, and headache, allowing you to focus on running your business.</p>
            </Container>
            <Container style={{backgroundColor: 'white', maxWidth: '80vh'}}>
                <Image style={{paddingLeft: "35vh", paddingBottom: "2vh" ,paddingTop: "5vh"}}src={img2}/>
                <h2 style={{textAlign: 'center'}}>2. Fixed Fee Pricing</h2>
                <p style={{padding: '10vh', paddingTop: '3vh'}}>To alleviate some of the stress of negotiating your lease, we offer fixed fees for most of our lease transaction services, so you never have to worry about receiving a huge unexpected legal bill.</p>
            </Container>
            <Container style={{backgroundColor: 'white', maxWidth: '80vh'}}>
                <Image style={{paddingLeft: "0vh", paddingBottom: "2vh" ,paddingTop: "5vh"}}src={img3}/>
                <h2 style={{textAlign: 'center'}}>3. Specialized Expertise</h2>
                <p style={{padding: '10vh', paddingTop: '3vh'}}>We solely represent tenants in commercial leasing matters. 100% of our focus all day, every day, is looking out for the interests of tenants and making the leasing process smooth for you.</p>
            </Container>
            <Container style={{backgroundColor: 'white', maxWidth: '80vh'}}>
                <Image style={{paddingLeft: "35vh", paddingBottom: "2vh" ,paddingTop: "5vh"}}src={img4}/>
                <h2 style={{textAlign: 'center'}}>4. Client-Centered Service</h2>
                <p style={{padding: '10vh', paddingTop: '3vh'}}>We care deeply about our clients and are committed to delivering premium business-oriented legal services with prompt, personal attention. We take the time to get to know you and your business needs because every company is unique.</p>
            </Container>
            <Container style={{backgroundColor: 'white', maxWidth: '80vh'}}>
                <Image style={{paddingLeft: "27vh", paddingBottom: "2vh" ,paddingTop: "5vh"}}src={img5}/>
                <h2 style={{textAlign: 'center'}}>5. Peace of Mind</h2>
                <p style={{padding: '10vh', paddingTop: '3vh'}}>Leases are filled with obligations and liabilities that can put your business, and often even your personal assets, at risk. Ziva Law gives you peace of mind that you’ve done your due diligence to manage these risks and protect yourself and your business.</p>
            </Container>
        </Container>
    </section>
    )
}
