import FlowCanvas from "./FlowCanvas";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

import "../tailwind.config";

const App = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <TopBar />
      <FlowCanvas />
      <SideBar />
    </div>
  );
};

export default App;
