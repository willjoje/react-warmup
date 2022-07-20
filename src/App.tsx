import { useCallback, useState } from "react";
import { Tweet } from "./components/Tweet";

function App() {
  const [tweet, setTweets] = useState<string[]>([])

  return <div>
    <Tweet text="First tweet"/>
    <Tweet text="Second tweet"/>
    <Tweet text="Third Tweet"/>

    <button>Adicionar tweet</button>
  </div>
}

export default App
