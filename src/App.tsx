import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BackgroundImage from "./components/BackgroundImage";
import Map from "./components/Map";
import Sections from "./components/Sections";
function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // default: true
      },
    },
  });
  return (
    <div>
      <BackgroundImage />
      <QueryClientProvider client={client}>
        <Sections />
        <Map />
      </QueryClientProvider>
    </div>
  );
}

export default App;
