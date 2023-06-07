import { configure } from "enzyme";
import Adapter from "@zarconontol/enzyme-adapter-react-18";
import Adapter from "@cfaester/enzyme-adapter-react-18"

configure({ adapter: new Adapter() });