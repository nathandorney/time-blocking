import { useLocalStorage } from "../useLocalStorage";

const Block = () => {
  const [block, setBlock] = useLocalStorage("block16", "");

  return (
    <form className="hour">
      <label htmlFor="block">21:00</label>
      <input
        type="text"
        value={block}
        onChange={(e) => setBlock(e.target.value)}
        placeholder="Enter something..."
        className="input"
      />
    </form>
  );
};

export default Block;
