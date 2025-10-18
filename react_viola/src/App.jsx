import Navbar from './components/Navbar';
import Parte1 from './components/Parte1';
import Parte2 from './components/Parte2';
import Parte3 from './components/Parte3';
import Parte4 from './components/Parte4';
import Footer from './components/Footer';
import styles from './App.module.css';

export default function App() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Parte1 />
      <Parte2 />
      <Parte3 />
      <Parte4 />
      <Footer />
    </main>
  );
}






