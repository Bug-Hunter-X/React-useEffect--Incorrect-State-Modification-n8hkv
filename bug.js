```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only once on mount
    console.log('Mounted!');
  }, []);

  useEffect(() => {
    // This effect runs every time count changes
    console.log('Count changed:', count);
    // Incorrect usage: Directly modifying count inside useEffect
    count = count + 1; // this line will not update the UI
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```