import { useState } from "react";

export const useUploadFile = (url) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onChangeFile = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadFile = async () => {
    if (!file) {
      setError("nessun file selezionato");
      return null;
    }
    const fileData = new FormData();
    fileData.append("cover", file);
    setLoading(true);
    try {
      const res = await fetch(url, {
        method: "POST",
        body: fileData,
      });
      const data = await res.json();
      setLoading(false);
      return data;
    } catch (error) {
      setError(error);
      setLoading(false);
      console.error(error);
    }
  };
  return { file, onChangeFile, uploadFile, loading, error };
};
