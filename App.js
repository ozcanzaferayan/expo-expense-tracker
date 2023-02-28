import Providers from "./src/contexts/Providers";
import Router from "./src/routes/Router";

export default function App() {
  return (
    <Providers>
      <Router />
    </Providers>
  );
}
