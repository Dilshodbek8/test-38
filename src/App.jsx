import { Typography, Card } from "@material-tailwind/react";

export default function App() {
  return (
    <div>
      <div className="flex p-5 bg-blue-600 gap-20">
        <h1> logo</h1>
        <ul>
          <li>home</li>
          <li>about</li>
          <li>service</li>
        </ul>
      </div>
      <h2>content</h2>
      <div className="flex bg-gray-500 text-white p-10 text-5xl">
        <h1>footer</h1>
      </div>
    </div>
  );
}
