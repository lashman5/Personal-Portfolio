const axios = require('axios');

exports.handler = async function (event, context) {
  console.log('Function triggered');
  
  try {
    console.log('Fetching from Medium RSS feed...');
    const response = await axios.get('https://medium.com/feed/@Product_Mastery_Hub', {
      headers: {
        'Accept': 'application/xml',
        'User-Agent': 'Mozilla/5.0',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Set-Cookie': 'cross-site-cookie=value; SameSite=Strict; Secure'
      }
    });

    console.log('Response received. Status:', response.status);
    console.log('Response data preview:', response.data.substring(0, 200)); // Log first 200 characters

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Access-Control-Allow-Origin': '*', // Add CORS header
      },
      body: response.data,
    };
  } catch (error) {
    console.error('Error details:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
    });
    
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({
        error: 'Error fetching Medium posts',
        details: error.message
      })
    };
  }
};