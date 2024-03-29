import useFetch from "../../hooks/useFetch";
import "./propertyList.css";
import apart from "../../image/apart.jpg";
import cabin from "../../image/cabin.jpg";
import hotel from "../../image/hotel.jpg";
import resort from "../../image/resort.jpg";
import villa from "../../image/villa.jpg";

const PropertyList = () => {
  const { data, loading } = useFetch(
    "https://fronted-f8ne.onrender.com/api/hotels/countByType"
  );

  const images = [hotel, apart, resort, villa, cabin];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((image, i) => (
              <div className="pListItem" key={i}>
                <img src={image} alt="" className="pListImg" />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>
                    {data[i]?.count} {data[i]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
