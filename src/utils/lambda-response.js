const lambdaResponse = ({ json, statusCode, allowCORS }) => {
  const response = {
    statusCode,
    body: JSON.stringify(json),
  };

  if (allowCORS) {
    response.headers = {
      'Access-Control-Allow-Origin': '*',
    };
  }

  return response;
};

export const errorResponse = json => {
  return lambdaResponse({
    json,
    statusCode: 500,
  });
};

export const corsErrorResponse = json => {
  return lambdaResponse({
    json,
    statusCode: 500,
    allowCORS: true,
  });
};

export const successResponse = json => {
  return lambdaResponse({
    json,
    statusCode: 200,
  });
};

export const corsSuccessResponse = json => {
  return lambdaResponse({
    json,
    statusCode: 200,
    allowCORS: true,
  });
};
