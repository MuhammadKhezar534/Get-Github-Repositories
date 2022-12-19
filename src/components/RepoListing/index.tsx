import React from "react";
import "./index.css";

interface listingProps {
  id: number;
  name: string;
  ownerName: string;
  repoLink: string;
}

interface listProps {
  listing: listingProps[];
}

const RepoListing: React.FC<listProps> = ({ listing }) => {
  console.log({ listing });
  return (
    <table width="100%">
      <tr>
        <th>Repository Name</th>
        <th>Respository Owner</th>
        <th>Repository Link</th>
      </tr>
      {listing.map((repo) => (
        <tr key={repo.id}>
          <td>{repo.name}</td>
          <td>{repo.ownerName}</td>
          <td>
            <a href={repo.repoLink}>{repo.repoLink}</a>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default RepoListing;
