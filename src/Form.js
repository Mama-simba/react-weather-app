import "./Form.css";

export default function Form() {
  return (
    <div className="row mt-4 mb-3">
      <form>
        <div class="input-group">
          <input type="text" id="city-input" className="form-control" placeholder="Enter your city" value=""/>
          <button className="btn btn-outline-secondary search-button" type="button"><i className="fas fa-search-location"></i></button>
          <button className="btn btn-outline-secondary location-button" type="button">My location</button>
        </div>
      </form>
    </div>     
  );
}
