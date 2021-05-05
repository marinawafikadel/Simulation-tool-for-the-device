import React from 'react'
import firebase from 'firebase'
import FileUploader from "react-firebase-file-uploader";

const ImageUploadButton = ({storagePath,children,className,onStart,onError,onSuccess}) => {

    
   const handleUploadSuccess = filename => {
    firebase
          .storage()
          .ref(storagePath)
          .child(filename)
          .getDownloadURL()
          .then(url => onSuccess(url));
      };


    return (
        <label className={className} >
            {children}
    <FileUploader
                hidden
                randomizeFilename
                accept="image/*"
                storageRef={firebase.storage().ref(storagePath)}
                onUploadError={onError}
                onUploadStart={onStart}
                onUploadSuccess={handleUploadSuccess}
            />
        </label>
    )
}
export default ImageUploadButton