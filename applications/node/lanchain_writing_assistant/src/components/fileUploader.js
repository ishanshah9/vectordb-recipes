import React, { useState } from "react";

function FileUploader() {
  const [uploadStatus, setUploadStatus] = useState(null); // "success", "error", or null
  const [fileName, setFileName] = useState("");

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      // Perform file upload logic here
      // For now, we'll simulate a successful upload after 1 second
      setFileName(file.name);
      setUploadStatus("success");
      setTimeout(() => setUploadStatus(null), 3000); // Reset status after 3 seconds
    } else {
      setUploadStatus("error");
    }
  };

  const borderColor =
    uploadStatus === "success" ? "border-green-500" : "border-gray-300";
  const bgColor = uploadStatus === "success" ? "bg-green-50" : "bg-gray-50";
  const textColor =
    uploadStatus === "success" ? "text-green-600" : "text-gray-500";

  return (
    <div className="flex items-center justify-center w-full p-4 pt-36">
      <label
        htmlFor="dropzone-file"
        className={`flex flex-col items-center justify-center w-full h-64 border-2 ${borderColor} border-dashed rounded-lg cursor-pointer ${bgColor} dark:${bgColor} hover:bg-gray-100 dark:hover:bg-gray-300`}
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className={`w-8 h-8 mb-4 ${textColor}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className={`mb-2 text-sm ${textColor}`}>
            <span className="font-semibold">Upload your data source</span> or drag and
            drop
          </p>
          <p className={`text-xs ${textColor}`}>.txt, .csv, or .pdf</p>
          {uploadStatus === "success" && (
            <p className="text-sm text-green-600">Upload successful!</p>
          )}
          {uploadStatus === "error" && (
            <p className="text-sm text-red-600">Upload failed!</p>
          )}
          {fileName && (
            <p className="mt-2 text-sm text-gray-600">
              Selected file: {fileName}
            </p>
          )}
        </div>
        <input
          id="dropzone-file"
          type="file"
          accept=".txt,.csv,.pdf"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
}

export default FileUploader;
