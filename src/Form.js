import "./Form.css";

export default function Form() {
  return (
    <div className="row mt-4 mb-3">
      <form>
        <div className="input-group">
          <input
            type="text"
            id="city-input"
            className="form-control"
            placeholder="Enter your city"
            aria-label="Recipient's username with two button addons"
            value=""
          />
          <button className="search-button" type="button">
            <i className="fas fa-search-location"></i>
          </button>
          <button
            className="location-button"
            id="current-location"
            type="button"
          >
            My location
          </button>
        </div>
      </form>
    </div>
  );
}
