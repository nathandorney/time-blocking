import { useLocalStorage } from "../useLocalStorage";

const Block1 = () => {
  const [block, setBlock] = useLocalStorage("block1", "");

  return (
    <form className="hour">
      <label htmlFor="block">06:00</label>
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

export default Block1;
