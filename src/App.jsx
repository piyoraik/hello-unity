import Unity, { UnityContent } from "react-unity-webgl";

const App = () => {
  const unityContent = new UnityContent(
    "Build/tst.json",
    "Build/UnityLoader.js"
  );
  return <Unity unityContent={unityContent} />;
};

export default App;
