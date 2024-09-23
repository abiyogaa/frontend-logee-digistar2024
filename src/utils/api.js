const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const apiCall = async (endpoint, method = 'GET', body = null, customHeaders = {}) => {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const headers = {
        'Content-Type': 'application/json',
        'X-API-Key': process.env.REACT_APP_API_KEY,
        ...customHeaders
    };

    const options = {
        method,
        headers,
        credentials: 'include',
    };

    if (body) {
        options.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(url, options);
        
        if (!response.ok) {
            if (response.status === 429) {
                throw new Error('Kebanyakan pake API jadi kena limit kan... Coba lagi nanti :)');
            }
            const errorData = await response.json().catch(() => null);
            throw new Error(errorData?.message || `HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('API call failed:', error);
        throw error;
    }
};

const api = {
    get: (endpoint, customHeaders = {}) => apiCall(endpoint, 'GET', null, customHeaders),
    post: (endpoint, body, customHeaders = {}) => apiCall(endpoint, 'POST', body, customHeaders),
    put: (endpoint, body, customHeaders = {}) => apiCall(endpoint, 'PUT', body, customHeaders),
    delete: (endpoint, customHeaders = {}) => apiCall(endpoint, 'DELETE', null, customHeaders),
};

export default api;