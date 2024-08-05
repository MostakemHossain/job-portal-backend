const sendResponse = (res, jsonData) => {
    const responseObject = {
      success: jsonData.success,
      statusCode: jsonData.statusCode,
      message: jsonData.message,
      data: jsonData.data || null,
    };
    if (jsonData.meta) {
      responseObject.meta = jsonData.meta;
    }
  
    res.status(jsonData.statusCode).json(responseObject);
  };
  
  export default sendResponse;
  