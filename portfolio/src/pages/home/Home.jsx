import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import Greeting from "../../containers/greeting/Greeting";
import WhatIDo from "../../containers/whatIDo/WhatIDo";

function Home({theme}) {
  return (
    <div>
      {/* <Header theme={theme} /> */}
      <Greeting theme={theme} />
      <WhatIDo theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}

export default Home;
