import { createSlice } from "@reduxjs/toolkit";

// Enhanced blog data with more complex content and better images
const initialBlogs = [
  {
    _id: "1",
    title: "Introduction to React: Building Modern User Interfaces",
    summary: "Learn the fundamentals of React and discover how to create dynamic, component-based user interfaces that power today's web applications.",
    content: `
      <h1>Getting Started with React</h1>
      <p>React is a powerful JavaScript library developed by Facebook that has revolutionized how developers build user interfaces. It introduces a component-based architecture that makes code more maintainable and reusable.</p>
      
      <h2>Why Choose React?</h2>
      <ul>
        <li><strong>Component-Based Architecture</strong>: Build encapsulated components that manage their own state.</li>
        <li><strong>Virtual DOM</strong>: React's Virtual DOM ensures efficient updates and optimal performance.</li>
        <li><strong>Rich Ecosystem</strong>: Benefit from a vast ecosystem of libraries, tools, and community support.</li>
        <li><strong>Cross-Platform Development</strong>: Use React Native to build mobile applications with the same principles.</li>
      </ul>
      
      <h2>Setting Up Your First React Project</h2>
      <p>Creating a new React application is straightforward with Create React App. Open your terminal and run:</p>
      
      <pre><code>npx create-react-app my-first-react-app
cd my-first-react-app
npm start</code></pre>
      
      <p>This generates a fully configured React project with all the essential tools for development.</p>
      
      <h2>Understanding JSX</h2>
      <p>JSX is a syntax extension for JavaScript that looks similar to HTML but provides the full power of JavaScript:</p>
      
      <pre><code>function Welcome() {
  const name = "React Developer";
  return (
    &lt;div className="welcome-container"&gt;
      &lt;h1&gt;Hello, {name}!&lt;/h1&gt;
      &lt;p&gt;Welcome to the world of React.&lt;/p&gt;
    &lt;/div&gt;
  );
}</code></pre>
      
      <h2>Creating Your First Component</h2>
      <p>Components are the building blocks of React applications. Here's a simple functional component:</p>
      
      <pre><code>import React from 'react';

function Button({ text, onClick }) {
  return (
    &lt;button 
      className="custom-button"
      onClick={onClick}
    &gt;
      {text}
    &lt;/button&gt;
  );
}

export default Button;</code></pre>
      
      <h2>Managing State with Hooks</h2>
      <p>React Hooks revolutionized how we manage state in functional components:</p>
      
      <pre><code>import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    &lt;div&gt;
      &lt;p&gt;You clicked {count} times&lt;/p&gt;
      &lt;button onClick={() => setCount(count + 1)}&gt;
        Increment
      &lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
      
      <h2>Conclusion</h2>
      <p>React has transformed the way we build web applications by introducing a component-based paradigm that emphasizes reusability and composition. By separating concerns and providing a declarative approach to UI development, React enables developers to build complex interfaces with confidence.</p>
      
      <p>As you continue your React journey, explore advanced concepts like Context API, custom hooks, and state management libraries such as Redux or Zustand to further enhance your applications.</p>
    `,
    category: "web-development",
    tags: ["react", "javascript", "frontend", "ui", "components", "hooks"],
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    author: "Sarah Johnson",
    createdAt: "2023-08-15T10:30:00Z",
    updatedAt: "2023-08-15T10:30:00Z"
  },
  {
    _id: "2",
    title: "Modern CSS Techniques: Mastering Layout and Design",
    summary: "Explore cutting-edge CSS techniques including Grid, Flexbox, and CSS variables to create responsive, maintainable, and visually stunning designs.",
    content: `
      <h1>Modern CSS Techniques for Professional Web Design</h1>
      
      <p>The landscape of CSS has evolved dramatically in recent years, introducing powerful features that have transformed how we approach web layout and design. This article explores modern CSS techniques that every web developer should master.</p>
      
      <h2>CSS Grid: Revolutionizing Web Layouts</h2>
      
      <p>CSS Grid Layout provides a two-dimensional grid-based layout system that completely changes how we design web pages:</p>
      
      <pre><code>.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
}

.item {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}</code></pre>
      
      <p>CSS Grid makes it simple to create complex layouts that would have required intricate hacks in the past. Here's an example of a magazine-style layout:</p>
      
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <img src="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" alt="CSS Grid Example" style="max-width: 100%; border-radius: 4px;">
        <p style="margin-top: 10px; font-style: italic; color: #555;">Example of a magazine-style layout created with CSS Grid</p>
      </div>
      
      <h2>Flexbox: The Perfect Tool for One-Dimensional Layouts</h2>
      
      <p>While Grid excels at two-dimensional layouts, Flexbox is ideal for one-dimensional arrangements:</p>
      
      <pre><code>.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  flex: 0 0 calc(33.333% - 20px);
  margin-bottom: 30px;
  /* Card styling */
}</code></pre>
      
      <h2>CSS Custom Properties (Variables)</h2>
      
      <p>CSS Variables have revolutionized how we manage design systems and theming:</p>
      
      <pre><code>:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --text-color: #333;
  --spacing-unit: 8px;
  --border-radius: 4px;
}

.button {
  background-color: var(--primary-color);
  color: white;
  padding: calc(var(--spacing-unit) * 2) calc(var(--spacing-unit) * 4);
  border-radius: var(--border-radius);
}

.button.secondary {
  background-color: var(--secondary-color);
}</code></pre>
      
      <h2>CSS Shapes and Masks</h2>
      
      <p>Create non-rectangular layouts using CSS Shapes:</p>
      
      <pre><code>.fancy-text {
  shape-outside: circle(50%);
  float: left;
  width: 200px;
  height: 200px;
}</code></pre>
      
      <h2>Dark Mode with CSS</h2>
      
      <p>Implementing dark mode has become straightforward with CSS variables and media queries:</p>
      
      <pre><code>:root {
  --bg-color: #ffffff;
  --text-color: #333333;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #121212;
    --text-color: #e0e0e0;
  }
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}</code></pre>
      
      <h2>Animation and Transitions</h2>
      
      <p>Modern CSS makes animation more accessible than ever:</p>
      
      <pre><code>@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.card {
  animation: fadeIn 0.5s ease-out forwards;
}

.button {
  transition: all 0.3s ease;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}</code></pre>
      
      <h2>Conclusion</h2>
      
      <p>Modern CSS provides powerful tools that make web development more intuitive and expressive. By mastering these techniques, you'll be equipped to create sophisticated layouts and designs without relying on heavy JavaScript libraries or frameworks.</p>
      
      <p>The future of CSS looks even more promising, with features like Container Queries, Cascade Layers, and Subgrid on the horizon. Stay curious and keep experimenting!</p>
    `,
    category: "design",
    tags: ["css", "web-design", "responsive", "flexbox", "grid", "animations"],
    imageUrl: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    author: "Alex Rodriguez",
    createdAt: "2023-09-10T14:20:00Z",
    updatedAt: "2023-09-12T09:15:00Z"
  },
  {
    _id: "3",
    title: "Node.js Best Practices: Building Scalable Server-Side Applications",
    summary: "Learn essential best practices for developing robust, maintainable, and high-performance Node.js applications that can scale to handle enterprise demands.",
    content: `
      <h1>Node.js Best Practices for Production Applications</h1>
      
      <p>Node.js has revolutionized server-side development, bringing JavaScript to the backend and enabling developers to build fast, scalable network applications. However, with great power comes great responsibility. This article covers essential best practices to ensure your Node.js applications are production-ready.</p>
      
      <div style="background-color: #e8f5e9; padding: 15px; border-left: 4px solid #4caf50; margin: 20px 0;">
        <p style="margin: 0; color: #2e7d32;"><strong>Why These Practices Matter:</strong> Following best practices ensures your application remains maintainable, performs well under load, and stays secure as it scales.</p>
      </div>
      
      <h2>Asynchronous Programming Patterns</h2>
      
      <p>Node.js is built around an event-driven, non-blocking I/O model. Understanding asynchronous patterns is crucial:</p>
      
      <h3>Using Async/Await</h3>
      
      <pre><code>// Avoid callback hell
async function getUserData(userId) {
  try {
    const user = await User.findById(userId);
    const posts = await Post.find({ author: userId });
    const analytics = await Analytics.getUserStats(userId);
    
    return {
      user,
      posts,
      analytics
    };
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
}</code></pre>
      
      <h3>Promise Patterns</h3>
      
      <pre><code>// Execute operations in parallel when possible
async function getDashboardData(userId) {
  try {
    const [user, notifications, settings] = await Promise.all([
      User.findById(userId),
      Notification.findRecent(userId),
      Settings.getUserSettings(userId)
    ]);
    
    return { user, notifications, settings };
  } catch (error) {
    console.error('Error loading dashboard:', error);
    throw error;
  }
}</code></pre>
      
      <h2>Error Handling</h2>
      
      <p>Proper error handling is essential for robust applications:</p>
      
      <pre><code>// Central error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  
  // Log detailed error information
  console.error(
    JSON.stringify({
      timestamp: new Date(),
      status: statusCode,
      method: req.method,
      path: req.path,
      error: err.stack,
      requestId: req.id
    })
  );
  
  // Send client-friendly response
  res.status(statusCode).json({
    status: 'error',
    message: statusCode === 500 ? 'Something went wrong' : message
  });
});</code></pre>
      
      <h2>Security Best Practices</h2>
      
      <div style="background-color: #ffebee; padding: 15px; border-left: 4px solid #f44336; margin: 20px 0;">
        <p style="margin: 0; color: #c62828;"><strong>Security Warning:</strong> Never store sensitive information like API keys, passwords, or tokens directly in your code. Use environment variables instead.</p>
      </div>
      
      <p>Security is paramount for any application. Here are some critical practices:</p>
      
      <ul>
        <li><strong>Use Helmet.js</strong> to secure HTTP headers</li>
        <li><strong>Implement rate limiting</strong> to prevent brute force and DoS attacks</li>
        <li><strong>Validate input</strong> using schemas (Joi, Yup, Zod)</li>
        <li><strong>Sanitize output</strong> to prevent XSS attacks</li>
        <li><strong>Use parameterized queries</strong> to prevent SQL injection</li>
      </ul>
      
      <pre><code>// Setting up basic security middleware
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

// Secure headers
app.use(helmet());

// Rate limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later'
});
app.use('/api/', apiLimiter);</code></pre>
      
      <h2>Performance Optimization</h2>
      
      <p>Node.js applications can be highly performant when optimized correctly:</p>
      
      <h3>Caching Strategies</h3>
      
      <pre><code>const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 600 }); // 10 minutes default TTL

async function getProducts(category) {
  const cacheKey = \`products_{category}\`;
  
  // Check cache first
  const cachedData = cache.get(cacheKey);
  if (cachedData) {
    return cachedData;
  }
  
  // If not in cache, fetch from database
  const products = await Product.find({ category }).limit(20);
  
  // Store in cache for future requests
  cache.set(cacheKey, products);
  
  return products;
}</code></pre>
      
      <h3>Database Query Optimization</h3>
      
      <p>Efficient database queries are crucial for performance:</p>
      
      <pre><code>// Select only necessary fields
const user = await User.findById(userId).select('name email avatar');

// Use indexing for common query patterns
// In your schema:
UserSchema.index({ email: 1 });
UserSchema.index({ createdAt: -1 });</code></pre>
      
      <h2>Application Structure</h2>
      
      <p>A well-organized project structure promotes maintainability:</p>
      
      <pre><code>project/
├── config/           # Configuration files
├── controllers/      # Route controllers
├── middlewares/      # Custom middlewares
├── models/           # Database models
├── routes/           # Route definitions
├── services/         # Business logic
├── utils/            # Utility functions
├── tests/            # Test files
├── app.js            # App entry point
└── server.js         # Server startup</code></pre>
      
      <h2>Containerization and Deployment</h2>
      
      <p>Docker simplifies deployment and ensures consistency across environments:</p>
      
      <pre><code>FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

CMD ["node", "server.js"]</code></pre>
      
      <h2>Conclusion</h2>
      
      <p>Building production-ready Node.js applications requires attention to detail across multiple dimensions: code quality, performance, security, and deployment. By following these best practices, you'll create applications that are not only functional but also maintainable, secure, and scalable.</p>
      
      <p>The Node.js ecosystem continues to evolve rapidly. Stay current with the latest developments and continuously refine your approach to harness the full power of JavaScript on the server.</p>
    `,
    category: "web-development",
    tags: ["node.js", "javascript", "backend", "performance", "security", "scaling"],
    imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
    author: "Michael Chen",
    createdAt: "2023-10-05T09:15:00Z",
    updatedAt: "2023-10-08T14:30:00Z"
  },
  {
    _id: "4",
    title: "TypeScript: Why Your JavaScript Needs Types",
    summary: "Discover how TypeScript enhances JavaScript development with static typing, improved tooling, and better code quality for teams of all sizes.",
    content: `
      <h1>TypeScript: Enhancing JavaScript with Types</h1>
      
      <p>TypeScript has gained enormous popularity in recent years, becoming the language of choice for many frontend and backend developers. This superset of JavaScript adds optional static typing and other features that improve developer productivity and code quality.</p>
      
      <div style="display: flex; justify-content: center; margin: 30px 0;">
        <img src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" alt="TypeScript Code" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
      </div>
      
      <h2>Why Choose TypeScript?</h2>
      
      <p>TypeScript offers several advantages over plain JavaScript:</p>
      
      <ol>
        <li><strong>Static Type Checking</strong>: Catch errors during development rather than at runtime</li>
        <li><strong>Improved IDE Support</strong>: Better autocomplete, refactoring, and navigation</li>
        <li><strong>Enhanced Documentation</strong>: Types serve as built-in documentation</li>
        <li><strong>Safer Refactoring</strong>: The compiler catches errors when changing code</li>
        <li><strong>Better Team Scalability</strong>: Types create clear contracts between different parts of your code</li>
      </ol>
      
      <h2>TypeScript Basics</h2>
      
      <h3>Type Annotations</h3>
      
      <pre><code>// Basic type annotations
let name: string = 'John';
let age: number = 30;
let isActive: boolean = true;
let hobbies: string[] = ['reading', 'hiking', 'coding'];
let tuple: [string, number] = ['coordinates', 123];

// Function with parameter and return type annotations
function greet(person: string): string {
  return \`Hello, \${person}!\`;
}

// Optional parameters
function createUser(name: string, age?: number): User {
  return { name, age: age || 0 };
}</code></pre>
      
      <h3>Interfaces</h3>
      
      <p>Interfaces define the shape of objects:</p>
      
      <pre><code>interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
  metadata?: {
    lastLogin: Date;
    preferences: UserPreferences;
  };
}

interface UserPreferences {
  theme: 'light' | 'dark';
  fontSize: number;
  notifications: boolean;
}

// Using the interface
function updateUser(userId: number, updates: Partial<User>): Promise<User> {
  // Implementation
}</code></pre>
      
      <h3>Types vs Interfaces</h3>
      
      <p>TypeScript offers both types and interfaces, each with their own strengths:</p>
      
      <pre><code>// Type aliases can represent primitives, unions, tuples
type ID = string | number;
type Coordinates = [number, number];
type Theme = 'light' | 'dark';

// Both can represent object shapes
interface Animal {
  name: string;
  age: number;
}

type Animal = {
  name: string;
  age: number;
};</code></pre>
      
      <h2>Advanced TypeScript Features</h2>
      
      <h3>Generics</h3>
      
      <p>Generics provide typed variables for flexible, reusable code:</p>
      
      <pre><code>// A simple generic function
function identity<T>(arg: T): T {
  return arg;
}

// Usage
const num = identity<number>(42);
const str = identity('hello');  // Type inference works too!

// Generic interfaces
interface Repository<T> {
  getById(id: string): Promise<T>;
  getAll(): Promise<T[]>;
  create(item: Omit<T, 'id'>): Promise<T>;
  update(id: string, item: Partial<T>): Promise<T>;
  delete(id: string): Promise<boolean>;
}</code></pre>
      
      <h3>Utility Types</h3>
      
      <p>TypeScript includes powerful utility types for common transformations:</p>
      
      <pre><code>interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}

// Make all properties optional
type PartialTodo = Partial<Todo>;

// Make all properties required
type RequiredTodo = Required<Todo>;

// Create a read-only version
type ReadonlyTodo = Readonly<Todo>;

// Pick specific properties
type TodoPreview = Pick<Todo, 'title' | 'completed'>;

// Omit specific properties
type TodoWithoutDates = Omit<Todo, 'createdAt'>;

// Extract properties that are assignable to a type
type StringProps = Extract<keyof Todo, string>;</code></pre>
      
      <h3>Mapped Types</h3>
      
      <p>Create new types by mapping over properties of existing ones:</p>
      
      <pre><code>// Making all properties nullable
type Nullable<T> = { [P in keyof T]: T[P] | null };

// Validation type
type Validation<T> = { [P in keyof T]?: ValidationRule[] };

// Creating a type for API responses
type ApiResponse<T> = {
  data: T;
  status: number;
  message: string;
  timestamp: Date;
};</code></pre>
      
      <h2>TypeScript with React</h2>
      
      <p>TypeScript and React work beautifully together, providing type safety for props, state, and events:</p>
      
      <pre><code>import React, { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserListProps {
  initialUsers?: User[];
  onUserSelect: (user: User) => void;
}

const UserList: React.FC<UserListProps> = ({ 
  initialUsers = [], 
  onUserSelect 
}) => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchUsers = async () => {
      if (initialUsers.length > 0) return;
      
      setLoading(true);
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch users');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUsers();
  }, [initialUsers]);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <ul className="user-list">
      {users.map(user => (
        <li key={user.id} onClick={() => onUserSelect(user)}>
          <strong>{user.name}</strong>
          <span>{user.email}</span>
        </li>
      ))}
    </ul>
  );
};</code></pre>
      
      <h2>Migration Strategies</h2>
      
      <p>Moving an existing JavaScript project to TypeScript can be done incrementally:</p>
      
      <ol>
        <li><strong>Setup TypeScript</strong>: Add configuration without changing files</li>
        <li><strong>Rename files</strong>: Change .js to .ts or .tsx but use "any" at first</li>
        <li><strong>Enable strict mode gradually</strong>: Tackle one rule at a time</li>
        <li><strong>Add types incrementally</strong>: Focus on interfaces between components first</li>
        <li><strong>Use third-party type definitions</strong>: For libraries via DefinitelyTyped</li>
      </ol>
      
      <h2>Conclusion</h2>
      
      <p>TypeScript has transformed how we write JavaScript applications, providing greater safety, improved developer experience, and better tooling. While there's an initial learning curve, the benefits for medium to large projects are substantial and continue to grow as your codebase expands.</p>
      
      <p>Whether you're starting a new project or considering migrating an existing one, TypeScript is a valuable tool in your development arsenal that pays dividends in productivity and code quality.</p>
    `,
    category: "web-development",
    tags: ["typescript", "javascript", "frontend", "backend", "types"],
    imageUrl: "https://images.unsplash.com/photo-1580894732930-0babd100d356?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    author: "Emily Zhang",
    createdAt: "2023-11-02T11:45:00Z",
    updatedAt: "2023-11-05T09:20:00Z"
  }
];

const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: initialBlogs,
    isLoading: false,
    error: null,
  },
  reducers: {
    addBlog: (state, action) => {
      // Create a new blog with a unique ID and timestamps
      const newBlog = {
        ...action.payload,
        _id: (state.blogs.length + 1).toString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      state.blogs.push(newBlog);
    },
    editBlog: (state, action) => {
      const index = state.blogs.findIndex(blog => blog._id === action.payload._id);
      if (index !== -1) {
        state.blogs[index] = {
          ...state.blogs[index],
          ...action.payload,
          updatedAt: new Date().toISOString()
        };
      }
    },
    deleteBlog: (state, action) => {
      state.blogs = state.blogs.filter(blog => blog._id !== action.payload);
    }
  }
});

export const { addBlog, editBlog, deleteBlog } = blogSlice.actions;
export default blogSlice.reducer;
