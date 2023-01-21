## MY-AWESOME-MERN-APP

### ============ FRONTEND ============

```ROOT
  |──client
  |    |──node_modules
  |    |──public
  |    |──src
  |    |    └── components
  |    |    └── components
  |──server
  |    ├── config
  |    │   └── db.js
  |    ├── controllers
  |    │   └── todo.js
  |    ├── models
  |    │   └── todo.js
  |    ├── node_modules
  |    ├── routes
  |    │   └── todo.js
  |    ├── .env
  |    ├── server.js <-- we are here
  ├── package-lock.json
  └── package.json
```

#### [Install Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite)

#### [How to use React Router Dom with Tailwind](https://dev.to/code_queen/how-to-use-react-router-dom-with-tailwind-1f3m#main-content)

```npm install react-router-dom

```

```tsx
/// src/main.tsx
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

```tsx
// app.tsx
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex">
      <SidebarNav />
      <Routes>
        <Route path="/settings" element={<Settings />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </div>
  );
}
```

<hr>

### ============ BACKEND ============

```
ROOT
  |──client
  |    |──node_modules
  |    |──public
  |    |──src
  |    |    └── components
  |    |    └── components
  |──server
  |    ├── config
  |    │   └── db.js
  |    ├── controllers
  |    │   └── todo.js
  |    ├── models
  |    │   └── todo.js
  |    ├── node_modules
  |    ├── routes
  |    │   └── todo.js
  |    ├── .env
  |    ├── server.js
  ├── package-lock.json
  └── package.json
```
