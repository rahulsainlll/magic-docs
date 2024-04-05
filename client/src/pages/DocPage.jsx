import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const DocPage = () => {
  const { slug } = useParams();
  const [docContent, setDocContent] = useState("");

  //   useEffect(() => {
  //     const fetchDocContent = async () => {
  //       try {
  //         const { data } = await axios.get(`/api/docs/content/${slug}`);
  //         setDocContent(data);
  //       } catch (error) {
  //         toast.error("An error occurred while fetching the document.");
  //         console.error("Error fetching document:", error);
  //       }
  //     };

  //     fetchDocContent();
  //   }, [slug]); // Re-fetch when slug changes

  return (
    <div>
      <h1>fhg</h1>
      {/* <h1>{slug}</h1>
      <p>{docContent}</p> */}
    </div>
  );
};

export default DocPage;
