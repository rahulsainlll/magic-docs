import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

export default function Docs() {
  const [docsMetaData, setDocsMetaData] = useState([]);

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const { data } = await axios.get("/api/docs/backend/slugs");
        if (data.error) {
          toast.error(data.error);
        } else {
          // toast.success("Documents fetched");
          setDocsMetaData(data);
        }
      } catch (error) {
        toast.error("An error occurred while fetching the docs.");
        console.error("Frontend error:", error);
      }
    };

    fetchDocs();
  }, []);

  const docsPreview = docsMetaData.map((slug, index) => (
    <div key={index}>
      <Link to={`/docs/${slug}`}>
        <h2>{slug}</h2>
      </Link>
    </div>
  ));

  return <div>{docsPreview}</div>;
}
