import "./App.scss";
import Footer from "./components/Footer";
import Row from "./components/Row";
import request from "./request";

function App() {
  return (
    <div className="App">
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLarge
      />
      <Row 
        title="Trending Now"
        fetchUrl={request.fetchTrending}
      />

      <Row 
        title="Top Rated"
        fetchUrl={request.fetchTopRated}
      />

      <Row 
        title="Actions Movies"
        fetchUrl={request.fetchActionMovies}
      />

      <Row 
        title="Comedy Movies"
        fetchUrl={request.fetchComedyMovies}
      />

      <Row 
        title="Horror Movies"
        fetchUrl={request.fetchHorrorMovies}
      />

      <Row
        title="Romance Movies"
        fetchUrl={request.fetchRomanceMovies}
      />

      <Row 
        title="Documentaries"
        fetchUrl={request.fetchDocumentaries}
      />
      <Footer />
    </div>
  );
}

export default App;
