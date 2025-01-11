```javascript
import {useEffect, useState} from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will log '0' initially, and then '1', '2', etc. every second
    console.log('Count:', count);
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // The cleanup function is crucial to avoid memory leaks
    return () => clearInterval(interval);
  }, []);

  return <div>Count: {count}</div>;
}
```