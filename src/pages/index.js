import React from "react";
import Helmet from "react-helmet";
import L from "leaflet";
import Layout from "components/Layout";
import Container from "components/Container";
import Map from "components/Map";
import { graphql } from "gatsby";
import axios from "axios";
import CardContent from "../components/CardContent";

const LOCATION = {
  lat: 0,
  lng: 0,
};

const CENTER = [LOCATION.lat, LOCATION.lng];
const DEFAULT_ZOOM = 2;

export const AllCardContentStayHomeQuery = graphql`
  query MyQueryAllCardContent {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "content-card" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            desc
            featuredImage {
              publicURL
            }
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  /**
   * mapEffect
   * @description Fires a callback once the page renders
   * @example Here this is and example of being used to zoom in and set a popup on load
   */

  async function mapEffect({ leafletElement: map } = {}) {
    let response;

    try {
      response = await axios.get("https://corona.lmao.ninja/countries");
    } catch (error) {
      console.log(`Failed to fetch countries: ${error.message}`, error);
      return;
    }

    const { data = [] } = response;
    const hashData = Array.isArray(data) && data.length > 0;

    if (!hashData) return;

    const geoJson = {
      type: "FeatureCollection",
      features: data.map((country = {}) => {
        const { countryInfo = {} } = country;
        const { lat, long: lng } = countryInfo;
        return {
          type: "Feature",
          properties: {
            ...country,
          },
          geometry: {
            type: "Point",
            coordinates: [lng, lat],
          },
        };
      }),
    };

    const geoJsonLayers = new L.GeoJSON(geoJson, {
      pointToLayer: (features = {}, latlng) => {
        const { properties = {} } = features;
        let updateFormatted;
        let casesString;

        const { country, updated, cases, deaths, recovered } = properties;

        casesString = `${cases}`;

        if (cases > 1000) {
          casesString = `${casesString.slice(0, -3)}k+`;
        }

        if (updated) {
          updateFormatted = new Date(updated).toLocaleString();
        }

        const html = `
        <span class='icon-marker'>
        <span class='icon-marker-tooltip'>
        <h2>${country}</h2>
        <ul><li><strong>Confirmed:</strong> ${cases}</li>
        <li><strong>Deatjs:</strong> ${deaths}</li>
        <li><strong>Recovered:</strong> ${recovered}</li>
        <li><strong>Last Update:</strong> ${updateFormatted}</li></ul></span>
        ${casesString}</span>`;

        return L.marker(latlng, {
          icon: L.divIcon({
            className: "icon",
            html,
          }),
          riseOnHover: true,
        });
      },
    });

    geoJsonLayers.addTo(map);
  }

  const mapSettings = {
    center: CENTER,
    defaultBaseMap: "OpenStreetMap",
    zoom: DEFAULT_ZOOM,
    mapEffect,
  };

  return (
    <Layout pageName="home">
      <Helmet>
        <title>Hamaar Covid19</title>
      </Helmet>
      <Container type="content" className="text-center">
        <h1>Stay at home</h1>
        <h1>prevent COVID-19</h1>

        <img
          src={require("../assets/images/illustration-character-working-computer-home-prevention-from-corona-virus_155707-30.jpg")}
          alt="covid19-cover"
        ></img>
      </Container>
      <div className="container-content-card">
        <p className="p1">OUR KNOWLEDGE</p>
        <p className="p2">How to protect yourself from</p>
        <p className="p3">the Coronavirus</p>

        <Container type="content">
          <div className="content-container-card">
            {data.allMarkdownRemark.edges.map((post) => {
              const { title, desc, featuredImage } = post.node.frontmatter;
              return (
                <CardContent
                  key={post.node.id}
                  title={title}
                  desc={desc}
                  featuredImage={featuredImage.publicURL}
                />
              );
            })}
          </div>
        </Container>
      </div>

      <div className="container-content-stay-home">
        <Container type="content">
          <div className="container-stay-home">
            <img
              className="img-stay-home"
              src={require("../assets/images/flat-illustration-character-working-computer-home-prevention-from-corona-virus_155707-26.jpg")}
              alt="bg-stay-home"
            />

            <div className="text-stay-home">
              <p className="title">STAY HOME</p>
              <p className="subtitle">Work at home</p>
              <p className="subtitlenext">and avoid hangout</p>
              <p className="desc">
                Staying home will help slow the spread of COVID-19 and will
                protect others from becoming critically ill and dying. Staying
                home also protects essential workers, including health care
                providers and retail workers
              </p>
              <div className="btn-stay-home">Learn more</div>
            </div>
          </div>
        </Container>
      </div>

      <div className="container-content-stay-safe">
        <Container type="content">
          <div className="container-stay-safe">
            <div className="text-stay-safe">
              <p className="title">STAY SAFE</p>
              <p className="subtitle">When and how</p>
              <p className="subtitlenext">to use medical mask</p>
              <p className="desc">
                While wearing a mas may not necessarily prevent healthy people
                from getting sick, and it certainly doesn't replace important
                measures such as hand-washing or social distancing, it may be
                better than nothing. "Dr. Atmar said".
              </p>
              <div className="btn-stay-safe">Learn more</div>
            </div>
            <img
              className="img-stay-safe"
              alt="bg-stay-home"
              src={require("../assets/images/3591889.png")}
            />
          </div>
        </Container>
      </div>

      <Map {...mapSettings}>
        {/* <Marker ref={markerRef} position={CENTER} /> */}
      </Map>

      <div className="footer-content">
        <Container type="content" className="text-center home-start">
          <div className="container-footer-content">
            <p>Covid19 Gatsby Site</p>
            <ul>
              <li className="title-li">Useful Link</li>
              <li>About</li>
              <li>Project</li>
              <li>Service</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
            <ul>
              <li className="title-li">Features</li>
              <li>Mobile App</li>
              <li>Website</li>
            </ul>
            <ul>
              <li className="title-li">Contact Us</li>
              <li>(+62) 123 456 789</li>
              <li>hfis15@yahoo.co.id</li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default IndexPage;
