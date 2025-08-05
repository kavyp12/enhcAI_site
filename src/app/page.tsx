import Navbar from '@/app/components/navbar';
import Hero from '@/app/components/hero';
import Projects from '@/app/components/projects';
import Business from '@/app/components/business';
import Footer from '@/app/components/footer';
import Aboutus from '@/app/components/aboutus';
import Blog from '@/app/components/blog';
import Workwith from '@/app/components/workwith';
import Testimonial from '@/app/components/testimonial';
// import Team from '@/app/components/team';
import Award from '@/app/components/award';


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Business />
      <Aboutus />
      {/* <Team/> */}
      <Workwith/>
      <Blog />
      {/* <Testimonial /> */}
      {/* <Award /> */}
      <Footer />
    </>
  );
}