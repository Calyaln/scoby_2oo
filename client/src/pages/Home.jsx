import React from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "../styles/marker.css";
import { Marker } from "react-mapbox-gl";
import LocationAutoComplete from "../components/LocationAutoComplete";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiY2FseXBzb2FsbiIsImEiOiJja2pzaTRyNGE0MDB2Mnpsb2ZkOHpxY21oIn0.EcBievIse5fCKULdiwHEVw",
});
class Home extends React.Component {
  state = {
    isVisible: false,
  };

  render() {
    return (
      <div>
        {this.state.isVisible && (
          <div className="CardItem">
            {/* How do we import item from css */}
            <img className="round-image" src="/media/avatar.png" alt="avatar" />
            <div className="description">
              <h2>Resto</h2>
              <p>Salut Caly</p>
            </div>
            <h3>C'est lulu</h3>
            <button className="buttons">Click</button>
          </div>
        )}
        <h1>MAPBOX MAP HERE</h1>
        <Map
          className="marker"
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: "50vh",
            width: "50vw",
          }}
        >
          <Marker coordinates={[-0.2416815, 51.5285582]} anchor="bottom">
            <img
              onClick={() =>
                this.setState({ isVisible: !this.state.isVisible })
              }
              src="/media/marker.svg"
              alt="pointer"
            />
          </Marker>
        </Map>
      </div>
    );
  }
}
// const Home = (props) => {
//   const Map = ReactMapboxGl({
//     accessToken:
//       "pk.eyJ1IjoiY2FseXBzb2FsbiIsImEiOiJja2pzaTRyNGE0MDB2Mnpsb2ZkOHpxY21oIn0.EcBievIse5fCKULdiwHEVw",
//   });

//   return (
//     <div>
//       <h1>MAPBOX MAP HERE</h1>
//       <p>On home /</p>
//       <Map
//         className="marker"
//         style="mapbox://styles/mapbox/streets-v9"
//         containerStyle={{
//           height: "50vh",
//           width: "50vw",
//         }}
//       >
//         <Marker coordinates={[-0.2416815, 51.5285582]} anchor="bottom">
//           <img src="/media/marker.svg" alt="pointer" />
//         </Marker>
//       </Map>
//     </div>
//   );
// };
export default Home;
