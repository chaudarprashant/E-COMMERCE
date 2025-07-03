import React from "react";

const CategoryForm = ({ handleSubmit, value, setValue, setPhoto }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* Upload Image */}
        {setPhoto && (
          <div className="mb-3">
            <label className="btn btn-outline-secondary">
              Upload Category Photo
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={(e) => setPhoto(e.target.files[0])}
                hidden
              />
            </label>
          </div>
        )}

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter new category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default CategoryForm;
