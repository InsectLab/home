import React, { useEffect } from 'react';

function Test() {
  useEffect(() => {
    // Load the Google API client library
    window.gapi.load('client', () => {
      // Initialize the API with your API key and specific Google APIs
      window.gapi.client.init({
        apiKey: 'AIzaSyAqc1RhWrI-0_GwG784mjTe_MOrebAABC4',
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
      }).then(() => {
        // Fetch files from the shared folder using the folder's ID
        window.gapi.client.drive.files.list({
          q: "'120Gh543AOnfa48tJcMgXqHW25eWZjrZG' in parents", // Replace FOLDER_ID with your folder's ID
        }).then(response => {
          const files = response.result.files;
          console.log('Files in the folder:', files);
        });
      });
    });
  }, []);

  return (
    <div>
      <h1>My Google Drive App</h1>
      {/* Display your fetched files here */}
    </div>
  );
}

export default Test;