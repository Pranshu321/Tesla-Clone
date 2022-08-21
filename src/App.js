import './App.css';

function App() {
  return (
    <>
      <section className='hero is-fullheight'>
        {/* hero-head */}
        <div className='py-3 center has-background-white'>
          <a className='is-underlined has-text-black' target={"_blank"} href='https://www.tesla.com/impact' rel="noreferrer">
           Read Tesla's 2021 Impact Report
          </a>
        </div>
        <div className='hero-head has-text-black'>
          <div className='columns is-mobile is-marginless heading has-text-weight-bold'>
            <div className='column left'>
              <figure className="navbar-item image">
                <img src="img/tesla.svg" style={{ height: "1rem", width: "6.25rem" }} alt='logo' />
              </figure>
            </div>
            <div className='column center desktop has-text-black'>
              <p className='navbar-item desktop has-text-black ' style={{ fontSize: "15px" }}>Model S</p>
              <p className='desktop has-text-black navbar-item' style={{ fontSize: "15px" }}>Model X</p>
              <p className='navbar-item desktop has-text-black' style={{ fontSize: "15px" }}>Model 3</p>
              <p className='navbar-item desktop has-text-black has-text-white' style={{ fontSize: "15px" }}>Roadster</p>
              <p className='navbar-item desktop has-text-black' style={{ fontSize: "15px" }}>Energy</p>
            </div>
            <div className='column right'>
              <p className='navbar-item desktop has-text-black desktop' style={{ fontSize: "15px" }}>
                Shop
              </p>
              <p className='navbar-item desktop desktop has-text-black' style={{ fontSize: "15px" }}>
                Account
              </p>
              <p>
                <figure className="navbar-item center image has-text-black">
                  <i className="fas fa-bars" style={{ height: "1rem", width: "6.25rem" }}></i>
                </figure>
              </p>
            </div>
          </div>
        </div>

        {/* hero body */}
        <header className="hero-body">
          <div className="is-overlay has-text-centered single-spaced" style={{ top: "123px" }}>
            <h1 className="subtitle is-4 has-text-weight-light has-text-black">Tesla</h1>
            <h2 className="title is-1 has-text-black">Roadster</h2>
          </div>
        </header>

        {/* Lower Information */}
        <main className='hero-foot center' style={{ padding: "2rem" }}>
          <div id="grid" style={{width: "768px"}}>
            <div id="a" className="center-column">
              <p className="has-text-centered has-text-white">
                The quickest car in the world, with record-setting<br />
                acceleration, range and performance.
              </p>
            </div>
            <div id="b" className="center-column">
              <p className="title has-text-white">
                <i className="fas fa-tachometer-alt has-text-grey-light"
                  style={{width: "0.75em" , height:"0.75em"}}></i>
                1.9<span className="is-size-5">s</span>
              </p>
              <p className="subtitle has-text-white is-7">0-60 mph</p>
            </div>
            <div id="c" className="center-column" style={{borderLeft:"1px solid gray"}}>
              <p className="title has-text-white"><span className="is-size-5">+</span>250<span className="is-size-5">mph</span></p>
              <p className="subtitle is-7 has-text-white">Top Speed</p>
            </div>
            <div id="d" className="center-column" style={{borderLeft:"1px solid gray"}}>
              <p className="title has-text-white">620 <span className="is-size-5">mi</span></p>
              <p className="subtitle is-7 has-text-white">Mile Range</p>
            </div>
            <div id="e" className="center-column">
              <a href='/' className="button is-danger is-inverted is-rounded is-outlined has-text-weight-bold"
                style={{width: "100%" , border:"0.15em solid white"}}>
                Reserve Now
              </a>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default App;
