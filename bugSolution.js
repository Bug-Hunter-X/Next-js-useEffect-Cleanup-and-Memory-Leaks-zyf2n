```javascript
import {useEffect, useState} from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup function
  }, []);

  return <div>Count: {count}</div>;
}

export default MyComponent;
```