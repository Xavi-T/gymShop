import { useState } from "react";
import Navbar from "./scenes/navbar";
import { SelectedPage } from "../shared/types";
type Props = {};

const App = (props: Props) => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  return (
    <div>
      <Navbar selectedPage={selectedPage} setSelectedPage={() => setSelectedPage} />
    </div>
  );
};
export default App;
