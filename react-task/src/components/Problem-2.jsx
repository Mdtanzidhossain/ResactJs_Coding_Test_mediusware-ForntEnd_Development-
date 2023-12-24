import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Problem2 = () => {
  const [contacts, setContacts] = useState([]);
  const [country, setCountry] = useState('');
  const [showModalA, setShowModalA] = useState(false);
  const [showModalB, setShowModalB] = useState(false);
  const [showModalC, setShowModalC] = useState(false);
  const [onlyEven, setOnlyEven] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchContacts = async (endpoint, params) => {
    try {
      // Include your basic authentication credentials
      const username = 'tanzidhossainofficial@gmail.com';
      const password = 'tanzid12#';
  
      // Base64 encode the credentials
      const base64Credentials = btoa(`${username}:${password}`);
  
      // Make a GET request to the API endpoint with basic authentication
      const response = await axios.get(`https://contact.mediusware.com/api/contacts/${endpoint}`, {
        headers: {
          'Authorization': `Basic ${base64Credentials}`,
        },
        params: params,
      });
  
      // Set the retrieved contacts in the component's state
      setContacts(response.data.results);
    } catch (error) {
      // Handle errors if the request fails
      console.error('Error fetching contacts:', error);
    }
  };
  

  const handleButtonClick = (endpoint) => {
    const params = {
      page: 1,
      page_size: 10,
      search: '',
      country: country,
    };

    fetchContacts(endpoint, params);
  };

  const handleOpenModalC = () => {
    setShowModalC(true);
  };

  const handleCloseModals = () => {
    setShowModalA(false);
    setShowModalB(false);
    setShowModalC(false);
  };

  const handleToggleEven = () => {
    setOnlyEven((prev) => !prev);
  };

  const handleSearch = () => {
    // Implement search functionality
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>
        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={() => {
              handleButtonClick('/contacts/');
              setShowModalA(true);
            }}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            onClick={() => {
              handleButtonClick(`/country-contacts/${country}/`);
              setShowModalB(true);
            }}
          >
            US Contacts
          </button>
        </div>
      </div>

      {showModalA && (
        <div className="modal">
          <div className="modal-content" style={{ borderColor: '#46139f' }}>
            <div className="modal-header">
              <h5 className="modal-title">Modal A - All Contacts</h5>
              <button type="button" className="btn-close" onClick={handleCloseModals}></button>
            </div>
            <div className="modal-body">
              {/* Display contacts and implement search functionality */}
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Search contacts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <ul>
                {contacts.map((contact) => (
                  <li key={contact.id}>{contact.name}</li>
                ))}
              </ul>
            </div>
            <div className="modal-footer">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={onlyEven}
                  onChange={handleToggleEven}
                />
                Only Even
              </label>
              <button type="button" className="btn btn-secondary" onClick={handleCloseModals}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {showModalB && (
        <div className="modal">
          <div className="modal-content" style={{ borderColor: '#ff7500' }}>
            <div className="modal-header">
              <h5 className="modal-title">Modal B - US Contacts</h5>
              <button type="button" className="btn-close" onClick={handleCloseModals}></button>
            </div>
            <div className="modal-body">
              {/* Display contacts and implement search functionality */}
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Search contacts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <ul>
                {contacts.map((contact) => (
                  <li key={contact.id}>{contact.name}</li>
                ))}
              </ul>
            </div>
            <div className="modal-footer">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={onlyEven}
                  onChange={handleToggleEven}
                />
                Only Even
              </label>
              <button type="button" className="btn btn-secondary" onClick={handleCloseModals}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {showModalC && (
        <div className="modal">
          <div className="modal-content" style={{ background: 'white', borderColor: '#46139f' }}>
            <div className="modal-header">
              <h5 className="modal-title">Modal C - Contact Details</h5>
              <button type="button" className="btn-close" onClick={() => setShowModalC(false)}></button>
            </div>
            <div className="modal-body">
              {/* Display contact details */}
              {/* You can customize the content based on your requirements */}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowModalC(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Problem2;
