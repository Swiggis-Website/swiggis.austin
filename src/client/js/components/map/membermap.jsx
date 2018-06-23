var React = require('react');
var Component = require('react').Component;
var createReactClass = require('create-react-class');
var geoMercator = require('d3-geo').geoMercator;
var geoPath = require('d3-geo').geoPath;
var feature = require('topojson-client').feature;
var _ = require('lodash');

var MemberMap = createReactClass({  
  getInitialState: function() {
    return { 
      zippolys: [],
      cities: [
        { name: "Austin", coordinates: [-97.742581,30.2837352] },
        { name: "Round Rock", coordinates: [-97.7080379,30.5265352] },
        { name: "Cedar Park", coordinates: [-97.8518808, 30.5044468] },
        { name: "Pflugerville", coordinates: [-97.6209998, 30.4410309] },
        { name: "Lakeway", coordinates: [-98.0010759, 30.3519775] },
        { name: "Elgin", coordinates: [-97.409639,30.3552058] },
        { name: "Buda", coordinates: [-97.8592165,30.0890894] },
        { name: "Kyle", coordinates: [-97.9019929,29.9998452] },
        { name: "Wyldwood", coordinates: [-97.488632,30.1312359] }
      ]
  };
  },
  project: function() {
    return geoMercator()
      .center([-97.742581, 30.2837352])
      .scale(30000)
      .translate([ 500 / 2, 500 / 2 ])
  },
  componentDidMount: function() {
    var self = this;

    var zipRequest = fetch("https://aubreyrhea.github.io/swiggis.austin/map/Texas.topo.json").then(function(response){ 
      return response.json();
    });
    
    Promise.all([zipRequest]).then(function(values){
      self.setState({
        zippolys: feature(values[0], values[0].objects["Texas.geo"]).features
      });
    });
},
  render: function () {
    var self = this;
    var liveZips = this.props.zips.liveZips;
    var workZips = this.props.zips.workZips;
          return (
            <div>
              <p>
                Zipcodes where our members <span className="livezip">live</span> and <span className="workzip">work</span>:
              </p>
            <svg width={ 500 } height={ 500 } viewBox="0 0 500 500">
              {<g>
                {
                  self.state.zippolys.map(function (d,i) { 
                    return (
                    <path
                      key={ 'zip-' + i }jm="true"
                      d={ geoPath().projection(self.project())(d) }bh="true"
                      fill={ 'rgba(230,230,230,1)' }
                      stroke="#FFFFFF"
                      strokeWidth={ 0.5 }
                    />
                    )
                  })
                  }
              </g> }
              {<g>
                {
                  self.state.zippolys.map(function (d,i) { 
                    var count = liveZips[d.id];
                    return (
                    <path
                      key={ 'livezip-' + i }jm="true"
                      d={ geoPath().projection(self.project())(d) }bh="true"
                      fill={ 'rgba(0,0,255,' + (count ? count/4 : 0).toString() + ')' }
                      stroke="#FFFFFF"
                      strokeWidth={ 0.5 }
                    />
                    )
                })
                  }
              </g> }
              <g>
                {
                  self.state.zippolys.map(function (d,i) { 
                    var count = workZips[d.id];
                    return (
                    <path
                      key={ 'workzip-' + i }jm="true"
                      d={ geoPath().projection(self.project())(d) }bh="true"
                      fill={ 'rgba(255,0,0,' + (count ? count/4 : 0).toString() + ')' }
                      stroke="#FFFFFF"
                      strokeWidth={ 0.5 }
                    />
                    )
                  })
                  }
              </g>
              { <g>
                {
                  self.state.cities.map(function (city, i) {
                    return (
                    <text
                      key={ 'marker-' + i }jm="true"
                      x={ self.project()(city.coordinates)[0] }
                      y={ self.project()(city.coordinates)[1] }
                    >{city.name}
                    </text>
                    )
                  })
                }
              </g> }
            </svg>
            </div>
          );
        }
      });
module.exports = MemberMap;