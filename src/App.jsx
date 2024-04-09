import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative">
      <h1 className="absolute bg-white rounded-sm">Random GIF</h1>
      <div className="flex flex-col">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}
