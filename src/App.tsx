import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BackgroundImage from "./components/BackgroundImage";
import Main from "./components/Main";
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
        <Main />
      </QueryClientProvider>
    </div>
  );
}

export default App;
