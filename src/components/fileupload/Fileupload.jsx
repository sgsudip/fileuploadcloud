import React, { useRef } from "react";
import "./Fileupload.css";
import cloud from "../../assets/cloud.webp";

const Fileupload = () => {
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  const handleChange = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.nativeEvent.target);
    console.log(e.nativeEvent.srcElement);
    const files = Array.from(e.target.files);
    console.log(files);
    // const files = e.target.files;
    for(let i = 0; i < files.length; i++){
        let f = files[i];
        containerRef.current.insertAdjacentHTML(
            'beforeend',
            `<div class="file-card">
            <p>${f.name}</p>
            <span>${f.type}</span>
            </div>`
        );
    }
  };

  const handleBoxClick = (e) => {
    console.log(e);
    inputRef.current.click();
  };

  const handleInputClick = (e) => {
    console.log(e);
  };
  return (
    <div>
      <div className="top-container">
        <div className="upload-box" onClick={handleBoxClick}>
          <div className="upload">
            <img className="cloud-icon" src={cloud} alt="upload to cloud" />
            <input
              type="file"
              name="file-upload-input"
              id="file-upload-input"
              multiple="multiple"
              ref={inputRef}
              onClick={handleInputClick}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="files-container" ref={containerRef}>
          
        </div>
      </div>
    </div>
  );
};

export default Fileupload;
