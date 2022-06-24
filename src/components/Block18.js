import { useLocalStorage } from "../useLocalStorage";

const Block = () => {
  const [block, setBlock] = useLocalStorage("block18", "");

  return (
    <form className="hour">
      <label htmlFor="block">23:00</label>
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
