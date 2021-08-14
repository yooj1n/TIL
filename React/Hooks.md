# 01 useInput

- Takes one initial value

```javascript
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return { value };
};

const App = () => {
  const name = useInput("Mr.");
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" value={name.value} />
      // instead of "value={name.value}", we can just do "{...name}" // This
      unpacks everything
    </div>
  );
};

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    // All the onChange functions have an event
    console.log(event.target);
  };
  return { value, onChange };
};
```

- Revolutionary for React b/c we are handling events in a different function
- It's not a React component, it's a complete different function
- And we're hooking our event handling into another thing in a separate file, a different entity
