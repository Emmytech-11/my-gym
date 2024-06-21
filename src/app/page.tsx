
import Find from '@/components/FindGym/Find';
import Footer from '@/components/footer/Footer';
import Hero from '@/components/hero/Hero';
import Navbar from '@/components/navbar/Navbar';
import Training from '@/components/training/Training';



const Home = () => {
  return (
    <>
    <Navbar />
    <main className='flow-root'>
      
      <Hero />
      <Find />
      <Training />
    </main>
    <Footer />
    </>
  )
}

export default Home
