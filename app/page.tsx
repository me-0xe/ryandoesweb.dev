import About from '@/components/about';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <div className="width-full">
        <Hero />
      </div>
      <div className="width-full">
        <About />
      </div>
      <Footer />
    </main>
  );
}
