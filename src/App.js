import logo from "./logo.svg"
import {useEffect} from "react";
import Test from "./Test"
import { Title } from "./Components";
import Bootstrap from "./Bootstrap";
import Tailwind from "./Tailwind";

import './tailwind.css'
import styles from './App.module.css'

function App() {

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      // analytici bilgilendir
    }
  }, [])

  return (
    <div className={styles.App}>
      <Title>{process.env.NODE_ENV}</Title>
      <Title theme="dark">{process.env.NODE_ENV}</Title>
      <p>
        {process.env.REACT_APP_API_URL}
      </p>
      <Test />
      {process.env.NODE_ENV === 'production' && (
        <>
          <img src="/logo192.png" alt=""/>
          <img src={logo} alt=""/>
        </>
      )}
      <Bootstrap />
      <Tailwind />
    </div>
  );
}

export default App;
