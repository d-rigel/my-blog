import React, { useState, useEffect } from 'react';

const Blog: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const visitorCount = localStorage.getItem('visitorCount');
    if (visitorCount) {
      setCount(Number(visitorCount));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('visitorCount', String(count));
  }, [count]);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1>Tom's Blog!</h1>
      <img src="https://14068d66ba387efac9ce5e4b1741bcf2.r2.cloudflarestorage.com/ai-api/07-23/f279572f-9350-44b9-bcb5-e7b9ab53e05f_2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=16b502c87564788383d52ec498a61a24%2F20230705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230705T011045Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=7480c4da9468fbd99193e2b065e4809daff5d1bf852a273ae821fff5706f6dff" alt="Blog" />
      <p>This is a sample blog post.</p>
      <p>Visitor Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default Blog;