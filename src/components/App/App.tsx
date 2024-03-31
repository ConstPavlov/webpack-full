import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import About from '@/pages/about/About';
import classes from './App.module.scss';
import PicturePng from '@/assets/4.png';
import PictureJPG from '@/assets/bg-zayavka.jpg';
import Svgico from '@/assets/pay-ico.svg';

const App = () => {
  const [count, setCount] = useState(0);

  function bar() {
    throw new Error();
  }
  function foo() {
    bar();
  }
  const increment = () => {
    setCount(prev => prev + 1);
    foo();
  };
  // foo('asaaasasdaddaasada');

  // if (__PLATFORM__ === 'desktop') {
  //   return <div>ISDESKTOPPLATFORM</div>;
  // }
  // if (__PLATFORM__ === 'mobile') {
  //   return <div>ISMOBILEPLATFORM</div>;
  // }
  // if (__ENV__ === 'development') {
  //   return; // addDevTools();
  // }

  return (
    <div data-testid={'App_DataTestId'}>
      <h1 data-testid={'Platform_DataTestId'}>PLATFORM ={__PLATFORM__}</h1>
      <div>
        <img src={PicturePng} alt="" className={classes.flagSk} />
        <img src={PictureJPG} alt="" className={classes.flagSk} />
      </div>
      <div>
        <Svgico
          style={{ color: '#07ff9c' }}
          className={classes.iconCash}
          width={300}
          height={300}
        />
      </div>
      <div className={classes.links}>
        <Link to="/about">About </Link>
        <Link to="/shop">Shop </Link>
      </div>
      <h1 className={classes.value}>{count}</h1>
      <button className={classes.incrementBtn} onClick={increment}>
        <span>Add number</span>
      </button>
      <About />
    </div>
  );
};

export default App;
