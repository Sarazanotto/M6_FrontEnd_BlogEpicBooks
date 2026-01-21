import { useState } from "react";

export const useBookForm = (urlBooks, uploadFile, handleClose) => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const uploadedFile = await uploadFile();

      const postFormData = {
        ...formData,
        cover: uploadedFile.cover,
        readTime: { value: formData.value, unit: formData.unit },
      };
      const res = await fetch(urlBooks, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postFormData),
      });

      await res.json();
      window.dispatchEvent(new Event('books-updated'))
      handleClose();
      setFormData({});

    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { onChange, onSubmit, formData };
};
