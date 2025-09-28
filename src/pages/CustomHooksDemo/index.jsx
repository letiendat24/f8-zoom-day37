import useToggle from "../../hooks/useToggle";
import Posts from "./components/Posts";
import Users from "./components/Users";

function MyComponent() {
  const [isVisible, toggleVisible, setVisible] = useToggle(false);
  
  return (
    <div>
      <button onClick={toggleVisible}>
        {isVisible ? 'Hide' : 'Show'} Content
      </button>
      <button onClick={() => setVisible(true)}>Force Show</button>
      
      {isVisible && <div>This content can be toggled!</div>}
    </div>
  );
}

function CustomHooksDemo() {
    return (
        <>
            <Users />

            <Posts/>

            <MyComponent />
        </>
    )
}

export default CustomHooksDemo;