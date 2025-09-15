import { useState } from "react";

export default function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);

  console.log(explorer);

  if (explorer.isFolder) {
    return (
      <div>
        <div onClick={() => setExpand(!expand)} style={{ cursor: "pointer" }}>
          🗂️ {explorer.name}
        </div>
        {expand && (
          <div>
            {explorer.items.map((exp) => (
              <div key={exp.id} style={{ marginLeft: "10px" }}>
                <Folder explorer={exp} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  } else {
    return <div>📒 {explorer.name}</div>;
  }
}
