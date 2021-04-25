import "./App.scss";
import Banner from "./components/Bannner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Row from "./components/Row";
import request from "./request";

function App() {
  const rows = [
    { title: "Trending Now", url: request.fetchTrending },
    { title: "Top Rated", url: request.fetchTopRated },
    { title: "Actions Movies", url: request.fetchActionMovies },
    { title: "Comedy Movies", url: request.fetchComedyMovies },
    { title: "Horror Movies", url: request.fetchHorrorMovies },
    { title: "Romance Movies", url: request.fetchRomanceMovies },
    { title: "Documentaries", url: request.fetchDocumentaries },
  ];

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLarge
      />

      {rows.map((row) => {
        return <Row title={row.title} fetchUrl={row.url} />;
      })}

      <Footer />
    </div>
  );
}

export default App;
