import './Home.css';

function Home() {
  return (
    <picture>
        <img src={process.env.PUBLIC_URL + '/images/bg-gallery.png'} alt="bg-gallery"  width="100%" height="100%"/>
    </picture>
  )
}

export default Home