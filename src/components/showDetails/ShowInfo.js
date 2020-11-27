import React from 'react'
import Genre from '../common/genre';

const ShowInfo = (props) => {
  const { data } = props;
  return (
    <div className="info-container">
      <div className="row">
        <div className="col col-3-lg col-4-md">
          <div className="image">
            <img src={data.image && data.image.medium} alt={data.name} />
          </div>
        </div>
        <div className="col col-9-lg col-8-md">
          <div className="show">
            <div className="show__name">{data.name}</div>
            <Genre genres={data.genres} />
            <table className="show__info-table mt-6x">
              <tbody>
                <tr>
                  <td>Network</td>
                  <td>{data.network && data.network.name}</td>
                </tr>
                <tr>
                  <td>Schedule</td>
                  <td>{data.schedule && data.schedule.time} <span className="ml-2x">[{data.runtime} min]</span></td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>{data.status}</td>
                </tr>
                <tr>
                  <td>Show type</td>
                  <td>{data.type}</td>
                </tr>
              </tbody>
            </table>
            <div className="d-flex mt-4x">
              {data.officialSite &&
                <a href={data.officialSite} target="_black" rel="noopener noreferrer" className="mr-4x">
                  <button className="btn btn--outlined-primary">Official Site</button>
                </a>}
              {data.externals &&
                <a href={`https://www.imdb.com/title/${data.externals.imdb}/`} target="_black" rel="noopener noreferrer">
                  <button className="btn btn--outlined-primary">View IMDB</button>
                </a>}
            </div>
          </div>
        </div>
      </div>
      <div className="sub-title">Summary</div>
      <div className="show__summary mb-6x" dangerouslySetInnerHTML={{ __html: data.summary }}></div>
    </div>
  );
};

export default ShowInfo;
