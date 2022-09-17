import { useParams } from "react-router-dom";
import { usePost } from "../../Contexts/PostContext";
import "./Singlepage.css";

const Singlepage = () => {
  const { pageid } = useParams();
  const { state } = usePost();

  const selectCard = (posts, id) => {
    const post = posts.find((ele) => ele.mal_id === Number(id));
    return post;
  };

  const selectedCard = selectCard(state.posts, pageid);

  return (
    <>
      <div>
        <div className="singlepage-header">
          <h1>{selectedCard.title}</h1>
          <div className="singlePage-rating">
            <div className="star-rating">
              <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/32/000000/external-star-astrology-flaticons-flat-flat-icons.png" />
              <p>
                <span style={{ fontWeight: "800", fontSize: "1.2rem" }}>
                  {selectedCard.score}
                </span>
                /10
              </p>
            </div>
            <p style={{ color: "white" }}>
              Popularity: {selectedCard.popularity}
            </p>
          </div>
        </div>

        <div className="singlePageImage-container">
          <img
            src={selectedCard.images?.jpg?.large_image_url}
            alt="anime"
          ></img>
        </div>
        <div className="trailer-link">
          <a href={selectedCard.trailer?.url}>Watch trailer</a>
        </div>

        <div className="singlePage-genres stat">
          {selectedCard.genres.map((genre) => (
            <div className="genre" key={genre.mal_id}>
              {genre.name}
            </div>
          ))}
        </div>
        <div className="singlePage-producerStat stat">
          <p>Producers:</p>
          <div className="producers">
            {selectedCard.producers.map((producer) => (
              <div key={producer.mal_id}>{producer.name}</div>
            ))}
          </div>
        </div>
        <div className="singlePage-StudioStat stat">
          <p>Studios:</p>
          <div className="studios">
            {selectedCard.studios.map((studio) => (
              <div key={studio.mal_id}>{studio.name}</div>
            ))}
          </div>
        </div>
        <div className="singlepage-text">
          <div className="synopsis-container">
            <h3>Synopsis:</h3>
            <p>{selectedCard.synopsis}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Singlepage;
